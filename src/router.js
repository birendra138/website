import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Client from "./pages/Client";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import OurWork from "./pages/OurWork";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/our-work",
      element: <OurWork />
    },
    {
      path: "/our-client",
      element: <Client/>
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    },
  ]);

  export default router