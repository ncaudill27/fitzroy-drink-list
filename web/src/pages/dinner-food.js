import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'

import SEO from "../components/seo"
import Layout from "../containers/layout"
import LetterheadWrapper from '../components/letterheadWrapper'
import FoodList from '../components/foodList'

const DinnerPage = ({data}) => {

  const site = data?.site
  const smallPlateNodes = !!data?.smallPlates
    ? mapEdgesToNodes(data.smallPlates)
    : [];
  const largePlateNodes = !!data?.largePlates
    ? mapEdgesToNodes(data.largePlates)
    : [];

  console.log('Small', smallPlateNodes)
  console.log('Large', largePlateNodes)

 return (
   <Layout>
     <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <LetterheadWrapper>
        <div style={{height: 64, textAlign: 'center'}}>
          Header Stuff Here :)
        </div>
        <SidebarBorder />
        <BoxBorder />
          <SideText>Small Plates</SideText>
          <FoodList food={smallPlateNodes} />
          <SideText>Large Plates</SideText>
          <FoodList food={largePlateNodes} />
      </LetterheadWrapper>
   </Layout>
 ) 
}

const SideText = styled.span`
  position: absolute;
  height: fit-content;
  width: 104px;
  padding-inline-end: 64px;
  font-size: 1.3rem;
  font-weight: 600;
  color: hsl(357, 74%, 28%);
  transform: rotate(180deg);
  writing-mode: vertical-lr;
`

const BoxBorder = styled.div`
  position: absolute;
  top: 96px;
  left: 120px;
  right: 64px;
  bottom: 64px;
  border: 2px solid;
  margin: auto;
`

const SidebarBorder = styled.div`
  position: absolute;
  top: 96px;
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