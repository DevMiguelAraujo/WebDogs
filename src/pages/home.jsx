import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gettingDogsImage } from "../store/Providers/dogRandomPost/dogRandomPost-slice";
import ImgPost from "../components/imgPost";
import IntroductionBox from "../components/introductionBox";
import getBreedNameByLink from "../utils/getBreedNameByLink";

export default function Home() {
  const homeText = [
    "Sejá bem vindo ao nosso site, aqui você vai encontrar varias imagens de cachorros diferentes.",
    "Caso esteja querendo ver raças diferentes e descobrir novos tipos de cachorros, você veio ao lugar certo.",
    "Logo abaixo você tera acesso a varios posts de cachorros, cada post contêm o nome da raça e um numero de ID da foto, esse ID te permite carregar essa mesma foto novamente ao acessar PROCURAR.",
  ];
  const dogPosts = useSelector(({ dogPostSlice }) => dogPostSlice.imgs);
  const loadingPosts = useSelector(({ dogPostSlice }) => dogPostSlice.loading);
  const endPageRef = useRef();
  const dispatch = useDispatch();

  function needMorePosts({ current }) {
    const distanceBottom = current.getBoundingClientRect().bottom;
    if (distanceBottom <= window.innerHeight + 500) {
      dispatch(gettingDogsImage(5));
    }
  }

  addEventListener("scroll", () => {
    if (endPageRef.current && !loadingPosts) needMorePosts(endPageRef);
  });

  return (
    <main className="flex flex-col w-90p mx-auto gap-20">
      <IntroductionBox
        title={"Olá, seja bem vindo ao Dogs Everywhere!"}
        introductionText={homeText}
      />
      {dogPosts.map((img, index) => (
        <ImgPost urlImg={img} name={getBreedNameByLink(img)} key={img + index} />
      ))}
      <div ref={endPageRef}>{loadingPosts ? "Carregando..." : ""}</div>
    </main>
  );
}
