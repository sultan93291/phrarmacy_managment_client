import AosProvider from "@/provider/Aos/AosProvider";
import Announcement from "@/shared/Announcement";
import Navbar from "@/shared/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";

function AuthLayout() {
  return (
    <AosProvider>
      <div>
        <ScrollRestoration></ScrollRestoration>
        <Announcement />
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </AosProvider>
  );
}

export default AuthLayout;
