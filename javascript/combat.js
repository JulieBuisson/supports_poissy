function d(arg) {
    document.write(arg + "<br>");
}

var perso;

function Player(pseudo, race, pdv, attaque, lvl, arme, sort, potion) {
    this.pseudo = pseudo,
        this.race = race,
        this.pdv = pdv,
        this.attaque = attaque,
        this.lvl = lvl,
        this.arme = arme,
        this.sort = sort,
        this.potion = potion;
}

var iop = new Player("Sir Pinpin", "Iop", 200, 25, 1, "Epée", "Colere de Iop");
var cra = new Player("Roger", "Crâ", 150, 25, 1, "Arc");
var sacri = new Player("Boursin", "Sacrieur", 300, 30, 1, "Tête");
var eni = new Player("Clochette", "Eniripsa", 125, 20, 1, "Bague ", "Soins");
var monstre = new Player("Kralamour", "Monstre", 400, 50, 5, "Tentacules");


while (perso = prompt("Choisir un personnage : iop, cra, eni ou sacri")) {

    if (perso == "iop") {
        d(iop.pseudo + " entre dans le donjon au niveau " + iop.lvl + " avec " + iop.pdv + "pdv et " + iop.attaque + " d'attaque.");
        break;
    } else if (perso == "cra") {
        d(cra.pseudo + " entre dans le donjon au niveau " + cra.lvl + " avec " + cra.pdv + "pdv et " + cra.attaque + " d'attaque.");
        break;
    } else if (perso == "sacri") {
        d(sacri.pseudo + " entre dans le donjon au niveau " + sacri.lvl + " avec " + sacri.pdv + "pdv et " + sacri.attaque + " d'attaque.");
        break;
    } else if (perso == "eni") {
        d(eni.pseudo + " entre dans le donjon au niveau " + eni.lvl + " avec " + eni.pdv + "pdv et " + eni.attaque + " d'attaque.");
        break;
    }
}

d("<br>");

d("Le monstre " + monstre.pseudo + " fait face au héros dans la 1ere salle du donjon. Il est au niveau " + monstre.lvl + " avec " + monstre.pdv + "pdv et " + monstre.attaque + " d'attaque. Il a l'air aggressif, le combat s'annonce tendu !");



