import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "select_account",
                },
            },
        }),
    ],
    callbacks: {
        async signIn({ user }) {
            const isAllowed = user.email === process.env.ALLOWED_USER_EMAIL;
            return isAllowed ? true : false;
        },
        async redirect({ url, baseUrl }) {
            if (url.startsWith("/create-post")) return url;
            if (url.startsWith(baseUrl)) return `${baseUrl}/create-post`;
            return baseUrl;
        },
    }
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };