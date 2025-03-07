import { BrandStripe } from "~/components/brand-stripe"
import Hero from "~/components/hero"
import Loading from "./loading"
import dynamic from "next/dynamic"

const MainSectionPage = dynamic(() => import("~/components/main-section"), {
	loading: () => <Loading />
})

export default async function Home() {
	const res = await fetch("https://dummyjson.com/products?offset=0&limit=4", {
		next: { revalidate: 60 }
	})
	const fallBackProducts = await res.json()
	return (
		<>
			<Hero />
			<BrandStripe />
			<MainSectionPage fallbackData={fallBackProducts} />
		</>
	)
}
