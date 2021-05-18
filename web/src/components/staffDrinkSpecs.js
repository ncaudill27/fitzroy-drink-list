import React, { useRef } from 'react'
import styled from 'styled-components'
import { useReactToPrint } from 'react-to-print'
import { parseAmount, parseMeasurement } from '../lib/parse'

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
              <Content>{ingredients.map(({name, amount, measurement}) => (
                <Ingredient>
                  <div styles={{alignSelf: 'right', textAlign: 'right'}}>{name}</div>
                  <div>
                    {amount && parseAmount(amount)}
                    {' '}
                    <Measurement>
                      {(amount && measurement) && parseMeasurement(measurement, amount)}
                    </Measurement>
                  </div>
                </Ingredient>
              ))}</Content>
              <Subheader>Build</Subheader>
              <Content>
                {body.map( ({_rawChildren, _key}, idx) => (
                  <BuildStep key={_key} >
                    {idx + 1}) {_rawChildren[0].text}
                  </BuildStep>
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
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2rem;
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
  align-items: baseline;
  font-weight: 600;
`
const Name = styled.h3`
  font-family: 'Big Shoulders Display';
  font-size: 1.8rem;
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
  margin-bottom: 4px;
  font-size: 1.2rem;
  font-weight: 600;
`

const Content = styled.p`
  font-weight: 300;
  text-transform: capitalize;
  white-space: pre-wrap;
`

const Ingredient = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  line-height: 1.2;
`

const Measurement = styled.span`
  text-transform: lowercase;
`

const BuildStep = styled.div`
  text-transform: initial;
  line-height: 1.2;
`

DrinkSpecs.defaultProps = {
  drinkList: []
}

export default DrinkSpecs