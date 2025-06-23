import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css'

import "yet-another-react-lightbox/styles.css";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';

import './index.css';

import Root from "./routes/_root";
import Error from "./routes/error";

import Home from "./routes/home";
import Politica from "./routes/politica-de-privacidade";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <Error />, 
    children: [
      {index: true, element: <Home /> },
      { path: "/politica-de-privacidade", element: <Politica /> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
