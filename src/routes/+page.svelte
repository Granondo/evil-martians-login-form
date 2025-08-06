<script>
    
    let email = '';
    let password = '';
    let acceptedTerms = false;
    let passwordVisible = false;
    let errorMessage = '';
    
    async function handleSubmit() {
      errorMessage = '';
      if (!email || !password) {
        errorMessage = 'Please fill in all fields.';
        return;
      }
      if (!acceptedTerms) {
        errorMessage = 'You must accept Terms of Service and Privacy Policy.';
        return;
      }
      
      await new Promise((r) => setTimeout(r, 500));
      alert(`Email: ${email}\nPassword: ${password}`);
    }
    
    function togglePasswordVisibility() {
      passwordVisible = !passwordVisible;
    }
  </script>
  
  <style>
    .login-form {
      max-width: 380px;
      margin: 2rem auto;
      padding: 2rem;
      border-radius: 15px;
      background: linear-gradient(135deg, #293498, #40109C, #272D64);
      box-shadow: 0 0 15px rgba(0,0,0,0.1);
      border: 1px solid #ddd;
      font-family: Arial, sans-serif;
      color: #fff
    }
  
    h2 {
      margin-bottom: 1.5rem;
    }
  
    label {
      display: block;
      margin-bottom: 0.3rem;
      font-weight: 600;
    }
    
    input[type="email"],
    input[type="password"],
    input[type="text"] {
      width: 22rem;
      padding: 12px 15px;
      margin-bottom: 1.2rem;
      border-radius: 30px;
      border: 1.5px solid #ccc;
      font-size: 1rem;
      transition: border-color 0.2s;
    }
    input[type="email"]:focus,
    input[type="password"]:focus,
    input[type="text"]:focus {
      border-color: #5a67d8; /* немного синий */
      outline: none;
    }
  
    .password-container {
      position: relative;
    }
  
    .toggle-visibility {
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      color: #666;
      font-size: 0.9rem;
      user-select: none;
      background: none;
      border: none;
      padding: 0;
      margin: 0;
      height: 2em;
      width: 2em;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .toggle-visibility:focus {
      outline: 2px solid #5a67d8;
      outline-offset: 2px;
    }
  
    .checkbox-group {
      margin-bottom: 1.2rem;
      font-size: 0.9rem;
      color: #555;
      display: flex;
      align-items: center;
    }
  
    .checkbox-group input[type="checkbox"] {
      margin-right: 0.6rem;
      width: 18px;
      height: 18px;
    }
  
    .links {
      color: #5a67d8;
      text-decoration: none;
      margin-left: 0.3rem;
    }
  
    .error-message {
      margin-bottom: 1rem;
      color: #d9534f;
      font-weight: 600;
    }
  
    button {
      width: 100%;
      background: #6c63ff;
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
      background: #5848c2;
    }
  
    .sign-up {
      background: transparent;
      border: 2px solid #6c63ff;
      color: #6c63ff;
    }
    .sign-up:hover {
      background: #6c63ff;
      color: #fff;
    }
  </style>
  
  <form class="login-form" on:submit|preventDefault={handleSubmit} aria-label="Login form">
    <h2>Log in</h2>
    
    {#if errorMessage}
      <div role="alert" class="error-message">{errorMessage}</div>
    {/if}
    
    <label for="email">Email</label>
    <input id="email" type="email" placeholder="Email" bind:value={email} required aria-required="true" />
    
    <label for="password">Password</label>
    <div class="password-container">
      <input 
        id="password" 
        type={passwordVisible ? 'text' : 'password'} 
        placeholder="Password" 
        bind:value={password} 
        required 
        aria-required="true" 
        aria-describedby="toggle-password-visibility"
      />
      <button
        id="toggle-password-visibility"
        type="button"
        class="toggle-visibility"
        aria-label={passwordVisible ? 'Hide password' : 'Show password'}
        on:click={togglePasswordVisibility}
        tabindex="0"
      >
        {passwordVisible ? '🙈' : '👁️'}
      </button>
    </div>
    
    <div class="checkbox-group">
      <input id="terms" type="checkbox" bind:checked={acceptedTerms} aria-required="true" />
      <label for="terms">
        By creating an account, I agree to Outpoll's
        <a href="#" class="links" aria-label="Terms of Service">Terms of Service</a> and
        <a href="#" class="links" aria-label="Privacy Policy">Privacy Policy</a>
      </label>
    </div>
    
    <button type="submit">Next</button>
    <button type="button" class="sign-up">Sign up</button>
  </form>
  