<p align="center">
  <a href="https://clerk.dev?utm_source=github&utm_medium=clerk_backend" target="_blank" rel="noopener noreferrer">
    <img src="https://images.clerk.dev/static/logo-light-mode-400x400.png" height="64">
  </a>
  <br />
</p>

# @clerk/backend

<div align="center">

[![Chat on Discord](https://img.shields.io/discord/856971667393609759.svg?logo=discord)](https://discord.com/invite/b5rXHjAg7A)
[![Clerk documentation](https://img.shields.io/badge/documentation-clerk-green.svg)](https://clerk.dev/docs?utm_source=github&utm_medium=clerk_backend)
[![Follow on Twitter](https://img.shields.io/twitter/follow/ClerkDev?style=social)](https://twitter.com/intent/follow?screen_name=ClerkDev)

[Changelog](https://github.com/clerkinc/javascript/blob/main/packages/backend/CHANGELOG.md)
·
[Report a Bug](https://github.com/clerkinc/javascript/issues/new?assignees=&labels=bug&template=bug_report.md&title=Bug%3A+)
·
[Request a Feature](https://github.com/clerkinc/javascript/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=Feature%3A+)
·
[Ask a Question](https://github.com/clerkinc/javascript/issues/new?assignees=&labels=question&template=ask_a_question.md&title=Support%3A+)

</div>

---

## Overview

This package provides Clerk Backend API resources and low-level authentication utilities for JavaScript environments. It is mostly used as the base for other Clerk SDKs but it can be also used on its own.

### Features

- Built for V8 isolates (Cloudflare Workers, Vercel Edge Runtime, etc...).
- Make it isomorphic to work across all modern JS runtimes.
- Use options injection for all keys and settings.
- Support multiple CLERK_API_KEY for multiple instance REST access.
- Align JWT key resolution algorithm across all environments (Function param > Environment variable > JWKS from API).
- Tested automatically across different runtimes (Node, CF Workers, Vercel Edge middleware.)
- Clean up Clerk interstitial logic.
- Refactor the Rest Client API to return `{data, errors}` instead of throwing errors.
- Export a generic verifyToken for Clerk JWTs verification.
- Align AuthData interface for SSR.
- Export CJS and ESM.

## How to use

Requires Node >= 16.

```sh
npm install @clerk/backend
```

```
import Clerk from '@clerk/backend';

const clerk = Clerk({ apiKey: '...' });

await clerk.users.getUser("user_...");
```

### API

#### Clerk(options: ClerkOptions)

Create Clerk SDK that includes an HTTP Rest client for the Backend API and session verification helpers. The clerk object contains the following APIs and methods:

```js
import Clerk from '@clerk/backend';

const clerk = Clerk({ apiKey: '...' });

await clerk.users.getUser('user_...');

// Available APIs
clerk.allowlistIdentifiers;
clerk.clients;
clerk.emailAddresses;
clerk.emails;
clerk.interstitial;
clerk.invitations;
clerk.organizations;
clerk.phoneNumbers;
clerk.redirectUrls;
clerk.sessions;
clerk.signInTokens;
clerk.smsMessages;
clerk.users;

// These functions should be used by framework-specific libraries, such as @clerk/nextjs or @clerk/remix.

// Compute the authentication state given the request parameters.
clerk.authState(options);

// Build debug payload of the auth state.
clerk.debugAuthState(authState);

// Load clerk interstitial from this package
clerk.localInterstitial(options);

// Load clerk interstitial from the public Backend API endpoint
clerk.remotePublicInterstitial(options);

// Load clerk interstitial from the public Private API endpoint (Deprecated)
clerk.remotePrivateInterstitial(options);
```

#### verifyToken(token: string, options: VerifyTokenOptions)

Verifies a Clerk generated JWT (i.e. Clerk Session JWT and Clerk JWT templates). The key resolution via JWKS or local values is handled automatically.

```js
import { verifyToken } from '@clerk/backend';

verifyToken(token, {
  issuer: '...',
  authorizedParties: '...',
});
```

#### verifyJwt(token: string, options: VerifyJwtOptions)

Verifies a Clerk generated JWT (i.e. Clerk Session JWT and Clerk JWT templates). The key needs to be provided in the options.

```js
import { verifyJwt } from '@clerk/backend';

verifyJwt(token, {
  key: JsonWebKey,
  issuer: '...',
  authorizedParties: '...',
});
```

#### decodeJwt(token: string)

Decodes a JWT.

```js
import { decodeJwt } from '@clerk/backend';

decodeJwt(token);
```

#### hasValidSignature(jwt: Jwt, jwk: JsonWebKey)

Verifies that the JWT has a valid signature. The key needs to be provided.

```js
import { hasValidSignature } from '@clerk/backend';

hasValidSignature(token, jwk);
```

## License

This project is licensed under the **MIT license**.

See [LICENSE](https://github.com/clerkinc/javascript/blob/main/packages/backend/LICENSE) for more information.