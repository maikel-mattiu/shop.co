"use client"
import styled from "styled-components"
import Skeleton from "./skeleton"

const Container = styled.div`
  max-width: 1200px;
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
  margin: 0 auto 2rem;
`

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`

const CategoryCardSkeleton = styled.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;
`

const CategoryInfoSkeleton = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export default function ShopSkeleton() {
  return (
    <Container>
      {/* <BreadcrumbSkeleton>
        <Skeleton width={40} height={20} />
        <Skeleton width={10} height={20} />
        <Skeleton width={60} height={20} />
      </BreadcrumbSkeleton> */}

      <TitleSkeleton />

      <CategoryGrid>
        {[...Array(4)].map((_, index) => (
          <CategoryCardSkeleton key={index}>
            <Skeleton width="100%" height="100%" />
            <CategoryInfoSkeleton>
              <Skeleton width={120} height={30} />
              <Skeleton width={80} height={16} />
            </CategoryInfoSkeleton>
          </CategoryCardSkeleton>
        ))}
      </CategoryGrid>
    </Container>
  )
}

