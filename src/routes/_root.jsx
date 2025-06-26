import { Outlet, ScrollRestoration } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Whatsapp from "../components/whatsapp";

export default function Root() {
  return (
    <main className="overflow-hidden">
      <Outlet />
      <Whatsapp />
      <ScrollRestoration />
      <ToastContainer />
    </main>
  );
}
