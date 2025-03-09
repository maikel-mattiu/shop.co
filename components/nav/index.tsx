"use client"

import { useState, useEffect } from "react"
import styled from "styled-components"
import Link from "next/link"
import { Search, User, ChevronDown, X, Menu, Store, Shirt } from "lucide-react"
import SearchModal from "./search-modal"
import CartIcon from "../cart-icon"
import { Product } from "~/types"
import { DBQUERIES } from "~/queries"

const Header = styled.header`
	position: sticky;
	top: 0;
	background: white;
	z-index: 50;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`

const Nav = styled.nav`
	max-width: 1400px;
	margin: 0 auto;
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
`

const Logo = styled(Link)`
	font-size: 1.5rem;
	font-weight: 900;
	text-decoration: none;
	color: inherit;
	flex-shrink: 0;
`

const SearchContainer = styled.div`
	display: none;

	@media (min-width: 769px) {
		display: block;
		flex: 2.5;
		/* max-width: 900px; */
		margin: 0 1rem;
	}
`

const IconWrapper = styled.div`
	display: revert;
	@media (min-width: 767px) {
		display: none;
	}
`

const SearchWrapper = styled.div`
	position: relative;
`

const SearchInput = styled.input`
	font-family: var(--font-satoshi);
	width: 100%;
	padding: 0.75rem 1rem 0.75rem 2.5rem;
	border: none;
	border-radius: 100px;
	background: #f5f5f5;
	font-size: 0.875rem;

	&:focus {
		outline: none;
		background: #eeeeee;
	}
`

const SearchIcon = styled.div`
	position: absolute;
	left: 1rem;
	top: 50%;
	transform: translateY(-50%);
	color: #666;
`

const SearchResults = styled.div`
	font-family: var(--font-satoshi);
	position: absolute;
	top: calc(100% + 0.5rem);
	left: 0;
	right: 0;
	background: white;
	border-radius: 8px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	max-height: 400px;
	overflow-y: auto;
	z-index: 100;
`

const ResultItem = styled(Link)`
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 0.75rem 1rem;
	text-decoration: none;
	color: inherit;

	&:hover {
		background: #f5f5f5;
	}
`

const ResultImage = styled.img`
	width: 40px;
	height: 40px;
	object-fit: cover;
	border-radius: 4px;
`

const ResultInfo = styled.div`
	flex: 1;
`

const ResultName = styled.div`
	font-weight: 500;
`

const ResultPrice = styled.div`
	color: #666;
	font-size: 0.875rem;
`

const Actions = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;

	@media (min-width: 768px) {
		flex: 1;
	}
`

const MobileSearch = styled.button`
	background: none;
	border: none;
	padding: 0.5rem;
	cursor: pointer;
	color: #000;

	@media (min-width: 769px) {
		display: none;
	}
`

const IconButton = styled.button`
	background: none;
	border: none;
	padding: 0.5rem;
	cursor: pointer;
	color: #000;

	&:hover {
		opacity: 0.7;
	}
`
const MobileNav = styled.div<{ $isOpen: boolean }>`
	display: ${(props) => (props.$isOpen ? "block" : "none")};
	@media (min-width: 768px) {
		display: none;
	}
`

const MobileNavContent = styled.div`
	padding: 0.5rem;
	> * + * {
		margin-top: 0.25rem;
	}
`

const MobileNavLink = styled(Link)`
	display: block;
	font-family: "Satoshi", "Integral CF", sans-serif;
	font-size: clamp(1rem, 0.195vw + 0.95rem, 1.125rem);
	line-height: clamp(1.463rem, -0.058vw + 1.515rem, 1.5rem);
	padding: 0.75rem;
	border-radius: 0.375rem;
	color: black;
	text-decoration: none;
	&:hover {
		background: #f3f4f6;
	}
`

const DesktopNav = styled.div`
	display: none;
	@media (min-width: 768px) {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		flex: 1.5;
	}
`

const NavLink = styled(Link)`
	display: flex;
	/* flex-direction: column; */
	align-items: center;
	justify-content: center;
	column-gap: 0.5rem;
	font-family: "Satoshi", "Integral CF", sans-serif;
	font-size: clamp(1rem, 0.195vw + 0.95rem, 1.125rem);
	line-height: clamp(1.463rem, -0.058vw + 1.515rem, 1.5rem);
	color: black;
	text-decoration: none;
	&:hover {
		color: #666;
	}
`

export default function Navbar({ allProducts }: { allProducts: Product[] }) {
	const [showSearch, setShowSearch] = useState(false)
	const [searchQuery, setSearchQuery] = useState("")
	const [searchResults, setSearchResults] = useState<Product[]>([])
	const [showMobileSearch, setShowMobileSearch] = useState(false)
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	const products = DBQUERIES.getProducts(0, 0, allProducts).products

	// Simulated search function
	const handleSearch = (query: string) => {
		setSearchQuery(query)

		if (query.trim() === "") {
			setSearchResults([])
			return
		}

		// Filter mock products based on search query
		const results = products.filter((product: Product) =>
			product.title.toLowerCase().includes(query.toLowerCase())
		)

		setSearchResults(results)
	}

	// Close search results when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement
			if (!target.closest("[data-search-container]")) {
				setShowSearch(false)
			}
		}

		document.addEventListener("click", handleClickOutside)
		return () => document.removeEventListener("click", handleClickOutside)
	}, [])

	// Prevent body scroll when mobile menu is open
	useEffect(() => {
		if (mobileMenuOpen) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = ""
		}

		return () => {
			document.body.style.overflow = ""
		}
	}, [mobileMenuOpen])

	return (
		<>
			<Header>
				<Nav>
					<div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
						{mobileMenuOpen ? (
							<IconWrapper>
								<X
									style={{ marginTop: "0.5rem" }}
									size={24}
									onClick={() => setMobileMenuOpen(false)}
								/>
							</IconWrapper>
						) : (
							<IconWrapper>
								<Menu
									style={{ marginTop: "0.5rem" }}
									size={24}
									onClick={() => setMobileMenuOpen(true)}
								/>
							</IconWrapper>
						)}

						<Logo href="/">SHOP.CO</Logo>
					</div>

					<DesktopNav>
						<NavLink href="/shop">
							<Store /> Shop
						</NavLink>

						<NavLink href="/brands">
							<Shirt />
							Brands
						</NavLink>
					</DesktopNav>

					<SearchContainer data-search-container>
						<SearchWrapper>
							<SearchInput
								type="text"
								placeholder="Search for products..."
								value={searchQuery}
								onChange={(e) => handleSearch(e.target.value)}
								onFocus={() => setShowSearch(true)}
							/>
							<SearchIcon>
								<Search size={16} />
							</SearchIcon>

							{showSearch && searchResults.length > 0 && (
								<SearchResults>
									{searchResults.map((product) => (
										<ResultItem
											key={product.id}
											href={`/shop/${product.category}/${product.id}`}
										>
											<ResultImage
												src={product.images[0]}
												alt={product.title}
											/>
											<ResultInfo>
												<ResultName>{product.title}</ResultName>
												<ResultPrice>
													${product.price}
												</ResultPrice>
											</ResultInfo>
										</ResultItem>
									))}
								</SearchResults>
							)}
						</SearchWrapper>
					</SearchContainer>

					<Actions>
						<MobileSearch onClick={() => setShowMobileSearch(true)}>
							<Search size={24} />
						</MobileSearch>

						<CartIcon />
					</Actions>
				</Nav>

				<MobileNav $isOpen={mobileMenuOpen}>
					<MobileNavContent>
						<MobileNavLink href="/shop">Shop</MobileNavLink>
						<MobileNavLink href="/brands">Brands</MobileNavLink>
					</MobileNavContent>
				</MobileNav>
			</Header>

			<SearchModal
				isOpen={showMobileSearch}
				onClose={() => setShowMobileSearch(false)}
				products={products}
			/>
		</>
	)
}
