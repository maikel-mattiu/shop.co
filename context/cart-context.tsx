"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

// Define cart item type
export interface CartItem {
  id: number
  title: string
  price: number
  discount: number
  quantity: number
  image: string
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (item: CartItem) => void
  updateQuantity: (id: number, quantity: number) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
  getCartTotal: () => {
    subtotal: number
    discounts: number
    discount: number
    deliveryFee: number
    total: number
  }
  itemCount: number
}

// Create context with default values
const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  updateQuantity: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  getCartTotal: () => ({ subtotal: 0, discount: 0, deliveryFee: 0, total: 0, discounts: 0 }),
  itemCount: 0,
})

export const useCart = () => useContext(CartContext)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [itemCount, setItemCount] = useState(0)
  const [isInitialized, setIsInitialized] = useState(false)

  // Load cart from localStorage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart)
        setCartItems(parsedCart)
        setItemCount(parsedCart.reduce((count: number, item: CartItem) => count + item.quantity, 0))
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error)
        localStorage.removeItem("cart")
      }
    }
    setIsInitialized(true)
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("cart", JSON.stringify(cartItems))
      setItemCount(cartItems.reduce((count, item) => count + item.quantity, 0))
    }
  }, [cartItems, isInitialized])

  // Add item to cart
  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.id === item.id 
      )

      if (existingItemIndex !== -1) {
        // Item already exists, update quantity
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex].quantity += item.quantity
        return updatedItems
      } else {
        // Add new item
        return [...prevItems, item]
      }
    })
  }

  // Update item quantity
  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item)),
    )
  }

  // Remove item from cart
  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  // Clear entire cart
  const clearCart = () => {
    setCartItems([])
  }

  // Calculate cart totals
  const getCartTotal = () => {
    const subtotal = Math.ceil(cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0))
    // get the total discount of the cart items
    const discounts = cartItems.reduce((sum, item) => sum + item.discount, 0) / 100
    const discount = Math.ceil(subtotal * discounts)
    const deliveryFee = subtotal > 0 ? 15 : 0
    const total = Math.ceil(subtotal - discount + deliveryFee)

    return {
      subtotal,
      discounts,
      discount,
      deliveryFee,
      total,
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        getCartTotal,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

