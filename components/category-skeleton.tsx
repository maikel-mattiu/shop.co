"use client"
import styled from "styled-components"
import Skeleton from "./skeleton"

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

const Content = styled.div`
	display: grid;
	grid-template-columns: 250px 1fr;
	gap: 2rem;

	@media (max-width: 1024px) {
		grid-template-columns: 1fr;
	}
`

const SidebarSkeleton = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	@media (max-width: 1024px) {
		display: none;
	}
`

const CategoryLink = styled(Skeleton)`
	height: 24px;
	width: 80%;

	&:nth-child(even) {
		width: 60%;
	}
`

const ProductSection = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`

const HeaderSkeleton = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const ProductGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 2rem;
`

const ProductCardSkeleton = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem;
	background: #fff;
`

const ProductImageSkeleton = styled(Skeleton)`
	aspect-ratio: 1;
	border-radius: 4px;
`

const ProductInfoSkeleton = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
`

const RatingSkeleton = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`

const StarsSkeleton = styled.div`
	display: flex;
	gap: 2px;
`

export default function CategorySkeleton() {
	return (
		<Container>
  <BreadcrumbSkeleton>
    <Skeleton width={40} height={20} />
    <Skeleton width={10} height={20} />
    <Skeleton width={60} height={20} />
  </BreadcrumbSkeleton>

  <Content>
    <SidebarSkeleton>
      <div style={{ marginBottom: "1rem" }}>
        <Skeleton width={100} height={24} />
      </div>
      {[...Array(15)].map((_, index) => (
        <CategoryLink key={index} />
      ))}
    </SidebarSkeleton>

    <ProductSection>
      <HeaderSkeleton>
        <Skeleton width={200} height={32} />
        <Skeleton width={150} height={40} />
      </HeaderSkeleton>

      <ProductGrid>
        {[...Array(6)].map((_, index) => (
          <ProductCardSkeleton key={index}>
            <ProductImageSkeleton />
            <ProductInfoSkeleton>
              <Skeleton width="80%" height={24} />
              <Skeleton width={80} height={24} />
              <RatingSkeleton>
                <StarsSkeleton>
                  {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} width={16} height={16} />
                  ))}
                </StarsSkeleton>
                <div style={{ marginLeft: "8px" }}>
                  <Skeleton width={60} height={16} />
                </div>
              </RatingSkeleton>
            </ProductInfoSkeleton>
          </ProductCardSkeleton>
        ))}
      </ProductGrid>
    </ProductSection>
  </Content>
</Container>

	)
}
