import React, { useRef } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'
import { useReactToPrint } from 'react-to-print'

import Logo from '../images/svg/fitzroy_logo.svg'
import SEO from "../components/seo"
import Layout from "../containers/layout"
import LetterheadWrapper from '../components/letterheadWrapper'
import FoodList from '../components/foodList'
import LogoArray from '../components/logoArray'
import PrintButton from '../components/printButton'

import MenuSubcategory from '../components/foodMenuSubcategory'

const DinnerPage = ({data}) => {
  const menuEl = useRef()

  const handlePrint = useReactToPrint({
    content: () => menuEl.current,
  });

  const site = data?.site
  const smallPlateNodes = !!data?.smallPlates
    ? mapEdgesToNodes(data.smallPlates)
    : [];
  const largePlateNodes = !!data?.largePlates
    ? mapEdgesToNodes(data.largePlates)
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
        <LetterheadWrapper ref={menuEl}>
          <Header>
            <LogoWrapper>
              <Logo style={{width: '100%', height: '100%'}} />
            </LogoWrapper>
          </Header>
          <SidebarBorder />
          <BoxBorder />
            <MenuSubcategory
              title='Small Plates'
              list={smallPlateNodes}
            />
            <MenuSubcategory
              title='Large Plates'
              list={largePlateNodes}
            />
            <LogoArray />
        </LetterheadWrapper>
      </div>
   </Layout>
  ) 
}

const Header = styled.header`
  position: relative;
  height: 136px;
`

const LogoWrapper = styled.div`
  position: absolute;
  top: 32px;
  left: 50%;
  width: 125px;
  height: 125px;
  margin-left: -62.5px;
  z-index: 1;
`

const BoxBorder = styled.div`
  position: absolute;
  top: 136px;
  left: 120px;
  right: 64px;
  bottom: 64px;
  border: 2px solid;
  margin: auto;
`

const SidebarBorder = styled.div`
  position: absolute;
  top: 136px;
  left: 56px;
  bottom: 64px;
  right: calc(100% - 104px);
  border: 2px solid;
  border-right: none;
`



export const query = graphql`
  query {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    smallPlates: allSanityDinnerFood(filter: {course: {eq: "small_plates"}}) {
      edges {
        node {
          name
          order
          price
          additional_options {
            context
            price
          }
          _rawDescription
        }
      }
    }
    largePlates: allSanityDinnerFood(filter: {course: {eq: "large_plates"}}) {
      edges {
        node {
          name
          order
          price
          additional_options {
            context
            price
          }
          _rawDescription
        }
      }
    }
  }
`

export default DinnerPage