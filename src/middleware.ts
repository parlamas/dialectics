import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define the routes that should be protected
const isProtectedRoute = createRouteMatcher([
  "/client",
  "/point",
  "/cv.html"  // This should match the exact route path
]);

// Apply Clerk middleware to protect the routes
export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth().protect();  // Redirects unauthenticated users to the sign-in page
  }
});

export const config = {
  matcher: [
    // This matcher excludes Next.js internals and common static file types
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
