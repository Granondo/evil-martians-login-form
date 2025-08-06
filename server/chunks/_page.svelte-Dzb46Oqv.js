import { a as attr } from './attributes-YVTFWYF4.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import { u as push, w as pop } from './index-1rKrC7w5.js';

function _page($$payload, $$props) {
  push();
  let email = "";
  let password = "";
  let acceptedTerms = false;
  $$payload.out.push(`<form class="login-form svelte-17isytf" aria-label="Login form"><h2 class="svelte-17isytf">Log in</h2> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <label for="email" class="svelte-17isytf">Email</label> <input id="email" type="email" placeholder="Email"${attr("value", email)} required aria-required="true" class="svelte-17isytf"/> <label for="password" class="svelte-17isytf">Password</label> <div class="password-container svelte-17isytf"><input id="password"${attr("type", "password")} placeholder="Password"${attr("value", password)} required aria-required="true" aria-describedby="toggle-password-visibility" class="svelte-17isytf"/> <button id="toggle-password-visibility" type="button" class="toggle-visibility svelte-17isytf"${attr("aria-label", "Show password")} tabindex="0">${escape_html("👁️")}</button></div> <div class="checkbox-group svelte-17isytf"><input id="terms" type="checkbox"${attr("checked", acceptedTerms, true)} aria-required="true" class="svelte-17isytf"/> <label for="terms" class="svelte-17isytf">By creating an account, I agree to Outpoll's <a href="#" class="links svelte-17isytf" aria-label="Terms of Service">Terms of Service</a> and <a href="#" class="links svelte-17isytf" aria-label="Privacy Policy">Privacy Policy</a></label></div> <button type="submit" class="svelte-17isytf">Next</button> <button type="button" class="sign-up svelte-17isytf">Sign up</button></form>`);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-Dzb46Oqv.js.map
