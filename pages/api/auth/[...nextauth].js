import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    // OAuth authentication providers
    FacebookProvider({
      clientId: process.env.FB_APP_ID,
      clientSecret: process.env.FB_APP_SECRET_KEY,
    }),
  ],
})
