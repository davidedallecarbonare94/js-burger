//Credo una lista di ingredienti a cui assegno un prezzo
var ingredients = [
    ["cheese", "2"],
    ["fried-egg", "3.5"],
    ["ketchup", "1.5"],
    ["lettuce", "1"],
    ["mustard", "1.5"],
    ["tomato", "1.5"],
]

//Genero gli input dei vari ingredienti

function createInputs(ingredientsList, ingredientElement) {
    contatore = 0;
    while (contatore < ingredientsList.lenght) {
        document.querySelector(ingredientElement).insertAdjacentHTML("beforeend",
        `
        <div class="form_group">
            <img src="./assets/img/${ingredientsList[contatore][0] + '.svg'}">
            <label for="${ingredientsList[contatore][0]}">${ingredientsList[contatore][0]}</label>
            <input type="checkbox" name="${ingredientsList[contatore][0]}" id="${ingredientsList[contatore][0]}" data-price="${list[counter][1]}">
        </div>
        `  
        )
        counter++
    }
}
createInputs(ingredients, ".ingredients")

/* for (var i = 0; i < ingredientsList.lenght; i++){
    document.querySelector(ingredientsElement[i]);
    ingredientElement.insertAdjacentHTML("beforeend",
    `
    <div class="form_group">
        <img src="./assets/img/${ingredientsList[i][0] + '.svg'}">
        <label for="${ingredientsList[i][0]}">${ingredientsList[i][0]}</label>
        <input type="checkbox" name="${ingredientsList[i][0]}" id="${ingredientsList[i][0]}" data-price="${list[counter][1]}">
    </div>
    ` 
    )
} */