import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StackDivider,
  StatGroup,
  Stack,
  HStack,
  VStack,
  Card,
  CardBody,
  CardFooter,
  Wrap,
  SimpleGrid,
  Flex,
  Box,
  Spacer,
} from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Head } from 'components/layout/Head'
import { HeadingComponent } from 'components/layout/HeadingComponent'
import { LinkComponent } from 'components/layout/LinkComponent'
import { redirect } from 'next/dist/server/api-utils'
import { useAccount } from 'wagmi'
import Router from 'next/router'
import React, { useEffect } from 'react'
import Stats from '../../components/stats'
import StatsCard from '../../components/statsCard'
import ActionCard from '../../components/actionCard'

export default function Home() {
  const { address, isConnecting, isDisconnected } = useAccount()
    useEffect(() => {
    const { pathname } = Router
    if (isDisconnected) {
      Router.push('/')
    }
  })


  return (
    <>
      <Head />
      <main>
        <HeadingComponent as="h2" >Your Position</HeadingComponent>
        <Text mb={10}></Text>
        <Flex minWidth="max-content" alignItems="center" gap="4">
          <StatsCard
            top_data={{ title: 'Liquidatioin Price', unit: 'ETH/USD', amount: '345,670', percent: '9.05%'}}
            bottom_data={{ title: 'Liquidity Penalty', perent: '13.000%' }}
          />
          <StatsCard
            top_data={{ title: 'Collaterization ratio', unit: 'Percent', amount: '170%', percent: '9.05%' }}
            bottom_data={{ title: 'Redemption fee', percent: '6.000%' }}
          />
        </Flex>
        <Flex minWidth="max-content" alignItems="center" gap="4">
          <ActionCard
            top_action={{ title: 'ETH locked', amount: '100 Ξ', action: 'Deposit', link: '/actions/deposit' }}
            bottom_action={{ title: 'Able to withdraw', amount: '100 Ξ', action: 'Withdraw', link: '/actions/withdraw-collateral'}}
          />
          <ActionCard
            top_action={{ title: 'Payback Qi token debt', amount: '∞', action: 'Pay back', link: '/actions/pay-debt' }}
            bottom_action={{ title: 'Availabile to generate', amount: '100 ʠ', action: 'Generate', link: '/actions/generate-qi' }}
          />
        </Flex>
      </main>
    </>
  )
}
