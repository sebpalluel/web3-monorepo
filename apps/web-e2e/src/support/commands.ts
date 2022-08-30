import '@testing-library/cypress/add-commands';
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// import '@testing-library/cypress/add-commands';

export {}; // 👈️ add this

type User = 'alpha_admin' | 'beta_admin' | 'seb_google';
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Chainable {
      login(user: User): void;
      // dataCy(value: string): Chainable<Element>
    }
  }
}

// Cypress.Commands.add('dataCy', (value) => {
//   return cy.get(`[data-cy=${value}]`)
// })
//
// -- This is a parent command --

// Copied access_token copied from cookie set by next auth when user logged in
// Allow for direct access to the user session
const sessions = {
  alpha_admin:
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlbkV4cGlyZXMiOm51bGwsInVzZXIiOnsiZW1haWwiOiJhbHBoYV9hZG1pbkBnb3Zlcm5hbmNlLmlvIiwiZW1haWxWZXJpZmllZCI6bnVsbCwiaWQiOiI0YzJhYTAzYTdkY2IwNmFiN2FjMmJhMDc4M2QyZTQ2NmE1MjVlMWU1Nzk0YTQyYjJhMGZhOWY2MWZhN2EyOTY1IiwiaW1hZ2UiOm51bGwsIm5hbWUiOiJBbHBoYSBBZG1pbiJ9LCJwcm92aWRlciI6ImNyZWRlbnRpYWxzIiwicHJvdmlkZXJUeXBlIjoiY3JlZGVudGlhbHMiLCJyb2xlIjoidXNlciIsImlhdCI6MTY2MTg1NTU4Nn0.O2c-1-hbMUmj2jJwUdAXYp2iISH9_bumTyPpHm0qpfRUnrcw61i88PnNAAUZnS5Iw1r5_g1njPWirBtkbDn0tnQIHnyoK9lqAI3QSxVzPn3-KvtSBI2cQq5AtfKq8ScLQfwOHtbPrjoQEAb6AluBl_rIARalfk5QbTHtIQles3zwGX2lH52AErWsHqiIQKmmb7DrNaDjP7jo5tr5oAiAYDsPeIPMCge2Bb4n-hGiNHsCQUdxGseskJdnCoYYQNq9Y-yFlN1_6-uyvpFWfcVD_NteKMOLZVhYcS76QX62GdYnT0VlKL_-8MHYEnG-YYsq4M-KOBNu4BzxJcVyn5pIqQ',
  beta_admin:
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlbkV4cGlyZXMiOm51bGwsInVzZXIiOnsiZW1haWwiOiJiZXRhX2FkbWluQGdvdmVybmFuY2UuaW8iLCJlbWFpbFZlcmlmaWVkIjpudWxsLCJpZCI6IjFkNmRlYWQ0ZTY5OGRkZmQ0YTkyY2QxOWFmZDA3NTYxMWZlYWVkZmQxNDllZGQ3NDYyYjgwZjcxOGUzYjIxODMiLCJpbWFnZSI6bnVsbCwibmFtZSI6IkJldGEgQWRtaW4ifSwicHJvdmlkZXIiOiJjcmVkZW50aWFscyIsInByb3ZpZGVyVHlwZSI6ImNyZWRlbnRpYWxzIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2NjE4NTU2OTZ9.gWplRs4cPM4BqJLIJ09pt-FKWP5m3DFWn-CMD8eU6GbpjKjv4TStOqhdVXwDl2VitQDCq7wvZi_FPLE-1SfL-bUqq9Pd6WST-eeSvx-E8XMlKkVMFBiwSCCvQ8Uydmb5B7snIFuHAyo7cPOPJgTfZ5_7bHxbajcYVeizy3NwshItOkEO728B4OmTGuAV_wt6y-NswF4FfWgZRvIuM_5IM5CENS_YvQgn4ZkLMjU9Rb9H7pTh0ev1PECqyBWRXSt4CnuP_DZcQVcKg8e4Z0wWkiqrIeArpueRaD1B4wdfEd19rNfo-ZPIYq0IMOJKYfxgpTnjDNSjTMHAoAO3kWw_Ng',
  seb_google:
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlbiI6InlhMjkuYTBBVkE5eTF0Q00tSUpMQ0xOV0hMNE1YTElnRnptMER6clpVaDRDTUVnUFJ4NnluWWtwZ0o3ay1JV0VpZnBlOEJWbUQ4OFNtQjNLazVicmszbTVubjJwaExGcDRKNUQ5MWNNMEdiMHZXR1psTllXaFBwNGp2NUZoODEyUXJmbkFZUHR4UHhuYURUMExiUVBoOExHVXdjejZ5ZHZMYXNhQ2dZS0FUQVNBUUFTRlFFNjVkcjg1eWNLYXpDZ0Rla1JtZFhOREZHZm1RMDE2MyIsImFjY2Vzc1Rva2VuRXhwaXJlcyI6MzMyMzcxNTA3NzY3OCwicmVmcmVzaFRva2VuIjoiMS8vMDM4cU5CZWJzMGxBc0NnWUlBUkFBR0FNU053Ri1MOUlyc0tTSi13TXB2LVo2OHVxTVRfMWVMR3M3YThXdnMyQ0hRVXFZT0FkQTNiUGc1aWpOR2NsSUw3REJQa3RnMU1PbWQ1WSIsInVzZXIiOnsiZW1haWwiOiJzZWJwYWxsdWVsQGdtYWlsLmNvbSIsImVtYWlsVmVyaWZpZWQiOm51bGwsImlkIjoiMjBjMGJjOTFlMTI1NDQ0NWQ0NTlmYzZhYzk3MjA2ZjZiYjkyMjNlNzFjNzY0YzQ5YTc3OGY4Yjg0ZDNmYzU3ZiIsImltYWdlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FGZFp1Y3B1VmlQeFYxQWhpSG1tMUNhbG1CeUduSEFKZW1SSDZNb0NhZVBNRWYwPXM5Ni1jIiwibmFtZSI6IlPDqWJhc3RpZW4gUGFsbHVlbCJ9LCJwcm92aWRlciI6Imdvb2dsZSIsInByb3ZpZGVyVHlwZSI6Im9hdXRoIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2NjE4NTU3Mzl9.I0vY3LvFCM6qbzwBLDVRbD6wX1GrwZCl38fvn23M9Q4g_N41rIBUFwIsxO2jowKwfCJ6j9rnUcEOp9rcjFCMqUprLQVpZ6_K8dE4GzTb6maPP9BIVIgOtzd0H5T9gHn5sfa-8xhwK6gGO2QkKOzaHa1JTZ9A3jKLByOk4CfHd7n1kYfWTnj4b3RUL353TRbONrOikMrfGqd_T3esa3PQ-8TR4l6J-QntmYFjXdItgmyUW0PkSzwNgQSbHZf1uhN4kVsTjD-cDnXXlOuPiWryKGOP-Wu2I-Sb5DC3ZIvulxpbegStKa75ykxm-kJO-_ZSUch-uZrGBBJnf0d1GIJiuw',
};
// https://github.com/nextauthjs/next-auth/discussions/2053
Cypress.Commands.add('login', (user) => {
  cy.session(user, () => {
    cy.intercept('/api/auth/session', { fixture: `${user}.session.json` }).as('session');

    // Set the cookie for cypress.
    // It has to be a valid cookie so next-auth can decrypt it and confirm its validity.
    cy.setCookie('next-auth.session-token', sessions[user]);
    // Cypress.Cookies.preserveOnce('next-auth.session-token');
  });
});
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
