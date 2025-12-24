//Refactoring
// merubah structure desain kode tanpa merubah fungsionalitas

// tujuannya:
// 1. Readability
// 2. DRY (Don't Repeat Yourself)
// 3. Reusability
// 4. Testability
// 5. Performance
// 6. Maintaiability


function cubeVolume(a,b) {
    return a * a * a + b * b * b;
}

console.log(cubeVolume(8, 3));

// Function Variable Scope
// Block Scope vs function scope

let a = 1;
// variable above is global scope
function functionScope() {
    a = 2;
    // variable above is function scope / local scope
    console.log(a);
}
console.log(a);
console.log(functionScope());