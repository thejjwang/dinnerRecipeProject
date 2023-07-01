let addRecipeBtn = document.getElementById('addRecipeBtn');
let radioButtons = document.querySelectorAll('input[name="looking"]');
let letsCookBtn = document.getElementById('letsCookBtn');
let sideArr = ['french fries', 'macaroni', 'crispy potatoes', 'mozarella sticks'];
let mainArr = ['steak', 'chicken sandwich', 'cheeseburger', 'pizza', 'pasta'];
let dessertArr = ['cookie', 'cake', 'brownie', 'ice cream'];
let entireArr = [];
let img = document.getElementById('img');
let meal = document.getElementById('meal');
let column = document.getElementById('column');

addRecipeBtn.addEventListener('click', addRecipe);
function addRecipe(){

}
// input for user then when click addrecipe button it adds their recipe to the corresponding arr
// and immediately show on the cooking pot
letsCookBtn.addEventListener('click', letsCook);
function letsCook() {
    let selectedDish;
    // loop through button of our buttons
    for (const radioButton of radioButtons) {
        // whatever button is selected(checked)
        if (radioButton.checked) {
            selectedDish = radioButton.value;
            console.log(radioButton.value);
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
