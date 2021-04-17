import React from 'react'
import styled from 'styled-components'

const CocktailMenu = ({drinks}) => (
  <LetterheadWrapper>
    <Header>
      <Title>The <br/> Fitzroy</Title>
      <Subtitle>Cocktails</Subtitle>
    </Header>
    {drinks.map(drink => (
      <div>{drink.name}</div>
    ))}
  </LetterheadWrapper>
)

const LetterheadWrapper = styled.div`
  width: 8.5in;
  height: 11in;
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  border: 1px solid;
`

const Header = styled.header`
  position: relative;
  width: calc(4in - 16px);
  height: 1.5625in; /* 1 9/16" */
  left: 0.375in; /* 3/8" */
  top: 0.9375in; /* 15/16" */
  background-color: hsl(0, 0%, 90%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 8px;
`

const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  width: fit-content;
  margin: 0;
`

const Subtitle = styled.h2`
  text-transform: uppercase;
  width: fit-content;
  margin: 0;
`
export default CocktailMenu