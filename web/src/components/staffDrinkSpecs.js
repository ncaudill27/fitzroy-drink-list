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
                  <div styles={{alignSelf: 'right', textAlign: 'right'}}>{i.name}</div>
                  <div>{i.amount} {i.measurement}</div>
                </Ingredient>
              ))}</Content>
              <Subheader>Build</Subheader>
              <Content>
                {body.map( ({_rawChildren, _key}, idx) => (
                  <div key={_key} >
                    {idx + 1}) {_rawChildren[0].text}
                  </div>
                ))}
              </Content>
            </DrinkWrapper>
          ))}
        </ListWrapper>
      </RootWrapper>
    </div>
  )
}

const RootWrapper = styled.div`
  width: 8.5in;
  position: relative;
  top: 50px;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  padding: 0.5in;
  background-color: white;
`

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
`

const DrinkWrapper = styled.article`
  display: block;
  
  @media print {
    page-break-inside: avoid;
  }
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

DrinkSpecs.defaultProps = {
  drinkList: []
}

export default DrinkSpecs