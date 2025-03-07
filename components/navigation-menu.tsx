"use client"

import React, { useRef, useState } from "react"
import Link from "next/link"
import {
	Search,
	ShoppingCart,
	Menu,
	X,
	CircleUserRound,
	Store,
	Shirt
} from "lucide-react"
import styled from "styled-components"

import { QUERIES } from "~/constants"

const NavWidthWrapper = styled.nav`
	display: flex;
	justify-content: center;
	flex-direction: column;
	background: white;
	position: sticky;
	top: 0;
	left: 0;
	right: 0;
	z-index: 50;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
	padding: 0 1.5rem;
	@media (min-width: 768px) {
		flex-direction: row;
	}
`

const NavContent = styled.div`
	display: flex;
	padding: 1rem 0;
	align-items: center;
	flex: 1;
	@media (min-width: 768px) {
		justify-content: space-between;
		flex: 0 1 85rem;
		gap: 2.5rem;
		align-items: center;
		height: 4rem;
	}
`
const Logo = styled(Link)`
	display: block;
	font-size: clamp(1.563rem, 0.877vw + 1.336rem, 2.125rem);
	line-height: clamp(2.25rem, 0.546vw + 2.109rem, 2.6rem);
	font-weight: bold;
	text-decoration: none;
	color: black;
	padding-bottom: 6px;
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

const SearchContainer = styled.div`
	display: none;
	@media ${QUERIES.laptopAndUp} {
		display: flex;
		align-items: center;
		max-width: 34rem;
		flex: 3;
	}
`

const SearchWrapper = styled.div`
	position: relative;
	width: 100%;
`

const SearchInput = styled.input`
	width: 100%;
	padding: 0.5rem 1rem;
	border-radius: 9999px;
	background: #f3f4f6;
	border: none;
	padding-left: 48px;
	&:focus {
		outline: none;
	}
`

const SearchIcon = styled(Search)`
	position: absolute;
	left: 0.75rem;
	top: 0.625rem;
	height: 1.25rem;
	width: 1.25rem;
	color: #9ca3af;
`

const IconWrapper = styled.div`
	@media ${QUERIES.laptopAndUp} {
		display: none;
	}
`

const RightIcons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	flex: 0.5;
`

const LinkWrapper = styled(Link)`
	text-decoration: none;
	color: #000;
`

const MenuButton = styled.button`
	display: block;
	border: none;
	background-color: transparent;
	@media (min-width: 768px) {
		display: none;
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

const MobileSearchModal = styled.div<{ $isOpen: boolean }>`
	display: ${(props) => (props.$isOpen ? "flex" : "none")};
	justify-content: center;
	z-index: 100;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
`

const ModalSearchWrapper = styled(SearchWrapper)`
	max-width: 23rem;
	position: relative;
	top: 15%;
	@media (min-width: 768px) {
		max-width: 36rem;
	}
`

const CloseIcon = styled(X)`
	position: absolute;
	top: 2rem;
	right: 2rem;
	transform: translateY(150%);
	color: white;
`

const Fill = styled.div<{ $value: number }>`
	flex-basis: ${(props) => props.$value * 100}%;
	min-width: 16px;
	@media (min-width: 768px) {
		display: none;
	}
`

function NavigationMenu() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isSearchOpen, setIsSearchOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const toggleSearch = () => {
		setIsSearchOpen(!isSearchOpen)
	}

	return (
		<>
			<NavWidthWrapper>
				<NavContent>
					<MenuButton
						onClick={toggleMenu}
						aria-label="Toggle menu"
					>
						{isMenuOpen ? <X /> : <Menu />}
					</MenuButton>
					<Fill $value={0.2} />
					<Logo href="/">SHOP.CO</Logo>

					<DesktopNav>
						<NavLink href="/shop">
							<Store /> Shop
						</NavLink>

						<NavLink href="/brands">
							<Shirt />
							Brands
						</NavLink>
					</DesktopNav>

					<SearchContainer>
						<SearchWrapper>
							<SearchInput
								type="text"
								placeholder="Search for products..."
							/>
							<SearchIcon />
						</SearchWrapper>
					</SearchContainer>

					<Fill $value={1} />
					<RightIcons>
						<IconWrapper>
							<Search onClick={toggleSearch} />
						</IconWrapper>
						<LinkWrapper href="/cart">
							<ShoppingCart />
						</LinkWrapper>
						<LinkWrapper href="/profile">
							<CircleUserRound />
						</LinkWrapper>
					</RightIcons>
				</NavContent>

				<MobileNav $isOpen={isMenuOpen}>
					<MobileNavContent>
						<MobileNavLink href="/shop">Shop</MobileNavLink>
						<MobileNavLink href="/brands">Brands</MobileNavLink>
					</MobileNavContent>
				</MobileNav>

				<MobileSearchModal $isOpen={isSearchOpen}>
					<ModalSearchWrapper>
						<SearchInput
							type="text"
							placeholder="Search for products..."
						/>
						<SearchIcon />
					</ModalSearchWrapper>

					<CloseIcon
						color="white"
						onClick={toggleSearch}
					/>
				</MobileSearchModal>
			</NavWidthWrapper>
		</>
	)
}

const MemorizedNavigationMenu = React.memo(NavigationMenu)

export default MemorizedNavigationMenu


