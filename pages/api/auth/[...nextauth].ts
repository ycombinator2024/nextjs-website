import NextAuth from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import Auth0Provider from "next-auth/providers/auth0";
// import { supabase } from "@/lib/client";

const {
  AUTH0_CLIENT_ID = "",
  AUTH0_CLIENT_SECRET = "",
  AUTH0_ISSUER_BASE_URL = "",
} = process.env;

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, {
    providers: [
      Auth0Provider({
        clientId: AUTH0_CLIENT_ID,
        clientSecret: AUTH0_CLIENT_SECRET,
        issuer: AUTH0_ISSUER_BASE_URL,
      }),
    ],
    callbacks: {
      async signIn({ user, profile, account }) {
        console.log("user: ", user);
        console.log("profile", profile);
        console.log("account", account);

        let emailList = [
          "nikita@malinovsky.net",
          "niki@malinovsky.net",
          "dr_drei@sbcglobal.net",
        ];
        if (user && user.email && emailList.includes(user.email)) {
          return true;
        }
        return false;
      },
    },
    pages: {
      // error: "/auth/error",
    },
    debug: true,
  });
}
