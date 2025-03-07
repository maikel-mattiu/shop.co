"use client"

import styled from "styled-components"
import ProductImages from "~/components/product-images"
import ProductInfo from "~/components/product-info"
import ProductReviews from "~/components/product-reviews"
import RelatedProducts from "~/components/related-products"
import { Product } from "~/types"
import Breadcrumb from "~/components/breadcrumb"
import { DBQUERIES } from "~/queries"

const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 2rem 1rem;
	background-color: #fff;
`

const ProductSection = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 4rem;
	margin-bottom: 4rem;

	@media (max-width: 1024px) {
		grid-template-columns: 1fr;
		gap: 2rem;
	}
`

export default function ProductPage({
	currentCategory,
	productId,
	fallbackProduct,
	fallbackCategory
}: {
	currentCategory: string
	productId: string
	fallbackProduct?: object
	fallbackCategory?: object
}) {
	const product: Product = DBQUERIES.getProduct(productId, fallbackProduct).product

	return (
		<Container>
			<Breadcrumb />

			<ProductSection>
				<ProductImages images={product.images} />
				<ProductInfo product={product} />
			</ProductSection>

			<ProductReviews reviews={product.reviews} />
			<RelatedProducts
				currentCategory={currentCategory}
				fallbackCategory={fallbackCategory}
			/>
		</Container>
	)
}
