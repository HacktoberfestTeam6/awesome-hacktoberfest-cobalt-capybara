let selectedPokemon = null;
function selectPokemon(img) {
    selectedPokemon = img.alt;
    document.getElementById('selected-pokemon').innerText = `Congrants! You've chosen ${selectedPokemon} as your starter Pokemon!`;
}

function sayHello() {
    alert(selectedPokemon + ' says: Hello user!');
}