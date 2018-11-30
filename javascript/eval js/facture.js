function d(arg) {
    document.write(arg + "<br>");
}

// Date

var date = new Date();

var jour = document.getElementById('jour');
var mois = document.getElementById('mois');
var annee = document.getElementById('annee');

var d = date.getDate();
var m = date.getMonth() + 1;
var y = date.getFullYear();
var year = y - 25;

jour.innerHTML += "<option>" + d + "</option>";
mois.innerHTML += "<option>" + m + "</option>";
annee.innerHTML += "<option>" + y + "</option>";

for (i = 1; i <= 31; i++) {
    jour.innerHTML += "<option>" + i + "</option>"
};
for (i = 1; i <= 12; i++) {
    mois.innerHTML += "<option>" + i + "</option>"
};
for (i = year; i <= date.getFullYear() + 30; i++) {
    annee.innerHTML += "<option>" + i + "</option>"
};


// Nouveau Client

function Client(societe, nom, rue, code_postal_ville, numero) {
    this.societe = societe,
        this.nom = nom,
        this.rue = rue,
        this.code_postal_ville = code_postal_ville,
        this.numero = numero;
}

var umbrella = ["Umbrella Corporation", "Umbrella", "7 rue du Hive", "66600 Racoon City", "01.34.56.28.51"];

var blizzard = ["Blizzard Entertainment", "Blizzard", "112 rue de la Brise", "75015 Paris", "01.28.74.32.45"];

var sony = ["Sony Entertainment", "Sony", "34 avenue de la Paix", "75016 Paris", "01.84.56.18.27"];

var fujikawa = ["Fuji Corporation", "Fujikawa", "18 boulevard du franc pecheur", "18750 Mont-Gendre", "01.57.48.89.99"];

var ubisoft = ["Ubisoft Paris Studio", "Ubisoft", "57bis avenue du Boulgour", "28475 Funkytown", "01.37.78.71.95"];

var client1 = document.getElementById('newClient');
var client2 = document.getElementById('newClient');
var client3 = document.getElementById('newClient');
var client4 = document.getElementById('newClient');
var client5 = document.getElementById('newClient');

var client6 = document.getElementById('newExpediteur');
var client7 = document.getElementById('newExpediteur');
var client8 = document.getElementById('newExpediteur');
var client9 = document.getElementById('newExpediteur');
var client10 = document.getElementById('newExpediteur');

client1.innerHTML += "<option>" + sony[0] + "</option>";
client2.innerHTML += "<option>" + blizzard[0] + "</option>";
client3.innerHTML += "<option>" + umbrella[0] + "</option>";
client4.innerHTML += "<option>" + fujikawa[0] + "</option>";
client5.innerHTML += "<option>" + ubisoft[0] + "</option>";

client6.innerHTML += "<option>" + sony[0] + "</option>";
client7.innerHTML += "<option>" + blizzard[0] + "</option>";
client8.innerHTML += "<option>" + umbrella[0] + "</option>";
client9.innerHTML += "<option>" + fujikawa[0] + "</option>";
client10.innerHTML += "<option>" + ubisoft[0] + "</option>";




var boutton = document.querySelector("#changerImage");

boutton.addEventListener("click", carroussel);

function carroussel() {
    var monImage = document.querySelector("#monImage");
    var monImageSource = monImage.getAttribute("src");

    switch (monImageSource) {
        case 'img/0.jpeg':
            monImage.src = "img/1.jpg";
            break;
        case 'img/1.jpg':
            monImage.src = "img/2.jpg";
            break;
        case 'img/2.jpg':
            monImage.src = "img/3.jpg";
            break;
        case 'img/3.jpg':
            monImage.src = "img/0.jpeg";
            break;
    }
}