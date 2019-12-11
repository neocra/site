import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.placeholderImage.childImageSharp.fixed} />
}

const Lang = ({value, locale, location}) =>{
  if(locale !== value){
    return (
  <Link to={location.pathname.replace('/'+locale+'/', '/'+value+'/')}>
    {value}
    </Link> );    
  }

  return <></>;
}

const Header = ({ siteTitle, locale, location }) => (
  <header
    style={{
      backgroundColor:'rgba(255,255,255,0.3)',
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0`,
        padding: `1.00rem 1.0875rem`,
      }}
    >
      <div style={{ margin: 0 }}>
       <Logo />
       <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </div>
     
    </div>
    <div className="header-right">
      <Link to={locale + '/contact/'}>
            contact
          </Link> 
          <Link to={locale + '/about/'}>
            about
          </Link> 
          <Lang value='fr' locale={locale} location={location} />
          <Lang value='en' locale={locale} location={location} />
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
