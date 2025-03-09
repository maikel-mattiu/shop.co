"use client"

import { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: 100px 1fr;
	}
`

const Thumbnails = styled.div`
	display: flex;
  align-items: center;
  justify-content: center;
	gap: 1rem;
	overflow-x: auto;
	padding-bottom: 1rem;
	order: 2;

	@media (min-width: 768px) {
		flex-direction: column;
		overflow-x: visible;
		padding-bottom: 0;
		order: 1;
	}
`

const ThumbnailButton = styled.button<{ $active: boolean }>`
	flex: 0 0 auto;
	width: 80px;
	height: 80px;
	border: 2px solid ${(props) => (props.$active ? "#000" : "transparent")};
	padding: 0;
	cursor: pointer;
	border-radius: 8px;
	overflow: hidden;
	transition: border-color 0.2s;

	&:hover {
		border-color: #000;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	@media (min-width: 768px) {
		width: 100px;
		height: 100px;
	}
`

const MainImage = styled.div`
	position: relative;
	width: 100%;
	padding-top: 100%; // This creates a 1:1 aspect ratio
	border-radius: 8px;
	overflow: hidden;
	order: 1;

	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	@media (min-width: 768px) {
		order: 2;
	}
`

interface ProductImagesProps {
	images: string[]
}

export default function ProductImages({ images }: ProductImagesProps) {
	const [activeImage, setActiveImage] = useState(0)

	return (
		<Container>
			<Thumbnails>
				{images.map((image, index) => (
					<ThumbnailButton
						key={index}
						$active={activeImage === index}
						onMouseEnter={() => setActiveImage(index)}
					>
						<img
							src={image || "/placeholder.svg"}
							alt={`Product thumbnail ${index + 1}`}
							loading="lazy"
						/>
					</ThumbnailButton>
				))}
			</Thumbnails>
			<MainImage>
				<img
					src={images[activeImage] || "/placeholder.svg"}
					alt="Product main image"
				/>
			</MainImage>
		</Container>
	)
}
