'use strict'

// 1. Create an app in the **Google API Console** at `https://console.developers.google.com/`.
// 2. Create a new project and from the **Credentials** tab, and then create a **client ID** and **client secret**.
// 3. Provide the redirect URIs in **Authorized redirect URIs**, which are paths for Google to redirect to after the user has authenticated with Google.

export default {
  // clientId: process.env.GOOGLE_CLIENT_ID, // e.g. asdfghjkljhgfdsghjk.apps.googleusercontent.com
  // clientSecret: process.env.GOOGLE_CLIENT_SECRET, // e.g. _ASDFA%DFASDFASDFASD#FAD-
  // redirect: process.env.GOOGLE_REDIRECT_URL, // this must match your google api settings

  clientId: '472476574621-01lgfg7fd3jl35sdne1r71n15r0mi244.apps.googleusercontent.com',
  clientSecret: 'W4GvHnb5E45oYLe83j1iKvn2',
  redirect: 'http://localhost:3000/login'
}
