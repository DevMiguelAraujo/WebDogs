import router from "../config_router/router";

export default function Header({ links, children }) {
  return (
    <header>
      <h1>{children ? children : "Dogs Everywhere"}</h1>
      <nav>
        {links
          ? Object.keys(links).map((nameLink) => (
              <button
                key={nameLink}
                onClick={() => router.navigate(links[nameLink])}
              >
                {nameLink}
              </button>
            ))
          : ""}
      </nav>
    </header>
  );
}
