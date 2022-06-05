alter table "public"."api_user" drop constraint "api_user_id_key";
alter table "public"."api_user" add constraint "api_user_username_key" unique ("username");
