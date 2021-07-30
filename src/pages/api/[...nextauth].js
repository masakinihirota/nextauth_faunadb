import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import * as Fauna from 'faunadb';
import { FaunaAdapter } from '@next-auth/fauna-adapter';

const client = new Fauna.Client({
  secret: 'secret',
  scheme: 'http',
  domain: 'localhost',
  port: 8443
});

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    })
  ],
  adapter: FaunaAdapter({ faunaClient: client })
  //   ...
});
