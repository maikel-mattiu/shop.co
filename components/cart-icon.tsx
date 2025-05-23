"use client"
import Link from "next/link"
import styled from "styled-components"
import { ShoppingCart } from "lucide-react"
import { useCart } from "../context/cart-context"

const CartIconWrapper = styled(Link)`
	font-family: var(--font-satoshi);
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #000;
	text-decoration: none;
	gap: 0.5rem;
`

const Text = styled.span`
	display: none;

	@media (min-width: 768px) {
		display: inline;
	}
`

const CartCount = styled.span`
	position: absolute;
	top: -8px;
	right: -8px;
	background: #000;
	color: #fff;
	font-size: 0.75rem;
	font-weight: 600;
	width: 18px;
	height: 18px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
`

export default function CartIcon() {
	const { itemCount } = useCart()

	return (
		<CartIconWrapper href="/cart">
			<Text>Cart</Text>
			<ShoppingCart size={24} />
			{itemCount > 0 && <CartCount>{itemCount}</CartCount>}
		</CartIconWrapper>
	)
}

