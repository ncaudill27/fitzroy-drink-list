import React from 'react'
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <Wrapper>
    <Title>
      <StaticImage
        src="../images/logo-type.png"
        width={280}
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="The Fitzroy logo title"
      />
    </Title>
    <Subtitle>Cocktails</Subtitle>
  </Wrapper>
)

const Wrapper = styled.header`
  position: relative;
  width: 4.25in;
  height: 1.75in; /* 1 5/8" */
  top: 0.5625in; /* 11/16" */
  background-color: hsl(0, 1%, 72%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  text-transform: uppercase;
  padding-top: 0.125in;
  padding-right: 0.25in;
`

const Title = styled.div`
  position: relative;
  top: 0;
  right: -8px;
`

const The = styled.span`
  font-size: 1.3rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`

const Subtitle = styled.h2`
  margin-bottom: 0.0625in;
  width: fit-content;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size:  2rem;
  color: hsl(357, 74%, 28%);
`

export default Header;