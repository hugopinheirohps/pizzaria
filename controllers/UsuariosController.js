// Importando o array de pizzas
const pizzas = require('../database/pizzas.json');

// Criando e exportando o objeto literal que conterá todas as funções (controllers)
module.exports = {

    index: (req, res) => {
        //res.send('pizzas');
        //res.render('index.ejs');

        res.render('index.ejs', {cardapio :pizzas});

 
    }

}