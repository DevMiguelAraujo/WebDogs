import { useState } from "react";
import router from "../config_router/router";
import { DogHead } from "../assets/index";

export default function Header({ links }) {
  const [namePage, setNamePage] = useState(router.state.location.pathname);
  const [visibilityMenu, setVisibilityMenu] = useState("");

  return (
    <header className="sticky top-0 mb-4 bg-pinkNai">
      <div
        className="font-semibold h-20 flex mx-auto text-white
        sm:text-2xl sm:font-semibold sm:max-w-[1200px]
        lg:text-3xl lg:h-28 lg:font-bold
        "
      >
        <div className="w-90p flex mx-auto justify-between items-center">
          <div>
            <picture>
              <DogHead />
            </picture>
          </div>
          <nav
            className="
            text-base flex gap-4 font-bold
            lg:gap-12
            "
          >
            {links
              ? Object.keys(links).map((nameLink) => (
                  <button
                    className={`
                      p-1 transition-all ${visibilityMenu? 'opacity-100' : 'opacity-0'}
                      lg:p-2
                      ${
                        namePage === links[nameLink]
                          ? "border-b-2 border-current"
                          : "border-b-2 border-transparent"
                      }
                      `}
                    key={nameLink}
                    onClick={() => {
                      router.navigate(links[nameLink]);
                      setNamePage(links[nameLink]);
                    }}
                  >
                    {nameLink}
                  </button>
                ))
              : ""}
            <div
              onClick={() => {
                visibilityMenu
                  ? setVisibilityMenu("")
                  : setVisibilityMenu("open");
              }}
              className="cursor-pointer relative flex h-8 items-center"
            >
              <div
                className={`
                relative h-[6px] w-7 rounded-lg transition-all duration-300 ${
                  visibilityMenu ? "bg-transparent" : "bg-white"
                }
                after:absolute after:h-[6px] after:w-7 after:rounded-lg after:transition-all after:duration-300 after:bg-white ${
                  visibilityMenu
                    ? "after:top-0 after:rotate-[-45deg]"
                    : "after:top-3"
                }
                before:absolute before:h-[6px] before:w-7 before:rounded-lg before:transition-all before:duration-300 before:bg-white ${
                  visibilityMenu
                    ? "before:top-0 before:rotate-45"
                    : "before:bottom-3"
                }
                `}
              ></div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
