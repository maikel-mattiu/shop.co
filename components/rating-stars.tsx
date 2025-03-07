import styled from "styled-components";

interface RatingStarsProps {
  rating: number; // Rating value, range from 0 to 5
}

const RatingStars = ({ rating }: RatingStarsProps) => {
  return (
    <StarsContainer>
      {[...Array(5)].map((_, index) => (
        <Star key={index} $filled={index < rating} />
      ))}
    </StarsContainer>
  );
};

const StarsContainer = styled.div`
  display: flex;
  gap: 2px;
`;

const Star = styled.div<{ $filled: boolean }>`
  width: 20px;
  height: 20px;
  background-color: ${(props) => (props.$filled ? "#ffd700" : "#ccc")};
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
`;

export default RatingStars;
