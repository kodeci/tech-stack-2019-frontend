import auth0 from 'auth0-js';

const webAuth = new auth0.WebAuth({
  clientID: '931qY3sAlBIgSpD00Wv9Vg6zkii8hPaH',
  domain: 'sckmkny.auth0.com',
  redirectUri: 'http://localhost:3000/callback',
  responseType: 'token id_token',
  scope: 'openid',
});

export const login = () => webAuth.authorize();
