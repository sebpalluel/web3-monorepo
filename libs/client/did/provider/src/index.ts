import { logger } from '@logger';
import type { Provider } from 'next-auth/providers';
import { TokenSetParameters } from 'openid-client';

export interface DidServerProfile {
  sub: string;
  email: string;
  given_name: string;
  family_name: string;
  picture: string;
}

interface DidProviderParams {
  clientId: string;
  clientSecret: string;
  didProviderURL: string;
}

/**
 *
 * @param clientId
 * @param clientSecret
 * @param didProviderURL
 * The URL where the IDP Kit is hosted
 * @constructor
 */
export const DidProvider = (params: DidProviderParams) => {
  const { didProviderURL, ...clientParams } = params;
  return {
    id: 'did-provider',
    name: 'Did Provider',
    type: 'oauth',
    ...clientParams,
    wellKnown: `${didProviderURL}/api/oidc/.well-known/openid-configuration`,
    authorization: {
      params: {
        scope: 'openid profile',
        response_type: 'code',
      },
    },
    idToken: false,
    token: {
      async request(context) {
        const details = {
          grant_type: 'authorization_code',
          code: context.params.code as string,
          redirect_uri: `${process.env.NEXTAUTH_URL}/api/auth/callback/did-provider`,
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
          `${didProviderURL}/api/oidc/token?${finalFormBody}`,
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
      // {
      //   sub: 'did:key:z6MkhjJpQmhNypbzkhBob51jPGQBCUTg63m6hoDT8APfnAHt',
      //   birthdate: '1993-04-08',
      //   gender: 'FEMALE',
      //   name: 'Jane DOE',
      //   given_name: 'Jane',
      //   family_name: 'DOE',
      //   email: undefined,
      //   emailVerified: null
      // }
      return {
        id: profile.sub,
        name: profile.name,
        email: profile.email,
        firstName: profile.given_name,
        lastName: profile.family_name,
      };
    },
  } as Provider;
};
