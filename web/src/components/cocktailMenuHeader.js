import React from 'react'
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <Wrapper>
    <StaticImage
      src="../images/logo-type.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <Subtitle>Cocktails</Subtitle>
  </Wrapper>
)

const Wrapper = styled.header`
  position: relative;
  width: calc(4in - 16px);
  height: 1.5625in; /* 1 9/16" */
  top: 0.6875in; /* 11/16" */
  background-color: hsl(0, 1%, 72%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  text-transform: uppercase;
  padding: 0 8px;
`

const Title = styled.h1`
  text-align: center;
  width: fit-content;
  margin: 0;
  font-size: 4rem;
  margin-top: -1.2rem;
`

const The = styled.span`
  font-size: 1.3rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`

const Subtitle = styled.h2`
  margin: 0;
  width: fit-content;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size:  2rem;
  color: hsl(357, 74%, 28%);
`

export default Header;