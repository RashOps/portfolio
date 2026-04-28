import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/admin/login",
  },
});

export const config = {
  // Protects all routes under /admin EXCEPT the login page itself
  matcher: ["/admin/dashboard/:path*"],
};
