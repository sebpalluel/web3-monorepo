import { logger } from '@boilerplate/logger';
import type { Provider } from 'next-auth/providers';
import { TokenSetParameters } from 'openid-client';

export interface IdentityServerProfile {
  sub: string;
  email: string;
  given_name: string;
  family_name: string;
  picture: string;
}

interface IdentityProviderParams {
  clientId: string;
  clientSecret: string;
  identityProviderURL: string;
}

/**
 *
 * @param clientId
 * @param clientSecret
 * @param identityProviderURL
 * The URL where the IDP Kit is hosted
 * @constructor
 */
export const IdentityProvider = (params: IdentityProviderParams) => {
  const { identityProviderURL, ...clientParams } = params;
  return {
    id: 'identity-provider',
    name: 'Identity Provider',
    type: 'oauth',
    ...clientParams,
    wellKnown: `${identityProviderURL}/api/oidc/.well-known/openid-configuration`,
    authorization: {
      params: {
        scope: `openid`,
        response_type: 'code',
      },
    },
    idToken: false,
    token: {
      async request(context) {
        const details = {
          grant_type: 'authorization_code',
          code: context.params.code as string,
          redirect_uri: `${process.env.NEXTAUTH_URL}/api/auth/callback/identity-provider`,
        };

        const formBody: string[] = [];
        for (const property in details) {
          const encodedKey = encodeURIComponent(property);
          const encodedValue = encodeURIComponent(
            details[property as keyof typeof details]
          );
          formBody.push(encodedKey + '=' + encodedValue);
        }

        const finalFormBody = formBody.join('&');
        logger.debug(finalFormBody);
        const response = await fetch(
          `${identityProviderURL}/api/oidc/token?${finalFormBody}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: `Basic ${Buffer.from(
                `${context.provider.clientId}:${context.provider.clientSecret}`
              ).toString('base64')}`,
            },
          }
        );
        if (response.ok) {
          const data = (await response.json()) as TokenSetParameters;
          return { tokens: data };
        } else {
          throw new Error('Response failed.');
        }
      },
    },
    profile(profile) {
      return { id: profile.sub };
    },
  } as Provider;
};
