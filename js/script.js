let pokemonRepository = (function () {
    const pokemonList = []
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(pokemon) {
        if (typeof pokemon === 'object') {
        pokemonList.push(pokemon);
        } else {
        console.log('pokemon input is not correct');
        }
    }

    function getAll() {
        return pokemonList;
    }

    function addListItem(pokemon, i) {
        const visibleList = document.querySelector('.pokemon-list');
        const listItem = document.createElement('li');
        const button = document.createElement('button');

        button.setAttribute('data-toggle', 'modal');
        button.setAttribute('data-target', '#modal-container');
        button.innerText = i + '. ' + pokemon.name;
        button.classList.add(
            'button-class',
            'show-modal',
            'btn',
            'btn-outline-info'
        );

        listItem.classList.add('list-group-item');
        listItem.appendChild(button);
        visibleList.appendChild(listItem);
        button.addEventListener('click', () => {
            showDetails(pokemon);
        });
    }

    function loadList() {
        return fetch(apiUrl)
          .then(function (response) {
            return response.json();
        })
          .then(function (json) {
            json.results.forEach(function (item) {
                const pokemon = {
                    name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
                    height: item.height,
                    types: item.types,
                    moves: item.moves[0,1],
                    weight: item.weight,
                    detailsUrl: item.url,
                };
                add(pokemon);
            });
        })
        .catch(function (e) {
            console.error(e);
        });
    }

    function loadDetails(pokemon) {
        const url = pokemon.detailsUrl;
        return fetch(url)
          .then(function (response) {
            return response.json();
        })
          .then(function (details) {
            pokemon.height = details.height;
            pokemon.types = details.types;
            pokemon.sprite = details.sprites.front_default;
            pokemon.sprite = details.sprite.back_default;
            pokemon.moves = details.moves[0,1];
            pokemon.weight = details.weight;
        })
          .catch(function (e) {
            console.error(e);
        });
    }
    
    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function () {
            showModal(item);
            console.log(item);
        });
    }

    function showModal(pokemon) {
        $('.modal-text').html('<p>' + ' ' + '</p>');
        $('.modal-title').html(pokemon.name);

        let type1, type2;
        if (pokemon.types[1]) {
            type1 = pokemon.types[0].type['name'];
            type2 = pokemon.types[1].type['name'];
            $(".modal-body").html(
                "<p>" +
                  pokemon.height / 10 +
                  "m" +
                  "</p>" +
                  "<p>" +
                  type1 +
                  ", " +
                  type2 +
                  "</p>" +
                  "<img src=" +
                  '"' +
                  pokemon.sprite +
                  '"' +
                  "/>"
              );
        } else {
            type1 = pokemon.types[0].type['name'];
            $(".modal-body").html(
                "<p>" +
                  pokemon.height / 10 +
                  "m" +
                  "</p>" +
                  "<p>" +
                  type1 +
                  "</p>" +
                  "<img src=" +
                  '"' +
                  pokemon.sprite +
                  '"' +
                  "/>"
              );
        }
    }


    return {
        getAll: getAll,
        loadList:loadList,
        addListItem: addListItem,
    };
})();


pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon, index) {
        pokemonRepository.addListItem(pokemon, index + 1)
    });
});