import React, { useRef, useEffect, useState } from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import { useReactToPrint } from 'react-to-print'
import styled from 'styled-components'

import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import CocktailMenu from '../components/cocktailMenu'

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    dinnerCocktails: allSanityDrink(filter: {categories: {elemMatch: {title: {eq: "Dinner"}}}}) {
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
    brunchCocktails: allSanityDrink(filter: {categories: {elemMatch: {title: {eq: "Brunch"}}}}) {
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
`;

const IndexPage = (props) => {
  const { data, errors } = props;
  const menuEl = useRef()

  const handlePrint = useReactToPrint({
    content: () => menuEl.current,
  });

  const [left, setLeft] = useState(0);
  useEffect(() => {
    setLeft(menuEl.current.getBoundingClientRect().left)
  }, [menuEl])

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const dinnerDrinkNodes = (data || {}).dinnerCocktails
    ? mapEdgesToNodes(data.dinnerCocktails)
    : [];

  const brunchDrinkNodes = (data || {}).brunchCocktails
    ? mapEdgesToNodes(data.brunchCocktails)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }
  
  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <ButtonWrapper style={{
          '--lateral-position': left + 'px'
        }}>
          <PrintButton
            onClick={handlePrint}
          >
            Print Menu
          </PrintButton>
        </ButtonWrapper>
      {dinnerDrinkNodes && <CocktailMenu ref={menuEl} drinks={dinnerDrinkNodes} />}
      {brunchDrinkNodes && <CocktailMenu drinks={brunchDrinkNodes} />}
    </Layout>
  );
};

const ButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: var(--lateral-position);
  height: 100%;
  z-index: 1;
`

const PrintButton = styled.button`
  position: sticky;
  top: 28px;
  outline: none;
  border: none;
  padding: 16px;
  font-size: 1.2rem;
  border-radius: 5px;
  background-color: hsl(240deg, 50%, 40%);
  color: hsl(0, 0%, 95%);

  &:hover {
    cursor: pointer;  
  }
`

export default IndexPage;
