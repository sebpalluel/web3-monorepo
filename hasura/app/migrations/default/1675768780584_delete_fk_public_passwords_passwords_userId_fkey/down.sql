alter table "public"."passwords"
  add constraint "passwords_userId_fkey"
  foreign key ("userId")
  references "public"."users"
  ("id") on update cascade on delete cascade;
