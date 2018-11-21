// // Exercice 1
// var prénom = String (prompt("Entrez votre prénom."));
// var nom = String (prompt("Entrez votre nom."));
// alert("Bonjour "+ prénom +" "+nom);

//******************************************************************

// // Exercice 2
// var a = 2;
// a = a - 1;
// a++;
// // a = 2
// alert(a);

// var b = 8;
// b += 2;
// // b = 10
// alert(b);

// var c = a + b * b;
// // c = 102
// alert(c);

// var d = a * b + b;
// // d = 30
// alert(d);

// var e = a * (b + b);
// // e = 40
// alert(e);

// var f = a * b / a;
// // f = 10
// alert(f);

// var g = b / a * a;
// // g = 10
// alert(g);

//************************************************************************

// //Exercice 3
// var prix = Number (prompt("Entrez un prix :"));
// var tva = prix * 20 / 100;
// var resultat = prix + tva;
// console.log(resultat);

//***************************************************************************

// //Exercice 4
// var celcius = Number(prompt("Entrez une température en degrés celsius :"));
// var far = celcius * 9 / 5 + 32;
// console.log(celcius + " °C = " + far + " °F");

//****************************************************************************

// //Exercice 5
// var nombre1 = 5;
// var nombre2 = 3;
// var x = nombre1;
// nombre1 = nombre2;
// nombre2 = x;
// console.log(nombre1); 
// console.log(nombre2); 

//****************************************************************************

//Exercice 6
// var jour = String (prompt("Entrez un jour de la semaine"));
// //Avec conditions
// if (jour === "lundi") {
//     alert("Demain, on est mardi !");
// } else if (jour === "mardi") {
//     alert("Demain, on est mercredi !");
// } else if (jour === "mercredi") {
//     alert("Demain, on est jeudi !");
// } else if (jour === "jeudi") {
//     alert("Demain, on est vendredi !");
// } else if (jour === "vendredi") {
//     alert("Demain, on est samedi !");
// } else if (jour === "samedi") {
//     alert("Demain, on est dimanche !");
// } else if (jour === "dimanche") {
//     alert("Demain, on est lundi !");
// } else {
//     alert("Jour inconnu au bataillon !");
// }

// //Avec switch
// switch (jour) {
//     case "lundi":
//         console.log("Demain, on est mardi !");
//     break;
//     case "mardi":
//         console.log("Demain, on est mercredi !");
//     break;
//     case "mercredi":
//         console.log("Demain, on est jeudi !");
//     break;
//     case "jeudi":
//         console.log("Demain, on est vendredi !");
//     break;
//     case "vendredi":
//         console.log("Demain, on est samedi !");
//     break;
//     case "samedi":
//         console.log("Demain, on est dimanche !");
//     break;
//     case "dimanche":
//         console.log("Demain, on est lundi !");
//     break;
//     default:
//         console.log("Jour inconnu au bataillon !");
//     }

//****************************************************************************

//Exercice 7
// var nb1 = Number(prompt("Entrez un 1er nombre :"));
// var nb2 = Number(prompt("Entrez un 2eme nombre :"));
// if (nb1 < nb2) {
//     alert(nb1 + " est plus petit que " + nb2);
// } else if (nb1 > nb2) {
//     alert(nb1 + " est plus grand que " + nb2);
// } else {
//     alert(nb1 + " et " + nb2 + " sont égaux");
// }

//****************************************************************************

//Exercice 8
// var bac = Number(prompt("Entrez votre moyenne :"));
// if ((bac >=0) && (bac < 10)){
//     alert("Recalé !")
// }else if ((bac >= 10) && (bac < 12)){
//     alert("Reçu !")
// }else if((bac >= 12) && (bac <=20)){
//     alert("Reçu avec mention !")
// }else{
//     alert("Vas réviser banane !")
// }

//****************************************************************************

//Exercice 9
// var nb1 = Number(prompt("Entrez nombre1 :"));
// var nb2 = Number(prompt("Entrez nombre2 :"));
// var nb3 = Number(prompt("Entrez nombre3 :"));
// if (nb1 > nb2) {
//     nb1 = nb3 * 2;
// } else {
//     nb1++;
//     if (nb2 > nb3) {
//         nb1 = nb1 + nb3 * 3;
//     } else {
//         nb1 = 0;
//         nb3 = nb3 * 2 + nb2;
//     }
// }

//****************************************************************************

//Exercice 10
// var mois = Number(prompt("Entrez un mois en chiffre"))
// switch (mois) {
//     case 1: "janvier"
//     case 3: "mars"
//     case 5: "mai"
//     case 7: "juillet"
//     case 8: "aout"
//     case 10: "octobre"
//     case 12: "decembre"
//         alert("Ce mois comporte 31 jours.");
//         break;
//     case 4: "avril"
//     case 6: "juin"
//     case 9: "septembre"
//     case 11: "novembre"
//         alert("Ce mois comporte 30 jours.");
//         break;
//     case 2: "février"
//         alert("Ce mois comporte 28 jours.");
//         break;
//     default:
//         alert("Mois inconnu au bataillon !");
//     }

//****************************************************************************

//Exercice 11
// var heures = Number(prompt("Entrez l'heure"));
// var minutes = Number(prompt("Entrez les minutes"));
// var secondes = Number(prompt("Entrez les secondes"));
// if ((heures >= 0) && (heures <= 23) && (minutes >= 0) && (minutes <= 59) &&
//     (secondes >= 0) && (secondes <= 59)) {
//     secondes++, minutes++, heures++;
// if (secondes === 60) {
//     secondes = 0;
//      minutes++;
// if (minutes === 60) {
//     minutes = 0;
//     heures++;
// if (heures === 24) {
//      heures = 0;
//         }
//     }
// }
//     alert("Dans une heure, une minute et une seconde, il sera " + heures + " heures, " +
//         minutes + " minutes et " + secondes + " secondes");
// } else {
//     alert("Heure incorrecte !");
// }

//****************************************************************************

//Exercice 12
// var manege = Number(prompt("Entrez le nombre de tours souhaités"));
// for(i = 1; i <= manege; i++){
//     alert("C'est le tour de manège n°"+i);
// }

//****************************************************************************

//Exercice 13
// var saisi = Number(prompt("Entrez le chiffre :"));
// for (var i = 1; i <= saisi; i++) {  
// if (i % 2 === 0) {
// console.log(i + " est pair");
// }else if (i % 2 === 1){
//     console.log(i + " est impair");
// }
// }
// console.log(10 % 2); // Affiche 0 car 10 = 5 * 2 + 0
// console.log(11 % 2); // Affiche 1 car 11 = 5 * 2 + 1
// console.log(18 % 3); // Affiche 0 car 18 = 3 * 6 + 0
// console.log(19 % 3); // Affiche 1 car 19 = 3 * 6 + 1
// console.log(20 % 3); // Affiche 2 car 20 = 3 * 6 + 2

//****************************************************************************

//Exercice 14
// var nombre = 0;
// while ((nombre < 50) || (nombre > 100)) {
//     nombre = Number(prompt("Entrez un nombre compris entre 50 et 100 : "));
// }

//****************************************************************************

//Exercice 15
// var multi = Number(prompt("Entrez un chiffre :"));
// var resultat = 0;
// while (multi > 2 && multi < 9){
// for(i = 1; i <= 10; i++){
//     resultat = i * multi;
//     console.log(i +"*"+multi+" "+resultat)
// }
// break;
// }

//****************************************************************************

//Exercice 16
// var jeu = "";
// while(jeu != "oui" && jeu != "non"){
//     jeu = prompt("Ni oui, ni non !");
// }

//****************************************************************************

//Exercice 17
// var x = "";
// for(t = 1; t <= 7; t++){
//     x+= '#';
//     console.log(x);
// }

//****************************************************************************

//Exercice 18
// for (var nombre = 1; nombre <= 100; nombre++) {
//     if ((nombre % 3 === 0) && (nombre % 5 === 0))
//         console.log("FizzBuzz");
//     else if (nombre % 3 === 0)
//         console.log("Fizz");
//     else if (nombre % 5 === 0)
//         console.log("Buzz");
//     else
//         console.log(nombre);
// }

//****************************************************************************

//Exercice 19

//MA version

// console.log("Bienvenue dans ce jeu de devinette !");
// var solution = Math.floor(Math.random() * 100) + 1;
// console.log("(La solution est " + solution + ")");
// var devinette = String(prompt("Devinez le bon nombre !"));
// var essais = 0;
//     if(devinette < solution){
//     console.log("Le chiffre est plus grand");
//     prompt("Devinez le bon nombre. Celui là est trop petit !");
//     //essais++;
// } else if (devinette > solution){
//     console.log("Le chiffre est plus petit");
//     prompt("Devinez le bon nombre. Celui là est trop grand !");
//     //essais++;
// }else{
//     console.log("Nombre inconnu");
//     prompt("Devinez le bon nombre !");
// }

//Version de Abdoulaye
// alert("Hello et bienvenue !");

// var solution = Math.floor(Math.random() * 100) + 1;

// console.log("(La solution est " + solution + ")");

// for (var i = 1; i <= 6; i++) {

//     nbJoueur = parseInt(prompt("Le but du jeu est simple. Je pense à un nombre entre 0 et 100. A ton avis, quel est ce nombre ? Notes le dans la zone ci-dessous, tu as 6 essais."));

//     if (!isNaN(nbJoueur)) {
//         if (solution === nbJoueur) {
//             alert("Bravo vous avez trouvé !");
//             i = 6;
//         } else {
//             if (solution < nbJoueur) {
//                 alert("Le nombre est plus petit, essai " + i + " sur 6");
//             } else {
//                 alert("Le nombre est plus grand, essai " + i + " sur 6");
//             }
//         }
//     } else {
//         alert("Vous n'avez pas saisi un nombre !");
//     }
// }
// alert("La bonne réponse est " + solution + ".");

//****************************************************************************

//Exercice 20
// alert("Hello et bienvenue dans cette partie de Chiffoumi en 3 manches !")

// // 1ere Manche
// var chifoumi = String(prompt("Manche 1 : Pierre ? Feuille ? ou Ciseaux ?"));
// var ordi = Math.floor(Math.random() * 15);
// var scoreO = 0;
// var scoreC = 0;

// if (ordi < 5) {
//     ordi = "Pierre";
//     console.log(ordi);
// } else if (ordi >= 5 && ordi <= 10) {
//     ordi = "Ciseaux";
//     console.log(ordi);
// } else if (ordi > 10) {
//     ordi = "Feuille";
//     console.log(ordi);
// }

// if (chifoumi == "Pierre" || chifoumi == "pierre" || chifoumi == "PIERRE") {
//     chifoumi = "Pierre";
//     console.log(chifoumi);
// } else if (chifoumi == "feuille" || chifoumi == "Feuille" || chifoumi == "FEUILLE") {
//     chifoumi = "Feuille";
//     console.log(chifoumi);
// } else if (chifoumi == "ciseaux" || chifoumi == "Ciseaux" || chifoumi == "CISEAUX") {
//     chifoumi = "Ciseaux";
//     console.log(chifoumi);
// } else {
//     alert("Erreur");
// }

// if (ordi == chifoumi) {
//     alert("Egalité !");
//     scoreO += 1;
//     scoreC += 1;
//     console.log(scoreO + ' ' + scoreC);
// }
// else if (ordi == "Ciseaux" && chifoumi == "Pierre" || ordi == "Pierre" && chifoumi == "Feuille" || ordi == "Feuille" && chifoumi == "Ciseaux") {
//     alert("Gagné !");
//     scoreC += 1;
//     console.log(scoreO + ' ' + scoreC);
// }
// else if (chifoumi == "Feuille" && ordi == "Ciseaux" || chifoumi == "Pierre" && ordi == "Feuille" || chifoumi == "Ciseaux" && ordi == "Pierre") {
//     alert("Perdu !");
//     scoreO += 1;
//     console.log(scoreO + ' ' + scoreC);
// }

// // 2eme Manche
// var chifoumi = String(prompt("Manche 2 : Pierre ? Feuille ? ou Ciseaux ?"));
// var ordi = Math.floor(Math.random() * 15);

// if (ordi < 5) {
//     ordi = "Pierre";
//     console.log(ordi);
// } else if (ordi >= 5 && ordi <= 10) {
//     ordi = "Ciseaux";
//     console.log(ordi);
// } else if (ordi > 10) {
//     ordi = "Feuille";
//     console.log(ordi);
// }

// if (chifoumi == "Pierre" || chifoumi == "pierre" || chifoumi == "PIERRE") {
//     chifoumi = "Pierre";
//     console.log(chifoumi);
// } else if (chifoumi == "feuille" || chifoumi == "Feuille" || chifoumi == "FEUILLE") {
//     chifoumi = "Feuille";
//     console.log(chifoumi);
// } else if (chifoumi == "ciseaux" || chifoumi == "Ciseaux" || chifoumi == "CISEAUX") {
//     chifoumi = "Ciseaux";
//     console.log(chifoumi);
// } else {
//     alert("Erreur");
// }

// if (ordi == chifoumi) {
//     alert("Egalité !");
//     scoreO += 1;
//     scoreC += 1;
//     console.log(scoreO + ' ' + scoreC);
// }
// else if (ordi == "Ciseaux" && chifoumi == "Pierre" || ordi == "Pierre" && chifoumi == "Feuille" || ordi == "Feuille" && chifoumi == "Ciseaux") {
//     alert("Gagné !");
//     scoreC += 1;
//     console.log(scoreO + ' ' + scoreC);
// }
// else if (chifoumi == "Feuille" && ordi == "Ciseaux" || chifoumi == "Pierre" && ordi == "Feuille" || chifoumi == "Ciseaux" && ordi == "Pierre") {
//     alert("Perdu !");
//     scoreO += 1;
//     console.log(scoreO + ' ' + scoreC);
// }

// // 3eme Manche
// var chifoumi = String(prompt("Manche 3 : Pierre ? Feuille ? ou Ciseaux ?"));
// var ordi = Math.floor(Math.random() * 15);

// if (ordi < 5) {
//     ordi = "Pierre";
//     console.log(ordi);
// } else if (ordi >= 5 && ordi <= 10) {
//     ordi = "Ciseaux";
//     console.log(ordi);
// } else if (ordi > 10) {
//     ordi = "Feuille";
//     console.log(ordi);
// }

// if (chifoumi == "Pierre" || chifoumi == "pierre" || chifoumi == "PIERRE") {
//     chifoumi = "Pierre";
//     console.log(chifoumi);
// } else if (chifoumi == "feuille" || chifoumi == "Feuille" || chifoumi == "FEUILLE") {
//     chifoumi = "Feuille";
//     console.log(chifoumi);
// } else if (chifoumi == "ciseaux" || chifoumi == "Ciseaux" || chifoumi == "CISEAUX") {
//     chifoumi = "Ciseaux";
//     console.log(chifoumi);
// } else {
//     alert("Erreur");
// }

// if (ordi == chifoumi) {
//     alert("Egalité !");
//     scoreO += 1;
//     scoreC += 1;
//     console.log(scoreO + ' ' + scoreC);
// }
// else if (ordi == "Ciseaux" && chifoumi == "Pierre" || ordi == "Pierre" && chifoumi == "Feuille" || ordi == "Feuille" && chifoumi == "Ciseaux") {
//     alert("Gagné !");
//     scoreC += 1;
//     console.log(scoreO + ' ' + scoreC);
// }
// else if (chifoumi == "Feuille" && ordi == "Ciseaux" || chifoumi == "Pierre" && ordi == "Feuille" || chifoumi == "Ciseaux" && ordi == "Pierre") {
//     alert("Perdu !");
//     scoreO += 1;
//     console.log(scoreO + ' ' + scoreC);
// }

// // Résultat
// if (scoreO == scoreC) {

//     alert("Ex aequo avec l'ordinateur.")
// }
// if (scoreO > scoreC) {

//     alert("Vous avez perdu la partie.")
// }
// if (scoreO < scoreC) {

//     alert("Bravo ! Vous avez gagné la partie.")
// }

//****************************************************************************

//Exercice 21
// var nombre = Number (prompt("Entrez un nombre."));
// document.body.innerHTML = nombre;

//****************************************************************************

//Exercice 22

// var choix = Number(prompt("Entrez un nombre."));

// document.write("<center>"); //Pour centrer les pyramides

// for (var y = 0; y <= choix; ++y) //Pour répéter les pyramides 
// {
//     var random = Math.floor(Math.random() * 2);
//     console.log(random);
//     var color = '';
//     if (random == 0) {
//         color = 'red';
//     }
//     else if (random == 1) {
//         color = 'green';
//     }
//     else if (random == 2) {
//         color = 'blue';
//     }
//     for (var i = 0; i <= 3 + y * 2; i++) //Une loop, qui compte de 0 à 3 (nombre de rangées d'étoiles)
//     {
//         for (var x = 0; x <= i + y * 2; x++)//Une loop, qui compte de 0 jusqu'à la valeur de i
//         {
//             document.write("<span style='color:" + color + "'>*o*</span>");//Ecrit *o* sur la page
//         }
//         document.write("<br/>"); //Pour revenir à la ligne après chaque rangée d'étoiles
//     }
// }
// document.write('|||||'); //Rajoute un 'tronc' en bas des pyramides
// document.write("</center>"); //Ferme le centrage des pyramides ouvert au début
