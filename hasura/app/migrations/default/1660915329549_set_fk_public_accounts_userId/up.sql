alter table "public"."accounts" drop constraint "accounts_userId_fkey",
  add constraint "accounts_userId_fkey"
  foreign key ("userId")
  references "public"."users"
  ("id") on update cascade on delete cascade;
