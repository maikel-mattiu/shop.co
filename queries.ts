"use client"

import { cache } from "react"
import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const DBQUERIES = {
	getProduct: cache(function (id: string, fallbackData?: object) {
		const { data, error } = useSWR(`https://dummyjson.com/products/${id}`, fetcher, {suspense: true, fallbackData: fallbackData, refreshInterval: 1000}, )
		return {
			product: data,
			isLoading: !error && !data,
			isError: error
		}
	}),
	getCategories: cache(function (fallbackData?: object) {
		const { data, error } = useSWR(
			"https://dummyjson.com/products/categories",
			fetcher, {suspense: true, refreshInterval: 1000, fallbackData: fallbackData}
		)
		return {
			categories: data,
			isLoading: !error && !data,
			isError: error
		}
	}),
	getProducts: cache(function (offset: number, limit: number, fallbackData?: object) {
		const { data, error } = useSWR(
			`https://dummyjson.com/products?offset=${offset}&limit=${limit}`,
			fetcher,
			{ suspense: true, fallbackData: fallbackData, refreshInterval: 1000 }
		)
		return {
			products: data ? data.products : [],
			isLoading: !error && !data,
			isError: error
		}
	}),
	getProductsByCategory: cache(function (category: string, offset: number, limit: number, fallbackData?: object) {
		const { data, error } = useSWR(
			`https://dummyjson.com/products/category/${category}?offset=${offset}&limit=${limit}`,
			fetcher, {suspense: true, refreshInterval: 1000, fallbackData: fallbackData}
		)
		return {
			products: data ? data.products : [],
			isLoading: !error && !data,
			isError: error
		}
	}),
}
