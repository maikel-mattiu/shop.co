"use client"
import styled from "styled-components"
import Link from "next/link"
import { Category } from "~/types"
import { QUERIES } from "~/constants"

const Container = styled.div`
	font-family: "Satoshi", sans-serif;
	width: 100%;
	max-width: 240px;

	@media ${QUERIES.laptopAndUp} {
		max-width: 200px;
	}
`

const Title = styled.h2`
	font-size: 1.25rem;
	font-weight: 600;
	margin-bottom: 1.5rem;
`

const CategoryList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`

const CategoryItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.75rem 0;
	border-bottom: 1px solid #f0f0f0;
`

const CategoryLink = styled(Link)<{ $active?: boolean }>`
	text-decoration: none;
	color: ${(props) => (props.$active ? "#000" : "#666")};
	font-weight: ${(props) => (props.$active ? "600" : "400")};
	transition: color 0.2s;

	&:hover {
		color: #000;
	}
`

interface CategoriesNavProps {
	categories: Category[]
	currentCategory: string
}

export default function CategoriesNav({
	categories,
	currentCategory
}: CategoriesNavProps) {
	return (
		<Container>
			<Title>Categories</Title>
			<CategoryList>
				{categories.map((category) => (
					<CategoryItem key={category.slug}>
						<CategoryLink
							href={`/shop/${category.slug.toLowerCase()}`}
							$active={currentCategory === category.slug.toLowerCase()}
							prefetch={true}
						>
							{category.name}
						</CategoryLink>
					</CategoryItem>
				))}
			</CategoryList>
		</Container>
	)
}
