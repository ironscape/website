import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import { graphql, useStaticQuery } from "gatsby"

const Contact = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "contact/contact-hero.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <>
      <Layout>
        <Hero background={image.sharp.fluid} headline="Contact Us" />
      </Layout>
    </>
  )
}

export default Contact
