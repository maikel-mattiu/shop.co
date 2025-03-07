"use client"
import styled from "styled-components"
import { Star } from "lucide-react"
import type { Product } from "~/types"
import Link from "next/link"
import { QUERIES } from "~/constants"

const Card = styled(Link)`
	font-family: "Satoshi", sans-serif;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	text-decoration: none;
	color: inherit;
	margin: 1rem;

	@media ${QUERIES.tabletAndUp} {
		width: 18.75rem;
	}
`

const ImageContainer = styled.div`
	width: 250px;
	height: 250px;
	border-radius: 1.25rem;
	position: relative;
	aspect-ratio: 1;
	overflow: hidden;
	background: #f5f5f5;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media ${QUERIES.tabletAndUp} {
		width: 18.75rem;
		height: 18.75rem;
	}
`

const ToolTip = styled.div`
	display: none;
	position: absolute;
	max-width: 300px;
	white-space: pre-wrap;
	top: -20px;
	color: black;
	z-index: 100;
	background-color: #ccc;
`

const ProductNameWrapper = styled.div`
	position: relative;
	&:hover ${ToolTip} {
		display: inline-flex;
		flex-basis: 200px;
	}
`
const ProductInfo = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`

const ProductName = styled.h3`
	font-size: clamp(0.75rem, 0.924vw + 0.511rem, 1.25rem);
	line-height: clamp(1.125rem, 0.924vw + 0.886rem, 1.625rem);
	white-space: wrap;
	font-family: var(--font-satoshi), sans-serif;
	font-weight: 700;
	cursor: pointer;
`

const PriceContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`

const Price = styled.span`
	font-weight: 600;
`

const RatingContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`

const Stars = styled.div`
	display: flex;
	color: #ffb800;
`

const Reviews = styled.span`
	color: #666;
	font-size: 0.875rem;
`

interface ProductCardProps {
	product: Product
}

export default function ProductCard({ product }: ProductCardProps) {

	return (
		<Card
			href={{ pathname: `/shop/${product.category}/${product.id}` }}
			prefetch={true}
		>
			<ImageContainer>
				<img
					src={product.images[0] || "/placeholder.svg"}
					alt={product.title}
				/>
			</ImageContainer>
			<ProductInfo>
				<ProductNameWrapper style={{ position: "relative" }}>
					<ProductName>{product.title}</ProductName>
					<ToolTip>{product.title}</ToolTip>
				</ProductNameWrapper>
				<PriceContainer>
					<Price>${product.price}</Price>
				</PriceContainer>
				<RatingContainer>
					<Stars>
						{[...Array(5)].map((_, i) => (
							<Star
								key={i}
								size={16}
								fill={
									i < Math.floor(product.rating)
										? "currentColor"
										: "none"
								}
							/>
						))}
					</Stars>
					<Reviews>{product.reviews.length} reviews</Reviews>
				</RatingContainer>
			</ProductInfo>
		</Card>
	)
}
