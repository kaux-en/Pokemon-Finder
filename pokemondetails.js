//<td>${data.height} cm</td>  
//<td>${data.weight} kg</td>  

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
      const details = `  
        <table>  
           <tr>
              <img src="${data.sprites.front_shiny}" width="260px" height="200px" class="mx-auto"/> 
              <th>Name</th>  
              <th>Type</th>  
              <th>Abilities</th> 
              <th>Stats</th>    
           </tr>  
           <tr>  
              <td>${data.name}</td>  
              <td>${data.types.map(type => type.type.name).join(', ')}</td>  
              <td>${data.abilities.map(ability => ability.ability.name).join(', ')}</td> 
              <td>${data.stats.map(stat => stat.stat.name).join(', ')}</td>    
           </tr>  
        </table>  
      `;  
      updateUI.innerHTML = details;  
  
   } catch (error) {  
      console.log('Error fetching character', error);  
   }  
};  
  
searchBtn.addEventListener('click', (event) => {  
    event.preventDefault();
   const inputValue = searchInput.value;  
   const url = `https://pokeapi.co/api/v2/pokemon/${inputValue}`;  
   fetchPokemon(url);  
});