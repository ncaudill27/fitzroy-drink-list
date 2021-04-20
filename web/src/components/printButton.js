import React from 'react'
import styled from 'styled-components'

const PrintButton = ({handlePrint}) => (
  <ButtonWrapper>
    <Button
      onClick={handlePrint}
    >
      Print Menu
    </Button>
  </ButtonWrapper>
)

const ButtonWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 0;
  height: 60%;
  z-index: 1;
`

const Button = styled.button`
  position: sticky;
  top: 28px;
  outline: none;
  border: none;
  padding: 16px;
  font-size: 1.2rem;
  border-radius: 5px;
  background-color: hsl(240deg, 50%, 40%);
  color: hsl(0, 0%, 95%);

  &:hover {
    cursor: pointer;  
  }
`

export default PrintButton