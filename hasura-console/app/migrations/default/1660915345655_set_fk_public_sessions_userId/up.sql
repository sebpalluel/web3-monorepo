alter table "public"."sessions" drop constraint "sessions_userId_fkey",
  add constraint "sessions_userId_fkey"
  foreign key ("userId")
  references "public"."users"
  ("id") on update cascade on delete cascade;
