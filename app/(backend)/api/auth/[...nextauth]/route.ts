import NextAuth, { Account, Profile } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

interface IUser {
  user: {
    message: string;
    user: {
      _id: string;
      name: string;
      email: string;
    };
    token: string;
  };
}

export const authOptions: any = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "mostafa@admin.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();

        if (res.ok && user) {
          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt(token: any) {
      return token;
    },
    async session(session: any, token: any) {
      // Add property to session, like an access_token from a provider.
      // session.user = token.user.user;
      console.log(token);
      console.log("<===================>");
      console.log("<===================>");
      console.log("<===================>");
      console.log("<===================>");
      console.log("<===================>");
      console.log("<===================>");

      console.log(session);

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
