import { getGreeting } from '../support/app.po';
import { users } from '@boilerplate/test-utils-gql';

describe('Authentication tests', () => {
  before(() => {
    cy.task('db:delete-users');
    cy.task('db:seed-db', '../../tools/test/seeds/users.sql');
  });

  function login(email: string, password: string) {
    cy.visit('/auth/signin');
    cy.findByRole('button', { name: /password/i }).click();
    cy.findByLabelText(/Email/i).type(email);
    cy.findByLabelText(/Password/i).type(password);
    cy.findByRole('button', { name: /Sign in/i }).click();
    cy.url().should('not.include', '/auth');
    // our auth cookie should be present
    cy.getCookie('next-auth.session-token').should('exist');
    // UI should reflect this user being logged in
    cy.findAllByText(email).should('be.visible');
  }

  it('sets auth cookie when logging in via form submission', function () {
    login(users.alpha_admin.email, 'Qwerty12345#');
  });

  it('return an error on wrong password', function () {
    cy.visit('/auth/signin');
    cy.findByRole('button', { name: /password/i }).click();
    cy.findByLabelText(/Email/i).type(users.alpha_admin.email);
    cy.findByLabelText(/Password/i).type('Qwerty12345#1');
    cy.findByRole('button', { name: /Sign in/i }).click();
    cy.url().should('include', '/auth/signin');
    cy.getCookie('next-auth.session-token').should('not.exist');
    cy.findByText('Invalid email or password').should('be.visible');
  });

  it("return an error on account that doesn't exist", () => {
    cy.visit('/auth/signin');
    cy.findByRole('button', { name: /password/i }).click();
    cy.findByLabelText(/Email/i).type('anyvalidemail@test.io');
    cy.findByLabelText(/Password/i).type('Qwerty12345#1');
    cy.findByRole('button', { name: /Sign in/i }).click();
    cy.url().should('include', '/auth/signin');
    cy.getCookie('next-auth.session-token').should('not.exist');
    cy.findByText('Invalid email or password').should('be.visible');
  });

  it('return an error when try to register with existing email', function () {
    cy.visit('/auth/signup');
    cy.findByLabelText(/name/i).type(users.alpha_admin.name);
    cy.findByLabelText(/Email/i).type(users.alpha_admin.email);
    cy.findByLabelText(/Password/i).type('Anything@af_231');
    cy.findByRole('button', { name: /Sign up/i }).click();
    cy.url().should('include', '/auth/signup');
    cy.getCookie('next-auth.session-token').should('not.exist');
    cy.findByText(/already exist/i).should('be.visible');
  });
  it.skip('return an error on weak passwords', function () {
    // TODO: implement this test and feature
  });
  it('new user is able to register and login to his account', function () {
    const newUser = {
      name: 'New User',
      email: 'new_user@new.io',
      password: 'Qwerty12345#',
    };
    cy.visit('/');

    cy.visit('/auth/signin');
    cy.findByRole('button', { name: /password/i }).click();
    cy.findByText(/register/i).click();
    cy.findByLabelText(/name/i).type(newUser.name);
    cy.findByLabelText(/Email/i).type(newUser.email);
    cy.findByLabelText(/Password/i).type(newUser.password);
    cy.findByRole('button', { name: /Sign up/i }).click();
    cy.url().should('not.include', '/auth/signup');
    cy.getCookie('next-auth.session-token').should('not.exist');
    cy.findAllByText(newUser.name).should('not.exist');
    login(newUser.email, newUser.password);
  });
  it('cypress direct login allow logged user to see his infos', function () {
    cy.login('alpha_admin');
    cy.visit('/me');
    cy.findAllByText(new RegExp(users.alpha_admin.email, 'i')).should('be.visible');
  });
});
