import type { Metadata } from "next";
import localFont from "next/font/local"
import GlobalStyles from "./GlobalStyles"
import NavigationMenu from "~/components/navigation-menu"
import StyledComponentsRegistry from "~/lib/registry"
import Footer from "~/components/footer"

export const metadata: Metadata = {
	title: "Shop.Co",
	description: "Happy shopping"
}

const integralCF = localFont({
	src: "../public/fonts/Integral CF/Fontspring-DEMO-integralcf-regular.woff2",
	display: "swap",
	variable: "--font-integral-cf"
})

const satoshi = localFont({
	src: [
		{
			path: "../public/fonts/Satoshi/Satoshi-Variable.woff2",
			weight: "400",
			style: "normal"
		},
		{
			path: "../public/fonts/Satoshi/Satoshi-Variable.woff2",
			weight: "400",
			style: "italic"
		},
		{
			path: "../public/fonts/Satoshi/Satoshi-Variable.woff2",
			weight: "700",
			style: "normal"
		},
		{
			path: "../public/fonts/Satoshi/Satoshi-Variable.woff2",
			weight: "700",
			style: "italic"
		}
	],
	display: "swap",
	variable: "--font-satoshi"
})

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="en"
			className={`${integralCF.variable} ${satoshi.variable}`}
		>
			<GlobalStyles />
			<body>
				<StyledComponentsRegistry>
					<NavigationMenu />
					{children}
					<Footer />
				</StyledComponentsRegistry>
			</body>
		</html>
	)
}
