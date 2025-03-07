"use client"
import styled from "styled-components"
import Link from "next/link"
import { Category } from "~/types"

const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 2rem 1rem;
	margin-bottom: 3rem;
`

const Title = styled.h1`
	font-size: 2.5rem;
	font-weight: 700;
	text-align: center;
	margin-bottom: 2rem;
`

const CategoryGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	gap: 2rem;
`

const CategoryCard = styled(Link)`
	position: relative;
	aspect-ratio: 1;
	border-radius: 12px;
	overflow: hidden;
	text-decoration: none;
	color: inherit;

	&:hover img {
		transform: scale(1.05);
	}
`

const CategoryImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 0.3s ease;
`

const CategoryInfo = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 2rem;
	background: linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent);
	color: white;
`

const CategoryName = styled.h2`
	font-size: 1.5rem;
	font-weight: 600;
	margin-bottom: 0.5rem;
`

export default function ShopPage({
	categories,
	thumbnails
}: {
	categories: Category[]
	thumbnails: string[]
}) {
	return (
		<Container>
			<Title>Shop by Category</Title>
			<CategoryGrid>
				{categories.map((category: Category, index: number) => (
					<CategoryCard
						key={category.name}
						href={`/shop/${category.slug}`}
					>
						<CategoryImage
							src={thumbnails[index][1]}
							alt={category.name}
						/>
						<CategoryInfo>
							<CategoryName>{category.name}</CategoryName>
						</CategoryInfo>
					</CategoryCard>
				))}
			</CategoryGrid>
		</Container>
	)
}
