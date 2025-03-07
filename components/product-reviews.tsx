"use client"

import { useEffect, useState } from "react"
import styled from "styled-components"
import { Star, CheckCircle, MoreHorizontal } from "lucide-react"
import type { Review } from "../types"
import { randomUUID } from "crypto"
import { QUERIES } from "~/constants"

const Container = styled.div`
	font-family: "Satoshi", sans-serif;
	display: flex;
	flex-direction: column;
	gap: 32px;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 48rem) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
`

const Controls = styled.div`
  display: flex;
  gap: 16px;
`

const Select = styled.select`
  background-color: #F0F0F0;
  padding: 8px;
  width: 120px;
  border: none;
  border-radius: 62px;
`

const WriteReviewButton = styled.button`
	font-family: "Satoshi", sans-serif;
	padding: 8px 16px;
	background: #000;
	color: #fff;
	border: none;
	border-radius: 62px;
	font-weight: 600;
	cursor: pointer;

	&:hover {
		opacity: 0.9;
	}
`

const ReviewsList = styled.div`
  display: grid;
  gap: 32px;
  
  @media ${QUERIES.laptopAndUp}{
    grid-template-columns: 1fr 1fr;

  }
`

const ReviewCard = styled.div`
  border: .0625rem solid #ccc ;
  border-radius: 1.25rem;
  padding: 1.75rem 2rem;
  display: grid;
  gap: 16px;
`

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const ReviewerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const ReviewerName = styled.span`
  font-weight: 600;
`

const VerifiedBadge = styled.span`
  color: #4CAF50;
  display: flex;
  align-items: center;
`

const ReviewStars = styled.div`
  display: flex;
  color: #FFB800;
`

const ReviewDate = styled.div`
  color: #666;
  font-size: 14px;
`

const ReviewContent = styled.p`
  color: #666;
  line-height: 1.6;
`

const LoadMoreButton = styled.button`
  padding: 16px;
  background: transparent;
  border: .0625rem solid #e5e5e5;
  border-radius: .25rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    border-color: #000;
  }
`

interface ProductReviewsProps {
  reviews: Review[]
}

export default function ProductReviews({ reviews }: ProductReviewsProps) {
  const [sortBy, setSortBy] = useState("latest")
  const [displayCount, setDisplayCount] = useState(4)

  return (
    <Container>
      <Header>
        <Title>All Reviews ({reviews.length})</Title>
        <Controls>
          <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="latest">Latest</option>
            <option value="highest">Highest Rating</option>
            <option value="lowest">Lowest Rating</option>
          </Select>
          <WriteReviewButton>Write a Review</WriteReviewButton>
        </Controls>
      </Header>

      <ReviewsList>
        {reviews.slice(0, displayCount).map((review, index) => (
          <ReviewCard key={index}>
            <ReviewHeader>
              <ReviewerInfo>
                <ReviewerName>{review.reviewerName}</ReviewerName>
                {review.verified && (
                  <VerifiedBadge>
                    <CheckCircle size={16} />
                  </VerifiedBadge>
                )}
              </ReviewerInfo>
              <button style={{ border: "none", background: "none" }} aria-label="More options">
                <MoreHorizontal />
              </button>
            </ReviewHeader>

            <ReviewStars>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill={i < Math.floor(review.rating) ? "currentColor" : "none"} />
              ))}
            </ReviewStars>

            <ReviewContent>{review.comment}</ReviewContent>
            <ReviewDate>Posted on {review.date.split("T")[0]}</ReviewDate>
          </ReviewCard>
        ))}
      </ReviewsList>

      {displayCount < reviews.length && (
        <LoadMoreButton onClick={() => setDisplayCount((count) => count + 4)}>Load More Reviews</LoadMoreButton>
      )}
    </Container>
  )
}

