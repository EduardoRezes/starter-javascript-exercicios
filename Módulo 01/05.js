function exibeHabilidades(usuarios) {
  for (usuario of usuarios) {
    console.log(`O ${usuario.nome} possui habilidades ${usuario.habilidades.join(", ")}`);
  }
}

var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

exibeHabilidades(usuarios);
