// Importando o array de pizzas
const pizzas = require('../database/pizzas.json');

// Criando e exportando o objeto literal que conterá todas as funções (controllers)
module.exports = {

    index: (req, res) => {
        //res.send('pizzas');
        //res.render('index.ejs');

        res.render('index.ejs', {pizzas :pizzas});

    },

    show: (req, res) => {

        let id = req.params.id;
        
        let pizza = pizzas.find(e => e.id == id);
        if(pizza == undefined) res.send("Pizza não encontrada.");

        
        let proximo = pizza.id+1;
        if(pizzas.find(e => e.id == proximo) == undefined) proximo = pizza.id;

        let anterior = pizza.id-1;
        if(anterior == 0) anterior = 1;

        res.render('pizza.ejs', {pizza, anterior, proximo});
       
    },


    //search: (req, res) => {
    //    let busca = req.query.q;
        //res.send(busca);
    //    let retorno = pizzas.filter(function(pizzas){
    //        return pizzas.nome == busca;
    //    });  
    //    res.render('index.ejs', {pizzas :retorno}); 
    //}

    search:(req,res) =>{
        let search = req.query.q
        let pizzaSearch = pizzas.filter(p => p.nome.toLowerCase().includes(search.toLowerCase()))
        res.render('index', {pizzas:pizzaSearch})
    },

    addCart:(req,res) =>{
        //res.send("Vou adicionar a pizza ao carrinho.." + req.body.pizzaSelecionada);
    
        //verificar se existe
        //caso haja, adicionar ao array
        //caso não haja, criar um array
        if(req.session.pizzas){
            req.session.pizzas.push(req.body.pizzaSelecionada);
        }else
        {
            req.session.pizzas = [req.body.pizzaSelecionada];
        }   

        res.redirect('/pizzas');
        console.log(req.session);
    
    }

}