import React from 'react'
import styled from 'styled-components'

const Header = () => (
  <Wrapper>
    <Title><The>The</The> <br/> Fitzroy</Title>
    <Subtitle>Cocktails</Subtitle>
  </Wrapper>
)

const Wrapper = styled.header`
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
  font-size: 3.3rem;
  margin-top: -1.2rem;
`

const The = styled.span`
  font-size: 1.3rem;
`

const Subtitle = styled.h2`
  margin: 0;
  width: fit-content;
  font-size:  2rem;
  text-transform: uppercase;
`

export default Header;