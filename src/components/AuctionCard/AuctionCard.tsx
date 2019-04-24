import * as React from 'react'
import {
  Box,
  Card,
  Image,
  Heading,
  Text
} from 'rebass'

export interface AuctionProps {
  title: string
}

const AuctionCard = (props: AuctionProps)  => (
  <Card>
    <Text as={'h2'}> {props.title} </Text>
  </Card>
)

export { AuctionCard }
export default AuctionCard