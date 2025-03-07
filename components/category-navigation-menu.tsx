import styled from "styled-components"
import { Category, Product } from "~/types"
import CategoriesNav from "./categories"


const MobileCategories = styled.div`
	margin-bottom: 1rem;
	display: block;

	@media (min-width: 1024px) {
		display: none;
	}
`

const MobileCategorySelect = styled.select`
	width: 100%;
	padding: 0.75rem;
	border: 1px solid #e5e5e5;
	border-radius: 4px;
	font-size: 1rem;
`

const DesktopCategories = styled.div`
	display: none;

	@media (min-width: 1024px) {
		display: block;
	}
`


export function MobileNav({
	currentCategory,
	categories
}: {
	currentCategory: string
	categories: Category[]
}) {
	const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value
		const url = value ? `/shop/${value.toLowerCase()}` : `/shop`

		window.location.href = url
	}
	return (
		<MobileCategories>
			<MobileCategorySelect
				value={currentCategory.toLowerCase()}
				onChange={handleCategoryChange}
			>
				<option value="">All {currentCategory}</option>
				{categories.map((category: Category) => (
					<option
						key={category.slug}
						value={category.slug.toLowerCase()}
					>
						{category.name}
					</option>
				))}
			</MobileCategorySelect>
		</MobileCategories>
	)
}

export function DesktopNav({
	currentCategory,
	categories
}: {
	currentCategory: string
	categories: Category[]
}) {
	return (
		<DesktopCategories>
			<CategoriesNav
				categories={categories}
				currentCategory={currentCategory}
			/>
		</DesktopCategories>
	)
}
