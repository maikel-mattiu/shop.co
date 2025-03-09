"use client"

import styled from "styled-components"
import ProductCard from "./product-card"
import { QUERIES } from "~/constants"
import Slider from "./review-slides"
import { Product, ProductResponse } from "~/types"
import { DBQUERIES } from "~/queries"

const MainSectionWrapper = styled.div`
	padding: 3.125rem 0;
	@media ${QUERIES.tabletAndUp} {
		padding: 3.125rem 0;
		display: flex;
		flex-direction: column;
	}
	background-color: white;
`

const ProductCardWrapper = styled.div`
	overflow: auto;
	margin: 0 auto;
	@media ${QUERIES.tabletOnly} {
		margin: 0;
	}
`

const MainSectionTitle = styled.h2`
	font-size: clamp(2rem, 1.848vw + 1.522rem, 3rem);
	line-height: clamp(3rem, 1.663vw + 2.57rem, 3.9rem);
	font-weight: 700;
	text-align: center;
`

const ProductsWrapper = styled.div`
	display: flex;
	overflow: auto;
	white-space: nowrap;
	column-gap: 1.5rem;
`

const ButtonWrapper = styled.div`
	display: flex;
	margin: 1.875rem 0;
`
const Button = styled.button`
	font-family: "Satoshi", "Integral CF", sans-serif;
	font-weight: 500;
	background-color: transparent;
	border: 0.0625rem solid #ccc;
	border-radius: 3.875rem;
	width: 22.375rem;
	padding: 0.844rem 0;
	margin: 0 auto;

	@media ${QUERIES.tabletAndUp} {
		width: 13.625rem;
	}
`

const HorizontalLine = styled.hr`
	width: 23rem;
	margin: 4rem auto;
	@media ${QUERIES.tabletOnly} {
		width: 46rem;
	}

	@media ${QUERIES.laptopAndUp} {
		width: 82rem;
	}
`

const CategorySectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #f0f0f0;
	width: 22.375rem;
	border-radius: 2.5rem;
	margin: 4rem auto;
	padding: 2rem;
	gap: 4rem;

	@media ${QUERIES.tabletOnly} {
		width: 43rem;
		padding: 2rem 4rem;
	}
	@media ${QUERIES.laptopAndUp} {
		width: 90rem;
		height: 54.125rem;
	}
`

const BoxWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;

	@media ${QUERIES.laptopAndUp} {
		flex-direction: row;
		flex-wrap: wrap;
		& :nth-child(2),
		:nth-child(3) {
			flex: 1 1 42.75rem;
		}
	}
`

const Box = styled.div`
	width: 19.375rem;
	height: 11.875rem;
	background: #fff;
	border-radius: 1.25rem;

	@media ${QUERIES.tabletOnly} {
		width: 40rem;
		height: 18.0625rem;
	}

	@media ${QUERIES.laptopAndUp} {
		flex: 1 1 25.438rem;
		height: 18.0625rem;
	}
`

export default function MainSection({ fallbackData }: { fallbackData: object }) {
	const products: ProductResponse[] = DBQUERIES.getProducts(0, 4, fallbackData).products

	return (
		<MainSectionWrapper>
			<MainSectionTitle>NEW ARRIVALS</MainSectionTitle>
			<ProductCardWrapper>
				<ProductsWrapper>
					{products.map((product: Product) => (
						<div key={product.id}>
							<ProductCard product={product} />
						</div>
					))}
				</ProductsWrapper>
			</ProductCardWrapper>
			<ButtonWrapper>
				<Button>View All</Button>
			</ButtonWrapper>
			<HorizontalLine />
			<MainSectionTitle>TOP SELLING</MainSectionTitle>
			<ProductCardWrapper>
				<ProductsWrapper>
					{products.map((product: Product) => (
						<div key={product.id}>
							<ProductCard product={product} />
						</div>
					))}
				</ProductsWrapper>
			</ProductCardWrapper>
			<ButtonWrapper>
				<Button>View All</Button>
			</ButtonWrapper>
			{/* <CategorySectionWrapper>
				<MainSectionTitle>BROWSE BY DRESS STYLE</MainSectionTitle>
				<BoxWrapper>
					<Box />
					<Box />
					<Box />
					<Box />
				</BoxWrapper>
			</CategorySectionWrapper> */}
			<Slider products={products} />
		</MainSectionWrapper>
	)
}

