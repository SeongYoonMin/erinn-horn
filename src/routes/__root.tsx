import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

// npx tsr generate

export const Route = createRootRoute({
  component: () => (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 w-full max-w-[1280px] mx-auto">
        <Outlet />
      </div>
      <Footer />
      <TanStackRouterDevtools />
    </main>
  ),
});
