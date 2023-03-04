import { Text } from '@chakra-ui/react'
import { Head } from 'components/layout/Head'
import { HeadingComponent } from 'components/layout/HeadingComponent'
import { LinkComponent } from 'components/layout/LinkComponent'
import { redirect } from 'next/dist/server/api-utils'
import { useAccount } from 'wagmi'
import Router from 'next/router'
import React, { useEffect } from 'react'

export default function Home() {
  const { address, isConnecting, isDisconnected } = useAccount()

  useEffect(() => {
    const { pathname } = Router
    if (address != null) {
      Router.push('/examples')
    }
  })


  return (
    <>
      <Head />
      <main>
        <HeadingComponent as="h2">Qi Protocol</HeadingComponent>
        <Text>Tokenize Gas on Ethereum⚡</Text>
        <Text py={4}></Text>
      </main>
    </>
  )
}
