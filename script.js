// const galeria=document.querySelector(".galeria");
// const letras=["A","B","C","D","E","F"];
// const imganes=[];
// galeria.addEventListener("load",creacionDeElementos());// cuando cargue la pagina cargara el JS y llama a creaciondeElementos
// function creacionDeElementos(){
//     const DIV=document.createElement("div");//general
//     for(letra of letras){
//         const TARJETA=document.createElement("div");//tarjeta
//         const H2=document.createElement("h2");
//         H2.textContent=letra;
//         TARJETA.appendChild(H2);
//         DIV.appendChild(TARJETA);     
//     }
//      galeria.appendChild(DIV);
// }

// const tarjetas = document.querySelectorAll(".card");

// tarjetas.forEach((tarjeta) => {
//     tarjeta.addEventListener("click", (e) => {
//         const frente = tarjeta.querySelector(".card-frente");
//         const dorso = tarjeta.querySelector(".card-dorso");
//         frente.style.display = frente.style.display === "none" ? "block" : "none";
//         dorso.style.display = dorso.style.display === "none" ? "block" : "none";
//         console.log(e.target)
//     });
// });
const tarjetas = document.querySelectorAll(".card");
tarjetas.forEach((tarjeta) => {
    tarjeta.addEventListener("click", () => {
        tarjeta.classList.toggle("volteada");
    });
});