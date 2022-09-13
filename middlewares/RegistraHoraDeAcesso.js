function RegistraHoraDeAcesso(req, res, next){

    const fs = require('fs');
    const path = require('path');    

    let dataHora = new Date();
    let strDataHora = dataHora.toISOString().substring(0,19).replace('T',' ')
    
    // Caminho para o arquivo de log de acessos
    let caminhoDoArquivo = path.resolve(`./logs/${strDataHora.substring(0,10)}-acessos.txt`);

    // Registrar essa hora no arquivo acessos.txt
    //fs.writeFileSync(caminhoDoArquivo, strDataHora + "\n", {flag:'a'})

    let url = req.url;

    fs.writeFileSync(caminhoDoArquivo, `${strDataHora} - ${url} \n`, {flag:'a'});
 
    //enviar para o proximo middle
    next();
}

module.exports = RegistraHoraDeAcesso;


