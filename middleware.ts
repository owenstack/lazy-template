import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/api/webhooks(.*)"],
  ignoredRoutes: ["/api/uploadthing" ]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
