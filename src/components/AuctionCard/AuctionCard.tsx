import * as React from 'react'
import { Card } from './styled'

export interface AuctionProps {
  title: string
}

const AuctionCard = (props: AuctionProps)  => (
  <Card>
    <h1> {props.title} </h1>
  </Card>
)

export { AuctionCard }
export default AuctionCard