"use client"

import { useState, useMemo } from "react"
import styled from "styled-components"
import ProductCard from "~/components/product-card"
import Breadcrumb from "~/components/breadcrumb"

import { Category, Product } from "~/types"
import { DesktopNav, MobileNav } from "~/components/category-navigation-menu"
import { usePathname } from "next/navigation"
import { DBQUERIES } from "~/queries"

const Container = styled.div`
	font-family: "Satoshi", sans-serif;
	margin: 0 auto;
	padding: 1rem;
	max-width: 100%;

	@media (min-width: 1024px) {
		max-width: 1400px;
		padding: 2rem 1rem;
	}
`

const Content = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 1rem;

	@media (min-width: 1024px) {
		grid-template-columns: 240px 1fr;
		gap: 2rem;
	}
`

const ProductSection = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	@media (min-width: 1025px) {
		gap: 2rem;
	}
`

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	gap: 0.5rem;
`

const Title = styled.h1`
	font-size: 1.5rem;
	font-weight: 700;

	@media (min-width: 1025px) {
		font-size: 2rem;
	}
`

const SortSelect = styled.select`
	padding: 0.5rem;
	border: 1px solid #e5e5e5;
	border-radius: 4px;
	min-width: 100%;

	@media (min-width: 1024px) {
		min-width: 200px;
	}
`

const ProductGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 350px));
	/* gap: 1rem; */
	justify-content: space-evenly;

	@media (min-width: 1024px) {
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 2rem;
	}
`

const Pagination = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	margin-top: 1rem;

	@media (min-width: 1025px) {
		margin-top: 2rem;
	}
`

const PageButton = styled.button<{ $active?: boolean }>`
	font-family: "Satoshi", sans-serif;
	padding: 0.5rem 0.75rem;
	border: 1px solid ${(props) => (props.$active ? "#000" : "#e5e5e5")};
	background: ${(props) => (props.$active ? "#000" : "transparent")};
	color: ${(props) => (props.$active ? "#fff" : "#000")};
	border-radius: 4px;
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		border-color: #000;
	}

	@media (min-width: 1025px) {
		padding: 0.5rem 1rem;
	}
`
const ProductsWrapper = styled.div`
	display: flex;
	justify-content: center;
	overflow: auto;
	white-space: nowrap;
	column-gap: 1.5rem;
	margin-top: 1rem;
`

export default function CategoryPage({
	currentPath,
	categoryFallbackData,
	productsFallbackData
}: {
	currentPath: string
	categoryFallbackData?: object
	productsFallbackData?: object
}) {
	const categories: Category[] =
		DBQUERIES.getCategories(categoryFallbackData).categories

	const categoryProducts: Product[] = DBQUERIES.getProductsByCategory(
		currentPath,
		0,
		0,
		productsFallbackData
	).products

	// console.log(categoryProducts)

	const [sort, setSort] = useState("price-low")
	const [currentPage, setCurrentPage] = useState(1)
	const itemsPerPage = 9

	const sortedProducts = useMemo(() => {
		// Filter products by category

		// Sort products
		switch (sort) {
			case "price-low":
				categoryProducts.sort((a: Product, b: Product) => a.price - b.price)
				break
			case "price-high":
				categoryProducts.sort((a: Product, b: Product) => b.price - a.price)
				break
			case "rating":
				categoryProducts.sort((a: Product, b: Product) => b.rating - a.rating)
				break
			default:
				// Most Popular (by reviews)
				categoryProducts.sort(
					(a: Product, b: Product) => Number(b.reviews) - Number(a.reviews)
				)
		}

		return categoryProducts
	}, [categoryProducts, sort])

	const totalPages = Math.ceil(sortedProducts.length / itemsPerPage)

	const currentProducts = sortedProducts.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	)

	const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSort(e.target.value)
	}

	return (
		<Container>
			<Breadcrumb />
			<MobileNav
				currentCategory={currentPath}
				categories={categories}
			/>

			<Content>
				<DesktopNav
					currentCategory={currentPath}
					categories={categories}
				/>
				<ProductSection>
					<Header>
						<Title>
							{categories.find((c) => c.slug === currentPath)!.name}
						</Title>
						<SortSelect
							value={sort}
							onChange={handleSortChange}
						>
							<option value="price-low">Price: Low to High</option>
							<option value="price-high">Price: High to Low</option>
							<option value="rating">Rating: High to Low</option>
							<option value="reviews">Most Popular</option>
						</SortSelect>
					</Header>

					<ProductGrid>
						{currentProducts.map((product: Product) => (
							<ProductsWrapper key={product.id}>
								<ProductCard product={product} />
							</ProductsWrapper>
						))}
					</ProductGrid>

					<Pagination>
						<PageButton
							onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
							disabled={currentPage === 1}
						>
							Previous
						</PageButton>
						{[...Array(totalPages)].map((_, i) => (
							<PageButton
								key={i + 1}
								$active={currentPage === i + 1}
								onClick={() => setCurrentPage(i + 1)}
							>
								{i + 1}
							</PageButton>
						))}
						<PageButton
							onClick={() =>
								setCurrentPage((p) => Math.min(totalPages, p + 1))
							}
							disabled={currentPage === totalPages}
						>
							Next
						</PageButton>
					</Pagination>
				</ProductSection>
			</Content>
		</Container>
	)
}
