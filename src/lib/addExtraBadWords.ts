const extraBadWords = [
  "asesinato",
  "asno",
  "cabrón",
  "chupada",
  "chupapolla",
  "chupeton",
  "chupetón",
  "concha",
  "drogas",
  "espermatozoide",
  "follador",
  "follar",
  "gilipolla",
  "hijaputa",
  "hijoputa",
  "imbecil",
  "imbécil",
  "jilipolla",
  "mierda",
  "pervertido",
  "pezon",
  "pezón",
  "prostituta",
  "sexo",
  "soplagaita",
  "soplapollas",
  "verga",
  "pene",
];

export function addExtraBadWords(filter: any) {
  filter.addWords(...extraBadWords);
}