import React from 'react'
import styled from 'styled-components'

const Stack = ({children, ...props}) => (
  <Wrapper {...props}>
    {children}
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default Stack