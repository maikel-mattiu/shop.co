"use client"
import styled from "styled-components"
import { Mail, Twitter, Facebook, Instagram, Github } from "lucide-react"
import { QUERIES } from "~/constants"


const FooterMaxWidthWrapper = styled.div`
	width: 100%;
	background: #F0F0F0;
`

const NewsletterSection = styled.div`
	position: absolute;
	min-width: 22.375rem;
	min-height: 18.3125rem;
	margin: 0 1rem;
	top: -12.525rem;
	left: 0;
	right: 0;
	background: black;
	padding: 2rem 1.5rem;
	border-radius: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 32px;
	/* margin-bottom: 4rem; */
	flex-direction: column;
	text-align: justify;

	@media ${QUERIES.tabletOnly} {
		top: -10rem;
		min-height: 0;
		flex-direction: row;
		padding: 2.6875rem 64px;
		text-align: left;
		margin-bottom: 2rem;
	}

	@media ${QUERIES.laptopAndUp} {
		top: -6.25rem;
		min-height: 0;
		flex-direction: row;
		padding: 2.6875rem 4rem;
		text-align: left;
		/* margin-bottom: 2rem; */
	}
`

const NewsLetterTitleWrapper = styled.div`
  flex: 2;
`

const NewsletterTitle = styled.h2`
	font-size: clamp(2rem, 0.924vw + 1.761rem, 2.5rem);
	color: white;
	font-weight: 900;
`

const NewsletterForm = styled.form`
	font-family: "Satoshi", "Integral CF", sans-serif;
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 16px;
	min-width: 21.375rem;
`

const EmailInput = styled.div`
	position: relative;

	input {
		width: 100%;
		padding: 16px 16px 16px 48px;
		border-radius: 6.25rem;
		border: none;
		outline: none;
		font-size: 16px;
	}

	svg {
		position: absolute;
		left: 16px;
		top: 50%;
		transform: translateY(-50%);
		color: #666;
	}
`

const SubscribeButton = styled.button`
	background: white;
	color: black;
	padding: 16px;
	border-radius: 6.25rem;
	border: none;
	font-weight: 600;
	cursor: pointer;
	transition: opacity 0.2s;

	&:hover {
		opacity: 0.9;
	}
`

const FooterContainer = styled.footer`
	background: #f0f0f0;
	position: relative;
	max-width: 75rem;
	margin: 0 auto;
	padding: 4rem;

`

const FooterGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr; /* Base style for smallest screens */
	gap: 32px;
	margin-bottom: 48px;

	@media (min-width: 31rem) {
		grid-template-columns: repeat(2, 1fr); /* Style for screens larger than 30rem */
	}

	@media (min-width: 49rem) {
		grid-template-columns: repeat(3, 1fr); /* Style for screens larger than 48rem */
	}

	@media (min-width: 65rem) {
		grid-template-columns: 2fr repeat(4, 1fr); /* Style for screens larger than 64rem */
	}
`;

const BrandSection = styled.div`
	grid-column: 1 / -1; /* Base style for smallest screens */

	@media (min-width: 65rem) {
		grid-column: auto; /* Reset to default or specific style for larger screens if needed */
	}
`;


const Logo = styled.h1`
	font-size: 24px;
	font-weight: 900;
	margin-bottom: 16px;
`

const BrandDescription = styled.p`
	font-family: "Satoshi", "Integral CF", sans-serif;
	color: #666;
	margin-bottom: 24px;
	line-height: 1.6;
`

const SocialIcons = styled.div`
	display: flex;
	gap: 16px;

	a {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		background: #f5f5f5;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #000;
		transition: background 0.2s;

		&:hover {
			background: #e5e5e5;
		}
	}
`

const FooterColumn = styled.div`
    font-family: "Satoshi", "Integral CF", sans-serif;
	h3 {
		font-weight: 600;
		margin-bottom: 24px;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	li {
		margin-bottom: 12px;

		a {
			color: #666;
			text-decoration: none;
			transition: color 0.2s;

			&:hover {
				color: #000;
			}
		}
	}
`

const FooterBottom = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 32px;
	border-top: .0625rem solid #e5e5e5;

	@media (max-width: 48rem) {
		flex-direction: column;
		gap: 16px;
		text-align: center;
	}
`

const Copyright = styled.p`
	font-family: "Satoshi", "Integral CF", sans-serif;
	color: #666;
`

const PaymentMethods = styled.div`
	display: flex;
	gap: 16px;
	align-items: center;

	img {
		height: 1.5rem;
	}
`

export default function Footer() {
	return (
		<>
			<FooterMaxWidthWrapper>
				<FooterContainer>
					<FooterGrid>
						<BrandSection>
							<Logo>SHOP.CO</Logo>
							<BrandDescription>
								We have clothes that suits your style and which you're
								proud to wear. From women to men.
							</BrandDescription>
							<SocialIcons>
								<a
									href="#"
									aria-label="Twitter"
								>
									<Twitter size={20} />
								</a>
								<a
									href="#"
									aria-label="Facebook"
								>
									<Facebook size={20} />
								</a>
								<a
									href="#"
									aria-label="Instagram"
								>
									<Instagram size={20} />
								</a>
								<a
									href="#"
									aria-label="Github"
								>
									<Github size={20} />
								</a>
							</SocialIcons>
						</BrandSection>

						<FooterColumn>
							<h3>COMPANY</h3>
							<ul>
								<li>
									<a href="#">About</a>
								</li>
								<li>
									<a href="#">Features</a>
								</li>
								<li>
									<a href="#">Works</a>
								</li>
								<li>
									<a href="#">Career</a>
								</li>
							</ul>
						</FooterColumn>

						<FooterColumn>
							<h3>HELP</h3>
							<ul>
								<li>
									<a href="#">Customer Support</a>
								</li>
								<li>
									<a href="#">Delivery Details</a>
								</li>
								<li>
									<a href="#">Terms & Conditions</a>
								</li>
								<li>
									<a href="#">Privacy Policy</a>
								</li>
							</ul>
						</FooterColumn>

						<FooterColumn>
							<h3>FAQ</h3>
							<ul>
								<li>
									<a href="#">Account</a>
								</li>
								<li>
									<a href="#">Manage Deliveries</a>
								</li>
								<li>
									<a href="#">Orders</a>
								</li>
								<li>
									<a href="#">Payments</a>
								</li>
							</ul>
						</FooterColumn>

						<FooterColumn>
							<h3>RESOURCES</h3>
							<ul>
								<li>
									<a href="#">Free eBooks</a>
								</li>
								<li>
									<a href="#">Development Tutorial</a>
								</li>
								<li>
									<a href="#">How to - Blog</a>
								</li>
								<li>
									<a href="#">Youtube Playlist</a>
								</li>
							</ul>
						</FooterColumn>
					</FooterGrid>

					<FooterBottom>
						<Copyright>Shop.co © 2000-2023, All Rights Reserved</Copyright>
						<PaymentMethods>
							<img
								src="/visa.webp"
								alt="Visa"
							/>
							<img
								src="/master-card.webp"
								alt="Mastercard"
							/>
							<img
								src="/american-express.webp"
								alt="American Express"
							/>
							<img
								src="/apple-pay.webp"
								alt="Apple Pay"
							/>
							<img
								src="/google-pay.webp"
								alt="Google Pay"
							/>
						</PaymentMethods>
					</FooterBottom>
				</FooterContainer>
			</FooterMaxWidthWrapper>
		</>
	)
}
