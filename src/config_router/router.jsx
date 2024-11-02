import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Search from "../pages/search";
import About from "../pages/about";
import Loading from "../components/loading";
import { Suspense } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "procurar",
    element: (
      <Suspense fallback={<Loading />}>
        <Search />
      </Suspense>
    ),
  },
  {
    path: "sobre",
    element: <About />,
  },
]);

export default router;
