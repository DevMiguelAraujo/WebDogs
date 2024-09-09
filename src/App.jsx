import { RouterProvider } from "react-router-dom";
import Header from "./components/header";
import router from "./config_router/router";

function App() {
  return (
    <section className="bg-gray-900 min-h-screen font-Inter text-white">
      <Header links={{Início: '/', Procurar: '/procurar', Sobre: '/sobre'}}>Dogs Everywhere</Header>
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
