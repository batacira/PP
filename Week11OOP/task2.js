// 4. Write a function that creates an object that represents a culinary recipe.Each recipe is
// described by: name, type of cuisine, complexity(value from 1 to 5), list of ingredients,
//     preparing time, preparing instruction.
// ○ Add a method that prints out all the ingredients necessary for the meal
// preparation.
// ○ Add a method that checks if a meal can be prepared for 15 minutes.
// ○ Add a method that changes the type of cuisine to the given value.
// ○ Add a method that delete a given ingredient from the list of ingredients.


function CulinaryRecipe(n, t, com, l, pre, pins) {
    
        this.name = n,
        this.typeOfCuisine= t,
        this.complexity= com,
        this.listOfIngredients= l,
        this.preparingTime= pre,
        this.preparingInstruction= pins,

            this.printIngredients = function(){
            console.log(this.listOfIngredients);
        },

            this.isPrepared = function() {
            if (this.preparingTime < 15) {
                return true;
            }
            else {
                return false;
            }
        },

        function deleteGivenIngredient() {
            this.listOfIngredients.pop()
            return this.listOfIngredients;
        }

    
}

var  pancakes = new CulinaryRecipe('Pancake', 'Mediteran', 2, ['milk', 'eggs', 'sugar'], 13, 'instruction');

console.log(pancakes);


pancakes.printIngredients;
console.log(pancakes.isPrepared());
// console.log(pancakes.deleteGivenIngredient());