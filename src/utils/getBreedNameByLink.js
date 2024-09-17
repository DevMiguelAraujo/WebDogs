import formatterCapitalizeName from "./formatterCapitalizeName";

export default function getBreedNameByLink(url) {
  const name = url.split("/")[4];
  return formatterCapitalizeName(name);
}