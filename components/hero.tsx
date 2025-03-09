"use client"

import Link from "next/link"
import styled from "styled-components"
import { QUERIES } from "~/constants"

export default function Hero() {
	return (
		<HeroMaxWidthWrapper>
			<HeroTextContent>
				<MainText>FIND CLOTHES THAT MATCHES YOUR STYLE</MainText>
				<SubText>
					Browse through our diverse range of meticulously crafted garments,
					designed to bring out your individuality and cater to your sense of
					style.
				</SubText>
				<Button>
					<Link
						href="/shop"
						prefetch={true}
						style={{ textDecoration: "none", color: "inherit" }}
					>
						SHOP NOW
					</Link>
				</Button>
				<StatsComponent />
			</HeroTextContent>
			<HeroImageContent>
				<HeroImage
					src="/hero-img-2.png"
					alt="hero image"
				/>
				<LgStar
					src="/lg-star.png"
					alt="star"
				/>
				<SmStar
					src="/sm-star.png"
					alt="star"
				/>
			</HeroImageContent>
		</HeroMaxWidthWrapper>
	)
}

const HeroMaxWidthWrapper = styled.div`
	background: #f0f0f0;
	display: flex;
	flex-direction: column;
	padding: 0 1rem;
	overflow: hidden;
	margin-bottom: 0;

	@media ${QUERIES.tabletOnly} {
		padding: 0 2rem;
		display: block;
	}

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: center;
		column-gap: 7.5rem;
		padding: 0 3rem;
	}
`

const HeroTextContent = styled.div`
	flex: 0 1 38.75rem;
	padding-top: 1rem;
	@media (min-width: 768px) {
		flex: 0 1 39.75rem;
		padding-top: 6.25rem;
	}
`

const MainText = styled.h1`
	font-family: "Integral CF", sans-serif;
	font-size: clamp(2.25rem, 2.729vw + 1.544rem, 4rem);
	line-height: clamp(2.7rem, 5.146vw + 1.368rem, 6rem);
	font-weight: bold;
	color: #000;
	display: contents;
`

const SubText = styled.p`
	font-family: "Satoshi", "Integral CF", sans-serif;
	font-size: clamp(0.875rem, 0.195vw + 0.825rem, 1rem);
	line-height: clamp(1.05rem, 0.702vw + 0.868rem, 1.5rem);
	margin: 2rem 0;
`

const HeroImageContent = styled.div`
	flex: 0 1 25rem;
	position: relative;
	top: -160px;
	margin: 0 -6.25rem;
	@media ${QUERIES.tabletOnly} {
		flex: 0 1 30rem;
	}
	@media (min-width: 768px) {
		flex: 0 1 50rem;
		top: 0;
	}
`

const HeroImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`

const LgStar = styled.img`
	position: absolute;
	top: 40px;
	right: 120px;
	width: 76px;
	height: 76px;

	@media ${QUERIES.tabletOnly} {
		top: 100px;
		right: 650px;
		width: 84px;
		height: 84px;
	}
	@media (min-width: 768px) {
		top: 86px;
		right: 81px;
		width: 104px;
		height: 104px;
	}
`
const SmStar = styled.img`
	position: absolute;
	top: 160px;
	left: 100px;
	width: 44px;
	height: 44px;

	@media ${QUERIES.tabletOnly} {
		top: 140px;
		left: 150px;
		width: 54px;
		height: 54px;
	}

	@media (min-width: 768px) {
		right: 750px;
		top: 300px;
		width: 64px;
		height: 64px;
	}
`

const Button = styled.button`
	background-color: #000;
	min-width: 100%;
	color: #fff;
	padding: 1rem 2rem;
	border-radius: 3.875rem;
	border: none;
	@media (min-width: 768px) {
		min-width: 210px;
	}
`

// Stats Component
const StatsContainer = styled.div`
	font-family: "Satoshi", "Integral CF", sans-serif;
	font-weight: 400;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
	& > :nth-child(1) {
		border-right: 1px solid #ccc;
	}
	& > :nth-child(2) {
		padding: 0 8px;
	}
	& > :nth-child(3) {
		margin-top: 1rem;
	}
	margin-top: 20px;

	@media (min-width: 768px) {
		flex-wrap: nowrap;
		& > *:not(:last-child) {
			border-right: 1px solid #ccc;
		}
		& > :nth-child(3) {
			margin-top: 0;
		}
	}
`

const StatCard = styled.div`
	flex: 0 1 50%;
	align-self: center;
	justify-self: center;
	text-align: center;
	@media (min-width: 768px) {
		margin: 0 1rem;
		flex: 1;
		text-align: left;
	}
`

const NumberText = styled.h2`
	font-size: clamp(1.5rem, 1.559vw + 1.096rem, 2.5rem);
	line-height: clamp(1.8rem, 3.041vw + 1.013rem, 3.75rem);
	font-weight: bold;
	margin: 0;
`

const StatsSubText = styled.p`
	font-size: clamp(0.75rem, 0.39vw + 0.649rem, 1rem);
	line-height: clamp(0.9rem, 0.936vw + 0.658rem, 1.5rem);
	color: gray;
	margin: 5px 0 0 0;
`

const StatsComponent = () => {
	return (
		<StatsContainer>
			<StatCard>
				<NumberText>200+</NumberText>
				<StatsSubText>International Brands</StatsSubText>
			</StatCard>
			<StatCard>
				<NumberText>2,000+</NumberText>
				<StatsSubText>High-Quality Products</StatsSubText>
			</StatCard>
			<StatCard>
				<NumberText>30,000+</NumberText>
				<StatsSubText>Happy Customers</StatsSubText>
			</StatCard>
		</StatsContainer>
	)
}
