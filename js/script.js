let pokemonList = [
    {name: "charmander", height: 1.8, type: ["fire", "speed"]},
    {name: "sandshrew", height: 1, type: ["ground", "rock"]},
    {name: "kakuna", height: .5, type: ["bug", "poison"]}
];

pokemonList.forEach (function(pokemonList) {
    let ul = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = (pokemonList.name);
    button.classList.add('pokebutton');
    listItem.appendChild(button);
    listItem.appendChild(pokemonList);
});

let pokemonRepository = (function (addListItem(pokemon)) {
    let ul = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = (pokemon.name);
    button.classList.add('pokebutton');
    listItem.appendChild(button);
    listItem.appendChild(listpokemon);
    let pokemonList = [];

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll'
        addListItem: addListItem,
    }
})();
