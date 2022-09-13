function PontuaPizza(req, res, next){

    // capturar o id
    let id = req.params.id;

    //levantar pontuacao da pizza
    const pizzas = require('../database/pizzas.json');
    
    let pizza = pizzas.find(e => e.id == id);

    if(!pizza)
    {
        return res.send("Pizza não encontrada");
    }

    //pontuaçao ++
    let pontuacao;

    if(pizza.score == undefined){
        pizza.score = 1;
    }
    else{
        pizza.score++;
    }

    //salvar no arquivo
    const fs = require('fs');
    const path = require('path');
    let caminhoDoArquivo = path.resolve('./database/pizzas.json');
    let stringJson = JSON.stringify(pizzas, null, 4);
    fs.writeFileSync(caminhoDoArquivo, stringJson);


    //enviar para o proximo middle
    next();

}

module.exports = PontuaPizza;