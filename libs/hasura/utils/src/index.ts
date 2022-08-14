export enum Roles {
  user = 'user',
  admin = 'admin',
  anonymous = 'anonymous',
}

export type UserRole = Roles.user;
export type AdminRole = Roles.admin;
export type AnonymousRole = Roles.anonymous;

export type Role = UserRole | AdminRole | AnonymousRole;
