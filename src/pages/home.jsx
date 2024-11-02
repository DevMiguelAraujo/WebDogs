import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gettingDogsImage } from "../store/Providers/dogRandomPost/dogRandomPost-slice";
import ImgPost from "../components/imgPost";
import IntroductionBox from "../components/introductionBox";
import getBreedNameByLink from "../utils/getBreedNameByLink";
import { DogBone } from "../assets/index";

export default function Home() {
  const homeIntroductionText = [
    "Dentro do nosso site você poderá encontrar varios Dogs.",
    "Cada imagem tem o nome da raça acima, você pode utilizar isso na página de procura.",
  ];
  const dogPosts = useSelector(({ dogPostSlice }) => dogPostSlice.imgs);
  const loadingPosts = useSelector(({ dogPostSlice }) => dogPostSlice.loading);
  const endPageRef = useRef();
  const dispatch = useDispatch();

  function needMorePosts() {
    const current = endPageRef.current;
    if (current) {
      const distanceBottom = current.getBoundingClientRect().bottom;
      if (distanceBottom <= window.innerHeight + 500 && !loadingPosts) {
        dispatch(gettingDogsImage(5));
      }
    }
  }

  function debounce(func) {
    const timeout = 300;
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply();
      }, timeout);
    };
  }

  addEventListener(
    "scroll",
    debounce(() => needMorePosts())
  );

  useEffect(() => {
    needMorePosts(10), [needMorePosts];
  });

  return (
    <section
      className="
      w-90p flex flex-col mx-auto gap-4
      sm:max-w-[1450px]
      "
    >
      <div>
        <IntroductionBox
          title={"Olá, seja bem vindo ao "}
          subTitle={"Dogs Everywhere!"}
          introductionText={homeIntroductionText}
        />
      </div>
      <main
        className="
        flex flex-wrap mx-auto gap-4 items-start justify-between text-white
        "
      >
        {dogPosts.map((img, index) => (
          <div key={img + index} className="">
            <ImgPost
              urlImg={img}
              name={getBreedNameByLink(img)}
            />
          </div>
        ))}
      </main>
      <div ref={endPageRef} className="items-center mx-auto flex flex-col">
        {loadingPosts ? (
          <div className="flex items-center justify-center text-base font-medium gap-4 px-4 py-8 w-90p bg-orange-300
            md:gap-8 md:px-8"
          >
            <picture className="animate-spin">
              <DogBone />
            </picture>
            <div className="flex flex-col
              sm:gap-4 sm:text-lg sm:font-bold"
            >
              <p>Estamos atraindo mais dogs.</p>
              <p>Espere um pouco.</p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
