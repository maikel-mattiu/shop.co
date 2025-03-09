"use client"

import type React from "react"
import { useState } from "react"
import styled from "styled-components"
import Link from "next/link"
import { Minus, Plus, X } from "lucide-react"
import Breadcrumb from "~/components/breadcrumb"
import { type CartItem, useCart } from "~/context/cart-context"
import CheckoutSuccessModal from "~/components/checkout-success-modal"

const Container = styled.div`
	max-width: 1400px;
	margin: 0 auto;
	padding: 2rem 1rem;
`

const Title = styled.h1`
	font-size: 2.5rem;
	font-weight: 800;
	margin-bottom: 2rem;
`

const CartLayout = styled.div`
	font-family: var(--font-satoshi);
	display: grid;
	grid-template-columns: 1fr 400px;
	gap: 2rem;

	@media (max-width: 1024px) {
		grid-template-columns: 1fr;
	}
`

const CartItems = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`

const CartItem = styled.div`
	display: grid;
	grid-template-columns: auto 1fr auto;
	gap: 1.5rem;
	align-items: center;
	padding: 1.5rem;
	background: white;
	border-radius: 8px;
	border: 1px solid #f0f0f0;

	@media (max-width: 768px) {
		grid-template-columns: auto 1fr;
		gap: 1rem;
	}
`

const ProductImage = styled.img`
	width: 100px;
	height: 100px;
	object-fit: cover;
	border-radius: 4px;
`

const ProductInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`

const ProductName = styled.h3`
	font-weight: 600;
	font-size: 1.125rem;
`

const Price = styled.span`
	font-weight: 600;
	font-size: 1.125rem;
`

const Controls = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	@media (max-width: 768px) {
		grid-column: 1 / -1;
		justify-content: space-between;
	}
`

const QuantityControls = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 0.5rem;
	border: 1px solid #f0f0f0;
	border-radius: 4px;
`

const ControlButton = styled.button`
	background: none;
	border: none;
	padding: 0;
	cursor: pointer;
	color: #666;

	&:hover {
		color: #000;
	}
`

const Quantity = styled.span`
	min-width: 1.5rem;
	text-align: center;
	font-weight: 500;
`

const RemoveButton = styled.button`
	background: none;
	border: none;
	padding: 0;
	color: #ff0000;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	font-size: 0.875rem;

	&:hover {
		opacity: 0.8;
	}
`

const OrderSummary = styled.div`
	padding: 2rem;
	background: #f9f9f9;
	border-radius: 8px;
	position: sticky;
	top: 2rem;
`

const SummaryTitle = styled.h2`
	font-size: 1.5rem;
	font-weight: 600;
	margin-bottom: 2rem;
`

const SummaryRow = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 1rem;

	&:last-of-type {
		margin-top: 1.5rem;
		padding-top: 1.5rem;
		border-top: 1px solid #e5e5e5;
		font-size: 1.25rem;
		font-weight: 600;
	}
`

const Label = styled.span`
	color: #666;
`

const Value = styled.span<{ $discount?: boolean }>`
	font-weight: 500;
	color: ${(props) => (props.$discount ? "#ff0000" : "inherit")};
`

const CheckoutButton = styled.button`
	width: 100%;
	padding: 1rem;
	background: #000;
	color: white;
	border: none;
	border-radius: 4px;
	font-size: 1rem;
	font-weight: 600;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;

	&:hover {
		opacity: 0.9;
	}
`

const EmptyCart = styled.div`
	text-align: center;
	padding: 3rem;

	p {
		margin-bottom: 1rem;
		color: #666;
	}

	a {
		color: #000;
		text-decoration: underline;
		font-weight: 500;

		&:hover {
			opacity: 0.8;
		}
	}
`

type OrderDetails = {
	orderNumber: string
	items: CartItem[]
	subtotal: number
	discount: number
	deliveryFee: number
	total: number
}

export default function CartPage() {
	const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } =
		useCart()
	const [showSuccessModal, setShowSuccessModal] = useState(false)
	const [orderDetails, setOrderDetails] = useState<OrderDetails>({
		orderNumber: "",
		items: [],
		subtotal: 0,
		discount: 0,
		deliveryFee: 0,
		total: 0
	})

	const { subtotal, discount, deliveryFee, total } = getCartTotal()

	const handleCheckout = () => {
		// Generate a random order number
		const orderNumber = Math.floor(100000000 + Math.random() * 900000000).toString()

		// Save order details for the success modal
		setOrderDetails({
			orderNumber,
			items: [...cartItems], // Create a copy of the cart items
			subtotal,
			discount,
			deliveryFee,
			total
		})

		// Show success modal
		setShowSuccessModal(true)

		// Clear the cart
		clearCart()
	}

	return (
		<>
			<Container>
				<Breadcrumb />
				<Title>YOUR CART</Title>

				<CartLayout>
					<CartItems>
						{cartItems.length === 0 ? (
							<EmptyCart>
								<p>Your cart is empty.</p>
								<Link href="/shop">Continue Shopping</Link>
							</EmptyCart>
						) : (
							cartItems.map((item) => (
								<CartItem key={`${item.id}`}>
									<ProductImage
										src={item.image}
										alt={item.title}
									/>

									<ProductInfo>
										<ProductName>{item.title}</ProductName>
										<Price>${item.price}</Price>
									</ProductInfo>

									<Controls>
										<QuantityControls>
											<ControlButton
												onClick={() =>
													updateQuantity(
														item.id,
														item.quantity - 1
													)
												}
											>
												<Minus size={16} />
											</ControlButton>
											<Quantity>{item.quantity}</Quantity>
											<ControlButton
												onClick={() =>
													updateQuantity(
														item.id,
														item.quantity + 1
													)
												}
											>
												<Plus size={16} />
											</ControlButton>
										</QuantityControls>

										<RemoveButton
											onClick={() => removeFromCart(item.id)}
										>
											<X size={16} />
											Remove
										</RemoveButton>
									</Controls>
								</CartItem>
							))
						)}
					</CartItems>

					<OrderSummary>
						<SummaryTitle>Order Summary</SummaryTitle>

						<SummaryRow>
							<Label>Subtotal</Label>
							<Value>${subtotal}</Value>
						</SummaryRow>

						<SummaryRow>
							<Label>Discount (%)</Label>
							<Value $discount>-${discount}</Value>
						</SummaryRow>

						<SummaryRow>
							<Label>Delivery Fee</Label>
							<Value>${deliveryFee}</Value>
						</SummaryRow>

						<SummaryRow>
							<span>Total</span>
							<span>${total}</span>
						</SummaryRow>

						<CheckoutButton
							onClick={handleCheckout}
							disabled={cartItems.length === 0}
						>
							Go to Checkout
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M3.33337 8H12.6667"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M8.66663 4L12.6666 8L8.66663 12"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</CheckoutButton>
					</OrderSummary>
				</CartLayout>
			</Container>
			{showSuccessModal && (
				<CheckoutSuccessModal
					onClose={() => setShowSuccessModal(false)}
					orderDetails={orderDetails}
				/>
			)}
		</>
	)
}
