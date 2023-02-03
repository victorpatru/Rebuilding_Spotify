import spotifyApi, { LOGIN_URL } from "@/lib/spotify";
import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import SpotifyProvider from "next-auth/providers/github";

async function refreshAccessToken(token: JWT) {
  try {
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken();

    console.log("Refresh Token is", refreshedToken);

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accountTokenExpires: Date.now() + refreshedToken.expires_in * 1000, // represents 1 hour into the future when our refresh will be required
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken, // Replace if new one came back else fall back to old refresh token
    };
  } catch (error) {
    console.log(error);

    return {
      ...token,
      // Return an error which we can later check on our frontend
      error: "RefreshAccessTokenError",
    };
  }
}

export default NextAuth({
  providers: [
    SpotifyProvider({
      // @ts-ignore
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      // @ts-ignore
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // Initial sign in
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_in * 1000,
        };
      }

      // Return previous token if it hasn't expired already
      if (Date.now() < token.accessTokenExpires) {
        console.log("Existing Token Is Valid, returning it ...");
        return token;
      }

      // Access token expires so we should refresh it
      console.log("Existing Token Is Invalid, Refreshing...");
      return await refreshAccessToken(token);
    },

    // What our user will be able to tap into as part of their session
    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;

      return session;
    },
  },
});
