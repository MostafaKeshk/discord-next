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
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.user._id;
        token.token = user.token;
        token.name = user.user.name;
        token.email = user.user.email;
      }

      return token;
    },
    async session({ session, token }: any) {
      const body = {
        ...session,
        token: token.token,
        user: {
          ...session.user,
          id: token.id,
        },
      };

      return body;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
