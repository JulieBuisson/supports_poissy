// Yvette

// document.querySelector("button").addEventListener("click", envoi);
// function envoi(x){
//     document.querySelectorAll(".ligne")[0].innerHTML= document.getElementById("name").value;
    
//     document.querySelectorAll(".ligne")[1].innerHTML= document.getElementById("prenom").value;

//     document.querySelectorAll(".ligne")[2].innerHTML= document.getElementById("email").value;

//     document.querySelectorAll(".ligne")[3].innerHTML= document.getElementById("telephone").value;

//     x.preventDefault();
// };



// Sonia

// var infoContact = document.querySelectorAll("input");
// var bouton = document.querySelector("button");
// var ligne = document.querySelector("tbody");

// bouton.addEventListener("click", function(x){
//     ligne.innerHTML += "<tr><td>" + infoContact[0].value + "</td><td>" + infoContact[1].value + "</td><td>" + infoContact[2].value + "</td><td>" + infoContact[3].value + "</td></tr>";
//     x.preventDefault();
// });



// Anas

// var input = document.getElementsByTagName("input");
// var td = document.getElementsByTagName("td");
// var bouton = document.getElementsByTagName("button");

// bouton[0].onclick = function(x){
//     td[4].innerHTML = input[0].value;
//     td[5].innerHTML = input[1].value;
//     td[6].innerHTML = input[2].value;
//     td[7].innerHTML = input[3].value;
//     x.preventDefault();
// }



// Mohamed

var tb = document.querySelector("tbody");
var bouton = document.querySelector("button");
var input = document.querySelectorAll("form input");

b.onclick = function(x) {

    x.preventDefault();

    if(inp[0].value != "" 
    && inp[1].value != "" 
    && inp[2].value != "" 
    && inp[3].value != ""){

        tb.innerHTML += "<tr>";

        tb.innerHTML += 
        remplir (0) + 
        remplir (1) + 
        remplir (2) + 
        remplir (3) ;  

        tb.innerHTML += "</tr>";
    }
}

function remplir(i){
   return "<td>" + inp[i].value + "</td>"
} 