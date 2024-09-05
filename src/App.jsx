import { RouterProvider } from "react-router-dom";
import Header from "./components/header";
import router from "./config_router/router";
import "./App.css";

function App() {
  return (
    <section>
      <Header/>
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
