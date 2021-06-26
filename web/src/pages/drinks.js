import React, { useRef } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'
import { useReactToPrint } from 'react-to-print'

import Logo from '../images/svg/fitzroy_logo.svg'
import SEO from "../components/seo"
import Layout from "../containers/layout"
import PrintButton from '../components/printButton'
import LetterheadWrapper from '../components/letterheadWrapper'
import WineStack from '../components/wineStack'
import LogoArray from '../components/logoArray'
import BeerStack from '../components/beerStack'

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
  const redWineNodes = !!data?.red
    ? mapEdgesToNodes(data.red)
    : [];
  const whiteWineNodes = !!data?.white
    ? mapEdgesToNodes(data.white)
    : [];
  const sparklingWineNodes = !!data?.sparkling
    ? mapEdgesToNodes(data.sparkling)
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
          <ContentContainer>
            <ListHeader>Red</ListHeader>
            <WineStack list={redWineNodes} />
            <ListHeader>White</ListHeader>
            <WineStack list={whiteWineNodes} />
            <ListHeader>Rosé &amp; Bubbles</ListHeader>
            <WineStack list={sparklingWineNodes} />
            <Beer>
              <div>
                <ListHeader>Bottle &amp; Can Beer</ListHeader>
                <BeerStack list={beerNodes} />
              </div>
              <div>
                <ListHeader>Draft Beer</ListHeader>
                <BeerStack list={draftBeerNodes} />
              </div>
            </Beer>
            <LogoArray style={{right: 40, bottom: 40}} />
          </ContentContainer>
        </LetterheadWrapper>
      </div>
   </Layout>
  ) 
}

const Header = styled.header`
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

const ContentContainer = styled.div`
  position: absolute;
  top: 56px;
  left: 48px;
  right: 48px;
  bottom: 56px;
  margin: auto;
  border: 2px solid;

  padding: 80px 48px;
`

const ListHeader = styled.h2`
  padding-bottom: 2px;
  margin-bottom: 4px;
  font-family: 'Big Shoulders Display', sans-serif;
  font-size: 24px;
  text-transform: uppercase;
  border-bottom: 1px solid;
`

const Beer = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
`



export const query = graphql`
  query {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
    beer: allSanityBeer(
      sort: {fields: [order, brewery, price], order: [ASC, ASC, ASC]}
    ) {
      edges {
        node {
          brewery
          name
          price
          style
        }
      }
    }
    draftBeer: allSanityDraftBeer(
      sort: {fields: [order, brewery, price], order: [ASC, ASC, ASC]}
    ) {
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
      sort: {fields: [order, price_glass, name], order: [ASC, ASC, ASC]}
    ) {
      edges {
        node {
          id
          name
          origin
          price_bottle
          price_glass
          varietal
        }
      }
    }
    white: allSanityWine(
      filter: {type: {eq: "wine"}, active: {eq: true}}
      sort: {fields: [order, price_glass, name], order: [ASC, ASC, ASC]}
    ) {
      edges {
        node {
          id
          name
          origin
          price_bottle
          price_glass
          varietal
        }
      }
    }
    sparkling: allSanityWine(
      filter: {type: {eq: "sparkling"}, active: {eq: true}}
      sort: {fields: [order, price_glass, name], order: [ASC, ASC, ASC]}
    ) {
      edges {
        node {
          id
          name
          origin
          price_bottle
          price_glass
          varietal
        }
      }
    }
  }
`

export default DrinksPage