"use client"

import type React from "react"
import { useState } from "react"
import styled from "styled-components"
import Link from "next/link"
import { Eye, EyeOff, Check } from "lucide-react"
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

const FormRow = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;

	@media (max-width: 480px) {
		grid-template-columns: 1fr;
	}
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

const PasswordStrength = styled.div`
	margin-top: 0.5rem;
`

const StrengthBar = styled.div`
	height: 4px;
	background: #e5e5e5;
	border-radius: 2px;
	margin-bottom: 0.5rem;
	overflow: hidden;
`

const StrengthIndicator = styled.div<{ strength: number }>`
	height: 100%;
	width: ${(props) => props.strength * 25}%;
	background: ${(props) => {
		if (props.strength <= 1) return "#FF4D4F"
		if (props.strength === 2) return "#FAAD14"
		if (props.strength === 3) return "#52C41A"
		return "#1890FF"
	}};
	transition: width 0.3s, background 0.3s;
`

const StrengthText = styled.div<{ strength: number }>`
	font-size: 0.75rem;
	color: ${(props) => {
		if (props.strength <= 1) return "#FF4D4F"
		if (props.strength === 2) return "#FAAD14"
		if (props.strength === 3) return "#52C41A"
		return "#1890FF"
	}};
`

const PasswordRequirements = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0.5rem 0 0;
	font-size: 0.75rem;
	color: #666;
`

const Requirement = styled.li<{ met: boolean }>`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	margin-bottom: 0.25rem;
	color: ${(props) => (props.met ? "#52C41A" : "#666")};
`

const CheckboxWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 0.5rem;
	margin-top: 1rem;
`

const Checkbox = styled.input`
	width: 18px;
	height: 18px;
	margin-top: 0.25rem;
	cursor: pointer;
`

const TermsText = styled.label`
	font-size: 0.875rem;
	color: #666;

	a {
		color: #000;
		text-decoration: none;
		font-weight: 500;

		&:hover {
			text-decoration: underline;
		}
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

	&:disabled {
		background: #ccc;
		cursor: not-allowed;
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

const SignInLink = styled.div`
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

export default function SignupPage() {
	const [showPassword, setShowPassword] = useState(false)
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [agreeTerms, setAgreeTerms] = useState(false)

	// Password strength calculation
	const calculatePasswordStrength = (password: string) => {
		let strength = 0

		if (password.length >= 8) strength += 1
		if (/[A-Z]/.test(password)) strength += 1
		if (/[0-9]/.test(password)) strength += 1
		if (/[^A-Za-z0-9]/.test(password)) strength += 1

		return strength
	}

	const passwordStrength = calculatePasswordStrength(password)

	const getStrengthText = (strength: number) => {
		if (strength === 0) return "Weak"
		if (strength === 1) return "Weak"
		if (strength === 2) return "Medium"
		if (strength === 3) return "Strong"
		return "Very Strong"
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Handle signup logic here
		console.log({ firstName, lastName, email, password, agreeTerms })
	}

	return (
		<Container>
			<Breadcrumb />
			<Title>Create an Account</Title>
			<Subtitle>Join us to start shopping</Subtitle>

			<Form onSubmit={handleSubmit}>
				<FormRow>
					<FormGroup>
						<Label htmlFor="firstName">First Name</Label>
						<Input
							type="text"
							id="firstName"
							placeholder="Enter your first name"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							required
						/>
					</FormGroup>

					<FormGroup>
						<Label htmlFor="lastName">Last Name</Label>
						<Input
							type="text"
							id="lastName"
							placeholder="Enter your last name"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							required
						/>
					</FormGroup>
				</FormRow>

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
							placeholder="Create a password"
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

					<PasswordStrength>
						<StrengthBar>
							<StrengthIndicator strength={passwordStrength} />
						</StrengthBar>
						<StrengthText strength={passwordStrength}>
							{getStrengthText(passwordStrength)}
						</StrengthText>

						<PasswordRequirements>
							<Requirement met={password.length >= 8}>
								{password.length >= 8 && <Check size={12} />}
								At least 8 characters
							</Requirement>
							<Requirement met={/[A-Z]/.test(password)}>
								{/[A-Z]/.test(password) && <Check size={12} />}
								At least one uppercase letter
							</Requirement>
							<Requirement met={/[0-9]/.test(password)}>
								{/[0-9]/.test(password) && <Check size={12} />}
								At least one number
							</Requirement>
							<Requirement met={/[^A-Za-z0-9]/.test(password)}>
								{/[^A-Za-z0-9]/.test(password) && <Check size={12} />}
								At least one special character
							</Requirement>
						</PasswordRequirements>
					</PasswordStrength>
				</FormGroup>

				<CheckboxWrapper>
					<Checkbox
						type="checkbox"
						id="terms"
						checked={agreeTerms}
						onChange={(e) => setAgreeTerms(e.target.checked)}
						required
					/>
					<TermsText htmlFor="terms">
						I agree to the <Link href="/terms">Terms of Service</Link> and{" "}
						<Link href="/privacy">Privacy Policy</Link>
					</TermsText>
				</CheckboxWrapper>

				<SubmitButton
					type="submit"
					disabled={!agreeTerms}
				>
					Create Account
				</SubmitButton>
			</Form>

			<Divider>or</Divider>

			<SocialButton type="button">
				<img
					src="/placeholder.svg?height=20&width=20"
					alt="Google"
				/>
				Sign up with Google
			</SocialButton>

			<SignInLink>
				Already have an account? <Link href="/login">Sign In</Link>
			</SignInLink>
		</Container>
	)
}
