// let addRecipeBtn = document.getElementById('addRecipeBtn');
// let radioButtons = document.querySelectorAll('input[name="looking"]');
// let letsCookBtn = document.getElementById('letsCookBtn');
let sideArr = ['french fries', 'macaroni', 'crispy potatoes', 'mozarella sticks'];
let mainArr = ['steak', 'chicken sandwich', 'cheeseburger', 'pizza', 'pasta'];
let dessertArr = ['cookie', 'cake', 'brownie', 'ice cream'];

const addRecipeBtn = document.getElementById('addRecipeBtn');
const radioButtons = document.querySelectorAll('input[name="looking"]');
const letsCookBtn = document.getElementById('letsCookBtn');
const img = document.getElementById('img');
const meal = document.getElementById('meal');
const column1 = document.getElementById('column1');
const column2 = document.querySelector('.column:last-child');

letsCookBtn.addEventListener('click', letsCook);
function letsCook() {
    const selectedRadioButton = document.querySelector('input[name="looking"]:checked');
    switch (selectedRadioButton.value) {
        case 'side':
            img.remove();
            meal.innerText = sideArr[Math.floor(Math.random() * sideArr.length)];
            break;
        case 'mainDish':
            img.remove();
            meal.innerText = mainArr[Math.floor(Math.random() * mainArr.length)];
            break;
        case 'dessert':
            img.remove();
            meal.innerText = dessertArr[Math.floor(Math.random() * dessertArr.length)];
            break;
        case 'entireMeal':
            img.remove();
            const randomSide = sideArr[Math.floor(Math.random() * sideArr.length)];
            const randomMain = mainArr[Math.floor(Math.random() * mainArr.length)];
            const randomDessert = dessertArr[Math.floor(Math.random() * dessertArr.length)];
            meal.innerText = `The meal consists of a side of ${randomSide}, the main dish being ${randomMain}, and finally for dessert, ${randomDessert}.`;
            break;
    }
}
function clearColumn1(){
    column1.innerHTML = "";
}
function submitOwnRecipe(){

}
addRecipeBtn.addEventListener('click', addRecipe);
function addRecipe(){
    clearColumn1();
    column2.appendChild(img);
    function createRecipeForm(){
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
        // go back button inside the div
        const backButton = document.createElement('button');
        backButton.setAttribute('id', 'backBtn');
        backButton.innerText = "Go Back";
        // add br in between elements in the div
        const br1 = document.createElement('br');
        const br2 = document.createElement('br');
        const br3 = document.createElement('br');
        const br4 = document.createElement('br');
        const br5 = document.createElement('br');
        const br6 = document.createElement('br');
        const br7 = document.createElement('br');
        const br8 = document.createElement('br');

        
        // appending the h2, inputs, and buttons to recipeDiv
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
        recipeDiv.appendChild(br8);
        recipeDiv.appendChild(backButton);
        
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
        backButton.style.backgroundColor = 'teal';
        backButton.style.width = '150px';
        
        // back button
        backButton.addEventListener('click', goBack);
        function goBack() {
            window.location.reload();
        }
        // submit button
        submitButton.addEventListener('click', function(event){
            event.preventDefault();
            img.remove();
            const sideValue = sideInput.value;
            sideArr.push(sideValue);
            const mainValue = mainInput.value;
            mainArr.push(mainValue);
            const dessertValue = dessertInput.value;
            dessertArr.push(dessertValue); 
            meal.innerText = `The meal consists of a side of ${sideValue}, the main dish being ${mainValue}, and finally for dessert, ${dessertValue}.`
        });
    
       

    }
    createRecipeForm();
}


