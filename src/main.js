
    document.getElementById("pokeList").innerHTML = list;
    
    function toTop() {
    window.scrollTo(0, 0)
    };
    
    function home() {
    location.reload();
    }
    
    $(document).ready(function() {
    var estado = false;
    
    $('#btn-toggle').on('click', function() {
    $('.seccionToggle').slideToggle();
    
    });
    });
    
    document.getElementById("water-button").addEventListener("click", function() { filterType("Water"); });
    document.getElementById("fire-button").addEventListener("click", function() { filterType("Fire"); });
    document.getElementById("grass-button").addEventListener("click", function() { filterType("Grass"); });
    document.getElementById("ground-button").addEventListener("click", function() { filterType("Ground"); });
    document.getElementById("rock-button").addEventListener("click", function() { filterType("Rock"); });
    document.getElementById("steel-button").addEventListener("click", function() { filterType("Steel"); });
    document.getElementById("ice-button").addEventListener("click", function() { filterType("Ice"); });
    document.getElementById("electric-button").addEventListener("click", function() { filterType("Electric"); });
    document.getElementById("dragon-button").addEventListener("click", function() { filterType("Dragon"); });
    document.getElementById("ghost-button").addEventListener("click", function() { filterType("Ghost"); });
    document.getElementById("psychic-button").addEventListener("click", function() { filterType("Psychic"); });
    document.getElementById("normal-button").addEventListener("click", function() { filterType("Normal"); });
    document.getElementById("fighting-button").addEventListener("click", function() { filterType("Fighting"); });
    document.getElementById("poison-button").addEventListener("click", function() { filterType("Poison"); });
    document.getElementById("bug-button").addEventListener("click", function() { filterType("Bug"); });
    document.getElementById("flying-button").addEventListener("click", function() { filterType("Flying"); });
    
    document.getElementById("btnUpward").addEventListener("click", orderAZ);
    document.getElementById("btnLess").addEventListener("click", orderZA);
    
    document.getElementById("estadist").addEventListener("click", function() { porcentajePorTipo(); });
    