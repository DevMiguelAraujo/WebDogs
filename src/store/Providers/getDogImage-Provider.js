export default async function fetchDogImage(numberOfImages){
  const imgs = []
  for(let initialValor = 0; initialValor < numberOfImages; initialValor++){
    await fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(result => imgs.push(result.message))
  }
  return imgs
}