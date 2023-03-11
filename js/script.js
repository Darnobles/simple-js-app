let pokemonList = [
    {name: "charmander", height: 1.8, type: ["fire", "speed"]},
    {name: "sandshrew", height: 1, type: ["ground", "rock"]},
    {name: "kakuna", height: .5, type: ["bug", "poison"]}
];
for (let i=0; i < pokemonList.length; i++) {
    if (pokemonList [i].height > 1 && pokemonList[i].height < 2) {
        document.write (pokemonList[i].name + " - " + pokemonList [i].height + "m - Wow, that's big! ");
    }else {
        document.write (pokemonList[i].name + " - " + pokemonList [i].height + "m - Average height");
    }
}