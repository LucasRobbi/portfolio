import { Outlet, ScrollRestoration } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "../components/header";
import Whatsapp from "../components/whatsapp";
import Footer from "../components/footer";

export default function Root() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Outlet />
      <Footer />
      <Whatsapp />
      <ScrollRestoration />
      <ToastContainer />
    </main>
  );
}
