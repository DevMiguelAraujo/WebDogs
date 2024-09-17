export default async function fetchDogPostByBreed(breed){
  return await fetch('https://dog.ceo/api/breed/' + breed + '/images/random').then(response => response.json()).then(result => result.message)
}