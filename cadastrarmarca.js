let marcas = [];

function cadastrarMarca(marca) {
  marcas.push(marca);
  console.log("Marca cadastrada com sucesso!");
}

cadastrarMarca("Toyota");
cadastrarMarca("Ford");
cadastrarMarca("Honda");

console.log("Marcas cadastradas:");
console.log(marcas);
