import React from 'react'
import Stack from './stack'
import BeerItem from './beerItem'

const BeerStack = ({list, children, ...props}) => (
  <Stack {...props}>
    {list.map(item => (
      <BeerItem key={item.id} {...item} />
    ))}
    {children}
  </Stack>
)

export default BeerStack