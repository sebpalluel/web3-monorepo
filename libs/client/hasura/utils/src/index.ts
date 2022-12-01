export enum Roles {
  user = 'user',
  anonymous = 'anonymous',
}

export type UserRole = Roles.user;
export type AnonymousRole = Roles.anonymous;

export type Role = UserRole | AnonymousRole;
