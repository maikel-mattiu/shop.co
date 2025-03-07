"use client"
import styled from "styled-components"
import type { Product, ProductResponse } from "../types"
import { useEffect, useState } from "react"
import { QUERIES } from "~/constants"
import ProductCard from "./product-card"
import { DBQUERIES } from "~/queries"

const Container = styled.div`
	font-family: "Satoshi", sans-serif;
	display: flex;
	flex-direction: column;
	margin-top: 3.125rem;

	@media ${QUERIES.tabletAndUp} {
		/* margin-bottom: 10.525rem; */
	}
`

const Title = styled.h2`
	font-size: 2rem;
	font-weight: 700;
	text-align: center;
`

const ProductGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 1rem;

	@media (min-width: 1024px) {
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	}
`
const ProductsWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 1rem;
`

export default function RelatedProducts({
	currentCategory,
	fallbackCategory
}: {
	currentCategory: string
	fallbackCategory?: object
}) {
	const relatedProducts = DBQUERIES.getProductsByCategory(
		currentCategory,
		0,
		4,
		fallbackCategory
	).products

	return (
		<Container>
			<Title>YOU MIGHT ALSO LIKE</Title>
			<ProductGrid>
				{relatedProducts.map((product: Product) => (
					<ProductsWrapper key={product.id}>
						<ProductCard product={product} />
					</ProductsWrapper>
				))}
			</ProductGrid>
		</Container>
	)
}
