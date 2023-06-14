export const environment = {
  production: true,
  baseHref: '/frontend/',
  authConfig: {
    issuer: 'https://authserver-1-dev-team-01.iterate.tap.tanzukorea.xyz',
    clientId: 'dev-space_client-registration'
  },
  endpoints: {
    orders: window.location.origin + '/services/order-service/api/v1/orders',
    products: window.location.origin +  '/services/product-service/api/v1/products'
  }
};
