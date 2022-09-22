SET
    check_function_bodies = false;

CREATE TABLE public.accounts (
    id text NOT NULL,
    "userId" text NOT NULL,
    type text NOT NULL,
    provider text NOT NULL,
    "providerAccountId" text NOT NULL,
    refresh_token text,
    access_token text,
    expires_at integer,
    token_type text,
    scope text,
    id_token text,
    session_state text
);

CREATE TABLE public.passwords (
    hash text NOT NULL,
    salt text NOT NULL,
    iterations integer DEFAULT 10000 NOT NULL,
    attempts integer DEFAULT 0 NOT NULL,
    "userId" text NOT NULL
);

CREATE TABLE public.sessions (
    id text NOT NULL,
    "sessionToken" text NOT NULL,
    "userId" text NOT NULL,
    expires timestamp without time zone
);

CREATE TABLE public.users (
    id text NOT NULL,
    name text,
    email text,
    "emailVerified" timestamp(3) without time zone,
    image text,
    "firstName" text,
    "lastName" text,
    blocked boolean DEFAULT false NOT NULL
);

CREATE TABLE public."verificationTokens" (
    identifier text NOT NULL,
    token text NOT NULL,
    expires timestamp(3) without time zone NOT NULL
);

ALTER TABLE
    ONLY public.accounts
ADD
    CONSTRAINT accounts_pkey PRIMARY KEY (id);

ALTER TABLE
    ONLY public.passwords
ADD
    CONSTRAINT passwords_pkey PRIMARY KEY (hash);

ALTER TABLE
    ONLY public.passwords
ADD
    CONSTRAINT passwords_salt_key UNIQUE (salt);

ALTER TABLE
    ONLY public.sessions
ADD
    CONSTRAINT sessions_pkey PRIMARY KEY (id);

ALTER TABLE
    ONLY public.users
ADD
    CONSTRAINT users_pkey PRIMARY KEY (id);

ALTER TABLE
    ONLY public.accounts
ADD
    CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE
    ONLY public.passwords
ADD
    CONSTRAINT "passwords_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE
    ONLY public.sessions
ADD
    CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE RESTRICT;