//Credo una lista di ingredienti a cui assegno un prezzo
var ingredients = [
    ["cheese", "2"],
    ["fried-egg", "3.5"],
    ["ketchup", "1.5"],
    ["lettuce", "1"],
    ["mustard", "1.5"],
    ["tomato", "1.5"],
];
createInputs(ingredients, ".ingredients")

//Genero gli input dei vari ingredienti

function createInputs(ingredientsList, ingredientElement) {
    contatore = 0;
    while (contatore < ingredientsList.length) {
        document
            .querySelector(ingredientElement)
            .insertAdjacentHTML("beforeend",
        `
        <div class="form_group">
        <img width = 30px; src="./assets/img/${ingredientsList[contatore][0] + '.svg'}">
        <label for="${ingredientsList[contatore][0]}">${ingredientsList[contatore][0]}</label>
        <input type="checkbox" name="${ingredientsList[contatore][0]}" id="${ingredientsList[contatore][0]}" data-price="${ingredientsList[contatore][1]}">
        </div>
        `  
        )
        contatore++
    }
}

//Definisco un prezzo di partenza del panino

var fixedPrice = 8.99;

//Calculate button
//creo funzione per l'ascolto
document.getElementById("calc_butt").addEventListener("click", function () {
    //verifico quali checkbox sono stati selezionati
    var checkChosen = document.querySelectorAll("input[type='checkbox']")
    console.log(checkChosen);
    //stabilisco il prezzo dei soli ingredienti
    var totIngredients = null;
    for (var i = 0; i < checkChosen.length; i++){
        var chosenElement = checkChosen[i];
        if (chosenElement.checked) {
            totIngredients += Number(chosenElement.getAttribute('data-price'))
        }
    }
    console.log(totIngredients);
    //stabilisco il prezzo totale dei panini
    var totalPriceWithoutDiscounts = totIngredients + fixedPrice;
    console.log(totalPriceWithoutDiscounts);
    //creo un array con una lista di discounts

    var discountList = ["darthvader", "maythe4th", "iamyourfather", "deathstar", "alessandra20"]
 //verifico se il coupon inserito è nella lista di coupon validi
    var insertedCoupon = document.getElementById("coupon").value
    console.log(insertedCoupon);
    var discountApplied = totalPriceWithoutDiscounts * 0.25;
    console.log(discountApplied);
    var validDiscount = false;
    for (var j = 0; j < discountList.length; j++) {
        var discEl = discountList[j];
        if (discEl === insertedCoupon) {
            validDiscount = true;
        }
    }
    if (validDiscount) {
        document.getElementById("risultato").innerHTML = totalPriceWithoutDiscounts - discountApplied.toFixed(2)
    } else {
        document.getElementById("risultato").innerHTML = totalPriceWithoutDiscounts.toFixed(2)
    
    }
        
})



