import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId:<any> process.env.GITHUB_ID,
      clientSecret:<any> process.env.GITHUB_SECRET,
    }),
  ],
});

export { handler as GET, handler as POST };