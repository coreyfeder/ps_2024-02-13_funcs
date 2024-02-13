function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    let arrFlat = arr.flat();
    for (value of arrFlat) {
        product *= value;
    };
    // Only change code above this line
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
