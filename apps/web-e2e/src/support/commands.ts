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

const sessions = {
  alpha_admin:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlbkV4cGlyZXMiOm51bGwsInVzZXIiOnsiZW1haWwiOiJhbHBoYV9hZG1pbkBnb3Zlcm5hbmNlLmlvIiwiZW1haWxWZXJpZmllZCI6bnVsbCwiaWQiOiI0YzJhYTAzYTdkY2IwNmFiN2FjMmJhMDc4M2QyZTQ2NmE1MjVlMWU1Nzk0YTQyYjJhMGZhOWY2MWZhN2EyOTY1IiwiaW1hZ2UiOm51bGwsIm5hbWUiOiJBbHBoYSBBZG1pbiJ9LCJwcm92aWRlciI6ImNyZWRlbnRpYWxzIiwicHJvdmlkZXJUeXBlIjoiY3JlZGVudGlhbHMiLCJyb2xlIjoidXNlciIsImlhdCI6MTY2MDkyMTAyOH0.D-VWK5IbGRtff4LW2IQjdNbGzQV_OkxcaaCH_SoceuU',
  beta_admin:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlbkV4cGlyZXMiOm51bGwsInVzZXIiOnsiZW1haWwiOiJiZXRhX2FkbWluQGdvdmVybmFuY2UuaW8iLCJlbWFpbFZlcmlmaWVkIjpudWxsLCJpZCI6IjFkNmRlYWQ0ZTY5OGRkZmQ0YTkyY2QxOWFmZDA3NTYxMWZlYWVkZmQxNDllZGQ3NDYyYjgwZjcxOGUzYjIxODMiLCJpbWFnZSI6bnVsbCwibmFtZSI6IkJldGEgQWRtaW4ifSwicHJvdmlkZXIiOiJjcmVkZW50aWFscyIsInByb3ZpZGVyVHlwZSI6ImNyZWRlbnRpYWxzIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2NjA5MjEwNjF9.bqZBP_nLQUd9pYRrWnLDoOMpskCvIWvhwkG6aqbWD90',
  seb_google:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlbiI6InlhMjkuQTBBVkE5eTFzeHBuc1pMZHA2RUxUSlZiMnZkWUpUUzZIZnRTa1FhcXM3RlZGZHpYRG1nbnJqdFhnVEJwUFdybUZDVGgzd0NjWm5EcnJCbUQ1cVlpdGlrcFg0QWMzbWRLU1p1ZUxLY0FtS0R2bi14dnFaZl95bm52QzBaYXF6NG9WZklpU2lqVldZMEFPSHdxeXY1T0FXc3lwM3RwY1ZhQ2dZS0FUQVNBVEFTRlFFNjVkcjhHVERTLWhLN3V2N0h1NE9sd3JUWVVRMDE2MyIsImFjY2Vzc1Rva2VuRXhwaXJlcyI6MzMyMTg0NzM1NDA0NCwicmVmcmVzaFRva2VuIjoiMS8vMDNqb09Xc0ZXMkdMTUNnWUlBUkFBR0FNU053Ri1MOUlydXZwWjBTYjllU3Z5b1dBQUNrZUxBNFhYSW55TG5LbFAtMnNIYjN0TW9CM3pITnYtQ01TN25xd0g2U2xtT0x2QjJtbyIsInVzZXIiOnsiZW1haWwiOiJzZWJwYWxsdWVsQGdtYWlsLmNvbSIsImVtYWlsVmVyaWZpZWQiOm51bGwsImlkIjoiMjBjMGJjOTFlMTI1NDQ0NWQ0NTlmYzZhYzk3MjA2ZjZiYjkyMjNlNzFjNzY0YzQ5YTc3OGY4Yjg0ZDNmYzU3ZiIsImltYWdlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FGZFp1Y3B1VmlQeFYxQWhpSG1tMUNhbG1CeUduSEFKZW1SSDZNb0NhZVBNRWYwPXM5Ni1jIiwibmFtZSI6IlPDqWJhc3RpZW4gUGFsbHVlbCJ9LCJwcm92aWRlciI6Imdvb2dsZSIsInByb3ZpZGVyVHlwZSI6Im9hdXRoIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2NjA5MjE4Nzh9.bQba06n_LYuMaVt2ZMyPx1CtoDQeozsuImZQD4V4elU',
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
