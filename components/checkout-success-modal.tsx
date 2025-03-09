"use client"
import styled, { keyframes } from "styled-components"
import { X, CheckCircle, ShoppingBag } from "lucide-react"
import Link from "next/link"
import type { CartItem } from "../context/cart-context"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const slideIn = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  animation: ${fadeIn} 0.3s ease;
`
const ModalContainerWrappper = styled.div`
	padding: 2rem;
	border-radius: 12px;
	background: white;
	box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
	animation: ${slideIn} 0.4s ease;
`
const ModalContainer = styled.div`
	width: 100%;
	max-width: 600px;
	max-height: 90vh;
	overflow-y: auto;
`

const ModalHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem;
	border-bottom: 1px solid #f0f0f0;
`

const CloseButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	color: #666;

	&:hover {
		color: #000;
	}
`

const ModalBody = styled.div`
	font-family: var(--font-satoshi);
	padding: 2rem 1.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`

const SuccessIcon = styled.div`
	color: #4caf50;
	margin-bottom: 1.5rem;
`

const Title = styled.h2`
	font-family: var(--font-integral-cf);
	font-size: 1.5rem;
	font-weight: 700;
	margin-bottom: 0.5rem;
`

const Message = styled.p`
  color: #666;
  margin-bottom: 2rem;
`

const OrderDetails = styled.div`
  background: #f9f9f9;
  border-radius: 8px;
  padding: 1.5rem;
  width: 100%;
  margin-bottom: 2rem;
`

const OrderNumber = styled.div`
  margin-bottom: 1rem;
  
  span {
    font-weight: 600;
  }
`

const OrderSummary = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #e5e5e5;
    font-weight: 600;
  }
`

const ItemsList = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`

const ItemRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
`

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 1rem;
`

const ItemInfo = styled.div`
  flex: 1;
  text-align: left;
`

const ItemName = styled.div`
  font-weight: 500;
`

const ItemMeta = styled.div`
  font-size: 0.75rem;
  color: #666;
`

const ItemPrice = styled.div`
  font-weight: 600;
`

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  
  @media (max-width: 480px) {
    width: 100%;
  }
`

const PrimaryButton = styled(Button)`
  background: #000;
  color: white;
  border: none;
  
  &:hover {
    opacity: 0.9;
  }
`

const SecondaryButton = styled(Button)`
  background: white;
  color: #000;
  border: 1px solid #000;
  
  &:hover {
    background: #f5f5f5;
  }
`

interface CheckoutSuccessModalProps {
  onClose: () => void
  orderDetails: {
    orderNumber: string
    items: CartItem[]
    subtotal: number
    discount: number
    deliveryFee: number
    total: number
  }
}

export default function CheckoutSuccessModal({ onClose, orderDetails }: CheckoutSuccessModalProps) {
  // Generate a random delivery date (5-7 days from now)
  const deliveryDate = new Date()
  deliveryDate.setDate(deliveryDate.getDate() + Math.floor(Math.random() * 3) + 5)
  const formattedDeliveryDate = deliveryDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })

  return (
		<Overlay onClick={(e) => e.target === e.currentTarget && onClose()}>
			<ModalContainerWrappper>
					<ModalHeader>
						<div></div> {/* Empty div for spacing */}
						<CloseButton onClick={onClose}>
							<X size={24} />
						</CloseButton>
					</ModalHeader>
				<ModalContainer>

					<ModalBody>
						<SuccessIcon>
							<CheckCircle size={64} />
						</SuccessIcon>

						<Title>Order Successful!</Title>
						<Message>
							Thank you for your purchase. Your order has been received and
							is being processed.
						</Message>

						<OrderDetails>
							<OrderNumber>
								Order Number: <span>#{orderDetails.orderNumber}</span>
							</OrderNumber>

							<OrderSummary>
								<span>Estimated Delivery</span>
								<span>{formattedDeliveryDate}</span>
							</OrderSummary>

							<OrderSummary>
								<span>Subtotal</span>
								<span>${orderDetails.subtotal.toFixed(2)}</span>
							</OrderSummary>

							<OrderSummary>
								<span>Discount</span>
								<span>-${orderDetails.discount.toFixed(2)}</span>
							</OrderSummary>

							<OrderSummary>
								<span>Delivery Fee</span>
								<span>${orderDetails.deliveryFee.toFixed(2)}</span>
							</OrderSummary>

							<OrderSummary>
								<span>Total</span>
								<span>${orderDetails.total.toFixed(2)}</span>
							</OrderSummary>
						</OrderDetails>

						<ItemsList>
							<h3 style={{ marginBottom: "1rem", textAlign: "left" }}>
								Items Purchased
							</h3>

							{orderDetails.items.map((item, index) => (
								<ItemRow key={index}>
									<ItemImage
										src={item.image}
										alt={item.title}
									/>
									<ItemInfo>
										<ItemName>{item.title}</ItemName>
									</ItemInfo>
									<ItemPrice>
										${(item.price * item.quantity).toFixed(2)}
									</ItemPrice>
								</ItemRow>
							))}
						</ItemsList>

						<ButtonsContainer>
							<SecondaryButton
								as={Link}
								href="/shop"
							>
								<ShoppingBag
									size={16}
									style={{ marginRight: "0.5rem" }}
								/>
								Continue Shopping
							</SecondaryButton>

							<PrimaryButton
								as={Link}
								href="/account/orders"
							>
								View Order Details
							</PrimaryButton>
						</ButtonsContainer>
					</ModalBody>
				</ModalContainer>
			</ModalContainerWrappper>
		</Overlay>
  )
}

