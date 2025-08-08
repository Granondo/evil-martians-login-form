<script>
	let email = '';
	let password = '';
	let acceptedTerms = false;
	// let passwordVisible = false;
	let errorMessage = '';
	let isLoading = false;
	let formSubmitted = false;

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
			// errorMessage = 'You must accept Terms of Service and Privacy Policy.';
			isLoading = false;
			return;
		}

		await new Promise((r) => setTimeout(r, 2000));
		isLoading = false;
		alert(`Email: ${email}\nPassword: ${password}`);
	}

	// function togglePasswordVisibility() {
	// 	passwordVisible = !passwordVisible;
	// }
</script>

<form class="login-form" on:submit|preventDefault={handleSubmit} aria-labelledby="login-form-title">
	<h2 id="login-form-title">Log in</h2>

	{#if errorMessage}
		<div role="alert" aria-live="polite" class="error-message">{errorMessage}</div>
	{/if}

	<input
		id="email"
		type="email"
		placeholder="Email"
		bind:value={email}
		required
		aria-required="true"
	/>

	<input
		id="password"
		type="password"
		placeholder="Password"
		bind:value={password}
		required
		aria-required="true"
		aria-describedby="toggle-password-visibility"
	/>

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

<style>
	:root {
		--primary-color: #6c63ff;
		--secondary-color: #5848c2;
		--error-color: #d9534f;
		--background-gradient: linear-gradient(135deg, #293498, #40109c, #272d64);
	}

	.login-form {
		max-width: 380px;
		margin: 2rem auto;
		padding: 2rem;
		border-radius: 15px;
		background: var(--background-gradient);
		box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
		border: 1px solid #ddd;
		font-family: Arial, sans-serif;
		color: #fff;
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
	input[type='password'] {
		/* width: 22rem; */
		width: 90%;
		padding: 12px 15px;
		margin-bottom: 1.2rem;
		border-radius: 30px;
		border: 1.5px solid #ccc;
		font-size: 1rem;
		transition: border-color 0.2s;
	}
	input[type='email']:focus,
	input[type='password']:focus {
		border-color: #5a67d8; /* немного синий */
		outline: none;
	}

	.checkbox-group {
		margin-bottom: 1.2rem;
		font-size: 0.9rem;
		color: #555;
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

	.error-message {
		margin-bottom: 1rem;
		color: var(--error-color);
		font-weight: 600;
	}

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
	button:hover {
		background: var(--secondary-color);
	}

	.sign-up {
		background: transparent;
		border: 2px solid var(--primary-color);
		color: var(--primary-color);
	}
	.sign-up:hover {
		background: var(--primary-color);
		color: #fff;
	}
</style>
