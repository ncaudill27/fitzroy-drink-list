import React from 'react'
import styled from 'styled-components'

import Header from './foodMenuSubcategoryHeader'
import FoodList from './foodList'

const MenuSubcategory = ({title, list, ...props}) => (
  <Wrapper {...props}>
    <Header>{title}</Header>
    <FoodList list={list} />
  </Wrapper>
)

const Wrapper = styled.div`
  position: relative;
  padding-left: 152px;
  padding-right: 96px;
  padding-top: 64px;
`

export default MenuSubcategory