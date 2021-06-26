import React, { useRef } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'
import { useReactToPrint } from 'react-to-print'

import Logo from '../images/svg/fitzroy_logo.svg'
import SEO from "../components/seo"
import Layout from "../containers/layout"
import LetterheadWrapper from '../components/letterheadWrapper'
import LogoArray from '../components/logoArray'
import PrintButton from '../components/printButton'

const DrinksPage = ({data}) => {
  const menuEl = useRef()

  const handlePrint = useReactToPrint({
    content: () => menuEl.current,
  });

  const site = data?.site
  const beerNodes = !!data?.beer
    ? mapEdgesToNodes(data.beer)
    : [];
  const draftBeerNodes = !!data?.draftBeer
    ? mapEdgesToNodes(data.draftBeer)
    : [];
  const redWineNodes = !!data?.redWine
    ? mapEdgesToNodes(data.redWine)
    : [];
  const whiteWineNodes = !!data?.whiteWine
    ? mapEdgesToNodes(data.whiteWine)
    : [];
  const sparklingWineNodes = !!data?.sparklingWine
    ? mapEdgesToNodes(data.sparklingWine)
    : [];

 return (
   <Layout>
     <SEO
        title={site.title}
      />
      <div style={{position: 'relative'}}>
        <PrintButton handlePrint={handlePrint} />
        <LetterheadWrapper ref={menuEl}>
          <Header>
            <Title>
              Beer &amp; Wine
            </Title>
          </Header>
        </LetterheadWrapper>
      </div>
   </Layout>
  ) 
}

const Header = styled.header`
  position: relative;
  height: 120px;
  width: fit-content;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
  background-color: hsl(330, 1%, 71%);
`

const Title = styled.h1`
  position: relative;
  top: 72px;
  left: 0;
  right: 0;
  margin: auto;

  font-size: 32px;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  color: hsl(357, 74%, 28%);
  text-align: center;
  text-transform: uppercase;
`



export const query = graphql`
  query {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
    beer: allSanityBeer(sort: {fields: order, order: ASC}) {
      edges {
        node {
          brewery
          name
          price
          style
        }
      }
    }
    draftBeer: allSanityDraftBeer(sort: {fields: order, order: ASC}) {
      edges {
        node {
          brewery
          name
          price
          style
        }
      }
    }
    red: allSanityWine(
      filter: {type: {eq: "red"}, active: {eq: true}}
      sort: {fields: order, order: ASC}
    ) {
      nodes {
        name
        origin
        price_bottle
        price_glass
        varietal
        active
      }
    }
    white: allSanityWine(
      filter: {type: {eq: "white"}, active: {eq: true}}
      sort: {fields: order, order: ASC}
    ) {
      nodes {
        name
        origin
        price_bottle
        price_glass
        varietal
        active
      }
    }
    sparkling: allSanityWine(
      filter: {type: {eq: "sparkling"}, active: {eq: true}}
      sort: {fields: order, order: ASC}
    ) {
      nodes {
        name
        origin
        price_bottle
        price_glass
        varietal
        active
      }
    }
  }
`

export default DrinksPage