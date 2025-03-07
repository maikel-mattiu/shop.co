"use client"
import styled from "styled-components"
import Skeleton from "./skeleton"

const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 2rem 1rem;
`

const ProductSection = styled.div`
	display: grid;
	grid-template-columns: auto 1fr 1fr;
	gap: 2rem;
	margin-bottom: 4rem;

	@media (max-width: 1024px) {
		grid-template-columns: 1fr;
	}
`

const ThumbnailStrip = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	@media (max-width: 1024px) {
		flex-direction: row;
		order: 2;
	}
`

const ThumbnailSkeleton = styled(Skeleton)`
	width: 80px;
	height: 80px;
	border-radius: 4px;
`

const MainImageSkeleton = styled(Skeleton)`
	width: 500px;
	height: 600px;
	border-radius: 8px;

	@media (max-width: 1024px) {
		width: 100%;
		height: auto;
		aspect-ratio: 3/4;
		order: 1;
	}
`

const ProductInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	padding: 1rem;

	@media (max-width: 1024px) {
		order: 3;
	}
`

const RatingSkeleton = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`

const QuantitySelector = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-top: 1rem;
`

const ReviewsSection = styled.div`
	margin-bottom: 4rem;
`

const ReviewsHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 2rem;
`

const ReviewCard = styled.div`
	padding: 1.5rem;
	border: 1px solid #f0f0f0;
	border-radius: 8px;
	margin-bottom: 1rem;
`

const RelatedSection = styled.div`
	margin-top: 4rem;
`

const RelatedGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	gap: 2rem;
	margin-top: 2rem;
`

const RelatedProduct = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`

export default function ProductSkeleton() {
	return (
		<Container>
			<ProductSection>
				<ThumbnailStrip>
					{[...Array(3)].map((_, i) => (
						<ThumbnailSkeleton key={i} />
					))}
				</ThumbnailStrip>

				<MainImageSkeleton />

				<ProductInfo>
					<Skeleton
						width={200}
						height={32}
					/>

					<RatingSkeleton>
						<div style={{ display: "flex", gap: "4px" }}>
							{[...Array(5)].map((_, i) => (
								<Skeleton
									key={i}
									width={16}
									height={16}
								/>
							))}
						</div>
						<Skeleton
							width={100}
							height={16}
						/>
					</RatingSkeleton>

					<Skeleton
						width={100}
						height={32}
					/>

					<Skeleton
						width="100%"
						height={60}
					/>

					<QuantitySelector>
						<Skeleton
							width={40}
							height={40}
						/>
						<Skeleton
							width={60}
							height={40}
						/>
						<Skeleton
							width={40}
							height={40}
						/>
					</QuantitySelector>

					<Skeleton
						width="100%"
						height={50}
					/>
				</ProductInfo>
			</ProductSection>

			<ReviewsSection>
				<ReviewsHeader>
					<Skeleton
						width={150}
						height={24}
					/>
					<div style={{ display: "flex", gap: "1rem" }}>
						<Skeleton
							width={120}
							height={40}
						/>
						<Skeleton
							width={120}
							height={40}
						/>
					</div>
				</ReviewsHeader>

				{[...Array(3)].map((_, i) => (
					<ReviewCard key={i}>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								marginBottom: "1rem"
							}}
						>
							<Skeleton
								width={120}
								height={24}
							/>
							<Skeleton
								width={24}
								height={24}
							/>
						</div>

						<div
							style={{ display: "flex", gap: "4px", marginBottom: "1rem" }}
						>
							{[...Array(5)].map((_, j) => (
								<Skeleton
									key={j}
									width={16}
									height={16}
								/>
							))}
						</div>

						<Skeleton
							width="80%"
							height={20}
						/>
						<div style={{ marginTop: "1rem" }}>
							<Skeleton
								width={120}
								height={16}
							/>
						</div>
					</ReviewCard>
				))}
			</ReviewsSection>

			<RelatedSection>
				<div style={{ margin: "0 auto" }}>
					<Skeleton
						width={250}
						height={32}
					/>
				</div>

				<RelatedGrid>
					{[...Array(4)].map((_, i) => (
						<RelatedProduct key={i}>
							<div style={{ borderRadius: "8px" }}>
								<Skeleton
									width="100%"
									height={300}
								/>
							</div>
							<Skeleton
								width="70%"
								height={24}
							/>
							<Skeleton
								width={80}
								height={24}
							/>
							<RatingSkeleton>
								<div style={{ display: "flex", gap: "4px" }}>
									{[...Array(5)].map((_, j) => (
										<Skeleton
											key={j}
											width={16}
											height={16}
										/>
									))}
								</div>
								<Skeleton
									width={60}
									height={16}
								/>
							</RatingSkeleton>
						</RelatedProduct>
					))}
				</RelatedGrid>
			</RelatedSection>
		</Container>
	)
}
