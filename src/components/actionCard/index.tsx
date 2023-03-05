import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Spacer,
  Stack,
  StackDivider,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  Button,
  Tag,
} from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'

export default function ActionCard({ top_action, bottom_action }) {
  return (
    <div>
      <Heading as="h5" size="sm" mb={3}>
        {top_action.title}
      </Heading>
      <Card w="450px" h="180">
        <CardBody>
          <Stack divider={<StackDivider />} spacing="1">
            <Box mb={4}>
              <Flex>
                <StatGroup>
                  <Stat display="flex">
                    <StatLabel>{top_action.title}</StatLabel>
                    <StatNumber>{top_action.amount}</StatNumber>
                  </Stat>
                </StatGroup>
                <Spacer />
                <Link href={`${top_action.link}`}>
                  <Button colorScheme="teal" w="120px" h="50px" size="lg">
                    {top_action.action}
                  </Button>
                </Link>
              </Flex>
            </Box>
            <Box mt={4}>
              <Flex>
                <StatGroup>
                  <Stat display="flex">
                    <StatLabel>{bottom_action.title}</StatLabel>
                    <StatNumber>{bottom_action.amount}</StatNumber>
                  </Stat>
                </StatGroup>
                <Spacer />
                <Link href={`${bottom_action.link}`}>
                  <Button colorScheme="teal" w="120px" h="50px" size="lg">
                    {bottom_action.action}
                  </Button>
                </Link>
              </Flex>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </div>
  )
}
