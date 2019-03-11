// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window


const pokeData = window.POKEMON.pokemon;
let list = [];
for (let i = 0; i < pokeData.length; i++) {
let pokeList = "<div class='pokemonScreen'>" + " <img src='" + pokeData[i].img + "'/>" + "<br>" + pokeData[i].num + "<br> " + pokeData[i].name + "</div>";
list += pokeList;
}

function viewPokemon(pokemon) {
document.getElementById("pokeList").innerHTML = "";
pokemon.forEach(element => {
console.log(element.name, element.type);
document.getElementById("pokeList").innerHTML += "<div id= 'listFil' class ='pokemonScreen'>" + "<img src = '" + element.img + "' />" + " " + element.name + " " + element.num + "</div>";

});
}

function filterType(condition) {
const filterCond = pokeData.filter(pokemon => (pokemon.type[0] == condition || pokemon.type[1] == condition));
viewPokemon(filterCond);
}

function filterTypeCount(condition) {
return filterCond = pokeData.filter(pokemon => (pokemon.type[0] == condition || pokemon.type[1] == condition)).length;

}

function orderAZ() {
let cambio;
let pokeD = pokeData;
for (let y = 0; y < pokeD.length; y++) {
for (let i = y + 1; i < pokeD.length; i++) {
if (pokeD[y].name > pokeD[i].name) {
cambio = pokeD[y];
pokeD[y] = pokeD[i];
pokeD[i] = cambio;
}
}
}
viewPokemon(pokeD);
}

function orderZA() {

let cambio;
let pokeD = pokeData;
for (let y = 0; y < pokeD.length; y++) {
for (let i = y + 1; i < pokeD.length; i++) {
if (pokeD[y].name < pokeD[i].name) {
cambio = pokeD[y];
pokeD[y] = pokeD[i];
pokeD[i] = cambio;
}
}
}
viewPokemon(pokeD);
}

function porcentajePorTipo() {
let tipos = ["Water", "Fire", "Grass", "Ground", "Rock", "Steel", "Ice", "Electric", "Dragon", "Ghost", "Psychic", "Normal", "Fighting", "Poison", "Bug", "Flying"];

let total = 151;
let cantidad = 0;
tipos.forEach(element => {
cantidad = filterTypeCount(element);
porncentaje = total / cantidad;
porncentaje = 100 / porncentaje;
alert("tipo: " + element + " porcentaje: " + porncentaje + "%");
});
}

