"use client"

import { useState } from "react"
import styled from "styled-components"
import Link from "next/link"
import { Search } from "lucide-react"
import Breadcrumb from "~/components/breadcrumb"
import { Brand, Product } from "~/types"
import { DBQUERIES } from "~/queries"

const Container = styled.div`

	max-width: 1400px;
	margin: 0 auto;
	padding: 2rem 1rem;
`

const Title = styled.h1`
	font-size: 2.5rem;
	font-weight: 800;
	margin-bottom: 1rem;
	text-align: center;
`

const Subtitle = styled.p`
	font-family: var(--font-satoshi);
	color: #666;
	text-align: center;
	max-width: 600px;
	margin: 0 auto 3rem;
`

const SearchContainer = styled.div`
	max-width: 600px;
	margin: 0 auto 3rem;
	position: relative;
`

const SearchInput = styled.input`
	font-family: var(--font-satoshi);
	width: 100%;
	padding: 1rem 1rem 1rem 3rem;
	border: 1px solid #e5e5e5;
	border-radius: 100px;
	font-size: 1rem;

	&:focus {
		outline: none;
		border-color: #000;
	}
`

const SearchIcon = styled.div`
	position: absolute;
	left: 1rem;
	top: 50%;
	transform: translateY(-50%);
	color: #666;
`

const FeaturedBrands = styled.div`
	margin-bottom: 4rem;
`

const SectionTitle = styled.h2`
	font-size: 1.5rem;
	font-weight: 700;
	margin-bottom: 2rem;
`

const FeaturedGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 2rem;
`

const FeaturedCard = styled.div`
	font-family: var(--font-satoshi);
	display: flex;
	flex-direction: column;
	text-decoration: none;
	color: inherit;
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
	transition: transform 0.3s ease, box-shadow 0.3s ease;

	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
	}
`

const FeaturedImage = styled.div`
	height: 200px;
	background-color: #f5f5f5;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2rem;

	img {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
	}
`

const FeaturedInfo = styled.div`
	padding: 1.5rem;
	background: white;
`

const BrandName = styled.h3`
	font-size: 1.25rem;
	font-weight: 600;
	margin-bottom: 0.5rem;
`

const AllBrands = styled.div`
	font-family: var(--font-satoshi);
	margin-bottom: 4rem;
`

const BrandsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 2rem;
`

const BrandCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-decoration: none;
	color: inherit;
	padding: 2rem;
	border-radius: 8px;
	background: white;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
	transition: transform 0.3s ease, box-shadow 0.3s ease;

	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
	}
`

const BrandLogo = styled.img`
	max-width: 120px;
	max-height: 60px;
	margin-bottom: 1rem;
	object-fit: contain;
`

export default function BrandsPage({ allProducts} : {allProducts: Product[]}) {

	const products = DBQUERIES.getProducts(0, 0, allProducts).products

	const allBrands: Brand[] = products
		.filter((product : Product) =>  product.brand !== undefined)
		.map((product : Product) => ({
			id: product.id,
			brand: product.brand,
			thumbnail: product.thumbnail
		}))


	const [searchQuery, setSearchQuery] = useState("")

	const filteredBrands = allBrands.filter((brand : Brand) =>
		brand.brand.toLowerCase().includes(searchQuery.toLowerCase())
	)

	return (
		<Container>
			<Title>Our Brands</Title>
			<Subtitle>
				Discover our curated selection of premium brands, each offering unique
				styles and quality products.
			</Subtitle>

			<SearchContainer>
				<SearchIcon>
					<Search size={20} />
				</SearchIcon>
				<SearchInput
					type="text"
					placeholder="Search brands..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
			</SearchContainer>

			{searchQuery === "" && (
				<FeaturedBrands>
					<SectionTitle>Featured Brands</SectionTitle>
					<FeaturedGrid>
						{allBrands.map((brand : Brand) => (
							<FeaturedCard
								key={brand.id}
							>
								<FeaturedImage>
									<img
										src={brand.thumbnail || "/placeholder.svg"}
										alt={brand.brand}
									/>
								</FeaturedImage>
								<FeaturedInfo>
									<BrandName>{brand.brand}</BrandName>
								</FeaturedInfo>
							</FeaturedCard>
						))}
					</FeaturedGrid>
				</FeaturedBrands>
			)}
			{searchQuery !== "" && (
			<AllBrands>
				<SectionTitle>
					{searchQuery ? "Search Results" : "All Brands"}
				</SectionTitle>
				<BrandsGrid>
					{filteredBrands.map((brand : Brand) => (
						<BrandCard
							key={brand.id}
						>
							<BrandLogo
								src={brand.thumbnail || "/placeholder.svg"}
								alt={brand.brand}
							/>
							<BrandName>{brand.brand}</BrandName>
						</BrandCard>
					))}
				</BrandsGrid>

			</AllBrands>
			)}
				{filteredBrands.length === 0 && (
					<div style={{ textAlign: "center", padding: "3rem 0" }}>
						<p>No brands found matching "{searchQuery}"</p>
					</div>
				)}
		</Container>
	)
}
