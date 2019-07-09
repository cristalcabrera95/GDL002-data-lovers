document.getElementById("pokeList").innerHTML = list;

function toTop() {
  window.scrollTo(0, 0);
}

function home() {
  location.reload();
}

$(document).ready(function() {
  var estado = false;

  $("#btn-toggle").on("click", function() {
    $(".seccionToggle").slideToggle();
  });
});

$(document).ready(main);

var contador = 1;

function main() {
  $(".menu_bar").click(function() {
    // $('nav').toggle();

    if (contador == 1) {
      $("nav").animate({
        left: "0"
      });
      contador = 0;
    } else {
      contador = 1;
      $("nav").animate({
        left: "-100%"
      });
    }
  });
}

document
.getElementById("water-button")
.addEventListener("click", function() {
  filterType("Water");
  $(".seccionToggle").slideToggle();
});
document
.getElementById("fire-button")
.addEventListener("click", function() {
  filterType("Fire");
  $(".seccionToggle").slideToggle();
});
document
.getElementById("grass-button")
.addEventListener("click", function() {
  filterType("Grass");
  $(".seccionToggle").slideToggle();
});
document
.getElementById("ground-button")
.addEventListener("click", function() {
  filterType("Ground");
  $(".seccionToggle").slideToggle();
});
document
.getElementById("rock-button")
.addEventListener("click", function() {
  filterType("Rock");
  $(".seccionToggle").slideToggle();
});
document
.getElementById("ice-button")
.addEventListener("click", function() {
  filterType("Ice");
  $(".seccionToggle").slideToggle();
});
document
  .getElementById("electric-button")
  .addEventListener("click", function() {
    filterType("Electric");
    $(".seccionToggle").slideToggle();
  });
document
.getElementById("dragon-button")
.addEventListener("click", function() {
  filterType("Dragon");
  $(".seccionToggle").slideToggle();
});
document
.getElementById("ghost-button")
.addEventListener("click", function() {
  filterType("Ghost");
  $(".seccionToggle").slideToggle();
});
document
.getElementById("psychic-button")
.addEventListener("click", function() {
  filterType("Psychic");
  $(".seccionToggle").slideToggle();
});
document
.getElementById("normal-button")
.addEventListener("click", function() {
  filterType("Normal");
  $(".seccionToggle").slideToggle();
});
document
  .getElementById("fighting-button")
  .addEventListener("click", function() {
    filterType("Fighting");
    $(".seccionToggle").slideToggle();
  });
document
.getElementById("poison-button")
.addEventListener("click", function() {
  filterType("Poison");
  $(".seccionToggle").slideToggle();
});
document.getElementById("bug-button")
.addEventListener("click", function() {
  filterType("Bug");
  $(".seccionToggle").slideToggle();
});
document.getElementById("flying-button")
.addEventListener("click", function() {
  filterType("Flying");
  $(".seccionToggle").slideToggle();
});
document
.getElementById("btnUpward")
.addEventListener("click", orderAZ);
document
.getElementById("btnLess")
.addEventListener("click", orderZA);
document
.getElementById("estadist")
.addEventListener("click", function() {
    drawChart();
});
