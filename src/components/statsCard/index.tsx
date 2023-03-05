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
} from '@chakra-ui/react'
import React from 'react'

export default function StatsCard({ top_data, bottom_data }) {
  return (
    <div>
      <Heading as="h5" size="sm" mb={3}>
        {top_data.title}
      </Heading>
      <Card w="450px" h="170" mb={7}>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="1">
            <Box>
              <StatGroup>
                <Stat display="flex">
                  <StatLabel>{top_data.unit}</StatLabel>
                  <StatNumber>{top_data.amount}</StatNumber>
                  <StatHelpText>
                    <StatArrow type="decrease" />
                    {top_data.percent}
                  </StatHelpText>
                </Stat>
              </StatGroup>
            </Box>
            <Box>
              <Flex>
                <Text pt="3" fontSize="md">
                  {bottom_data.title}
                </Text>
                <Spacer />
                <Text pt="3" fontSize="md">
                  {bottom_data.percent}
                </Text>
              </Flex>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </div>
  )
}
