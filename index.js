let addRecipeBtn = document.getElementById('addRecipeBtn');
let radioButtons = document.querySelectorAll('input[name="looking"]');
let letsCookBtn = document.getElementById('letsCookBtn');
let sideArr = ['french fries', 'macaroni', 'crispy potatoes', 'mozarella sticks'];
let mainArr = ['steak', 'chicken sandwich', 'cheeseburger', 'pizza', 'pasta'];
let dessertArr = ['cookie', 'cake', 'brownie', 'ice cream'];
let entireArr = [];
let img = document.getElementById('img');
let meal = document.getElementById('meal');
let column1 = document.getElementById('column1');

addRecipeBtn.addEventListener('click', clearColumn1);
function clearColumn1(){
    column1.innerHTML = "";
    addRecipe();
}
function addRecipe() {
    // create new div
    const recipeDiv = document.createElement('div');
    // h2 inside the div
    const recipeTitle = document.createElement('h2');
    recipeTitle.innerText = 'Add Your Own Recipe';
    // side input inside the div
    const sideInput = document.createElement('input');
    sideInput.setAttribute('type', 'text');
    sideInput.setAttribute('placeholder', 'Add Your Side');
    // main input inside the div
    const mainInput = document.createElement('input');
    mainInput.setAttribute('type', 'text');
    mainInput.setAttribute('placeholder', 'Add Your Main');
    // dessert input inside the div
    const dessertInput = document.createElement('input');
    dessertInput.setAttribute('type', 'text');
    dessertInput.setAttribute('placeholder', 'Add Your Dessert');
    // submit button inside the div
    const submitButton = document.createElement('button');
    submitButton.setAttribute('id', 'addYourOwnRecipeBtn');
    submitButton.innerText = "Submit";
    // add br in between elements in the div
    const br1 = document.createElement('br');
    const br2 = document.createElement('br');
    const br3 = document.createElement('br');
    const br4 = document.createElement('br');
    const br5 = document.createElement('br');
    const br6 = document.createElement('br');
    const br7 = document.createElement('br');
    const br8 = document.createElement('br');

    
    // appending the h2, inputs, and button to recipeDiv
    recipeDiv.appendChild(recipeTitle);
    recipeDiv.appendChild(br1);
    // recipeDiv.appendChild(br2);
    recipeDiv.appendChild(sideInput);
    recipeDiv.appendChild(br3);
    // recipeDiv.appendChild(br4);
    recipeDiv.appendChild(mainInput);
    recipeDiv.appendChild(br5);
    // recipeDiv.appendChild(br6);
    recipeDiv.appendChild(dessertInput);
    recipeDiv.appendChild(br7);
    // recipeDiv.appendChild(br8);
    recipeDiv.appendChild(submitButton);
    
    column1.appendChild(recipeDiv);
    // need to add the styling for the new created div
    recipeDiv.style.marginTop = '50px';
    recipeDiv.style.marginLeft = '40px';
    sideInput.style.display = 'block';
    mainInput.style.display = 'block';
    dessertInput.style.display = 'block';
    submitButton.style.display = 'block';
    submitButton.style.backgroundColor = 'teal';
    submitButton.style.width = '150px';

}

// input for user then when click addrecipe button it adds their recipe to the corresponding arr
// and immediately show on the cooking pot
letsCookBtn.addEventListener('click', letsCook);
function letsCook() {
    // loop through button of our buttons
    for (const radioButton of radioButtons) {
        // whatever button is selected(checked)
        if (radioButton.checked) {
            if (radioButton.value === 'side'){
                // setting text to a random side value
                meal.innerText = sideArr[Math.floor(Math.random() * sideArr.length)];
                // clears img by removing child element of the parent node
                img.parentNode.removeChild(img);
            } else if (radioButton.value === 'mainDish'){
                meal.innerText = mainArr[Math.floor(Math.random() * mainArr.length)];
                img.parentNode.removeChild(img);
            } else if (radioButton.value === 'dessert'){
                meal.innerText = dessertArr[Math.floor(Math.random() * dessertArr.length)];
                img.parentNode.removeChild(img);
            } else { //random entire meal
                randomSide = sideArr[Math.floor(Math.random() * sideArr.length)];
                randomMain = mainArr[Math.floor(Math.random() * mainArr.length)];
                randomDessert = dessertArr[Math.floor(Math.random() * dessertArr.length)];
                meal.innerText = `The meal consists of a side of ${randomSide}, and with the main dish being ${randomMain}, and finally for dessert a ${randomDessert}.`;
                img.parentNode.removeChild(img);
            }

        }
    } 
    
    
}
