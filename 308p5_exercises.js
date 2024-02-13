/* 
308H.5 - Functions
https://ps-react-curriculum.herokuapp.com/308/5/lesson/
20204-02-13
 */

// Practice Activity 1
// https://ps-react-curriculum.herokuapp.com/308/5/lesson/#practice-activity-1-write-a-function-declaration

function computeArea(width, height) {
    // return `The area of a rectangle with a width of ${width} and a height of ${height} is ${width*height} square units.`
    const area = width * height;
    const result = `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`;
    return result;
}

computeArea(25,12);
