import { Suspense } from "react"
import Loading from "./loading"
import dynamic from "next/dynamic"

const CategoryPage = dynamic(() => import("./category-page"), {
	loading: () => <Loading />
})

export default async function Page({
	params
}: {
	params: Promise<{ category: string }>
}) {
	const { category } = await params

	// console.log(category)

	const categories = await fetch("https://dummyjson.com/products/categories", {
		next: { revalidate: 60 }
	})

	const productsByCategory = await fetch(
		`https://dummyjson.com/products/category/${category}?offset=0&limit=0`,
		{
			next: { revalidate: 60 }
		}
	)

	const fallbackProductsByCategory = await productsByCategory.json()

	const fallBackCategories = await categories.json()

	// console.log(fallbackProductsByCategory.products, fallBackCategories)

	return (
		<CategoryPage
			currentPath={category}
			categoryFallbackData={fallBackCategories}
			productsFallbackData={fallbackProductsByCategory}
		/>
	)
}
