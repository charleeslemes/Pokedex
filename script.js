
var quantidade = document.getElementById('quantidade');

quantidade.addEventListener('keyup',()=>{
    pokedex(quantidade.value);
})




pokedex(5);

function pokedex(quantidade){
    fetch('https://pokeapi.co/api/v2/pokemon?limit='+quantidade)
.then(response => response.json())
.then(todosPokemons => {
    var pokemons = [];

    todosPokemons.results.map((val)=>{
        

        fetch(val.url)
            .then(response => response.json())
            .then(pokemonsSingle => {
                pokemons.push({nome:val.name,imagem:pokemonsSingle.sprites.front_default});

                if(pokemons.length == quantidade){
                    var pokemonBoxes = document.querySelector('.pokemon-boxes');
                    pokemonBoxes.innerHTML="";
                    
                    
                    pokemons.map(function(val){
                        pokemonBoxes.innerHTML+=
                        `
                        
                            <div class="pokemon-box">
                                <img src="`+val.imagem+`" alt="">
                    
                                <p>`+val.nome+`</p>
                    
                            </div>
                        
                        
                        
                        `;
                    })
                }


            })




    })

  
})
}


