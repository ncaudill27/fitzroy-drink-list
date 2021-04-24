import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'

import SEO from "../components/seo"
import Layout from "../containers/layout"
import CocktailMenu from '../components/cocktailMenu'
import DrinkSpecs from '../components/staffDrinkSpecs'

const DinnerPage = ({data}) => {

  const site = data?.site
  const drinkNodes = !!data?.cocktails
    ? mapEdgesToNodes(data.cocktails)
    : [];

 return (
   <Layout>
     <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      {drinkNodes && <CocktailMenu drinks={drinkNodes} />}
      {drinkNodes && <DrinkSpecs drinkList={drinkNodes} />}
   </Layout>
 ) 
}

export const query = graphql`
  query {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    cocktails: allSanityDrink(
      filter: {categories: {elemMatch: {title: {eq: "Dinner"}}}}
      sort: {fields: order, order: ASC}
    ) {
      edges {
        node {
          name
          price
          ingredients {
            amount
            measurement
            name
          }
          mainImage {
            _rawAsset
          }
          id
          glassware
          garnish
          categories {
            title
          }
          body {
            _rawChildren
          }
        }
      }
    }
  }
`

export default DinnerPage