import React from "react";
import { graphql, Link } from "gatsby"
import styled from 'styled-components'

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

  query {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`;

const IndexPage = ({data}) => {  

  const site = data?.site

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <Wrapper>
        <Title>
          The <br />
          Fitzroy <br />
          Menu
        </Title>
        <StyledLink to='/dinner-drinks'>Dinner</StyledLink>
        <StyledLink to='/brunch-drinks'>Brunch</StyledLink>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  padding: 40px;
  height: 100vh;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Big Shoulders Stencil Display', sans-serif;
  display: flex;
  flex-direction: column;
  
  & > * {
    margin-bottom: 40px;
  }
`
const Title = styled.h1`
  font-size: 5rem;
`

const StyledLink = styled(Link)`
  background-color: hsl(237, 8%, 70%);
  border: 5px solid hsl(237, 14%, 31%);
  padding: 12px 28px;
  text-decoration: none;
  font-size: 4rem;
  border-radius: 5px;
  color: black;

  &:hover {
    background-color: hsl(237, 14%, 31%);
    color: white;
  }
`





export default IndexPage;
