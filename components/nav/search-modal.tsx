"use client"

import { useState, useEffect, useRef } from "react"
import styled, { keyframes } from "styled-components"
import Link from "next/link"
import { Search, X } from "lucide-react"
import { Product } from "~/types"

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Overlay = styled.div<{ $isOpen: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 100;
	display: ${(props) => (props.$isOpen ? "block" : "none")};
	animation: ${fadeIn} 0.3s ease;
`

const Modal = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background: white;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	z-index: 101;
	animation: ${slideUp} 0.3s ease;
	max-height: 90vh;
	display: flex;
	flex-direction: column;
`

const Header = styled.div`
	padding: 1rem;
	display: flex;
	align-items: center;
	gap: 1rem;
	border-bottom: 1px solid #f0f0f0;
`

const SearchInput = styled.input`
	flex: 1;
	padding: 0.75rem;
	border: none;
	background: #f5f5f5;
	border-radius: 8px;
	font-size: 1rem;

	&:focus {
		outline: none;
		background: #eeeeee;
	}
`

const CloseButton = styled.button`
	background: none;
	border: none;
	padding: 0.5rem;
	cursor: pointer;
	color: #666;

	&:hover {
		color: #000;
	}
`

const Results = styled.div`
	flex: 1;
	overflow-y: auto;
	padding: 0.5rem;
	-webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
`

const NoResults = styled.div`
	text-align: center;
	padding: 2rem;
	color: #666;
`

const ResultItem = styled(Link)`
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 1rem;
	text-decoration: none;
	color: inherit;
	border-radius: 8px;
	margin-bottom: 0.5rem;

	&:hover {
		background: #f5f5f5;
	}

	&:active {
		background: #f0f0f0;
	}
`

const ResultImage = styled.img`
	width: 60px;
	height: 60px;
	object-fit: cover;
	border-radius: 4px;
`

const ResultInfo = styled.div`
	flex: 1;
`

const ResultName = styled.div`
	font-weight: 500;
	margin-bottom: 0.25rem;
`

const ResultPrice = styled.div`
	color: #666;
`

interface SearchModalProps {
	isOpen: boolean
	onClose: () => void
	products: Product[]
}

export default function SearchModal({ isOpen, onClose, products }: SearchModalProps) {
	const [searchQuery, setSearchQuery] = useState("")
	const [searchResults, setSearchResults] = useState(products)
	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (isOpen && inputRef.current) {
			inputRef.current.focus()
		}
	}, [isOpen])

	const handleSearch = (query: string) => {
		setSearchQuery(query)

		if (query.trim() === "") {
			setSearchResults(products)
			return
		}

		const results = products.filter((product) =>
			product.title.toLowerCase().includes(query.toLowerCase())
		)

		setSearchResults(results)
	}

	if (!isOpen) return null

	return (
		<>
			<Overlay
				$isOpen={isOpen}
				onClick={onClose}
			/>
			<Modal>
				<Header>
					<Search
						size={20}
						color="#666"
					/>
					<SearchInput
						ref={inputRef}
						type="text"
						placeholder="Search for products..."
						value={searchQuery}
						onChange={(e) => handleSearch(e.target.value)}
					/>
					<CloseButton onClick={onClose}>
						<X size={24} />
					</CloseButton>
				</Header>

				<Results>
					{searchResults.length === 0 ? (
						<NoResults>No products found for "{searchQuery}"</NoResults>
					) : (
						searchResults.map((product : Product) => (
							<ResultItem
								key={product.id}
								href={`/shop/${product.category}/${product.id}`}
								onClick={onClose}
							>
								<ResultImage
									src={product.images[0]}
									alt={product.title}
								/>
								<ResultInfo>
									<ResultName>{product.title}</ResultName>
									<ResultPrice>${product.price}</ResultPrice>
								</ResultInfo>
							</ResultItem>
						))
					)}
				</Results>
			</Modal>
		</>
	)
}
