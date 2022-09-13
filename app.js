// Importando o express
const express = require('express');
//import session
const session = require('express-session');

// Criando a aplicação express
const app = express();

//configurar view engine
app.set('view engine', 'ejs');

//para configurar a pasta views para outro
//lugar que não seja o padrão
//app.set('views', "caminho para a pasta views");

//verificar se a requisição é para um arquivo que
//está na pasta public. no caso das referencias da imagem do arquivo html/ejs
app.use(express.static("public"));

//processa formulários post e organiza a info no req.body
app.use(express.urlencoded({ extended: false }));

// Importando o roteador que lida com as rotas 
const PizzasRouter = require('./routes/PizzasRouter')
const UsuariosRouter = require('./routes/UsuariosRouter')
const RegistraHoraDeAcesso = require('./middlewares/RegistraHoraDeAcesso');

// Fazendo com que a aplicação utilize o roteador para todas as req que chegarem 
app.use(RegistraHoraDeAcesso);

app.use(
    session({
        secret: 'CHAVE-SECRETA',
        resave: false,
        saveUninitialized: true
    })
)


//direcionando urls para as rotas
app.use('/pizzas', PizzasRouter);

app.use('/usuarios', UsuariosRouter);


// Adicionando uma rota na aplicação que responde para usuário diretamente... (isso não é MVC, mas funciona)
app.get('/', (req,res) => {res.send("Olá, visitante")})

// Pondo a aplicação para rodar escutando na porta 3000
app.listen(3000, ()=>{console.log("servidor rodando na porta 3000")});

