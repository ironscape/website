import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import GalleryComponent from '../components/GalleryComponent';
import TabsModule from '../components/TabsModule';
import BackgroundImage from 'gatsby-background-image';

// Lawn Maintenance Icons
import mowing from '../images/icons/mowing.svg';
import lawnTreatments from '../images/icons/lawn-treatments.svg';
import hedgeTrimming from '../images/icons/hedge-trimming.svg';
import weedPulling from '../images/icons/pulling-weeds.svg';

// Outdoor Living & Landscape
import seasonalColorChange from '../images/icons/seasonal-color-change.svg';
import outdoorLiving from '../images/icons/outdoor-living.svg';
import landscaping from '../images/icons/landscaping.svg';

// Fencing Icons
import metalFencing from '../images/icons/metal-fencing.svg';
import woodFencing from '../images/icons/wood-fencing.svg';

// Drainage & Irrigation Icons
import installation from '../images/icons/installation.svg';
import repairs from '../images/icons/repairs.svg';
import maintenance from '../images/icons/maintenance.svg';

// Dirt Work Icons
import grading from '../images/icons/grading.svg';
import leveling from '../images/icons/leveling.svg';
import clearing from '../images/icons/clearing.svg';

export const IndexPage = ({ data }) => (
	<>
		<Layout>
			<Hero background={data.hero.sharp.fluid} headline='LASTING SOLUTIONS FOR YOUR OUTDOOR NEEDS' />
			<TabsModule>
				<div label='Lawn Maintenance'>
					<div className='image-grid'>
						{/* <img className='item' src={lawnPhoto} alt='Lawn Maintenance One' style={{ transform: 'rotate(90deg)' }} /> */}
						<BackgroundImage
							Tag='div'
							fluid={data.lawnPhoto.sharp.fluid}
							className='tab-image'
							style={{
								height: '400px',
								width: '400px',
								margin: 'auto',
							}}></BackgroundImage>
						<div className='image-grid__text'>
							<h2 className='h2 txt-left'>Lawn Maintenance</h2>
							<p className='txt-left'>
								Our team does full service lawn maintenance for a year around eye catching lawn. Services include,
								mowing service as usual, lawn treatments, hedge trimming, weed pulling, and leaf removal in fall/winter
								months.
							</p>
							<div className='icon-grid-block'>
								<div className='icon-item'>
									<img src={mowing} alt='' />
									<p>Mowing</p>
								</div>
								<div className='icon-item'>
									<img src={lawnTreatments} alt='' />
									<p>Lawn Treatments</p>
								</div>
								<div className='icon-item'>
									<img src={hedgeTrimming} alt='' />
									<p>Hedge Trimming</p>
								</div>
								<div className='icon-item'>
									<img src={weedPulling} alt='' />
									<p>Weed Pulling</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div label='Landscape'>
					<div className='image-grid'>
						<BackgroundImage
							Tag='div'
							fluid={data.outdoorPhoto.sharp.fluid}
							className='tab-image'
							style={{
								height: '400px',
								width: '400px',
								margin: 'auto',
							}}></BackgroundImage>
						<div className='image-grid__text'>
							<h2 className='h2 txt-left'>Outdoor Living & Landscape</h2>
							<p className='txt-left'>
								We have the ability to change out seasonal color all the way to creating an outdoor living area for you,
								your family/friends.
							</p>
							<div className='icon-grid-block'>
								<div className='icon-item'>
									<img src={seasonalColorChange} alt='' />
									<p>Seasonal Color Change</p>
								</div>
								<div className='icon-item'>
									<img src={outdoorLiving} alt='' />
									<p>Outdoor Living</p>
								</div>
								<div className='icon-item'>
									<img src={landscaping} alt='' />
									<p>Landscaping</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div label='Fencing'>
					<div className='image-grid'>
						<BackgroundImage
							Tag='div'
							fluid={data.fencingPhoto.sharp.fluid}
							className='tab-image'
							style={{
								height: '400px',
								width: '400px',
								margin: 'auto',
							}}></BackgroundImage>
						<div className='image-grid__text'>
							<h2 className='h2 txt-left'>Fencing</h2>
							<p className='txt-left'>
								Our expertise in fencing is from basic to wild, We can build anything you can imagine from wood to
								metal.
							</p>
							<div className='icon-grid-block'>
								<div className='icon-item'>
									<img src={metalFencing} alt='' />
									<p>Metal Fencing</p>
								</div>
								<div className='icon-item'>
									<img src={woodFencing} alt='' />
									<p>Wood Fencing</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div label='Drainage-Irrigation'>
					<div className='image-grid'>
						<BackgroundImage
							Tag='div'
							fluid={data.irrigationPhoto.sharp.fluid}
							className='tab-image'
							style={{
								height: '400px',
								width: '400px',
								margin: 'auto',
							}}></BackgroundImage>
						<div className='image-grid__text'>
							<h2 className='h2 txt-left'>Drainage & Irrigation</h2>
							<p className='txt-left'>
								We are licensed with that state for irrigation. We can take care of all of your irrigation needs with
								our staff.
							</p>
							<div className='icon-grid-block'>
								<div className='icon-item'>
									<img src={installation} alt='' />
									<p>Installation</p>
								</div>
								<div className='icon-item'>
									<img src={repairs} alt='' />
									<p>Repairs</p>
								</div>
								<div className='icon-item'>
									<img src={maintenance} alt='' />
									<p>Maintenance</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div label='Dirt Work'>
					<div className='image-grid'>
						<BackgroundImage
							Tag='div'
							fluid={data.dirtPhoto.sharp.fluid}
							className='tab-image'
							style={{
								height: '400px',
								width: '400px',
								margin: 'auto',
							}}></BackgroundImage>
						<div className='image-grid__text'>
							<h2 className='h2 txt-left'>Dirt Work</h2>
							<p className='txt-left'>
								We love to work with dirt. We have the necessary equipment to do anything from moving heavy items to
								grading, leveling, and lot clearing.
							</p>
							<div className='icon-grid-block'>
								<div className='icon-item'>
									<div>
										<img src={grading} alt='' />
										<p>Grading</p>
									</div>
								</div>
								<div className='icon-item'>
									<div>
										<img src={leveling} alt='' />
										<p>Leveling</p>
									</div>
								</div>
								<div className='icon-item'>
									<div>
										<img src={clearing} alt='' />
										<p>Clearing</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</TabsModule>
			<h2
				className='h2 txt-center'
				style={{
					padding: '0 25px',
				}}>
				Quality Work That Speaks for Itself
			</h2>
			<GalleryComponent />
		</Layout>
	</>
);

// const IndexPage = ({ data }) => {
// 	return (
// 		<Layout>
// 			<Hero background={data.hero.sharp.fluid} headline='LASTING SOLUTIONS FOR YOUR OUTDOOR NEEDS' />
// 			<IndexPageTemplate />
// 		</Layout>
// 	);
// };

export default IndexPage;

export const pageQuery = graphql`
	query IndexPageTemplate {
		hero: file(relativePath: { eq: "1497539_867782886619385_16421776160194746_n-1.png" }) {
			sharp: childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		lawnPhoto: file(relativePath: { eq: "gallery/IMG_1299.jpeg" }) {
			sharp: childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		outdoorPhoto: file(relativePath: { eq: "gallery/IMG_0861.jpeg" }) {
			sharp: childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		fencingPhoto: file(relativePath: { eq: "gallery/fence-gate.jpg" }) {
			sharp: childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		irrigationPhoto: file(relativePath: { eq: "gallery/UNADJUSTEDNONRAW_thumb_a.jpg" }) {
			sharp: childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		dirtPhoto: file(relativePath: { eq: "gallery/UNADJUSTEDNONRAW_thumb_7.jpg" }) {
			sharp: childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;
