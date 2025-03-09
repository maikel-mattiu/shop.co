import BrandsPage from "./brands-page"

export default async function Page() {
	const allProducts = await fetch("https://dummyjson.com/products/")
		.then((data) => data.json())
		.then((data) => data)

	return <BrandsPage  allProducts={allProducts} />
}
