"use client"

import styled from "styled-components"
import Skeleton from "~/components/skeleton"


const Container = styled.div`
	max-width: 1400px;
	margin: 0 auto;
	padding: 2rem 1rem;
`

const BreadcrumbSkeleton = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	margin-bottom: 2rem;
`

const TitleSkeleton = styled(Skeleton)`
	max-width: 300px;
	height: 40px;
	margin: 0 auto 1rem;
`

const SubtitleSkeleton = styled(Skeleton)`
	max-width: 600px;
	height: 20px;
	margin: 0 auto 3rem;
`

const SearchSkeleton = styled(Skeleton)`
	max-width: 600px;
	height: 50px;
	margin: 0 auto 3rem;
	border-radius: 100px;
`

const SectionTitleSkeleton = styled(Skeleton)`
	width: 200px;
	height: 30px;
	margin-bottom: 2rem;
`

const FeaturedGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 2rem;
	margin-bottom: 4rem;
`

const FeaturedCardSkeleton = styled.div`
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`

const FeaturedImageSkeleton = styled(Skeleton)`
	height: 200px;
`

const FeaturedInfoSkeleton = styled.div`
	padding: 1.5rem;
	background: white;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`

const BrandsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 2rem;
`

const BrandCardSkeleton = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
	border-radius: 8px;
	background: white;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`

const BrandLogoSkeleton = styled(Skeleton)`
	width: 120px;
	height: 60px;
	margin-bottom: 1rem;
`

export default function BrandsLoading() {
	return (
		<Container>
			<BreadcrumbSkeleton>
				<Skeleton
					width={40}
					height={20}
				/>
				<Skeleton
					width={10}
					height={20}
				/>
				<Skeleton
					width={60}
					height={20}
				/>
			</BreadcrumbSkeleton>

			<TitleSkeleton />
			<SubtitleSkeleton />
			<SearchSkeleton />

			<div style={{ marginBottom: "4rem" }}>
				<SectionTitleSkeleton />
				<FeaturedGrid>
					{[...Array(3)].map((_, index) => (
						<FeaturedCardSkeleton key={index}>
							<FeaturedImageSkeleton />
							<FeaturedInfoSkeleton>
								<Skeleton
									width="70%"
									height={24}
								/>
								<Skeleton
									width="100%"
									height={16}
								/>
								<Skeleton
									width="100%"
									height={16}
								/>
								<Skeleton
									width="40%"
									height={16}
								/>
							</FeaturedInfoSkeleton>
						</FeaturedCardSkeleton>
					))}
				</FeaturedGrid>
			</div>

			<div>
				<SectionTitleSkeleton />
				<BrandsGrid>
					{[...Array(12)].map((_, index) => (
						<BrandCardSkeleton key={index}>
							<BrandLogoSkeleton />
							<Skeleton
								width={100}
								height={24}
							/>
							<Skeleton
								width={80}
								height={16}
							/>
						</BrandCardSkeleton>
					))}
				</BrandsGrid>
			</div>
		</Container>
	)
}
