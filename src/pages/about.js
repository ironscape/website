import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Img from 'gatsby-image';

export const AboutPage = ({ data }) => {
	return (
		<Layout>
			<Hero background={data.hero.sharp.fluid} headline='why ironscape' />
			<section className='section section--gradient'>
				<div className='container'>
					<div className='columns'>
						<div className='column is-10 is-offset-1'>
							<div className='section'>
								{/* <h2 className='h2'>{title}</h2> */}
								{/* <PageContent className='content' content={content} /> */}
								<div className='col-left-image'>
									<Img fluid={data.bioPhoto.sharp.fluid} alt='family owned business' className='about-image' />
									<div className='text-block'>
										<h2 className='h2'>Family owned and operated</h2>
										<p>
											We take pride in our name IronScape LLC. Our mission is simple, to provide quality yet affordable
											services for your outdoor needs with a good helping of ol’ Texas hospitality on the side. With
											over 10 years in the landscape industry and 5 years in business, we know and have the best
											resources to be able to provide you with competitive pricing, quality material and unmatched
											service.
										</p>
									</div>
								</div>

								<div className='col-right-image'>
									<Img fluid={data.choosePhoto.sharp.fluid} alt='Choose Ironscape' className='about-image' />
									<div className='text-block'>
										<h2 className='h2'>Why Choose Us</h2>
										<p>
											When you contact us, we provide a free estimate promptly after viewing the project and are quick
											to get the project moving once approved. Whether it is weekly lawn maintenance, building a fence,
											installing irrigation or trimming trees, our team members are passionate about working with their
											hands and tools and it shows in the finished results.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

// const AboutPage = ({ data }) => {
// 	return (
// 		<Layout>
// 			<Hero background={data.hero.sharp.fluid} headline='why ironscape' />
// 			<AboutPageTemplate title='About Ironscape' />
// 		</Layout>
// 	);
// };

export default AboutPage;

export const aboutPageQuery = graphql`
	query AboutPage {
		hero: file(relativePath: { eq: "why-ironscape.png" }) {
			sharp: childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		bioPhoto: file(relativePath: { eq: "about/family-owned.png" }) {
			sharp: childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		choosePhoto: file(relativePath: { eq: "about/choose-us.png" }) {
			sharp: childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;
