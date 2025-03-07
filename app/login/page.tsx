"use client"

import type React from "react"
import { useState } from "react"
import styled from "styled-components"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
import Breadcrumb from "../../components/breadcrumb"

const Container = styled.div`
	max-width: 500px;
	margin: 0 auto;
	padding: 2rem 1rem;
`

const Title = styled.h1`
	font-size: 2rem;
	font-weight: 700;
	margin-bottom: 0.5rem;
	text-align: center;
`

const Subtitle = styled.p`
	color: #666;
	text-align: center;
	margin-bottom: 2rem;
`

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`

const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`

const Label = styled.label`
	font-weight: 500;
`

const Input = styled.input`
	padding: 0.75rem 1rem;
	border: 1px solid #e5e5e5;
	border-radius: 4px;
	font-size: 1rem;

	&:focus {
		outline: none;
		border-color: #000;
	}
`

const PasswordWrapper = styled.div`
	position: relative;
`

const PasswordToggle = styled.button`
	position: absolute;
	right: 1rem;
	top: 50%;
	transform: translateY(-50%);
	background: none;
	border: none;
	color: #666;
	cursor: pointer;

	&:hover {
		color: #000;
	}
`

const RememberForgot = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const CheckboxWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`

const Checkbox = styled.input`
	width: 18px;
	height: 18px;
	cursor: pointer;
`

const ForgotPassword = styled(Link)`
	color: #000;
	text-decoration: none;
	font-weight: 500;

	&:hover {
		text-decoration: underline;
	}
`

const SubmitButton = styled.button`
	width: 100%;
	padding: 1rem;
	background: #000;
	color: #fff;
	border: none;
	border-radius: 4px;
	font-weight: 600;
	cursor: pointer;
	transition: opacity 0.2s;

	&:hover {
		opacity: 0.9;
	}
`

const Divider = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	margin: 1.5rem 0;

	&::before,
	&::after {
		content: "";
		flex: 1;
		height: 1px;
		background: #e5e5e5;
	}
`

const SocialButton = styled.button`
	width: 100%;
	padding: 1rem;
	background: #fff;
	color: #000;
	border: 1px solid #e5e5e5;
	border-radius: 4px;
	font-weight: 600;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	transition: background 0.2s;

	&:hover {
		background: #f5f5f5;
	}
`

const SignUpLink = styled.div`
	text-align: center;
	margin-top: 2rem;

	a {
		color: #000;
		font-weight: 600;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`

export default function LoginPage() {
	const [showPassword, setShowPassword] = useState(false)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [rememberMe, setRememberMe] = useState(false)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Handle login logic here
		console.log({ email, password, rememberMe })
	}

	return (
		<Container>
			<Breadcrumb />
			<Title>Welcome Back</Title>
			<Subtitle>Sign in to your account to continue</Subtitle>

			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<Label htmlFor="email">Email</Label>
					<Input
						type="email"
						id="email"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</FormGroup>

				<FormGroup>
					<Label htmlFor="password">Password</Label>
					<PasswordWrapper>
						<Input
							type={showPassword ? "text" : "password"}
							id="password"
							placeholder="Enter your password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						<PasswordToggle
							type="button"
							onClick={() => setShowPassword(!showPassword)}
							aria-label={showPassword ? "Hide password" : "Show password"}
						>
							{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
						</PasswordToggle>
					</PasswordWrapper>
				</FormGroup>

				<RememberForgot>
					<CheckboxWrapper>
						<Checkbox
							type="checkbox"
							id="remember"
							checked={rememberMe}
							onChange={(e) => setRememberMe(e.target.checked)}
						/>
						<Label htmlFor="remember">Remember me</Label>
					</CheckboxWrapper>

					<ForgotPassword href="/forgot-password">
						Forgot Password?
					</ForgotPassword>
				</RememberForgot>

				<SubmitButton type="submit">Sign In</SubmitButton>
			</Form>

			<Divider>or</Divider>

			<SocialButton type="button">
				<img
					src="/placeholder.svg?height=20&width=20"
					alt="Google"
				/>
				Sign in with Google
			</SocialButton>

			<SignUpLink>
				Don't have an account? <Link href="/signup">Sign Up</Link>
			</SignUpLink>
		</Container>
	)
}
