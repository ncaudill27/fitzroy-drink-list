import React from 'react'
import styled from 'styled-components'

const WineItem = ({
  id,
  name,
  origin,
  price_bottle,
  price_glass,
  varietal
}) => (
  <Wrapper>
    <div>
      <Varietal>{varietal}</Varietal>
      <Name>{name}</Name>
      <Origin>{origin}</Origin>
    </div>
    <DottedLine />
    <Price>{price_glass}{price_glass && '/'}{price_bottle}</Price>
  </Wrapper>
)

const Wrapper = styled.article`
  margin-bottom: 2px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;

  &:last-child {
    margin-bottom: 8px; 
  }
`

const Varietal = styled.span`
  text-transform: uppercase;
  margin-right: 8px;
  font-weight: 600;
`

const Name = styled.span`
  margin-right: 4px;
`

const Origin = styled.span`
  padding-left: 4px;
  border-left: 1px solid;
  color: hsl(0, 0%, 30%);
  font-weight: 300;
`

const DottedLine = styled.div`
  flex-grow: 1;
  border-bottom: 1px dotted;
`
const Price = styled.span`
  font-weight: 600;
  color: hsl(357, 74%, 28%);
`

export default WineItem;