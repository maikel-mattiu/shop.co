"use client"
import styled from "styled-components"
import Skeleton from "./skeleton"

const Container = styled.div`
  width: 100%;
`

const HeroSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 4rem 1rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 2rem;
`

const HeroImageSkeleton = styled(Skeleton)`
  width: 100%;
  height: 600px;
  border-radius: 8px;
  
  @media (max-width: 1024px) {
    height: 400px;
  }
`

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

const BrandsStrip = styled.div`
  background: #000;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  margin: 2rem 0;
  
  @media (max-width: 768px) {
    gap: 2rem;
    flex-wrap: wrap;
  }
`

const ProductSection = styled.div`
  max-width: 1400px;
  margin: 4rem auto;
  padding: 0 1rem;
`

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const ProductImage = styled(Skeleton)`
  aspect-ratio: 1;
  border-radius: 8px;
`

const DressStyleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 250px);
  gap: 1rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 200px);
  }
`

const TestimonialSection = styled.div`
  max-width: 1400px;
  margin: 4rem auto;
  padding: 0 1rem;
`

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: #f5f5f5;
  border-radius: 8px;
`

export default function HomeSkeleton() {
  return (
   <Container>
  <HeroSection>
    <HeroContent>
      <Skeleton width="80%" height={60} />
      <Skeleton width="60%" height={60} />
      <Skeleton width="70%" height={20} />
      <div style={{ borderRadius: "25px" }}>
        <Skeleton width={120} height={50} />
      </div>

      <Stats>
        <div>
          <Skeleton width={80} height={30} />
          <div style={{ marginTop: "0.5rem" }}>
            <Skeleton width={120} height={20} />
          </div>
        </div>
        <div>
          <Skeleton width={80} height={30} />
          <div style={{ marginTop: "0.5rem" }}>
            <Skeleton width={120} height={20} />
          </div>
        </div>
        <div>
          <Skeleton width={80} height={30} />
          <div style={{ marginTop: "0.5rem" }}>
            <Skeleton width={120} height={20} />
          </div>
        </div>
      </Stats>
    </HeroContent>

    <HeroImageSkeleton />
  </HeroSection>

  <BrandsStrip>
    {[...Array(5)].map((_, i) => (
      <div key={i} style={{ background: "#333" }}>
        <Skeleton width={120} height={30} />
      </div>
    ))}
  </BrandsStrip>

  {/* New Arrivals Section */}
  <ProductSection>
    <SectionHeader>
      <Skeleton width={200} height={40} />
      <Skeleton width={100} height={40} />
    </SectionHeader>

    <ProductGrid>
      {[...Array(4)].map((_, i) => (
        <ProductCard key={i}>
          <ProductImage />
          <div style={{ marginBottom: "0.5rem" }}>
            <Skeleton width="70%" height={24} />
          </div>
          <Skeleton width={80} height={24} />
          <div style={{ display: "flex", gap: "4px" }}>
            {[...Array(5)].map((_, j) => (
              <Skeleton key={j} width={16} height={16} />
            ))}
            <div style={{ marginLeft: "8px" }}>
              <Skeleton width={60} height={16} />
            </div>
          </div>
        </ProductCard>
      ))}
    </ProductGrid>
  </ProductSection>

  {/* Top Selling Section */}
  <ProductSection>
    <SectionHeader>
      <Skeleton width={200} height={40} />
      <Skeleton width={100} height={40} />
    </SectionHeader>

    <ProductGrid>
      {[...Array(4)].map((_, i) => (
        <ProductCard key={i}>
          <ProductImage />
          <div style={{ marginBottom: "0.5rem" }}>
            <Skeleton width="70%" height={24} />
          </div>
          <Skeleton width={80} height={24} />
          <div style={{ display: "flex", gap: "4px" }}>
            {[...Array(5)].map((_, j) => (
              <Skeleton key={j} width={16} height={16} />
            ))}
            <div style={{ marginLeft: "8px" }}>
              <Skeleton width={60} height={16} />
            </div>
          </div>
        </ProductCard>
      ))}
    </ProductGrid>
  </ProductSection>

  {/* Browse by Dress Style */}
  <ProductSection>
    <SectionHeader>
      <Skeleton width={300} height={40} />
    </SectionHeader>

    <DressStyleGrid>
      {[...Array(4)].map((_, i) => (
        <Skeleton key={i} width="100%" height="100%" />
      ))}
    </DressStyleGrid>
  </ProductSection>

  {/* Testimonials */}
  <TestimonialSection>
    <SectionHeader>
      <Skeleton width={250} height={40} />
    </SectionHeader>

    <TestimonialGrid>
      {[...Array(3)].map((_, i) => (
        <TestimonialCard key={i}>
          <div style={{ display: "flex", gap: "4px" }}>
            {[...Array(5)].map((_, j) => (
              <Skeleton key={j} width={16} height={16} />
            ))}
          </div>
          <div style={{ marginBottom: "0.5rem" }}>
            <Skeleton width={150} height={24} />
          </div>
          <Skeleton width="100%" height={80} />
          <Skeleton width={120} height={20} />
        </TestimonialCard>
      ))}
    </TestimonialGrid>
  </TestimonialSection>
</Container>

  )
}

