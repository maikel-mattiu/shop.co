"use client"
import styled, { keyframes } from "styled-components"

const pulse = keyframes`
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.6;
  }
`

const SkeletonBase = styled.div`
  background-color: #e5e5e5;
  border-radius: 4px;
  animation: ${pulse} 1.5s ease-in-out infinite;
`

interface SkeletonProps {
  className?: string
  width?: string | number
  height?: string | number
}

export default function Skeleton({ className, width, height }: SkeletonProps) {
  return (
    <SkeletonBase
      className={className}
      style={{
        width: width ? (typeof width === "number" ? `${width}px` : width) : "100%",
        height: height ? (typeof height === "number" ? `${height}px` : height) : "20px",
      }}
    />
  )
}

