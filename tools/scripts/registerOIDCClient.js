const oidcClientUrl = 'http://localhost:9080/api/oidc/clients/';
// post the oidc client to the walt-id idp registry
async function main() {
  const res = await fetch(`${oidcClientUrl}/register}`, {
    method: 'POST',
    body: JSON.stringify({
      client_name: 'MyApp',

      all_redirect_uris: false,
    }),
  });
}

main();
