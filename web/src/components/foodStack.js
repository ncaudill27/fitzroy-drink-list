import React from 'react'
import Stack from './stack'
import FoodItem from './foodItem'

const FoodStack = ({list, children, ...props}) => (
  <Stack {...props}>
    {list.map(item => (
      <FoodItem key={item.id} {...item} />
    ))}
    {children}
  </Stack>
)

export default FoodStack