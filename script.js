/*
 *  Describe
 */

console.log("Script running. Let's do some functions.")
/* 
const output = document.body.getElementsByTagName('pre');

function out(message) {
    console.log(message);
    output.out(message);
}

// output.append("Hi there.");
document.body.append("Hi there.");
 */

// ooh, arrow functions
const sayHowdy = (name) => {
    console.log(`Howedy, ${name}!`)
}

function isEven (num) {
    return ( num & 1 == 0 );
}

function areBothEven (num1, num2) {
    return (isEven(num1) && isEven(num2))
}

// Rest functions
// Just like spread
console.log("\n\nRest functions\n")
function getDevObject(name, ...skills) {
    skills.forEach(function(x) { console.log(`  * ${x}`); });
    return {
        devName: name,
        jobSkills: skills
    };
}

console.log("\nTrying rest functions with getDevObject");
let result
console.log("\nCorey:")
result = getDevObject("Corey", "Sitting", "Walking", "Coonsuming");
console.log(result)
console.log("\nIn his dreams:")
let skills = ["Running", "Jumping", "Flying"]
result = getDevObject("Corey Wishes", ...skills);
console.log(result)



let nums = [[1, 2], [3, 4], [5, 6, 7]];
let prod = 1;
nums.flat().map(function(value) {prod *= value})

