import React, { useState, useCallback } from 'react';
// import Gallery from 'react-photo-gallery';
import { Modal, ModalGateway } from 'react-images';
import { graphql, useStaticQuery, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const GalleryComponent = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const [viewerIsOpen, setViewerIsOpen] = useState(false);

	const openLightbox = useCallback((event, { photo, index }) => {
		setCurrentImage(index);
		setViewerIsOpen(true);
	}, []);

	const closeLightbox = () => {
		setCurrentImage(0);
		setViewerIsOpen(false);
	};

	const allPhotos = useStaticQuery(graphql`
		query allPhotos {
			allImageSharp {
				edges {
					node {
						id
						fluid {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		}
	`);

	let galleryImages = allPhotos.allImageSharp.edges.slice(0, 9).map((photo, i) => {
		let bkgImage = photo.node.fluid;
		return (
			<BackgroundImage
				Tag='div'
				fluid={bkgImage}
				key={i}
				alt=''
				style={{
					height: '325px',
					width: '325px',
					margin: '10px',
				}}></BackgroundImage>
		);
	});

	return (
		<>
			<div className='gallery'>
				{/* <Gallery photos={photos} onClick={openLightbox} /> */}
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'flex-start',
						flexWrap: 'wrap',
					}}>
					{galleryImages}
				</div>
				<Link
					className='btn btn-outline'
					to='/gallery'
					style={{
						marginTop: '50px',
					}}>
					See More
				</Link>
				<ModalGateway>
					{viewerIsOpen ? (
						<Modal onClose={closeLightbox}>
							{/* <Carousel
								currentIndex={currentImage}
								views={photos.map((x) => ({
									...x,
									srcset: x.srcSet,
									caption: x.title,
								}))}
							/> */}
						</Modal>
					) : null}
				</ModalGateway>
			</div>
		</>
	);
};
export default GalleryComponent;
