import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./config_router/router";

function App() {
  return (
    <>
      <h1>Dogs Social Media</h1>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
