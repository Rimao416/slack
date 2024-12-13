import { ConvexClientProvider } from "@/components/convex-client-provider";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import "./globals.css";
// import { CreateWorkspaceModal } from "@/features/workspaces/components/create-workspace-modal";
import { Modals } from "@/components/modal";
import { Toaster } from "@/components/ui/toaster";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="en">
        <body>
          <ConvexClientProvider>
            <Toaster/>
            <Modals/>{children}
          </ConvexClientProvider>
        </body>    
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
