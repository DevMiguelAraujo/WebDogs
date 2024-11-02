import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gettingDogBreedList } from "../store/Providers/dogBreedsList/dogBreedsList-slice";
import { formatterCapitalizeDoubleName } from "../utils/formatterCapitalizeName";
import { gettingDogPostByBreed } from "../store/Providers/dogPostByBreed/dogPostByBreed-slice";
import { MagnifyingGlass } from "../assets/index";
import IntroductionBox from "../components/introductionBox";
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
  return (
    <main className="flex flex-col w-90p mx-auto gap-10">
      <div className="border-pinkNai border-4 rounded-lg text-lg">
        <div
          className={`flex px-4 py-4 bg-purple-400 ${
            search ? "rounded-t-sm" : "rounded-sm"
          }`}
        >
          <input
            className='w-full bg-purple-400 outline-none placeholder:text-black'
            name="search"
            type="text"
            placeholder="Procurar Raça..."
            onChange={({ target }) => setSearch(target.value)}
            value={search}
          />
          {<picture><MagnifyingGlass /></picture>}
        </div>
        {search && !loadingPost && (
          <div>
            {breedList.map((breed) =>
              breed.includes(search.toLowerCase()) ? (
                <button
                  className="
                  px-4 py-2 border-t-4 border-pinkNai bg-purple-400 w-full text-start block 
                  hover:bg-purple-500
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
      {!byBreedPosts.length && (
        <IntroductionBox
          title={"Deseja procurar por uma raça especifica?"}
          subTitle={"Veio ao lugar certo."}
          introductionText={[
            "No campo de busca você pode pesquisar por raças de cachorros.",
            "Todas as imagens são adquiridas através da API da DOG CEO",
          ]}
        />
      )}
      <div className="flex flex-col w-90p mx-auto gap-20 items-center">
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
