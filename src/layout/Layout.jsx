import Navbar from "../shared/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../shared/Footer";
import Announcement from "../shared/Announcement";
import AosProvider from "@/provider/Aos/AosProvider";

function Layout() {
  return (
    <AosProvider>
      <div>
        <ScrollRestoration />
        <Announcement />
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </AosProvider>
  );
}

export default Layout;
