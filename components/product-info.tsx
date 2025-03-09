"use client"

import { useState } from "react"
import styled from "styled-components"
import { Star, Minus, Plus, ShoppingCart } from "lucide-react"
import type { Product } from "../types"
import { useRouter } from "next/navigation"
import { useCart } from "~/context/cart-context"

const Container = styled.div`
	font-family: "Satoshi", sans-serif;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`

const Title = styled.h1`
	font-family: "Integral CF", sans-serif;
	font-size: 2rem;
	font-weight: 700;
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
`

const PriceContainer = styled.div`
	font-weight: 700;
	display: flex;
	align-items: center;
	gap: 1rem;
`

const Price = styled.span`
	font-size: 1.5rem;
	font-weight: 600;
`

const OriginalPrice = styled.span`
	font-size: 1.5rem;
	text-decoration: line-through;
	color: #666;
`

const Discount = styled.span`
	color: #ff3333;
	font-weight: 600;
`

const Description = styled.p`
	color: #666;
	line-height: 1.6;
`

const Section = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`

const SectionTitle = styled.h3`
	font-weight: 600;
`

const ColorOptions = styled.div`
	display: flex;
	gap: 0.5rem;
`

const ColorButton = styled.button<{ $color: string; $active: boolean }>`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	background: ${(props) => props.$color};
	border: 2px solid ${(props) => (props.$active ? "#000" : "transparent")};
	cursor: pointer;
	transition: border-color 0.2s;

	&:hover {
		border-color: #000;
	}
`

const SizeOptions = styled.div`
	display: flex;
	gap: 0.5rem;
`

const SizeButton = styled.button<{ $active: boolean }>`
	font-family: "Satoshi", sans-serif;
	padding: 0.5rem 1rem;
	border: 1px solid ${(props) => (props.$active ? "#000" : "#e5e5e5")};
	background: ${(props) => (props.$active ? "#000" : "#F0F0F0")};
	color: ${(props) => (props.$active ? "#fff" : "#000")};
	border-radius: 3.875rem;
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		border-color: #000;
	}
`

const QuantitySelector = styled.div`
	background-color: #f0f0f0;
	display: flex;
	align-items: center;
	border-radius: 3.875rem;
	gap: 1rem;
`

const QuantityButton = styled.button`
	width: 40px;
	height: 40px;
	border: none;
	background: transparent;
	/* border-radius: 4px; */
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		border-color: #000;
	}
`

const Quantity = styled.span`
	font-weight: 600;
	min-width: 40px;
	text-align: center;
`

const AddToCartButton = styled.button`
	/* max-width: 25rem; */
	width: 100%;
	padding: 1rem;
	background: #000;
	color: #fff;
	border: none;
	border-radius: 3.875rem;
	font-weight: 600;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	transition: opacity 0.2s;

	&:hover {
		opacity: 0.9;
	}
`

interface ProductInfoProps {
	product: Product
}

export default function ProductInfo({ product }: ProductInfoProps) {
	const [quantity, setQuantity] = useState(1)

	const { addToCart } = useCart()

	const handleAddToCart = () => {
		addToCart({
			id: product.id,
			title: product.title,
			discount: product.discountPercentage,
			price: product.price,
			quantity: quantity,
			image: product.images[0]
		})

		// Optional: Show confirmation message
		alert(`Added ${quantity} ${product.title} to cart`)
	}

	return (
		<Container>
			<Title>{product.title}</Title>

			<RatingContainer>
				<Stars>
					{[...Array(5)].map((_, i) => (
						<Star
							key={i}
							size={20}
							fill={
								i < Math.floor(product.rating) ? "currentColor" : "none"
							}
						/>
					))}
				</Stars>
				<Reviews>
					{product.rating}/5 ({product.reviews.length} reviews)
				</Reviews>
			</RatingContainer>

			<PriceContainer>
				<Price>${product.price}</Price>
			</PriceContainer>

			<Description>{product.description}</Description>

			<Section style={{ flexDirection: "row" }}>
				<QuantitySelector>
					<QuantityButton
						onClick={() => setQuantity((q) => Math.max(1, q - 1))}
						aria-label="Decrease quantity"
					>
						<Minus size={20} />
					</QuantityButton>
					<Quantity>{quantity}</Quantity>
					<QuantityButton
						onClick={() => setQuantity((q) => q + 1)}
						aria-label="Increase quantity"
					>
						<Plus size={20} />
					</QuantityButton>
				</QuantitySelector>
				<AddToCartButton onClick={handleAddToCart}>
					<ShoppingCart size={20} />
					Add to Cart
				</AddToCartButton>
			</Section>
		</Container>
	)
}

