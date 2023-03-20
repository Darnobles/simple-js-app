let pokemonList = [
    {name: "charmander", height: 1.8, type: ["fire", "speed"]},
    {name: "sandshrew", height: 1, type: ["ground", "rock"]},
    {name: "kakuna", height: .5, type: ["bug", "poison"]}
];

pokemonList.forEach (function(pokemonList) {
    document.write (pokemonList.name + " - " + pokemonList.height + " - " + pokemonList.type);
})
