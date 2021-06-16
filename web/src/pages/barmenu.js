import React, { useRef } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'
import { useReactToPrint } from 'react-to-print'

import SEO from "../components/seo"
import Layout from "../containers/layout"
import PrintButton from '../components/printButton'
import Logo from '../images/svg/fitzroy_logo.svg'
import LetterHeadWrapper from '../components/letterheadWrapper'
import FoodStack from '../components/foodStack'
import LogoArray from '../components/logoArray'

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
      />
      <div style={{position: 'relative'}}>
        <PrintButton handlePrint={handlePrint} />
        <Wrapper ref={menuEl} id='barmenu'>
          <MenuHalf>
              <LogoWrapper>
                <Logo style={{width: '100%', height: '100%'}} />
              </LogoWrapper>
            <FoodList list={foodNodes} />
              <SisterLogos />
          </MenuHalf>
          <CutLine />
          <MenuHalf>
              <LogoWrapper>
                <Logo style={{width: '100%', height: '100%'}} />
              </LogoWrapper>
            <FoodList list={foodNodes} />
              <SisterLogos />
          </MenuHalf>
        </Wrapper>
      </div>
   </Layout>
  ) 
}

const LogoWrapper = styled.div`
  position: relative;
  top: 0;
  left: 50%;
  width: 100px;
  height: 100px;
  margin-left: -50px;
  margin-bottom: 0.75in;
`

const Wrapper = styled(LetterHeadWrapper)`
  padding: 1in 16px;
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
  position: absolute;
  left: 50%;
  margin-left: -133.5px;
  bottom: calc(0.625in);
`

export const query = graphql`
  query {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
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