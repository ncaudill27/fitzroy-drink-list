import React, { useRef } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'
import { useReactToPrint } from 'react-to-print'

import SEO from "../components/seo"
import Layout from "../containers/layout"
import PrintButton from '../components/printButton'
import Logo from '../images/svg/fitzroy_logo.svg'
import LogoArray from '../components/logoArray'
import FoodStack from '../components/foodStack'

const DinnerPage = ({data}) => {
  const menuEl = useRef()

  const handlePrint = useReactToPrint({
    content: () => menuEl.current,
  });

  const site = data?.site
  const foodNodes = !!data?.food
    ? mapEdgesToNodes(data.food)
    : [];

 return (
   <Layout>
     <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <div style={{position: 'relative'}}>
        <PrintButton handlePrint={handlePrint} />
        <Wrapper ref={menuEl}>
          <MenuHalf>
            <Header>
              <LogoWrapper>
                <Logo style={{width: '100%', height: '100%'}} />
              </LogoWrapper>
            </Header>
            <FoodList list={foodNodes}>
              <SisterLogos />
            </FoodList>
          </MenuHalf>
          <CutLine />
          <MenuHalf>
            <Header>
              <LogoWrapper>
                <Logo style={{width: '100%', height: '100%'}} />
              </LogoWrapper>
            </Header>
            <FoodList list={foodNodes}>
              <SisterLogos />
            </FoodList>
          </MenuHalf>
        </Wrapper>
      </div>
   </Layout>
  ) 
}

const Header = styled.header`
  position: relative;
  height: 136px;
  margin-bottom: 48px;
`

const LogoWrapper = styled.div`
  position: absolute;
  top: 32px;
  left: 50%;
  width: 100px;
  height: 100px;
  margin-left: -50px;
  z-index: 1;
`

const Wrapper = styled.div`
  width: 8.5in;
  height: 10in;
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
  background-color: white;
  text-align: center;
`

const CutLine = styled.div`
  position: absolute;
  left: 4.25in;
  width: 0;
  height: 100%;
  border: 0.5px dashed black;
`

const MenuHalf = styled.div`
  position: relative;
`

const FoodList = styled(FoodStack)`
  justify-content: space-between;
  height: 5in;
  padding: 0 48px;
`

const SisterLogos = styled(LogoArray)`
  right: initial;
  left: 50%;
  margin-left: -133.5px;
  bottom: 124px;
`

export const query = graphql`
  query {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    food: allSanityBarFood {
      edges {
        node {
          name
          price
          _rawDescription
          additional_options {
            context
            price
          }
        }
      }
    }
  }
`

export default DinnerPage