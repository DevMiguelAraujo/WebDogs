export default async function fetchDogImage(){
  const data = await fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(result => result)
  return data
}