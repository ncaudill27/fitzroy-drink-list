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
        <div>
          Header Stuff Here :)
        </div>
        <div>
          <SideText>Small Plates</SideText>
          <FoodList food={smallPlateNodes} />
        </div>
        <div>
          <SideText>Large Plates</SideText>
          <FoodList food={largePlateNodes} />
        </div>
      </LetterheadWrapper>
   </Layout>
 ) 
}

const SideText = styled.span`
  position: absolute;
  height: fit-content;
  display: inline-block;
  font-size: 1.3rem;
  padding: 8px;
  transform: rotate(180deg);
  writing-mode: vertical-rl;
  color: hsl(357, 74%, 28%);
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