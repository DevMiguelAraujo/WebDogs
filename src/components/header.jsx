import router from "../config_router/router";

export default function Header() {
  function NavClick(path) {
    if (path === "Início") path = "";
    router.navigate("/" + path);
  }

  return (
    <header>
      <h1>Dogs Everywhere</h1>
      <nav>
        <li
          onClick={({ target }) => {
            NavClick(target.innerText);
          }}
        >
          Início
        </li>
        <li
          onClick={({ target }) => {
            NavClick(target.innerText);
          }}
        >
          Procurar
        </li>
        <li
          onClick={({ target }) => {
            NavClick(target.innerText);
          }}
        >
          Sobre
        </li>
      </nav>
    </header>
  );
}
