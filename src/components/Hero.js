import React from "react"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Hero = props => {
  // const { image } = useStaticQuery(graphql`
  // 	query {
  // 		image: file(relativePath: { eq: "1497539_867782886619385_16421776160194746_n-1.png" }) {
  // 			sharp: childImageSharp {
  // 				fluid {
  // 					srcSet
  // 					srcSetWebp
  // 					srcWebp
  // 					src
  // 				}
  // 			}
  // 		}
  // 	}
  // `);

  return (
    <div className="hero-container">
      <BackgroundImage
        Tag="section"
        fluid={props.background}
        style={{
          height: "80vh",
          minHeight: "600px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero__text-block">
          <h1 className="h1 txt-white">{props.headline}</h1>
          <Link to="/contact" className="btn bkg-white">
            Free Quote
          </Link>
        </div>
      </BackgroundImage>
    </div>
  )
}

export default Hero
