<script lang="ts">
	import { Fireworks } from '@fireworks-js/svelte';
	import type { FireworksOptions } from '@fireworks-js/svelte';
	let email = '';
	let password = '';
	let acceptedTerms = false;
	let showPassword = false;
	let errorMessage = '';
	let isLoading = false;
	let formSubmitted = false;

	let fw: Fireworks;

	let fireworksOptions: FireworksOptions = {
		autoresize: true,
		opacity: 0.5,
		acceleration: 1.05,
		friction: 0.95,
		gravity: 1.5,
		particles: 50,
		traceLength: 3,
		traceSpeed: 10,
		explosion: 5,
		intensity: 30,
		flickering: 50,
		lineStyle: 'round',
		hue: {
			min: 0,
			max: 360
		},
		delay: {
			min: 30,
			max: 60
		},
		rocketsPoint: {
			min: 50,
			max: 50
		},
		lineWidth: {
			explosion: {
				min: 1,
				max: 3
			},
			trace: {
				min: 1,
				max: 2
			}
		},
		brightness: {
			min: 50,
			max: 80
		},
		decay: {
			min: 0.015,
			max: 0.03
		},
		mouse: {
			click: false,
			move: false,
			max: 1
		}
	};

	async function handleSubmit() {
		formSubmitted = true;
		isLoading = true;
		errorMessage = '';
		if (!email || !password) {
			errorMessage = 'Please fill in all fields.';
			isLoading = false;
			return;
		}

		if (!acceptedTerms) {
			errorMessage = 'You must accept Terms of Service and Privacy Policy.';
			isLoading = false;
			return;
		}

		await new Promise((r) => setTimeout(r, 2000));
		isLoading = false;
		const fireworks = fw.fireworksInstance();
		if (!fireworks.isRunning) {
			fireworks.start();
			setTimeout(() => fireworks.stop(), 10000);
		}
	}

	function togglePasswordVisibility() {
		showPassword = !showPassword;
	}
</script>

<form
	class="login-form"
	on:submit|preventDefault={handleSubmit}
	aria-labelledby="login-form-title"
	novalidate
>
	<h2 id="login-form-title">Log in</h2>

	<div class="error-slot" aria-live="polite">
		{#if errorMessage}
			<div class="error-message" role="alert">{errorMessage}</div>
		{/if}
	</div>
	<div class="input-container">
		<input
			type="email"
			placeholder="Email"
			bind:value={email}
			autocomplete="email"
			required
			aria-required="true"
		/>
	</div>

	<div class="input-container">
		<input
			type={showPassword ? 'password' : 'text'}
			placeholder="Password"
			bind:value={password}
			autocomplete="current-password"
			required
			aria-required="true"
		/>
		<button
			type="button"
			class="password-toggle"
			on:click={togglePasswordVisibility}
			aria-label={showPassword ? 'Hide password' : 'Show password'}
		>
			{#if showPassword}
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			{:else}
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2.45703 12C3.73128 7.94288 7.52159 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C20.2672 16.0571 16.4769 19 11.9992 19C7.52159 19 3.73128 16.0571 2.45703 12Z"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M11.9992 15C13.6561 15 14.9992 13.6569 14.9992 12C14.9992 10.3431 13.6561 9 11.9992 9C10.3424 9 8.99924 10.3431 8.99924 12C8.99924 13.6569 10.3424 15 11.9992 15Z"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			{/if}
		</button>
	</div>

	<div class="checkbox-group">
		<input id="terms" type="checkbox" bind:checked={acceptedTerms} aria-required="true" />
		<label for="terms" class:invalid={formSubmitted && !acceptedTerms}>
			By creating an account, I agree to Outpoll's
			<a
				href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
				class:invalid={formSubmitted && !acceptedTerms}
				aria-label="Terms of Service"
			>
				Terms of Service
			</a>
			and
			<a
				href="https://www.youtube.com/watch?v=AvJCqBqQVSM"
				class:invalid={formSubmitted && !acceptedTerms}
				aria-label="Privacy Policy"
			>
				Privacy Policy
			</a>
		</label>
	</div>

	<button type="submit" disabled={isLoading}>
		{isLoading ? 'Loading...' : 'Next'}
	</button>
	<button type="button" class="sign-up">Sign up</button>
</form>

<Fireworks bind:this={fw} autostart={false} options={fireworksOptions} class="fireworks" />

<style>
	:root {
		box-sizing: border-box;
		--primary-color: #6c63ff;
		--secondary-color: #5848c2;
		--error-color: #d9534f;
		--background-gradient: linear-gradient(135deg, #293498, #40109c, #272d64);
		--error-block-height: clamp(2rem, 1.5rem + 0.5vw, 2.5rem);
	}

	.login-form {
		position: relative;
		max-width: 380px;
		margin: 2rem auto;
		padding: 2rem;
		border-radius: 15px;
		background: var(--background-gradient);
		box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
		border: 1px solid #ddd;
		font-family: Arial, sans-serif;
		color: #fff;
		z-index: 10;
	}

	:global(.fireworks) {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		pointer-events: none;
		z-index: 9999; /* выше формы */
	}

	h2 {
		margin-bottom: 1.5rem;
	}

	label {
		display: block;
		margin-bottom: 0.3rem;
		font-weight: 600;
	}

	input[type='email'],
	input[type='password'],
	input[type='text'] {
		width: 100%;
		padding: 12px 15px;
		margin-bottom: 1.2rem;
		border-radius: 30px;
		border: 1.5px solid #ccc;
		font-size: 1rem;
		transition: border-color 0.2s;
	}

	input[type='email']:focus,
	input[type='password']:focus,
	input[type='text']:focus {
		border-color: #5a67d8;
		outline: none;
	}

	.input-container {
		position: relative;
		display: flex;
		align-items: center;
		/* width: 100%; */
	}

	.password-toggle {
		position: absolute;
		right: 15px;
		top: 40%;
		transform: translateY(-60%);
		background: none;
		border: none;
		cursor: pointer;
		color: #666;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 4px;
		border-radius: 4px;
		transition:
			color 0.2s,
			background-color 0.2s;
		margin: 0;
		width: auto;
		height: auto;
	}

	.password-toggle:hover {
		color: #5a67d8;
		background-color: rgba(90, 103, 216, 0.1);
	}

	.password-toggle:focus {
		outline-offset: 2px;
	}

	.checkbox-group {
		margin-bottom: 1.2rem;
		font-size: 0.7rem;
		color: #8f8e8e;
		display: flex;
		align-items: center;
	}

	.checkbox-group input[type='checkbox'] {
		margin-right: 0.6rem;
		width: 18px;
		height: 18px;
	}

	.invalid {
		color: var(--error-color);
		font-weight: bold;
	}

	.links {
		color: #5a67d8;
		text-decoration: none;
	}

	.error-slot {
		height: 10px;
		display: flex;
		align-items: center;
		margin-bottom: 8px;
	}

	.error-message {
		font-size: 13px;
		width: 100%;
		color: var(--error-color);
	}

	button[type='submit'],
	button {
		width: 100%;
		background: var(--primary-color);
		border: none;
		padding: 12px 0;
		border-radius: 30px;
		color: #fff;
		font-size: 1.1rem;
		cursor: pointer;
		margin-bottom: 1rem;
		transition: background-color 0.2s;
	}

	button[type='submit']:hover,
	button.sign-up:hover {
		background: var(--secondary-color);
	}

	button[type='submit']:active,
	button.sign-up:active {
		transform: translateY(1px);
		filter: brightness(0.92);
	}

	.sign-up {
		background: transparent;
		border: 2px solid var(--primary-color);
		color: var(--primary-color);
	}

	.sign-up:hover {
		color: white;
		background: var(--secondary-color);
		border: 2px solid var(--secondary-color);
	}

	.sign-up:active {
		background: var(--primary-color);
		color: #fff;
		transform: translateY(1px);
		filter: brightness(0.95);
	}
</style>
