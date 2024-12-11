import { convexAuthNextjsMiddleware,createRouteMatcher, isAuthenticatedNextjs, nextjsMiddlewareRedirect } from "@convex-dev/auth/nextjs/server";
 const isPulicPage=createRouteMatcher(["/auth"]);
export default convexAuthNextjsMiddleware((request)=>{
    if(!isPulicPage(request) &&  !isAuthenticatedNextjs()){
        return nextjsMiddlewareRedirect(request,"/auth");
    }
    // if(isPulicPage(request) && isAuthenticatedNextjs()){
    //     return nextjsMiddlewareRedirect(request,"/");
    // } C'est le code qui marche
    isAuthenticatedNextjs().then(isAuthenticated => {
      if (isPulicPage(request) && isAuthenticated) {
          return nextjsMiddlewareRedirect(request, "/");
      }
  });
});    
 
export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};