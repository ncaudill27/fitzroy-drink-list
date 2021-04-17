import React from "react";
import styled from 'styled-components'


import GlobalStyle from '../styles/globalStyles'
import Header from "./header";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <GlobalStyle />
    <Header
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
    />
    <Body>{children}</Body>
    {/* <footer>
      <div>
        <div>
          &copy; {new Date().getFullYear()}, Built with{" "}
          <a href="https://www.sanity.io">Sanity</a> &amp;{" "}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </div>
    </footer> */}
  </>
);

const Body = styled.main`
  
`

export default Layout;
