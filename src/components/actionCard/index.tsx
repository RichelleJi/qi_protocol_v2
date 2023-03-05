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
  Button
} from '@chakra-ui/react'
import React from 'react'

export default function ActionCard({ top_action, bottom_action }) {
  return (
    <div>
      <Heading as="h5" size="sm" mb={3}>
        {top_action.title}
      </Heading>
      <Card w="450px" h="170">
        <CardBody>
          <Stack divider={<StackDivider />} spacing="1">
            <Box mb={3}>
              <Flex>
                <StatGroup>
                  <Stat display="flex">
                    <StatLabel>{top_action.title}</StatLabel>
                    <StatNumber>{top_action.amount}</StatNumber>
                  </Stat>
                </StatGroup>
                <Spacer />
                <Button colorScheme='teal' w="120px" h="50px" size="lg" lineHeight="50">
                  {top_action.action}
                </Button>
              </Flex>
            </Box>
            <Box>
              <Flex>
                <StatGroup>
                  <Stat display="flex">
                    <StatLabel>{bottom_action.title}</StatLabel>
                    <StatNumber>{bottom_action.amount}</StatNumber>
                  </Stat>
                </StatGroup>
                <Spacer />
                <Button colorScheme='teal' w="120px" h="50px" lineHeight="50" size="lg" >
                  {bottom_action.action}
                </Button>
              </Flex>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </div>
  )
}
