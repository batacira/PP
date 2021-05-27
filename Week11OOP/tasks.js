// 1. Create an object that represents your favourite coffee.Please include coffee name,
//     strength, flavour, milk, sugar, … everything you like!

var coffee = {
    name: 'Grand',
    sugar: false,
    milk: true,
    flavour: 'grand'
};




// 2. Create an object that represents your favourite movie.Please include title, actors,
//     director, genre, popularity.

var matrix = {
    name: 'Matrix',
    genre: 'Mystery',
    actors: 
        ['Keanu Reeves','Laurence Fishburne','Carrie-Anne Moss']
    ,
    popularity: 164,
    director: 'Christopher Nolan',
    say:function() {
        console.log('Matrix is the best movie');
    }
};

console.log(coffee.milk);
console.log(matrix.actors[2]);
matrix.say();

// 3. Write a function that creates an object that represents a project.Each project is
// described by: description, programming language, git repository, boolean status that
// says if the project is in development or not.Add a method that prints out the project &#39; s
// repository, a method that checks if the project is written in JavaScript as well as a
// method that checks if the project is in development or not.


function createProject(desc, lang, url, dev) {
    var project = {
        description: desc,
        language: lang,
        gitUrl: url,
        isInDev: dev,
        printRepository: function () {
            console.log(url);
        },
        isJavaScript: function () {
            return lang === 'JavaScript';
        },
        isDevelopment: function () {
            return dev ? "project is in development" : "project is not in development"
        }
    }
    return project;
}
var blog = createProject('blog description...', 'JavaScript', 'https://github.com/', false);
var project = createProject('project description...', 'PHP', 'https://github.com/', true);
console.log(blog);
console.log(project);
blog.printRepository();
project.printRepository();
console.log(blog.isDevelopment());
console.log(project.isDevelopment());
console.log(blog.isJavaScript());
console.log(project.isJavaScript());


// 4. Write a function that creates an object that represents a culinary recipe.Each recipe is
// described by: name, type of cuisine, complexity(value from 1 to 5), list of ingredients,
//     preparing time, preparing instruction.
// ○ Add a method that prints out all the ingredients necessary for the meal
// preparation.
// ○ Add a method that checks if a meal can be prepared for 15 minutes.
// ○ Add a method that changes the type of cuisine to the given value.
// ○ Add a method that delete a given ingredient from the list of ingredients.


function culinaryRecipe(n, t, com, l, pre, pins) {
    var recipe = {
        name: n,
        typeOfCuisine: t,
        complexity: com,
        listOfIngredients: l,
        preparingTime: pre,
        preparingInstruction: pins,

        printIngredients: function () {
            console.log(l);
        },

        isPrepared: function () {
            if(pre < 15) {
                return true;
            }
            else{
                return false;
            }
        },

        deleteGivenIngredient: function(){
            l.pop()
            return l;
        }

    }
    return recipe;
}

var pancakes = culinaryRecipe('Pancake', 'Mediteran', 2, ['milk', 'eggs', 'sugar'], 13, 'instruction');

console.log(pancakes);

pancakes.deleteGivenIngredient();
console.log(pancakes.isPrepared());
pancakes.isPrepared();