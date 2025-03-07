"use client"

import styled from "styled-components"
import { QUERIES } from "~/constants"

export const BrandStripe = () => {
	return (
		<BrandStripeWrapper>
			<BrandImageWrapper>
				<BrandImage
					src="/versace.png"
					alt="Versace"
				/>
			</BrandImageWrapper>
			<BrandImageWrapper>
				<BrandImage
					src="/zara.png"
					alt="Zara"
				/>
			</BrandImageWrapper>
			<BrandImageWrapper>
				<BrandImage
					src="/gucci.png"
					alt="Gucci"
				/>
			</BrandImageWrapper>
			<BrandImageWrapper>
				<BrandImage
					src="/prada.png"
					alt="Prada"
				/>
			</BrandImageWrapper>
			<BrandImageWrapper>
				<BrandImage
					src="/calvin-klein.png"
					alt="Calvin Klein"
				/>
			</BrandImageWrapper>
		</BrandStripeWrapper>
	)
}



const BrandStripeWrapper = styled.div`
	background-color: #000;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-basis: 90rem;
	flex-wrap: wrap;
	padding: 2.75rem 0;
	margin-top: -160px;
	gap: 23px 34px;

	@media ${QUERIES.tabletOnly} {
		margin-top: -2px;
	}

	@media ${QUERIES.laptopAndUp} {
		column-gap: 6.625rem;
		margin-top: 0;
	}
`

const BrandImageWrapper = styled.div`
	height: 23px;
	@media ${QUERIES.tabletAndUp} {
		height: 33px;
	}
`

const BrandImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`
