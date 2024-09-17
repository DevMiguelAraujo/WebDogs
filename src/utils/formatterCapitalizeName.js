export default function formatterCapitalizeName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export function formatterCapitalizeDoubleName(name) {
  return name.split(" ").map((name) => formatterCapitalizeName(name)).toString().replace(',', ' ') 
}
