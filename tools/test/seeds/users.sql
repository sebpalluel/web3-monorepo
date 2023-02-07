SET
	check_function_bodies = false;

INSERT INTO
	public.users (
		id,
		name,
		email,
		"emailVerified",
		image,
		"firstName",
		"lastName",
		blocked
	)
VALUES
	(
		'20c0bc91e1254445d459fc6ac97206f6bb9223e71c764c49a778f8b84d3fc57f',
		'Sébastien Palluel',
		'sebpalluel@gmail.com',
		NULL,
		'https://lh3.googleusercontent.com/a-/AFdZucpuViPxV1AhiHmm1CalmByGnHAJemRH6MoCaePMEf0=s96-c',
		NULL,
		NULL,
		false
	);

INSERT INTO
	public.users (
		id,
		name,
		email,
		"emailVerified",
		image,
		"firstName",
		"lastName",
		blocked
	)
VALUES
	(
		'4c2aa03a7dcb06ab7ac2ba0783d2e466a525e1e5794a42b2a0fa9f61fa7a2965',
		'Alpha Admin',
		'alpha_admin@test.io',
		NULL,
		NULL,
		NULL,
		NULL,
		false
	);

INSERT INTO
	public.users (
		id,
		name,
		email,
		"emailVerified",
		image,
		"firstName",
		"lastName",
		blocked
	)
VALUES
	(
		'1d6dead4e698ddfd4a92cd19afd075611feaedfd149edd7462b80f718e3b2183',
		'Beta Admin',
		'beta_admin@test.io',
		NULL,
		NULL,
		NULL,
		NULL,
		false
	);

INSERT INTO
	public.accounts (
		id,
		"userId",
		type,
		provider,
		"providerAccountId",
		refresh_token,
		access_token,
		expires_at,
		token_type,
		scope,
		id_token,
		session_state
	)
VALUES
	(
		'1ead7941f15d0701f3cbe32a0d39529f7fdd4c27adc3e2dd3d593712c8ffdcee',
		'20c0bc91e1254445d459fc6ac97206f6bb9223e71c764c49a778f8b84d3fc57f',
		'oauth',
		'google',
		'101425216469964230843',
		'1//03rcNh6BzO_91CgYIARAAGAMSNwF-L9IrQztQSoEw_XtibXajPW3Rjk_WqRnurkPwCoqxnl6g3JEeNTStqZx_5ZVc0JMrEPSDWoE',
		'ya29.A0AVA9y1sryCNi3r9_QMOuuCtoziGzY1nObBcoOZs8DFukzVuemW3LsIhstkKnVH_QT7LED0_TmqwJDvBUedJwsIxbTsaf5F_VYlhkKdw_vCrUeJrzCnmhyA5AU-eUQxLrsyN1K-b2azWaJi2QxcjX8z6zMAFWaCgYKATASATASFQE65dr8CUnRq7amr61B5dTKWNTgEw0163',
		1660560439,
		'Bearer',
		'openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
		'eyJhbGciOiJSUzI1NiIsImtpZCI6ImZkYTEwNjY0NTNkYzlkYzNkZDkzM2E0MWVhNTdkYTNlZjI0MmIwZjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI5NDM2NDc4NTI5OTktZ2xxbzM1YXZoM2FnbGJ0Nmo3MmtzMjRwajJuY2xqazkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI5NDM2NDc4NTI5OTktZ2xxbzM1YXZoM2FnbGJ0Nmo3MmtzMjRwajJuY2xqazkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDE0MjUyMTY0Njk5NjQyMzA4NDMiLCJlbWFpbCI6InNlYnBhbGx1ZWxAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJwLW1ucVlPVVkxYVRGZGFHNi1aOEV3IiwibmFtZSI6IlPDqWJhc3RpZW4gUGFsbHVlbCIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQUZkWnVjcHVWaVB4VjFBaGlIbW0xQ2FsbUJ5R25IQUplbVJINk1vQ2FlUE1FZjA9czk2LWMiLCJnaXZlbl9uYW1lIjoiU8OpYmFzdGllbiIsImZhbWlseV9uYW1lIjoiUGFsbHVlbCIsImxvY2FsZSI6ImZyIiwiaWF0IjoxNjYwNTU2ODQwLCJleHAiOjE2NjA1NjA0NDB9.L685dDX5dYJw1cA_5OLHXM6IrBM2PB8WlQ7Lr-snq-z8Qm0ayVKbYRUgt-aX1vm4qe38QB6ZgIq3CYWgn6RA6Va6z4Vobtg4xY6tJhzbMAql7PNJqVpoByKzqeSBptk97WFrmCaJyO2QIQ0cWFCc7OULrwCMd88LhCf96vTIHR0m4h07Q_ax018JzvZhpv3yB0-61PojXb6V0o71NToLMf3aCwmu7shQ1um2qdRr81hZ6kVqEtH6OOT2K2g3kBVaGsBSg3Eu4fcZwrEyqF3DtcICC6XSjXtAyZWz3ydRYuMes7be_wkUSeYXXsxMvecl36emeUiEIuEdbA9018Ykxw',
		NULL
	);