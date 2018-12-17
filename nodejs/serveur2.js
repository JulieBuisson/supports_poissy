// Introduire des conditions d'affichage en fonction de la page appellée

var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){
    var page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {"Content-type": "text/plain"});
    if (page == '/'){
        res.write('Vous êtes sur la page d\'accueil, que puis je pour vous ?');
    }
    else if (page == '/sous-sol'){
        res.write('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
    }
    else if (page == '/etage/1/chambre'){
        res.write('Hé ho, c\'est privé ici !');
    }
    res.end();
})
server.listen(8080);