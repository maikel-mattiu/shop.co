import dynamic from "next/dynamic"

const ProductPage = dynamic(() => import("./product-page"))

export default async function Page({
	params
}: {
	params: Promise<{ category: string; id: string }>
}) {
	const { category, id } = await params

	const product = await fetch(`https://dummyjson.com/products/${id}`, {
		next: { revalidate: 60 } // Revalidates every 60 seconds
	})

	const productCategory = await fetch(
		`https://dummyjson.com/products/category/${category}?offset=0&limit=4`,
		{
			next: { revalidate: 60 } // Revalidates every 60 seconds
		}
	)

	const fallbackProduct = await product.json()
	const fallbackCategory = await productCategory.json()

	return (
		<ProductPage
			currentCategory={category}
			productId={id}
			fallbackCategory={fallbackCategory}
			fallbackProduct={fallbackProduct}
		/>
	)
}
