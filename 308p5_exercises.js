/* 
308H.5 - Functions
https://ps-react-curriculum.herokuapp.com/308/5/lesson/
20204-02-13
 */

// Practice Activity 1
console.log("\nPractice Activity 1")

function computeArea(width, height) {
    // return `The area of a rectangle with a width of ${width} and a height of ${height} is ${width*height} square units.`
    const area = width * height;
    const result = `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`;
    return result;
}

let testdata = [25,12]
console.log(`Calling with ${testdata}: ${computeArea(...testdata)}`);


// Practice Activity 2
console.log("\nPractice Activity 2")

// can't be "hoisted"; don't invoke this before it's declared!
const planetHasWater = function(planet) {
    return (['earth', 'mars'].includes(planet.toLowerCase()));
}

for (planet of ["MARS", "earth", "wind", "fire", "water", "HEART"]) {
    console.log(`Planet ${planet} ${planetHasWater(planet) ? "HAS" : "has NO"} water.`);
}
