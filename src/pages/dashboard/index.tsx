import { Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup, Stack, HStack, VStack, Card, CardBody, CardFooter, Wrap, SimpleGrid, Flex } from '@chakra-ui/react'
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

export default function Home() {
  const { address, isConnecting, isDisconnected } = useAccount()

  return (
    <>
      <Head />
      <main>
        <HeadingComponent as="h2">Your Position</HeadingComponent>
        <Stats></Stats>
        <Flex align="center" justify="center" mb={30}>
          <div>
            <Heading as='h5' size='sm' mb={3}>Liquidatioin Price</Heading>
            <Card w='450px' h='200' mr={20}>
              <CardBody>
                <Text></Text>
              </CardBody>
            </Card>
          </div>
          <div>
            <Heading as='h5' size='sm' mb={3}>Collaterization ratio</Heading>
            <Card w='450px' h='200'>
              <CardBody>
                <Text></Text>
              </CardBody>
            </Card>
          </div>
        </Flex>
        <Flex align="center" justify="center" mb={30}>
          <div>
            <Heading as='h5' size='sm' mb={3}>ETH Locked</Heading>
            <Card w='450px' h='200' mr={20}>
              <CardBody>
                <Text></Text>
              </CardBody>
            </Card>
          </div>
          <div>
            <Heading as='h5' size='sm' mb={3}>Outstanding </Heading>
            <Card w='450px' h='200'>
              <CardBody>
                <Text></Text>
              </CardBody>
            </Card>
          </div>
        </Flex>
      </main>
    </>
  )
}
