/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <div>
      <div style={{backgroundImage:'linear-gradient(100deg, #5E8FB8, #7E67FF)', width: '100%', height: '400px', position:'absolute', top: '0px', zIndex:-1}}></div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>

      </div> 
    </div>
    <footer>
          <div>© {new Date().getFullYear()}, neocra</div>
    </footer>
   </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
