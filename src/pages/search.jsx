import { useMemo, useState } from "react";
import IntroductionBox from "../components/introductionBox";
import { useDispatch, useSelector } from "react-redux";
import { gettingDogBreedList } from "../store/Providers/dogBreedsList/dogBreedsList-slice";
import { formatterCapitalizeDoubleName } from "../utils/formatterCapitalizeName";
import { gettingDogPostByBreed } from "../store/Providers/dogPostByBreed/dogPostByBreed-slice";
import ImgPost from "../components/imgPost";
import getBreedNameByLink from "../utils/getBreedNameByLink";

export default function Search() {
  const breedList = useSelector(
    ({ dogBreedsSlice }) => dogBreedsSlice.breedList
  );
  const { byBreedPosts, loadingPost } = useSelector(
    ({ dogPostByBreedSlice }) => dogPostByBreedSlice
  );
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  useMemo(() => dispatch(gettingDogBreedList()), [dispatch]);
  console.log(byBreedPosts);
  return (
    <main className="flex flex-col w-90p mx-auto gap-10">
      <IntroductionBox
        title={"Deseja procurar por uma raça especifica?"}
        subTitle={"Veio ao lugar certo."}
        introductionText={[
          "Logo Abaixo você encontrará um campo para colocar a raça que deseja procurar.",
          "Após colocar o nome da raça, clique no botão BUSCAR.",
          "Dentro de poucos segundos uma imagem de uma cachorro da raça desejada vai aparecer.",
          "caso queira mais uma imagem da mesma raça, clique em BUSCAR MAIS.",
          "Caso queira buscar foto de uma raça diferente, repita todos os passos novamente inserindo um novo nome de raça dessa vez.",
        ]}
      />
      <div className="border-slate-200 border-4 rounded-lg">
        <input
          className={`w-full p-4 bg-slate-700 ${
            search ? "rounded-t-sm" : "rounded-sm"
          }`}
          name="search"
          type="text"
          placeholder="Procurar Raça..."
          onChange={({ target }) => setSearch(target.value)}
          value={search}
        />
        {search && !loadingPost && (
          <div>
            {breedList.map((breed) =>
              breed.includes(search.toLowerCase()) ? (
                <button
                  className="
                  px-4 py-2 border-b-2 border-slate-200 bg-slate-800 w-full text-start block 
                  hover:bg-sky-700
                  "
                  onClick={() => {
                    dispatch(gettingDogPostByBreed(breed.replace(" ", "/")));
                    setSearch("");
                  }}
                  key={breed}
                >
                  {formatterCapitalizeDoubleName(breed)}
                </button>
              ) : (
                ""
              )
            )}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-20">
          {byBreedPosts &&
            byBreedPosts.map((linkImg) => (
              <div key={linkImg} className="text-center">
                <ImgPost urlImg={linkImg} name={getBreedNameByLink(linkImg)} />
              </div>
            ))}
        </div>
    </main>
  );
}
