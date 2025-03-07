import { Suspense } from "react"
import Loading from "./loading"
import dynamic from "next/dynamic"
import { Category, Product } from "~/types"

const ShopPage = dynamic(() => import("./shop-page"), {
	loading: () => <Loading />
})

export default async function Page() {
	const categories: Category[] = await fetch(
		"https://dummyjson.com/products/categories"
	)
		.then((data) => data.json())
		.then((data) => data)

	const categoriesLinks: string[] = categories.map((category) => category.url)

	const categoriesThumbnails: string[] = await Promise.all(
		categoriesLinks.map((link) =>
			fetch(link)
				.then((data) => data.json())
				.then((data) =>
					data.products.map((product: Product) => product.thumbnail)
				)
		)
	)

	// SWR Solutions (not implemented yet)
	// const fetcher = (url: string) => fetch(url).then((res) => res.json())

	// preload("https://dummyjson.com/products/categories", fetcher)

	// const { data, error } = useSWR("https://dummyjson.com/products/categories", fetcher, {
	// 	suspense: true
	// })

	// console.log(data)

	// const allCategories = data.map((category: Category) => {
	// 	preload(category.url, fetcher)
	// 	const { data, error } = useSWR(category.url, fetcher, { suspense: true })
	// 	return data
	// })

	// console.log(allCategories)

	// const productThumbnails = allCategories.map((category: Category) => category)

	// console.log(productThumbnails)

	return (
		<ShopPage
			categories={categories}
			thumbnails={categoriesThumbnails}
		/>
	)
}
