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
  width: 64px;
  padding-inline-end: 24px;
  font-size: 1.3rem;
  font-weight: 600;
  color: hsl(357, 74%, 28%);
  transform: rotate(180deg);
  writing-mode: vertical-lr;
`

const BoxBorder = styled.div`
  position: absolute;
  top: 64px;
  left: 72px;
  right: 32px;
  bottom: 32px;
  border: 1px solid;
  margin: auto;
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