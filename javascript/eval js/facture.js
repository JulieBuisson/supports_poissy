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
for (i = year; i <= date.getFullYear() + 25; i++) {
    annee.innerHTML += "<option>" + i + "</option>"
};


// Nouveau Client  // Expedier à

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

var fujikawa = ["Fuji Corporation", "Fujikawa", "18 blv du pecheur", "18750 Mont-Gendre", "01.57.48.89.99"];

var ubisoft = ["Ubisoft Paris Studio", "Ubisoft", "57 avenue du Boulgour", "28475 Funkytown", "01.37.78.71.95"];

var select1 = document.getElementById('newClient');

select1.innerHTML += "<option>" + 'Blizzard' + "</option>";
select1.innerHTML += "<option>" + 'Sony' + "</option>";
select1.innerHTML += "<option>" + 'Umbrella' + "</option>";
select1.innerHTML += "<option>" + 'Ubisoft' + "</option>";
select1.innerHTML += "<option>" + 'Fujikawa' + "</option>";

var select2 = document.getElementById('newExpediteur');

select2.innerHTML += "<option>" + 'Fujikawa' + "</option>";
select2.innerHTML += "<option>" + 'Ubisoft' + "</option>";
select2.innerHTML += "<option>" + 'Umbrella' + "</option>";
select2.innerHTML += "<option>" + 'Blizzard' + "</option>";
select2.innerHTML += "<option>" + 'Sony' + "</option>";

var input = document.getElementsByTagName("input");
var nomSociete = document.getElementById('redigerCheque');
var tel = document.getElementById("telephone");
var adresse = document.getElementById("adresse");

select1.onclick = function () {
    if (select1.value == "Nouveau client") {
        input[5].value = "";
        input[5].disabled = false;
        input[6].value = "";
        input[6].disabled = false;
        input[7].value = "";
        input[7].disabled = false;
        input[8].value = "";
        input[8].disabled = false;
        input[9].value = "";
        input[9].disabled = false;
    }
    else if (select1.value == "Ubisoft") {
        input[5].value = ubisoft[0];
        input[5].disabled = true;
        input[6].value = ubisoft[1];
        input[6].disabled = true
        input[7].value = ubisoft[2];
        input[7].disabled = true;
        input[8].value = ubisoft[3];
        input[8].disabled = true;
        input[9].value = ubisoft[4];
        input[9].disabled = true;
        if (select1.value == "Ubisoft") {
            nomSociete.value = ubisoft[0];
            tel.value = ubisoft[4];
            adresse.value = ubisoft[2];
            d(nomSociete, tel, adresse);
        }
    }
    else if (select1.value == "Sony") {
        input[5].value = sony[0];
        input[5].disabled = true;
        input[6].value = sony[1];
        input[6].disabled = true
        input[7].value = sony[2];
        input[7].disabled = true;
        input[8].value = sony[3];
        input[8].disabled = true;
        input[9].value = sony[4];
        input[9].disabled = true;
        if (select1.value == "Sony") {
            nomSociete.value = sony[0];
            tel.value = sony[4];
            adresse.value = sony[2];
            d(nomSociete, tel, adresse);
        }
    }
    else if (select1.value == "Umbrella") {
        input[5].value = umbrella[0];
        input[5].disabled = true;
        input[6].value = umbrella[1];
        input[6].disabled = true
        input[7].value = umbrella[2];
        input[7].disabled = true;
        input[8].value = umbrella[3];
        input[8].disabled = true;
        input[9].value = umbrella[4];
        input[9].disabled = true;
        if (select1.value == "Umbrella") {
            nomSociete.value = umbrella[0];
            tel.value = umbrella[4];
            adresse.value = umbrella[2];
            d(nomSociete, tel, adresse);
        }
    }
    else if (select1.value == "Fujikawa") {
        input[5].value = fujikawa[0];
        input[5].disabled = true;
        input[6].value = fujikawa[1];
        input[6].disabled = true
        input[7].value = fujikawa[2];
        input[7].disabled = true;
        input[8].value = fujikawa[3];
        input[8].disabled = true;
        input[9].value = fujikawa[4];
        input[9].disabled = true;
        if (select1.value == "Fujikawa") {
            nomSociete.value = fukikawa[0];
            tel.value = fujikawa[4];
            adresse.value = fujikawa[2];
            d(nomSociete, tel, adresse);
        }
    }
    else if (select1.value == "Blizzard") {
        input[5].value = blizzard[0];
        input[5].disabled = true;
        input[6].value = blizzard[1];
        input[6].disabled = true
        input[7].value = blizzard[2];
        input[7].disabled = true;
        input[8].value = blizzard[3];
        input[8].disabled = true;
        input[9].value = blizzard[4];
        input[9].disabled = true;
        if (select1.value == "Blizzard") {
            nomSociete.value = blizzard[0];
            tel.value = blizzard[4];
            adresse.value = blizzard[2];
            d(nomSociete, tel, adresse);
        }
    }
}

select1.onkeyup = function () {
    if (select1.value == "Nouveau client") {
        nomSociete.value = input[5].value;
        tel.value = input[7].value;
        adresse.value = input[9].value;
        d(nomSociete, tel, adresse);
    }
}

select2.onclick = function () {
    if (select2.value == "Nouveau client") {
        input[10].value = "";
        input[10].disabled = false;
        input[11].value = "";
        input[11].disabled = false;
        input[12].value = "";
        input[12].disabled = false;
        input[13].value = "";
        input[13].disabled = false;
        input[14].value = "";
        input[14].disabled = false;
    }
    else if (select2.value == "Ubisoft") {
        input[10].value = ubisoft[0];
        input[10].disabled = true;
        input[11].value = ubisoft[1];
        input[11].disabled = true
        input[12].value = ubisoft[2];
        input[12].disabled = true;
        input[13].value = ubisoft[3];
        input[13].disabled = true;
        input[14].value = ubisoft[4];
        input[14].disabled = true;
    }
    else if (select2.value == "Sony") {
        input[10].value = sony[0];
        input[10].disabled = true;
        input[11].value = sony[1];
        input[11].disabled = true
        input[12].value = sony[2];
        input[12].disabled = true;
        input[13].value = sony[3];
        input[13].disabled = true;
        input[14].value = sony[4];
        input[14].disabled = true;
    }
    else if (select2.value == "Umbrella") {
        input[10].value = umbrella[0];
        input[10].disabled = true;
        input[11].value = umbrella[1];
        input[11].disabled = true
        input[12].value = umbrella[2];
        input[12].disabled = true;
        input[13].value = umbrella[3];
        input[13].disabled = true;
        input[14].value = umbrella[4];
        input[14].disabled = true;
    }
    else if (select2.value == "Fujikawa") {
        input[10].value = fujikawa[0];
        input[10].disabled = true;
        input[11].value = fujikawa[1];
        input[11].disabled = true
        input[12].value = fujikawa[2];
        input[12].disabled = true;
        input[13].value = fujikawa[3];
        input[13].disabled = true;
        input[14].value = fujikawa[4];
        input[14].disabled = true;
    }
    else if (select2.value == "Blizzard") {
        input[10].value = blizzard[0];
        input[10].disabled = true;
        input[11].value = blizzard[1];
        input[11].disabled = true
        input[12].value = blizzard[2];
        input[12].disabled = true;
        input[13].value = blizzard[3];
        input[13].disabled = true;
        input[14].value = blizzard[4];
        input[14].disabled = true;
    }
}

// Tableau

// function Produits(code, libelle, prix) {
//     this.code = code,
//         this.libelle = libelle,
//         this.prix = prix;
// }

// var option1 = ["#463652", "Pack PS4 Slim Black 4K 2To", "399.99€"];
// var option2 = ["#654251", "World of Warcraft Edition Collector", "369.99€"]
// var option3 = ["#754125", "Marvel Spider Man", "69.99€"]
// var option4 = ["#895463", "Assasin's Creed Odyssey", "69.99€"]
// var option5 = ["#254879", "Resident Evil VII BioHazard Collector", "89.99€"]
// var option6 = ["#325468", "Tekken 7 Edition Collector Deluxe Premium", "299.99€"]

// var select3 = document.getElementsByClassName("produit");
// var td = document.querySelectorAll("td");

// select3[0].innerHTML += "<option>" + option1 + "</option>";
// select3[0].innerHTML += "<option>" + option2 + "</option>";
// select3[0].innerHTML += "<option>" + option3 + "</option>";
// select3[0].innerHTML += "<option>" + option4 + "</option>";
// select3[0].innerHTML += "<option>" + option5 + "</option>";
// select3[0].innerHTML += "<option>" + option6 + "</option>";

// select3[1].innerHTML += "<option>" + option1 + "</option>";
// select3[1].innerHTML += "<option>" + option2 + "</option>";
// select3[1].innerHTML += "<option>" + option3 + "</option>";
// select3[1].innerHTML += "<option>" + option4 + "</option>";
// select3[1].innerHTML += "<option>" + option5 + "</option>";
// select3[1].innerHTML += "<option>" + option6 + "</option>";

// select3[2].innerHTML += "<option>" + option1 + "</option>";
// select3[2].innerHTML += "<option>" + option2 + "</option>";
// select3[2].innerHTML += "<option>" + option3 + "</option>";
// select3[2].innerHTML += "<option>" + option4 + "</option>";
// select3[2].innerHTML += "<option>" + option5 + "</option>";
// select3[2].innerHTML += "<option>" + option6 + "</option>";

// select3[3].innerHTML += "<option>" + option1 + "</option>";
// select3[3].innerHTML += "<option>" + option2 + "</option>";
// select3[3].innerHTML += "<option>" + option3 + "</option>";
// select3[3].innerHTML += "<option>" + option4 + "</option>";
// select3[3].innerHTML += "<option>" + option5 + "</option>";
// select3[3].innerHTML += "<option>" + option6 + "</option>";

// select3.onclick = function () {
//     if (select3.value == 'option1') {
//         td[0].value = option1.code;
//         td[0].disabled = true;
//         td[1].value = option1.libelle;
//         td[1].disabled = true;
//         td[2].value = option1.prix;
//         td[2].disabled = true;
//     }
//     else if (select3.value == 'option2') {
//         td[0].value = option2[0];
//         td[0].disabled = true;
//         td[1].value = option2[1];
//         td[1].disabled = true;
//         td[2].value = option2[2];
//         td[2].disabled = true;
//     }
// };

var libe1 = document.getElementById('libe1');
var prix1 = document.getElementById('prix1');
var sel = document.getElementById('produit');
var sel2 = document.getElementById('produit2');
var sel3 = document.getElementById('produit3');
var sel4 = document.getElementById('produit4');

function Produits(libe1, prix1) {
    if (sel.value == "#463652") {
        libe1.innerHTML = "Pack Ps4 Slim Black 4K 2To";
        prix1.innerHTML = 399.99;
    }
};

sel.onclick = function () {
    Produits(libe1, prix1);
}


//Boutton imprimer

function imprimer() {
    window.print();
}