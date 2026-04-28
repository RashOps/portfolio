import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      // Bloque l'accès à toute personne dont l'email n'est pas celui de l'admin
      const adminEmail = process.env.ADMIN_EMAIL;
      
      if (adminEmail && user.email === adminEmail) {
        return true;
      }
      
      // Redirige silencieusement ou bloque
      console.warn(`Tentative de connexion non autorisée avec l'email: ${user.email}`);
      return false;
    },
    async session({ session, token }) {
      // Ajoute des informations utiles à la session si besoin
      session.user.id = token.sub;
      return session;
    }
  },
  pages: {
    signIn: '/admin/login',
    error: '/admin/login', // En cas d'échec, on renvoie sur la même page
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 Jours
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
