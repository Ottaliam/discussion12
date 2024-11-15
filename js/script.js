let pokemonList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

// Answers

// Question 1
document.querySelector('#host-name').textContent = 'Lingxiao Zhong';
document.querySelector('#collaborator-name').textContent = 'N/A';
document.querySelector('#collaborator-2-name').textContent = 'N/A';


// Question 2
// You can also create their own CSS classes in style.css file and use that.
const toggleInstructions = (button) => {
  document.querySelectorAll('.question').forEach((item) => {
    item.classList.toggle('hidden');
  });

  if (button.textContent === 'Hide Instructions') {
    button.textContent = 'Show Instructions';
  } else {
    button.textContent = 'Hide Instructions';
  }
};
document.querySelector('#instruction_button').addEventListener('click', (e) => toggleInstructions(e.target));
document.addEventListener('keydown', (e) => {
  if (e.key === 'i') {
    toggleInstructions(document.querySelector('#instruction_button'));
  }
});



// Question 3
// Try change event first
// There is another event which fires for every character. This is what we want to use.
document.querySelector('#first_name').addEventListener('input', (e) => {
  if (e.target.value === 'John') {
    document.querySelector('#last_name').value = 'Doe';
  }
});


// Question 4
// Try change event first
// There is another event which fires for every character. This is what we want to use.
document.querySelector('#user_name').addEventListener('input', (e) => {
  if (pokemonList.includes(e.target.value)) {
    document.querySelector('#username-alert').textContent = 'Username already exists';
  } else {
    document.querySelector('#username-alert').textContent = 'Unique username created';
  }
});


// Question 5
// Try change event first
// There is another event which fires for every character. This is what we want to use.
const passwordInput = document.querySelector('#password');
const confirmInput = document.querySelector('#confirm_password');
[passwordInput, confirmInput].forEach((input) => {
  input.addEventListener('input', () => {
    if (passwordInput.value === confirmInput.value) {
      document.querySelector('#password-alert').textContent = 'Password Matches';
    } else {
      document.querySelector('#password-alert').textContent = 'Password does not match';
    }
  });
});
document.querySelector('#hide-password').addEventListener('click', (e) => {
  [passwordInput, confirmInput].forEach((input) => input.type = 'password');
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'h') {
    [passwordInput, confirmInput].forEach((input) => input.type = 'password');
  }
});



//Question 6
document.querySelector('#radio-reset-button').addEventListener('click', (e) => {
  document.querySelectorAll('#radio-reset-button + div input').forEach((input) => input.checked = false);
});




//Question 7 
document.querySelector('#profile_pic').addEventListener('input', (e) => {
  if (e.target.files.length > 0) {
    const file = e.target.files[0];
    if (file.size / 1024 > 100) {
      alert('File too large (> 100 kb)');
      e.target.value = '';
    }
  }
})




//Question 8
document.querySelector('#color-picker').addEventListener('input', (e) => {
  document.body.style.backgroundColor = e.target.value;
});




//Question 9 
const resetFormValue = () => {
  document.querySelectorAll('input').forEach((input) => input.value = '');
}
document.querySelector('.reset-form-button').addEventListener('click', resetFormValue);
document.addEventListener('keydown', (e) => {
  if (e.key === 'r') {
    resetFormValue();
  }
});
