"use client"
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { CheckCircle, ArrowLeft, ArrowRight } from "lucide-react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import { QUERIES } from "~/constants"
import { Product, ProductResponse } from "~/types"

// Styled Components
const Container = styled.div`
	max-width: 42rem;
	margin: 0 auto;
	padding: 2rem 1rem;
	position: relative;
	margin-bottom: 10rem;

	@media ${QUERIES.laptopAndUp} {
		max-width: 90rem;
		margin-bottom: 5rem;
	}
`

const Title = styled.h2`
	font-size: 2rem;
	font-weight: 800;
	margin-bottom: 2rem;
	text-transform: uppercase;
`

const NavigationButtons = styled.div`
	position: absolute;
	top: 2rem;
	right: 1rem;
	display: flex;
	gap: 0.5rem;
`

const NavButton = styled.button`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background: white;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		background: #f5f5f5;
	}

	&:focus {
		outline: none;
	}
`

const TestimonialCard = styled.div`
	font-family: "Satoshi", "Integral CF", sans-serif;
	background: white;
	border-radius: 8px;
	padding: 1.5rem;
	border: 0.0625rem solid #ccc;
	height: 100%;
	display: flex;
	flex-direction: column;
`

const Stars = styled.div`
	display: flex;
	margin-bottom: 1rem;
	color: #ffb800;
`

const CustomerInfo = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 0.75rem;
`

const CustomerName = styled.h3`
	font-size: clamp(1rem, 0.462vw + 0.88rem, 1.25rem);
	line-height: clamp(1.5rem, 0.231vw + 1.44rem, 1.625rem);
	font-weight: 600;
	margin-right: 0.5rem;
`

const VerifiedBadge = styled.span`
	color: #4caf50;
	display: flex;
	align-items: center;
`

const TestimonialText = styled.p`
	font-size: clamp(0.875rem, 0.231vw + 0.815rem, 1rem);
	line-height: clamp(1.3rem, -0.023vw + 1.318rem, 1.313rem);
	color: #666;
	line-height: 1.6;
	flex-grow: 1;
`

const TestimonialCarousel = ({ products }: { products: ProductResponse[] }) => {
	return (
		<Container>
			<Title>OUR HAPPY CUSTOMERS</Title>
			<NavigationButtons>
				<NavButton className="testimonial-prev">
					{/* <ChevronLeft size={20} /> */}
					<ArrowLeft size={20} />
				</NavButton>
				<NavButton className="testimonial-next">
					{/* <ChevronRight size={20} /> */}
					<ArrowRight size={20} />
				</NavButton>
			</NavigationButtons>

			<Swiper
				modules={[Navigation]}
				spaceBetween={20}
				slidesPerView={1}
				navigation={{
					prevEl: ".testimonial-prev",
					nextEl: ".testimonial-next"
				}}
				breakpoints={{
					640: {
						slidesPerView: 1
					},
					768: {
						slidesPerView: 2
					},
					1024: {
						slidesPerView: 2
					}
				}}
			>
				{products.map((product) =>
					product.reviews.map((testimonial, index) => (
						<SwiperSlide key={index}>
							<TestimonialCard>
								<Stars>
									{[...Array(testimonial.rating)].map((_, i) => (
										<span key={i}>★</span>
									))}
								</Stars>
								<CustomerInfo>
									<CustomerName>
										{testimonial.reviewerName}
									</CustomerName>
									{testimonial.verified && (
										<VerifiedBadge>
											<CheckCircle size={16} />
										</VerifiedBadge>
									)}
								</CustomerInfo>
								<TestimonialText>{testimonial.comment}</TestimonialText>
							</TestimonialCard>
						</SwiperSlide>
					))
				)}
			</Swiper>
		</Container>
	)
}

export default TestimonialCarousel
