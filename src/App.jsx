import { RouterProvider } from "react-router-dom";
import Header from "./components/header";
import router from "./config_router/router";

function App() {
  return (
    <section className="bg-violet-100 min-h-screen font-Inter">
      <Header links={{ Início: "/", Procurar: "/procurar", Sobre: "/sobre" }}/>
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
