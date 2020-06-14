import React, { useState, useCallback } from 'react';
import { Modal, ModalGateway } from 'react-images';
import { graphql, useStaticQuery } from 'gatsby';
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

	const completeGallery = useStaticQuery(graphql`
		query completeGallery {
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

	let galleryImages = completeGallery.allImageSharp.edges.map((photo) => {
		let bkgImage = photo.node.fluid;
		return <BackgroundImage Tag='div' fluid={bkgImage} className='full-gallery-image'></BackgroundImage>;
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
