import { getGreeting } from '../support/app.po';
import { users } from '@test-utils/gql';

describe('Authentication tests', () => {
  before(() => {
    cy.task('db:delete-users');
    cy.task('db:seed-db', '../../tools/test/seeds/users.sql');
  });

  it('cypress direct login allow logged user to see his infos', function () {
    cy.login('alpha_admin');
    cy.visit('/me');
    cy.findAllByText(new RegExp(users.alpha_admin.email, 'i')).should('be.visible');
  });
});
