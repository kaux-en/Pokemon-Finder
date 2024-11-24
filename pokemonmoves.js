
const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const updateUI = document.getElementById('popupPokemon'); 


async function fetchPokemon(url) {

    try { 
       
        const response = await fetch(url, {
            method: 'GET',
        }); 
        const data = await response.json();
        console.log(data);
        const content = `
        <div class="content">
            <img src="${data.sprites.front_default}"/> 
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Moves:</strong> ${data.moves.map(move => move.move.name).join(', ')}</p>
        </div>`                              
        updateUI.innerHTML = content;


    } catch (error) {
        console.log('Error fetching character', error);
    }
};

searchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const inputValue = searchInput.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${inputValue}`; 
  fetchPokemon(url)
});