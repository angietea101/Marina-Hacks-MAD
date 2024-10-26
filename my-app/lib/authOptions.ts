import { NextAuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {},
                email: {},
                password: {}
            },
            async authorize(credentials, req) {
                return null;
            }
        })
    ]
}