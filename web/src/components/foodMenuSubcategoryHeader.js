import React from 'react'
import styled from 'styled-components'

const Header = ({children}) => (
  <SideText>
    {children}
  </SideText>
)

const SideText = styled.span`
  position: absolute;
  top: 64px;
  left: 80px;
  font-size: 1.3rem;
  font-weight: 600;
  color: hsl(357, 74%, 28%);
  transform: rotate(180deg);
  writing-mode: vertical-lr;
`

export default Header