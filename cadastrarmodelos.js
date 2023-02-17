var modelos = [];

function cadastrarModelo(nomeModelo, nomeMarca) {
    
    var modelo = {
      nomeModelo: nomeModelo,
      nomeMarca: nomeMarca
    };
    
    modelos.push(modelo);
    
    console.log("Modelo cadastrado com sucesso!");
    
    // imprime todos os modelos cadastrados até o momento
    console.log("Modelos cadastrados:");
    for (var i = 0; i < modelos.length; i++) {
      console.log(modelos[i].nomeModelo + " - " + modelos[i].nomeMarca);
    }
  }
  cadastrarModelo("Civic", "Honda");

  
