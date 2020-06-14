import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../components/all.scss';
import useSiteMetadata from '../components/hooks/useSiteMetadata';
import { withPrefix } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const Success = () => {
	const { title, description } = useSiteMetadata();
	const { image } = useStaticQuery(graphql`
		query {
			image: file(relativePath: { eq: "gallery/UNADJUSTEDNONRAW_thumb_a.jpg" }) {
				sharp: childImageSharp {
					fluid {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);
	return (
		<div>
			<Helmet>
				<html lang='en' />
				<title>{title}</title>
				<meta name='description' content={description} />

				<link rel='apple-touch-icon' sizes='180x180' href={`${withPrefix('/')}img/apple-touch-icon.png`} />
				<link rel='icon' type='image/png' href={`${withPrefix('/')}img/favicon-32x32.png`} sizes='32x32' />
				<link rel='icon' type='image/png' href={`${withPrefix('/')}img/favicon-16x16.png`} sizes='16x16' />

				<link rel='mask-icon' href={`${withPrefix('/')}img/safari-pinned-tab.svg`} color='#ff4400' />
				<meta name='theme-color' content='#fff' />

				<meta property='og:type' content='business.business' />
				<meta property='og:title' content={title} />
				<meta property='og:url' content='/' />
				<meta property='og:image' content={`${withPrefix('/')}img/og-image.jpg`} />
			</Helmet>
			<Navbar />
			<BackgroundImage
				Tag='div'
				fluid={image.sharp.fluid}
				style={{
					height: '100vh',
					width: '100vw',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					position: 'relative',
				}}>
				<div className='hero-overlay'></div>
				<div
					style={{
						zIndex: '1',
					}}>
					<h1 className='h1 txt-white txt-center'>Success!</h1>
					<p className='txt-white txt-center'>We will be in touch shortly!</p>
				</div>
			</BackgroundImage>
			<Footer />
		</div>
	);
};

export default Success;
