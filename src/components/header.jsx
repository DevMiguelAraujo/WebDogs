import React, { useState } from "react";
import router from "../config_router/router";

export default function Header({ links, children }) {
  const [namePage, setNamePage] = useState(location.href.split("5173").pop());

  React.useEffect(() => {
    console.log('namepage' + namePage);
  }, [namePage]);

  return (
    <header className="flex justify-between items-center px-4 h-20 bg-indigo-950">
      <div>
        <h1 className="text-xl max-w-28 text-center">
          {children ? children : "Dogs Everywhere"}
        </h1>
      </div>
      <nav className="text-sm flex gap-4">
        {links
          ? Object.keys(links).map((nameLink) => (
              <button
                className={`p-1 ${namePage === links[nameLink]? 'border-b-2' : 'border-b-0'}`}
                key={nameLink}
                onClick={() => {
                  router.navigate(links[nameLink])
                  setNamePage(links[nameLink])
                  console.log(links[nameLink])
                }}
              >
                {nameLink}
              </button>
            ))
          : ""}
      </nav>
    </header>
  );
}
