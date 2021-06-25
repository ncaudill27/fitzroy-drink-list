import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'

import SEO from "../components/seo"
import Layout from "../containers/layout"
import CocktailMenu from '../components/cocktailMenu'
import DrinkSpecs from '../components/staffDrinkSpecs'

const BrunchPage = ({data}) => {

  const site = data?.site
  const drinkNodes = !!data?.cocktails
    ? mapEdgesToNodes(data.cocktails)
    : [];

 return (
   <Layout>
     <SEO
        title={site.title}
        
      />
      {drinkNodes && <CocktailMenu title='Brunch' drinks={drinkNodes} />}
      {drinkNodes && <DrinkSpecs drinkList={drinkNodes} />}
   </Layout>
 ) 
}

export const query = graphql`
  query {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
  }
`

export default BrunchPage