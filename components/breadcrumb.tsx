"use client"
import styled from "styled-components"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"

const Container = styled.nav`
	font-family: "Satoshi", sans-serif;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 0.5rem;
	margin-bottom: 2rem;
	color: #666;

	a {
		text-decoration: none;
		color: inherit;

		&:hover {
			color: #000;
		}
	}
`

const Segment = styled.span`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`

const CurrentSegment = styled.span`
	color: #000;
	font-weight: 500;
`

export default function Breadcrumb() {
	const pathname = usePathname()

	// Generate breadcrumb segments from the pathname
	const generateBreadcrumbs = () => {
		// Remove trailing slash and split the path
		const segments = pathname.replace(/\/$/, "").split("/").filter(Boolean)

		// Create breadcrumb items with proper formatting
		const breadcrumbs = segments.map((segment, index) => {
			// Format the segment for display (capitalize, replace hyphens with spaces)
			const formattedSegment = segment
				.split("-")
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(" ")

			// Build the href for this segment
			const href = `/${segments.slice(0, index + 1).join("/")}`

			// Determine if this is the current segment
			const isCurrentSegment = index === segments.length - 1

			return {
				label: formattedSegment,
				href,
				isCurrentSegment
			}
		})

		// Add Home as the first breadcrumb
		return [
			{ label: "Home", href: "/", isCurrentSegment: segments.length === 0 },
			...breadcrumbs
		]
	}

	const breadcrumbs = generateBreadcrumbs()

	return (
		<Container aria-label="Breadcrumb">
			{breadcrumbs.map(
				(crumb, index) =>
					index !== breadcrumbs.length - 1  && (
						<Segment key={crumb.href}>
							{crumb.isCurrentSegment ? (
								<CurrentSegment>{crumb.label}</CurrentSegment>
							) : (
								<Link href={crumb.href}>{crumb.label}</Link>
							)}

							{index !== breadcrumbs.length - 2 && <ChevronRight size={16} />}
						</Segment>
					)
			)}
		</Container>
	)
}
