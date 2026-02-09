const totlCotisation=document.getElementById("total-cotisation")
const topEmplyr=document.getElementById("top-employeur")
const salaireMoyen=document.getElementById("salire-moyen")
const declaration=document.getElementById("declaration")


let employees=JSON.parse(localStorage.getItem("employees")) || [];


function TotaleCotisations(){
  let totals=employees.reduce((prev, cur)=>prev + +(cur.salary),0)
  totlCotisation.innerText=totals
}
TotaleCotisations()

let employeurs= JSON.parse(localStorage.getItem("emloyeurs")) || [];

function topEmployeur(){
  employeurs.forEach(element => {

    
  });
}






