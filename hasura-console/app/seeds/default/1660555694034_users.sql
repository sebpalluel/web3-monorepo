SET
	check_function_bodies = false;

INSERT INTO
	public.users (
		id,
		name,
		email,
		"emailVerified",
		image,
		password,
		"firstName",
		"lastName",
		blocked
	)
VALUES
	(
		'fd56986008034a540028625173853181a6503364ae07063d5fcd61f5195ba2e3',
		'Sébastien Palluel',
		'sebpalluel@gmail.com',
		NULL,
		'https://lh3.googleusercontent.com/a-/AFdZucpuViPxV1AhiHmm1CalmByGnHAJemRH6MoCaePMEf0=s96-c',
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
		password,
		"firstName",
		"lastName",
		blocked
	)
VALUES
	(
		'76422e8490dda28b515ea63ad20cb30f113d658a595f6efe47d61b606cb94fcb',
		'Asdasf',
		'alpha_admin@equisafe.io',
		NULL,
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
		'aca5f23edd5ea01354bdf8c77d6cb692c5a1d0261088e9bbda4c4013c3a85a5f',
		'fd56986008034a540028625173853181a6503364ae07063d5fcd61f5195ba2e3',
		'oauth',
		'google',
		'101425216469964230843',
		'1//03RPQIomGSckCCgYIARAAGAMSNwF-L9IrLHm7vEy0xBL7XvKioJe_HjQdMYQJCA-wDpkxXzFQMVTDPmCrDCFCrZNLYD7G1Prh1qA',
		'ya29.A0AVA9y1vyd5NVlEbDxrs73u9jADUGTeg_3d_OLoCXOmbwHj4FSSIPPtQkibK3EHThbYX1QQHVj_6GtNivRWLqG0aAIM1j4sfMeFoQeed7_rBLMrtXxUHu8BBjVY6gcTKIlSbif7KcRsvN0zpBUI0himHYy7RZaCgYKATASATASFQE65dr8nB_ueumshv9ICZpQklskEw0163',
		1660155008,
		'Bearer',
		'https://www.googleapis.com/auth/userinfo.profile openid https://www.googleapis.com/auth/userinfo.email',
		'eyJhbGciOiJSUzI1NiIsImtpZCI6ImZkYTEwNjY0NTNkYzlkYzNkZDkzM2E0MWVhNTdkYTNlZjI0MmIwZjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI5NDM2NDc4NTI5OTktZ2xxbzM1YXZoM2FnbGJ0Nmo3MmtzMjRwajJuY2xqazkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI5NDM2NDc4NTI5OTktZ2xxbzM1YXZoM2FnbGJ0Nmo3MmtzMjRwajJuY2xqazkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDE0MjUyMTY0Njk5NjQyMzA4NDMiLCJlbWFpbCI6InNlYnBhbGx1ZWxAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJHMWRsX3RUdkpQRG5saW05QVNjTldnIiwibmFtZSI6IlPDqWJhc3RpZW4gUGFsbHVlbCIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQUZkWnVjcHVWaVB4VjFBaGlIbW0xQ2FsbUJ5R25IQUplbVJINk1vQ2FlUE1FZjA9czk2LWMiLCJnaXZlbl9uYW1lIjoiU8OpYmFzdGllbiIsImZhbWlseV9uYW1lIjoiUGFsbHVlbCIsImxvY2FsZSI6ImZyIiwiaWF0IjoxNjYwMTUxNDA5LCJleHAiOjE2NjAxNTUwMDl9.IylM-dyDxJr6sOX3cVmZedkQf6cLje9S565m0SZ362C5Os78H-PL4iuAiKS8XB57s1e0Y-JvEEcVAoMdDX1v_H0YAePxW7Soxx5iwrgbYXJmn-KVU71PVzF598Jl2YF5hPESmw5b68445xSHMneV0XY41jW5cAc69AkPOMfRTCMoYbS8ACBNVMdOPCresx-fmSWQbj2Oz0uAdhBXGjRevrji2LlLHH52W6l2LYH6uVsAoO7tqNcO5xD_ZclGaRo3cgzhkO4FsHvpcsI_4w6pblPpzQUENqutR3oNZ8Ip9xUB8tVI8D87uIKmPT7hUYISuURBaaCorqHDX1gpZCLCcw',
		NULL
	);

INSERT INTO
	public.passwords (hash, salt, iterations, attempts, "userId")
VALUES
	(
		'E1zJ6nNXMcMTZgyVjs/W/Dp7Y/ql9LjSXHq0mpQFB5rUiZzfnTpatudM6pLAbtB7pOw8DTih9ptvsNvB3/712Q==',
		'gKGiPSWI5Ush5Ue4gCfAig==',
		10000,
		0,
		'76422e8490dda28b515ea63ad20cb30f113d658a595f6efe47d61b606cb94fcb'
	);