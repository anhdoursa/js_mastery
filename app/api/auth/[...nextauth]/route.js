import { connectToDB } from "@utils/database";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import User from "@models/user";
const handler = NextAuth({
  providers: [GoogleProvider({ clientId: "", clientSecret: "" })],
  async session({ session }) {},
  async signIn({ profile }) {
    try {
      await connectToDB();

      // check if the user already exists

      // if not, create a new user

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
});

export { handler as GET, handler as POST };
