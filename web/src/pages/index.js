import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import MaxWidthWrapper from "../components/maxWidthWrapper";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

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
    drinks: allSanityDrink {
      nodes {
        id
        name
        garnish
        glassware
        price
        ingredients {
          amount
          measurement
          name
        }
      }
    }
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;

  console.log(data)
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const drinkNodes = (data || {}).drinks
    ? mapEdgesToNodes(data.drinks)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  console.log('Drink nodes: ', drinkNodes)
  
  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <MaxWidthWrapper width={910}>
        <h1>Welcome to {site.title}</h1>
        {drinkNodes && drinkNodes.map(drink => (
          <div>{drink.name}</div>
        ))}
      </MaxWidthWrapper>
    </Layout>
  );
};

export default IndexPage;
