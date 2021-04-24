import React, { useRef } from 'react'
import styled from 'styled-components'
import { useReactToPrint } from 'react-to-print'

import PrintButton from '../components/printButton'

const DrinkSpecs = ({title, drinkList}) => {
  const listEl = useRef()

  const handlePrint = useReactToPrint({
    content: () => listEl.current,
  });

  return (
    <div style={{position: 'relative'}}>
      <PrintButton handlePrint={handlePrint} />
      <RootWrapper ref={listEl}>
        <Title>{title}</Title>
  
        <ListWrapper>
          {drinkList.map(({
            name,
            body,
            price,
            garnish,
            glassware,
            ingredients,
          }) => (
            <DrinkWrapper>
              <NamePriceWrapper>
                <Name>{name}</Name>
                <Price>{price}</Price>
              </NamePriceWrapper>
              <Subheader>Garnish</Subheader>
              <Content>{garnish}</Content>
              <Subheader>Glass</Subheader>
              <Content>{glassware}</Content>
              <Subheader>Ingredients</Subheader>
              <Content>{ingredients.map(i => (
                <Ingredient>
                  <div>{i.name}</div>
                  <div>{i.amount} {i.measurement}</div>
                </Ingredient>
              ))}</Content>
            </DrinkWrapper>
          ))}
        </ListWrapper>
      </RootWrapper>
    </div>
  )
}

const RootWrapper = styled.div`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0 0;
  font-family: 'Montserrat', sans-serif;
`

const Title = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 20px;
`

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
`

const DrinkWrapper = styled.div`
  page-break-inside: ;
`

const NamePriceWrapper = styled.div`
  display: flex;
  font-size: 1.2rem;
  font-weight: 600;
`
const Name = styled.h3`
  text-decoration: underline;
`

const Price = styled.span`
  text-decoration: none;
  margin-left: 16px;

  &:before {
    content: '$';
  }
`

const Subheader = styled.h6`
  margin-top: 8px;
  font-size: 1.2rem;
  font-weight: 400;
`

const Content = styled.p`
  font-weight: 300;
  text-transform: capitalize;
  white-space: pre-wrap;
`

const Ingredient = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export default DrinkSpecs