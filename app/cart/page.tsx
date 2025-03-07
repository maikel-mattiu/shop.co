"use client"

import type React from "react"
import { useState } from "react"
import styled from "styled-components"
import { Minus, Plus, X } from "lucide-react"

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

const ProductMeta = styled.div`
	color: #666;
	font-size: 0.875rem;

	span {
		&:not(:last-child)::after {
			content: "•";
			margin: 0 0.5rem;
		}
	}
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

const PromoCode = styled.div`
	display: flex;
	gap: 1rem;
	margin: 2rem 0;
`

const PromoInput = styled.input`
	flex: 1;
	padding: 0.75rem 1rem;
	border: 1px solid #e5e5e5;
	border-radius: 4px;
	font-size: 0.875rem;

	&:focus {
		outline: none;
		border-color: #000;
	}
`

const ApplyButton = styled.button`
	padding: 0.75rem 1.5rem;
	background: #000;
	color: white;
	border: none;
	border-radius: 4px;
	font-weight: 500;
	cursor: pointer;

	&:hover {
		opacity: 0.9;
	}
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

// Sample cart data
const initialCartItems = [
	{
		id: "1",
		name: "Gradient Graphic T-shirt",
		price: 145,
		size: "Large",
		color: "White",
		quantity: 1,
		image: "/placeholder.svg?height=100&width=100"
	},
	{
		id: "2",
		name: "Checkered Shirt",
		price: 180,
		size: "Medium",
		color: "Red",
		quantity: 1,
		image: "/placeholder.svg?height=100&width=100"
	},
	{
		id: "3",
		name: "Skinny Fit Jeans",
		price: 240,
		size: "Large",
		color: "Blue",
		quantity: 1,
		image: "/placeholder.svg?height=100&width=100"
	}
]

export default function CartPage() {
	const [cartItems, setCartItems] = useState(initialCartItems)
	const [promoCode, setPromoCode] = useState("")

	const updateQuantity = (id: string, change: number) => {
		setCartItems((items) =>
			items.map((item) =>
				item.id === id
					? { ...item, quantity: Math.max(1, item.quantity + change) }
					: item
			)
		)
	}

	const removeItem = (id: string) => {
		setCartItems((items) => items.filter((item) => item.id !== id))
	}

	const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
	const discount = subtotal * 0.2 // 20% discount
	const deliveryFee = 15
	const total = subtotal - discount + deliveryFee

	return (
		<>
			<Container>
				{/* <Breadcrumb /> */}
				<Title>YOUR CART</Title>

				<CartLayout>
					<CartItems>
						{cartItems.map((item) => (
							<CartItem key={item.id}>
								<ProductImage
									src={item.image}
									alt={item.name}
								/>

								<ProductInfo>
									<ProductName>{item.name}</ProductName>
									<ProductMeta>
										<span>Size: {item.size}</span>
										<span>Color: {item.color}</span>
									</ProductMeta>
									<Price>${item.price}</Price>
								</ProductInfo>

								<Controls>
									<QuantityControls>
										<ControlButton
											onClick={() => updateQuantity(item.id, -1)}
										>
											<Minus size={16} />
										</ControlButton>
										<Quantity>{item.quantity}</Quantity>
										<ControlButton
											onClick={() => updateQuantity(item.id, 1)}
										>
											<Plus size={16} />
										</ControlButton>
									</QuantityControls>

									<RemoveButton onClick={() => removeItem(item.id)}>
										<X size={16} />
										Remove
									</RemoveButton>
								</Controls>
							</CartItem>
						))}
					</CartItems>

					<OrderSummary>
						<SummaryTitle>Order Summary</SummaryTitle>

						<SummaryRow>
							<Label>Subtotal</Label>
							<Value>${subtotal}</Value>
						</SummaryRow>

						<SummaryRow>
							<Label>Discount (-20%)</Label>
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

						<PromoCode>
							<PromoInput
								type="text"
								placeholder="Add promo code"
								value={promoCode}
								onChange={(e) => setPromoCode(e.target.value)}
							/>
							<ApplyButton>Apply</ApplyButton>
						</PromoCode>

						<CheckoutButton>
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
		</>
	)
}
