/**WRITTEN
 * Arrays
 * 
 * always use camel case where needed
 * 
 * Make sure to write the question/instruction and then the answers below
 * 
 */

/**
 * Question 5 - concat two different arrays by using .concat() method
 * 
 * QUESTION:
 * Initialise an array called girls with values Amy, and Jill.
 * Initialise a second array called boys with values Jim, and Tom.
 * Initialise a variable called friends that will concatenate (using the .concat method) the arrays for girls and boys
 * Console log out friends and write a single line comment as to what it will be. 
 *  
 */

var girls = ["Amy", "Jill"];
var boys = ["Jim", "Tom"];
var friends = girls.concat(boys);
console.log(friends);//[ 'Amy', 'Jill', 'Jim', 'Tom' ]





/**
 * Question 6 - Create a 2-dimensional array that is 2-by-4. Grab some values out of this array to create a sentence using concatenation.
 * 
 * QUESTION: 
 * Initialise the variable `wardrobe` to a 2-Dimensional array containing the values below:
 * 
 *          column[0]   column[1]    column[2]     column[3]                   
 * Row 1    dress       heels        hat            blazer
 * Row 2    sneakers    hoodie       trousers       socks
 
 * then use console.table() to showcase the information in a table.
 * 
 * Then based on the values stored in the wardrobe 2D array, console log out the following sentence using concatenation:
 * I have a _dress_, _hat_ and _sneakers_.
 * 
 */

var wardrobe = [
    ["dress", "heels", "hat", "blazer"],
    ["sneakers", "hoodie", "trousers", "socks"]];

    console.table(wardrobe);

    console.log ("I have a " + wardrobe[0][0] + ", " + wardrobe[0][2] + " and " + wardrobe[1][0]);
   //I have a dress, hat and sneakers