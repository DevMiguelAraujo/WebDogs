import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Search from "../pages/search";
import About from "../pages/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "procurar",
    element: <Search/>
  },
  {
    path: "sobre",
    element: <About/>
  }
]);

export default router