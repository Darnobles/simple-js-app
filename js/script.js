let pokemonList = [
    {name: "charmander", height: 1.8, type: ["fire", "speed"]},
    {name: "sandshrew", height: 1, type: ["ground", "rock"]},
    {name: "kakuna", height: .5, type: ["bug", "poison"]}
];
for (let i=0; i < pokemonList.height; i++) {
    if (pokemonList [i].height < 2 && pokemonList[i].height > 1) {
        document.write (pokemonList[i].name.height + "Wow, that's big! ");
    }else {
        document.write (pokemonList[i].name.height + "Average height");
    }
}