import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
  useNavigation,
} from "@remix-run/react";

import "dotenv/config";

import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "./components/ui/sidebar";

import { AppSidebar } from "./components/app-sidebar";

import { Separator } from "./components/ui/separator";

import { Skeleton } from "./components/ui/skeleton";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const navigation = useNavigation();
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <a href="/">
              <p className=" font-mono">Boblogs</p>
            </a>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
            {navigation.state !== "idle" && (
              <Skeleton className="w-[100px] h-[20px] rounded-full" />
            )}
            <Outlet />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export function ErrorBoundary() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-screen flex justify-center items-center">
        <h1 className="lg:text-8xl md:text-4xl sm:text-2xl">Page Not Found</h1>
      </body>
    </html>
  );
}
