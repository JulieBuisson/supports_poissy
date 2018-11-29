function d(arg) {
    document.write(arg + "<br>");
}

var jour = document.getElementsByTagName("div");

var jours = [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

d("<select>");
for (i = 0; i < jours.length; i++) {
    jour.innerHTML = jours[i];
    d('<option>' + jours[i] + '</option>');
}d("<select>");

var mois = [1,2,3,4,5,6,7,8,9,10,11,12]

d("<select>");
for (i = 0; i < mois.length; i++) {
    jour.innerHTML = mois[i];
    d('<option>' + mois[i] + '</option>');
} d("<select>");


d = new Date();
document.write(d.toLocaleDateString());

document.write('<br>');

j = new Date();
document.write(jours[j.getDay()]);


var jour = document.getElementById('jour');
var mois = document.getElementById('mois');
var annee = document.getElementById('annee');
var date = new Date();
var j = date.getDate();
var m = date.getMonth()+1;
var a = date.getFullYear();

jour.innerHTML += "<option>" + j + "</option>";
mois.innerHTML += "<option>" + m + "</option>";
annee.innerHTML += "<option>" + a + "</option>";