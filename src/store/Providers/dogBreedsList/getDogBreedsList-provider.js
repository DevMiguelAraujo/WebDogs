export default async function fetchBreedList() {
  const dataBreeds = await fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((result) => result.message);
  const breedsList = Object.keys(dataBreeds);
  const fullBreeds = [];
  breedsList.map((breed) => {
    if (dataBreeds[breed].length) {
      dataBreeds[breed].map((subBreed) =>
        fullBreeds.push(breed + " " + subBreed)
      );
      return;
    }
    fullBreeds.push(breed);
  });
  return fullBreeds;
}
