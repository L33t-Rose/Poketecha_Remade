let sprite = document.querySelector('#sprite');
let pokeName = document.querySelector('#pokeName');
let desc = document.querySelector('p#pokeDesc');
let typeImages = document.querySelector('#types');
let abilContainer = document.querySelector('#ability-container');
let statElems = document.querySelectorAll('p.stat');
let progStats = document.querySelectorAll('progress');
let moveSection = document.querySelector('#moves');

/**
 * @param {string} pokemon
 */
async function getPokeData(pokemon) {
  //PokeApi has a limit of 100 queries per minute
  //Caching and checking local storage
  if (localStorage.getItem(pokemon) != null) {
    let data = JSON.parse(localStorage.getItem(pokemon))
  
    // window.dispatchEvent(showEvent);
    gun(data);
  }
  else {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if(!res.ok){
      window.dispatchEvent(failedEvent);
      return;
    }

    const { name, id, abilities, base_experience, moves, sprites, stats, types, species } = await res.json();
    
    //These async api calls. Previously doing this synchronously made website take 7 seconds
    //to finish getting data
    const [abilityInfo,moveInfo,specInfo] = await Promise.all([
      Promise.resolve(abilities).then((abils)=>{
         return Promise.all(abils.map(function(a){
           let url = a["ability"].url;
           return fetch(url).then(res=>res.json()).then(({name,effect_entries})=>{return {name,effect_entries}})
         }))
      }).then(d=>d),
      Promise.resolve(moves).then((moveIn)=>{
        return Promise.all(moveIn.map(function({move,version_group_details}){
          let levelLearned = version_group_details[0]['level_learned_at'];
          return fetch(move.url)
            .then(res=>res.json())
            .then(({accuracy,name,damage_class,effect_chance,effect_entries,power,pp,type})=>{
              return { accuracy, name, damage_class, effect_chance, effect_entries, power, pp, type, levelLearned};
            })
        }))
      }),
      fetch(species.url).then(res=>res.json()).then(({base_happiness,capture_rate,flavor_text_entries}) => {
        const pokeDesc = flavor_text_entries[2]['flavor_text'].replace('/\n/g',' ')
        return {base_happiness,capture_rate,pokeDesc}
      })
    ])
    let data = {name,id,abilityInfo:abilityInfo,...specInfo,moveInfo:moveInfo,sprites,stats,types,base_experience}

    gun(data);
    // window.dispatchEvent(showEvent);
    localStorage.setItem(pokemon, JSON.stringify(data));
  }
}


function clearCache() {
  const gun = confirm("Are you sure you want to delete cache?");
  if (gun) { localStorage.clear(); }
}

function gun(data) {
  const { name, id, abilityInfo,
    base_experience, moveInfo,
    sprites, stats, types,
    base_happiness, capture_rate, pokeDesc } = data;

  //Sprite
  sprite.setAttribute('src', sprites.front_default); 
  pokeName.textContent = name;
  desc.textContent = pokeDesc;
  const type = types;
  for (let i = 0; i < type.length; i++) {
    const t = type[i];
    let img = document.createElement('img');
    img.className ="type"
    img.setAttribute('src', `assets/images/${t.type['name']}.png`);
    typeImages.appendChild(img);
    // typeImages[i].setAttribute('src', `assets/images/${t.type['name']}.png`);
  }

  //Abilities
  abilityInfo.forEach(({ effect_entries, name }) => {
    let abilityHTML = document.createElement('div');
    abilityHTML.className = "ability";

    abilityHTML.innerHTML = `
      <h3 class="name">${name.replace('-',' ')}</h3>
      <p>${effect_entries[0]['short_effect']}</p>
    `
    abilContainer.appendChild(abilityHTML);
  })

  //Stats
  if (stats[0]['stat']['name'] === 'speed') {
    stats.reverse();
  }
  console.log(stats)
  for (let i = 0; i < stats.length; i++) {
    const { base_stat } = stats[i];
    statElems[i].textContent = base_stat;
    progStats[i].value = base_stat.toString();
  }
  
 

  moveInfo.forEach((move) => {
    const { accuracy, name, damage_class, effect_chance, effect_entries, power, pp, type, levelLearned } = move;
    let moveElem = document.createElement('div');
    moveElem.className = "move"
    const { effect, short_effect } = effect_entries[0];
    moveElem.innerHTML = `
    <h3 class="name">${name.replace('-', ' ')}</h3>
    <img src=assets/images/${type.name}.png>
    <div class="move-stat">
      <p>POW: ${power ? power : '--'}</p>
      <p>PP: ${pp}</p>
      <p>Acc: ${accuracy ? accuracy : '--'}</p>
      
    </div>
    <p>${effect.length > 20 ? short_effect.replace('$effect_chance%', `${effect_chance}%`) : effect.replace('%effect_chance%', `${effect_chance}%`)}</p >
      `
    moveSection.appendChild(moveElem);
  })
  

  window.dispatchEvent(reqFinished);
  window.dispatchEvent(showEvent);

}

