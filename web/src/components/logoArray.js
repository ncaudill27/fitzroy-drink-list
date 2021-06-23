import React from 'react'
import styled from 'styled-components'

import BullLogo from '../images/svg/bull_logo.svg'
import DeckLogo from '../images/svg/deck_logo.svg'
import ParkLogo from '../images/svg/forsyth_logo.svg'

const LogoArray = (props) => (
  <Spread {...props}>
    <ImageWrapper>
      <BullLogo style={{width: '73px', height: '73px'}} />
    </ImageWrapper>
    <ImageWrapper>
      <DeckLogo style={{width: '73px', height: '73px'}} />
    </ImageWrapper>
    <ImageWrapper>
      <ParkLogo style={{width: '73px', height: '73px'}} />
    </ImageWrapper>
  </Spread>
)

const Spread = styled.div`
  position: absolute;
  right: 80px;
  bottom: 56px;
  display: flex;
  justify-content: space-between;
  width: 267px;
`

const ImageWrapper = styled.div`
  width: 73px;
  height: 73px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default LogoArray