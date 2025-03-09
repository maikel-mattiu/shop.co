"use client"

import { useState } from "react"
import styled from "styled-components"
import Link from "next/link"
import { X } from "lucide-react"

const Banner = styled.div`
  background: #000;
  color: white;
  padding: 0.75rem;
  text-align: center;
  position: relative;
`

const BannerContent = styled.p`
  margin: 0;
  font-size: 0.875rem;
  
  a {
    color: inherit;
    text-decoration: underline;
    font-weight: 500;
    
    &:hover {
      opacity: 0.8;
    }
  }
`

const CloseButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.25rem;
  
  &:hover {
    opacity: 0.8;
  }
`

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <Banner>
      <BannerContent>
        Sign up and get 20% off to your first order. <Link href="/sign-up">Sign Up Now</Link>
      </BannerContent>
      <CloseButton onClick={() => setIsVisible(false)} aria-label="Close banner">
        <X size={16} />
      </CloseButton>
    </Banner>
  )
}

