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
    let pokemonList = [
    {name: "charmander", height: 1.8, type: ["fire", "speed"]},
    {name: "sandshrew", height: 1, type: ["ground", "rock"]},
    {name: "kakuna", height: .5, type: ["bug", "poison"]}
    ];

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    function showDetails (pokemon) {
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
    
    button.addEventListener ('click', function (event) {
        showDetails(pokemon)

    });
    }

    pokemonList.forEach(addListItem);

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
})();
