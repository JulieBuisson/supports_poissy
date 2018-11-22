function d(arg) {
    document.write(arg + "<br>");
}

/*
-- 01 -- Commentaires, Affichage, Concaténation
-- 02 -- Variables, Constantes, type de données

-- 03 -- Opérateurs (logiques et arithmétiques)
-- 04 -- Les conditions

-- 05 -- Les boucles
-- 06 -- Fonctions (utilisateurs et prédéfinies)

-- 07 -- Array (tableaux)
-- 08 -- Object (objets)
*/

// commentaire sur une seule ligne

// alert("J'affiche quelque chose");
console.log("bonjour je suis dans la console");

document.write("<h2>Commentaires, Affichage, Concaténation </h2>");

document.write("bonjour " + "je m'appelle" + " " + "Julie");

document.write("<h2>Variables, Constantes, Type de données</h2>");

/* 
   Définition : une variable est un espace nomé, appelé mémoire, qui permet de conserver le temps d'éxécution du script.
*/

// INTERDIT !
// MAVARIABLE Mavariable ma variable ma-variable ma/variable*
// é è ï â  01maVariable, attention aux noms de variables déjà réservés.

var maVariable = 1;
var monTexte = "du texte";
var monTableau = [1, 2, 3];
var monTableau2 = ["a", "b", "c"];

var maVariable2;
maVariable2 = 3;

var nom = "Dupont", prenom = "Pierre";

document.write(monTexte + maVariable);

document.write("<br>");

//exercice : déclarer une variable qui a pour valeur 15 et l'afficher
var nombre = 15;
console.log(nombre);
document.write(nombre);

document.write("<br>");

//reprendre la variable qye vous avez déclaré et lui donner une nouvelle valeur (8 par exemple) et l'afficher. Que ce passe-t-il ?
nombre = 7;
d(nombre);
console.log(nombre);


var fruits = "pomme"; //pomme fraise
d(fruits);

// pomme = pomme + fraise
fruits = fruits + "fraise";
d(fruits);

fruits += "banane";
d(fruits);

const MA_VARIABLE = 20;
d(MA_VARIABLE);

d(typeof MA_VARIABLE + " " + typeof fruits + " " + typeof monTableau);
console.log(typeof monTableau);

//exercice : declarer 3 variables (nom, prénom et age) et afficher une belle présentation "je m'appelle ..." ensuite afficher le type de nos variables.
var prenom = "Julie";
var nom = "Buisson";
var age = 22;
age += " ans";

d("je m'appelle " + prenom + " " + nom + " " + "et j'ai " + age);
d(typeof prenom + " " + typeof nom + " " + typeof age);


d("<h2>Opérateurs (logiques et arithmétiques)</h2>");

var nbr1 = 2, nbr2 = 3, resultat;
resultat = nbr1 + nbr2;

// 2 = 2 + 3
nbr1 += nbr2;

// 0 = 5
resultat = nbr1;
d(resultat);

resultat = nbr1 - nbr2;
d(resultat);

resultat = nbr1 / nbr2;
d(resultat);

resultat = nbr1 * nbr2;
d(resultat);

// -=  /=  *=  %

/* 
> strictement superieur
< strictement inferieur
>= superieur ou egal
<= inferieur ou egal
= affectation
== comparaison de valeur
=== comparaison de valeur ET type
!= different de.
*/

// if (condition) {
//     instruction
// }

d("<h2>Les conditions</h2>");

var a = 4, b = 4, c = 8;

if (a == b) {
    d("oui a est égal à b");
}

if (a > c) {
    d("oui a est plus grand que c");
} else {
    d("non a n'est pas plus grand que c");
}

// &&
if (a == b && c > b) {
    d("true");
} else {
    d("false");
}

// ||
if (a == b || c < b) {
    d("true");
} else {
    d("false");
}

//exercice : j'ai 3 variables 78, 45, 103 vérifier si 103 est plus grand que 78 ? Si c'est le cas afficher la valeur de la variable la plus grande.
//Ensuite verifier si 45 est plus grand que 78 ou si 103 est plus grand que 78 et afficher la valeur la plus grande.

var x = 45, y = 78, z = 103;

if (z > y) {
    d(z);
}

if (x > y || z > y) {
    d(z);
}


var nbr6 = 10;

if (nbr6 > 10) {
    d("fait quelque chose");
} else if (nbr6 != 10) {
    d("fait autre chose");
} else if (nbr6 == 10) {
    d("oui 10 est egal à 10");
} else {
    d("aucune des conditions n'est vérifiée");
}


var couleur = "jaune";

switch (couleur) {
    case "bleu":
        d("j'aime le bleu");
        break;
    case "rose":
        d("j'aime le rose");
        break;
    case "jaune":
        d("j'aime le jaune");
        break;
    default:
        d("j'aime aucune de ces couleurs");
        break;
}

// ===

if ("1" == 1) {
    d("true");
} else {
    d("false");
}

if ("1" === 1) {
    d("true");
} else {
    d("false");
}

var dutext = "un texte";
if (typeof dutext != "string") {
    d("true");
} else {
    d("false");
}

// is not a number
if (isNaN(nbr6)) {
    d("true");
} else {
    d("false");
}

//Si ce n'est pas !
if (!isNaN(nbr6)) {
    d("true");
} else {
    d("false");
}

//condition ternaire

var voiture = "bmw";
// (voiture == "bmw") ? "oui" : "non"
d((voiture == "bmw") ? "oui" : "non");

//prompt()
//prompt("veuillez saisir votre nom :");

//exercice : demandez l'aga de l'utilisateur et ensuite afficher un messafe si il est mineur ou majeur. 
//ATTENTION : si l'utilisateur saisi autre chose qu'un nombre afficher un msg d'erreur.
//parseInt()

// var tonAge = parseInt(prompt("Veuillez saisir votre age :"));

// if(tonAge <= 17){
//     alert("Vous êtes mineur");
// } else if(tonAge >= 18 && tonAge <= 119){
//     alert("Vous êtes majeur");
// } else if(tonAge >=120){
//     alert("Vous êtes probablement immortel")
// } else{
//     alert("Critical Error !");
// }



d("<h2>Boucles</h2>");

// incrémentation
for (var i = 0; i <= 10; i++) {
    d("je suis le message numéro " + i);
}

d("<br>");

// décrémentation
for (var i = 10; i >= 0; i--) {
    d("je suis le message numéro " + i);
}

d("<br>");

//boucle While
var j = 0;
while (j <= 10) {
    d("Je suis le message " + j);
    j++;
}

d("<br>");

//do while
var k = 0;
do {
    d("Message n°" + k);
    k++;
} while (k <= 10)


d("<br>");

//exercice : demander à l'utilisateur d'entrer son age, tant que la valeur entrée par l'utilisateur n'est pas un nombre.

var age;

console.log(typeof age);

// do{
//     age = parseInt (prompt("Veuillez saisir votre âge :"));
//     console.log(typeof age);
//     if(age >= 18){
//         d("Vous êtes majeur");
//     } else{
//         d("Vous êtes mineur");
//     }
// }while(isNaN(age))


d("<h2>Fonctions prédéfinies et utilisateurs</h2>");

document.write("du texte <br>");

var unePhrase = "bonjour comment vas-tu ?";
d(unePhrase.toUpperCase());

function addition(valeur1, valeur2) {
    d("J'appelle la fonction addition");
    return valeur1 + valeur2;
}
d(addition(1, 6));

//exercice : faire une fonction qui calcule la TVA d'un prix. (19.6)

function tva(prixHT) {
    var prixTTC = prixHT * (1 + 0.196);
    return prixTTC;
} d(tva(100));

//creer une fonction appliquerTVA2 qui permet de calculer le prix TTC avec une TVA définie par l'utilisateur par exemple.
//appliquerTVA2(155,19.6)

function appliquerTVA2(prixHT, tva2) {
    var prixTTC = prixHT * (1 + tva2 / 100);
    return prixTTC.toFixed(2);
} d(appliquerTVA2(155, 5.5))

//amélioration possible, afficher seulement 2 chiffres après la virgule
//toFixed()

//function maFunction(){}

var maFonction = function () {
    d("Je suis maFonction");
}
maFonction();


// IIFE = Immediatly Invoked Function Expression
(function () {
    d("Bonjour je suis la fonction anonyme");
})();

//ecrire une fonction qui verifie l'age de l'utilisateur

// function ageUtilisateur(age){
//     var age2 = parseInt (prompt("Quel est votre âge ?"));
//     return "L'utilisateur a " + age2 + " ans";
// }d(ageUtilisateur(age));


function verifierAge(age) {
    if (age >= 18) {
        d("Vous êtes majeur");
    }
    if (age <= 17) {
        d("vous êtes mineur");
    }
}
verifierAge(17);
verifierAge(18);

//faire une fonction qui demande l'age de l'utilisateur et qui verifie son age

function demanderAge() {

    do {
        age = parseInt(prompt("veuillez saisir un age "));
    } while (isNaN(age))
}

//ecrire une fonction qui demande le nom de l'utilisateur, ensuite afficher une présentation de celui ci

// function nomUtilisateur(name){
//     var name = String (prompt("Quel est votre nom ?"));
//     var firstname = String (prompt("Votre prénom ?"));
//     return "L'utilisateur s'appelle " + name + " " + firstname;
// }d(nomUtilisateur(name));


//ecrire une fonction qui affiche un "Hello World" x fois defini par l'utilisateur par exemple afficherPhrase(10);

function afficherPhrase(nombre) {
    for (var hey = 1; hey <= nombre; hey++) {
        d("Hello World ! " + hey);
    }
} afficherPhrase(10);

//fonction presentationFinale(), vous demandez l'age de l'utilisateur
//son nom, son prenom et vous verifiez aussi son âge (mineur ou majeur)
//ensuite vous afficher une presentation de celui ci

// function presentationFinale(age,nom,prenom){

//     var age = parseInt (prompt("Quel est votre âge ?"));
//     var nom = String (prompt("Quel est votre nom ?"));
//     var prenom = String (prompt("Quel est votre prénom ?"));
//     if(age >= 18){
//         d("L'utilisateur est majeur");
//     }
//     if(age <= 17){
//         d("L'utilisateur est mineur");
//     }

//     return "L'utilisateur a " + age + " ans et s'appelle " + prenom + " " + nom;
// }
// d(presentationFinale(age,nom,prenom)); 

// function presentationFinale(){
//     ageUtilisateur();
//     nomUtilisateur();
//     verifierAge(age)
// }presentationFinale();


//ecrire une fonction qui verifie le type de donnée d'une variable par exemple verifie(maVariable)

function verifier(variable) {
    d(typeof variable);
}
variable = "ok";
verifier(variable)


//ecrire une fonction qui affiche un message pour informer l'utilisateur si la variable qu'il teste est de type
//"chaine de caractères" ou "nombre", par exemple verifier(variable) --> "votre variable est de type"


function verifie(variable) {

    if (typeof variable === "number" || typeof variable === "string") {
        d("Votre variable est de type : " + typeof variable);
    } else {
        d("Votre variable est de type : " + typeof variable);
    }
}
verifie(10);
verifie("blabla");
verifie([1, 2, 3]);


//porté global et local d'une variable

var animal = "un chien";

function test() {
    d(animal);
}
test();


function test2() {
    animal2 = "un chat";
    d(animal);
}
test2();
d(animal2);



d("<h2>Array (Les Tableaux) </h2>");

var liste_fruits = ["fraise", " pomme", " banane", " peche", " fraise", " pomme", " banane", " peche", " fraise", " pomme", " banane", " peche"];

d(liste_fruits);
console.log(liste_fruits);
d(liste_fruits[0]);
d(liste_fruits[3]);


for (var i = 0; i < liste_fruits.length; i++) {
    d(liste_fruits[i]);
}

//afficher seulement les bananes

// d(liste_fruits[2]);
// d(liste_fruits[6]);
// d(liste_fruits[10]);

for (var i = 0; i < liste_fruits.length; i++) {
    if (liste_fruits[i] == " banane") {
        d(liste_fruits[i]);
    }
}

for (var indice in liste_fruits) {
    d(indice + " : " + liste_fruits.length[indice]);
}

//afficher que les peches

for (var i = 0; i < liste_fruits.length; i++) {
    if (liste_fruits[i] == " peche") {
        d(liste_fruits[i]);
    }
}

for (var indice in liste_fruits) {
    if (liste_fruits[indice] == " peche") {
        d(indice + " : " + liste_fruits[indice])
    }
}

var liste_contact = [["pierre", "paul", "jacques", "rachid"], [14, 26, 32, 45]];

console.log(liste_contact);

d(liste_contact[0][2]);

//une boucle imbriquée

for (var i = 0; i < liste_contact.length; i++) {
    for (var j = 0; j < liste_contact[i].length; j++) {
        d("tableau numero : " + i + " indice numero : " + j + " : " + liste_contact[i][j]);
    }
}



d("<h2>Object</h2>");

var monObjet = {};
monObjet.nom = "ESCOBAR";
monObjet.prenom = "Pablo";
monObjet.age = 45;

d(monObjet.prenom + " " + monObjet.age);

var Humain = {
    sexe: "male",
    origine: "x ou y",
    age: 45
}

d(Humain.sexe);

Humain.couleur = "blanc";

d(Humain.couleur);

var Voiture = {
    marque: "Mercedes",
    modele: "class A",
    couleur: "noir",
    changerCouleur: function (nouvelleCouleur) {
        //Voiture.couleur = "rose";
        return this.couleur = nouvelleCouleur;
    },
    optionsDeSerie: ["clim", "autoradio", "park-assist"],
    annee: 2017,
    motorisation: {
        energie: "diesel",
        puissance: "110 cv"
    }
};

d(Voiture.modele);
d(Voiture.couleur);
Voiture.changerCouleur("violet");
d(Voiture.couleur);
d(Voiture.optionsDeSerie[1]);
d(Voiture.motorisation.energie);



for (var elements in Voiture) {
    d("propriétés : " + elements + " valeur : " + Voiture[elements]);
    for (var elements in Voiture.motorisation) {
        d("propriétés : " + elements + " valeur : " + Voiture.motorisation[elements]);
    }
}
