let pokemonList = [
    {name: "charmander", height: 1.8, type: ["fire", "speed"]},
    {name: "sandshrew", height: 1, type: ["ground", "rock"]},
    {name: "kakuna", height: .5, type: ["bug", "poison"]}
];

pokemonList.forEach (function(pokemon) {
    let ul = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = (pokemon.name);
    button.classList.add('pokebutton');
    listItem.appendChild(button);
    ul.appendChild(listItem);
});

let pokemonRepository = (function () {
    let pokemonList = [];

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    function showdetails (pokemon) {
        console.log(pokemon.name)
    }

    function addListItem (pokemon) {
    let ul = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = (pokemon.name);
    button.classList.add('pokebutton');
    listItem.appendChild(button);
    ul.appendChild(listItem);

    };

    let button = document.querySelector('button');
    button.addEventListener ('click', function (event) {
        console.log(showdetails);
    });

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
})();
