import { useAccount, useBalance, useContractWrite, usePrepareContractWrite, useWaitForTransaction, useNetwork, erc20ABI } from 'wagmi'
import { Button, FormControl, FormLabel, Heading, Input, NumberInput, NumberInputField, Text, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { NextSeo } from 'next-seo'
import { utils } from 'ethers'
import { LinkComponent } from 'components/layout/LinkComponent'
import { useDebounce } from 'usehooks-ts'
import Link from "next/link";

function GenerateQiToken() {
  const [tokenContract, setTokenContract] = useState('')
  const debouncedTokenContract = useDebounce(tokenContract, 500)

  const [to, setTo] = useState('')
  const debouncedTo = useDebounce(to, 500)

  const [amount, setAmount] = useState<string>()
  const debouncedAmount = useDebounce(amount, 500)

  const { chain } = useNetwork()
  const { address } = useAccount()
  const balance = useBalance({
    address,
    token: debouncedTokenContract as `0x{string}`,
  })

  const prepareContractWrite = usePrepareContractWrite({
    address: debouncedTokenContract,
    abi: erc20ABI,
    functionName: 'transfer',
    args: [(debouncedTo as `0x{string}`) ?? '0x0', debouncedAmount ? utils.parseEther(debouncedAmount) : utils.parseEther('0')],
  })
  const contractWrite = useContractWrite(prepareContractWrite.config)
  const waitForTransaction = useWaitForTransaction({ hash: contractWrite.data?.hash, onSettled: () => balance.refetch() })

  const handleSendTransation = () => {
    contractWrite.write?.()
  }

  return (
    <div>

      <FormControl>
        <FormLabel>Token Contract</FormLabel>
        <Input value={tokenContract} onChange={(e) => setTokenContract(e.target.value)} placeholder="0xA0Cf…251e" />

        <FormLabel mt={2}>Recipient</FormLabel>
        <Input value={to} onChange={(e) => setTo(e.target.value)} placeholder="0xA0Cf…251e" />

        <FormLabel mt={2}>Amount</FormLabel>
        <NumberInput value={amount} onChange={(value) => setAmount(value)} mb={2}>
          <NumberInputField placeholder="0.05" />
        </NumberInput>
        <Text>
          Your balance: {balance.data?.formatted} {balance.data?.symbol}
        </Text>
        <Flex gap="2">
          <Button
            colorScheme="teal" w="120px" h="50px" lineHeight="50" size="lg"
            disabled={waitForTransaction.isLoading || contractWrite.isLoading || !contractWrite.write || !to || !amount}
            mt={4}
            onClick={handleSendTransation}>
            {waitForTransaction.isLoading ? 'Sending...' : contractWrite.isLoading ? 'Check your wallet' : 'Send'}
          </Button>
          <Button colorScheme="teal" w="120px" h="50px" lineHeight="50" size="lg" mt={4}>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </Flex>

        {waitForTransaction.isSuccess && (
          <div>
            <Text mt={2} fontSize="lg">
              Successfully sent {amount} {balance.data?.symbol} to {to}
            </Text>
            <Text fontSize="lg" fontWeight="bold">
              <LinkComponent href={`${chain?.blockExplorers?.default.url}/tx/${contractWrite.data?.hash}`}>Check on block explorer</LinkComponent>
            </Text>
          </div>
        )}
        {waitForTransaction.isError && (
          <div>
            <Text mt={2} color="red" fontSize="lg">
              Error sending {amount} {balance.data?.symbol} to {to}
            </Text>
            <Text color="red" fontSize="lg" fontWeight="bold">
              {waitForTransaction.error?.message}
            </Text>
          </div>
        )}
      </FormControl>
    </div>
  )
}

export default function GenerateQiTokenExample() {
  const { isConnected } = useAccount()

  if (isConnected) {
    return (
      <div>
        <NextSeo title="Generate Qi token" />
        <Heading as="h2" fontSize="2xl" my={4}>
          Generate Qi token
        </Heading>

        <GenerateQiToken />
      </div>
    )
  }

  return <div>Connect your wallet first to sign a message.</div>
}
