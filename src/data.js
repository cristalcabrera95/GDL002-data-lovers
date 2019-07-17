// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const pokeData = window.POKEMON.pokemon;

let list = [];
pokeData.forEach(element => {
  let pokeList =
    "<div class='pokemonScreen'>" +
    " <img src='" +
    element.img +
    "'/>" +
    "<br>" +
    element.num +
    "<br> " +
    element.name +
    "</div>";
  list += pokeList;
});

function viewPokemon(pokemon) {
  document.getElementById("pokeList").innerHTML = "";
  pokemon.forEach(element => {
    console.log(element.name, element.type);
    document.getElementById("pokeList").innerHTML +=
      "<div id= 'listFil' class ='pokemonScreen'>" +
      "<img src = '" +
      element.img +
      "' />" +
      " " +
      element.name +
      " " +
      element.num +
      "</div>";
  });
}

function filterType(condition) {
  const filterCond = pokeData.filter(
    pokemon => pokemon.type[0] == condition || pokemon.type[1] == condition
  );
  viewPokemon(filterCond);
}

function filterTypeCount(condition) {
  return (filterCond = pokeData.filter(
    pokemon => pokemon.type[0] == condition || pokemon.type[1] == condition
  ).length);
}

function orderAZ() {
  let pokeD = pokeData.sort(function(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
  });

  viewPokemon(pokeD);
}

function orderZA() {
  let pokeD = pokeData.sort(function(a, b) {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
  });
  viewPokemon(pokeD);
}

function drawChart() {
  document.getElementById("pokeList").style.display = "none";
  let data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["Water", filterTypeCount("Water")],
    ["Fire", filterTypeCount("Fire")],
    ["Grass", filterTypeCount("Grass")],
    ["Ground", filterTypeCount("Ground")],
    ["Rock", filterTypeCount("Rock")],
    ["Ice", filterTypeCount("Ice")],
    ["Electric", filterTypeCount("Electric")],
    ["Dragon", filterTypeCount("Dragon")],
    ["Ghost", filterTypeCount("Ghost")],
    ["Psychic", filterTypeCount("Psychic")],
    ["Normal", filterTypeCount("Normal")],
    ["Fighting", filterTypeCount("Fighting")],
    ["Poison", filterTypeCount("Poison")],
    ["Bug", filterTypeCount("Bug")],
    ["Flying", filterTypeCount("Flying")]
  ]);
  let options = {
    title: "Cantidad de Pokemon por tipo",
    pieHole: 0.4
  };

  let chart = new google.visualization.PieChart(
    document.getElementById("donutchart")
  );
  chart.draw(data, options);
}
