import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import FullGallery from '../components/FullGallery';

const Gallery = () => {
	const { image } = useStaticQuery(graphql`
		query {
			image: file(relativePath: { eq: "gallery/gallery-hero.png" }) {
				sharp: childImageSharp {
					fluid {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);
	return (
		<Layout>
			<Hero background={image.sharp.fluid} headline='Our Work' />
			<FullGallery />
		</Layout>
	);
};

export default Gallery;
