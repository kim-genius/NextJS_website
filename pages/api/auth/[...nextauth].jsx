import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { connectDB } from "@/utils/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret : 'qwer1234',
  adapter : MongoDBAdapter(connectDB),
}
export default NextAuth(authOptions)