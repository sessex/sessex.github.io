import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"
import logo from "../images/sessex1.svg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      position: 'fixed',
      zIndex: '3'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        width: '100vw',
        padding: `1.45rem 2.5rem`,
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <h2>
        <Link
          to="/"
        >
          <img src={logo} />
        </Link>
      </h2>
    
      <div
       style={{
        display: 'flex',
        flexDirection: 'row',
      }}>
      <h2
        style={{
          marginRight: '1em'
        }}>
        <Link
          to="/info/"
          style={{
            textDecoration: `none`,
          }}
        >
          !NFO
        </Link>
      </h2>
      <h2>
        <Link
          to="/works/"
          style={{
            textDecoration: `none`,
          }}
        >
          WORK$
        </Link>
      </h2>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
