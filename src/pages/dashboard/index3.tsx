// import { Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup, Stack, HStack, VStack, Card, CardBody, CardFooter, Wrap, SimpleGrid } from '@chakra-ui/react'
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
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export default function Home() {
  const { address, isConnecting, isDisconnected } = useAccount()

  return (
    <>
      {/*<Head />*/}
      <main>
        {/*<Stats></Stats>*/}
        <div>
          <Card>
            <CardContent>
              <Typography>ETH locked</Typography>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardContent>
              <Typography>View a summary of all your customers over the last month.</Typography>
            </CardContent>
          </Card>
        </div>
        {/*<HStack spacing="24px" mb={10}>*/}
        {/*  <div>*/}
        {/*    <Heading as='h5' size='sm' mb={3}>Eth Locked</Heading>*/}
        {/*    <Card>*/}
        {/*      <CardBody>*/}
        {/*        <Text>View a summary of all your customers over the last month.</Text>*/}
        {/*      </CardBody>*/}
        {/*    </Card>*/}
        {/*  </div>*/}
        {/*  <div>*/}
        {/*    <Heading as='h5' size='sm' mb={3}>Outstanding Qi token debt</Heading>*/}
        {/*    <Card>*/}
        {/*      <CardBody>*/}
        {/*        <Text>View a summary of all your customers over the last month.</Text>*/}
        {/*      </CardBody>*/}
        {/*    </Card>*/}
        {/*  </div>*/}
        {/*</HStack>*/}
      </main>
    </>
  )
}
