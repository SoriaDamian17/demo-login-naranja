interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'I1WYc-WqSGIuaC7292pdnYyAuQQTt2DW',
  domain: 'dev-1zkkmzte.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
};
