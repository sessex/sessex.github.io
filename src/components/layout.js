/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 900,
          padding: `10.0875rem 2.5rem 3.0875rem 2.5rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <footer style={{
          position: 'fixed',
          bottom: 0,
          padding: `0.725rem 1.0875rem`,
          backgroundColor: '#DBFF01',
          width: '100vw',
          textAlign: 'center'
        }}>
          TLDR; Sydney Essex would be a great asset to your next team, project, gig, squad outing, venture, book club, brainstorm...
          {/* Sydney Essex © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a> */}
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
