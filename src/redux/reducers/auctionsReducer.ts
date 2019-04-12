import { createReducer, createAction } from 'redux-starter-kit'
import auctions from '../fixtures/auction-list.json'
import { sort, sortBy, prop, compose, toLower } from 'ramda'

export interface Auction {
  id: string
  title: string
  image: string
  imagePlus: string | null
  viewItemURL: string
  price: string
  bidCount: number | null
  listingType: string
  prettyEndtime: string
  prettyStarttime: string
  startTime: Date
  endTime: Date
  bestOfferEnabled: boolean
  buyItNowAvailable: boolean
  gift: boolean
}

const sortAlphabetically = createAction('auctions/sort-alphabetically') as any
const sortPriceAscending = createAction('auctions/sort-price-ascending') as any
const sortPriceDescending = createAction('auctions/sort-price-descending') as any
const sortEndingSoonest = createAction('auctions/sort-ending-soonest') as any
const sortEndingLatest = createAction('auctions/sort-ending-latest') as any


const priceLowToHigh = (a: any, b: any) => a.price - b.price
const priceHighToLow = (a: any, b: any) => b.price - a.price
const dateAscending = (a: any, b: any) => a.endTime - b.endTime
const dateDescending = (a: any, b: any) => b.endTime - a.endTime

const sortByAlphabet = sortBy(compose(toLower, prop('title')))

export const auctionsReducer = createReducer(auctions, {
  [sortAlphabetically]: (state, action) => sortByAlphabet(state),
  [sortPriceAscending]: (state, action) => sort(priceHighToLow, state),
  [sortPriceDescending]: (state, action) => sort(priceLowToHigh, state),
  [sortEndingSoonest]: (state, action) => sort(dateAscending, state),
  [sortEndingLatest]: (state, action) => sort(dateDescending, state)
})