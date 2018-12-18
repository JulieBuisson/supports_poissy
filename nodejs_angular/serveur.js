// var http = require ('http');  // Appel à la bibliothèque issue de NPM

// var server = http.createServer(function(req, res) {  // On lance le serveur web
//     res.writeHead(200);                 // Fonction a exécuter quand le user se connecte
//     res.end('Salut tout le monde !');  // C'est un fonction callback
// });
// server.listen(8080);  // req : requête user - page, params, champs forms
//                      // res : resultat - souvent code HTML à envoyer.

                     
// // On peut envoyer du code HTML en réponse

// var http = require('http');

// var server = http.createServer(function(req,res){
//     res.writeHead(200,{"Content-type": "text/html"});
//     res.end('<p> Voici un paragraphe <strong> HTML </strong> ! </p>');
// });
// server.listen(8080);


// Quelle page est recherchée par le visiteur et quels paramètres ?
// Il suffit de parser la requête pour savoir quelle page est demandée

// var http = require('http');
// var url = require('url');

// var server = http.createServer(function(req,res){
//     var page = url.parse(req.url).pathname;
//     console.log(page);
//     res.writeHead(200, {"Content-type": "text/plain"});
//     res.write('Bien le bonjour !');
//     res.end();
// })
// server.listen(8080);