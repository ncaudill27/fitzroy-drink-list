import React from 'react'
import Stack from './stack'
import WineItem from './wineItem'

const WineStack = ({list, children, ...props}) => (
  <Stack {...props}>
    {list.map(item => (
      <WineItem key={item.id} {...item} />
    ))}
    {children}
  </Stack>
)

export default WineStack