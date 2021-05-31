import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'

import SEO from "../components/seo"
import Layout from "../containers/layout"
import LetterheadWrapper from '../components/letterheadWrapper'

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
        <div style={{width: '100%'}}>
          Hello
        </div>
        <Sidebar>
          <SideText>Small Plates</SideText>
        </Sidebar>
      </LetterheadWrapper>
   </Layout>
 ) 
}

const Sidebar = styled.div`
  width: 32px;
  height: 100%;
  text-transform: uppercase;
  border: 1px solid red;
`

const SideText = styled.span`
  display: inline-block;
  font-size: 1.3rem;
  padding: 8px;
  transform: rotate(180deg);
  /* transform-origin: right;
  white-space: nowrap; */
  writing-mode: vertical-rl;
  text-orientation: sideways-left;

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