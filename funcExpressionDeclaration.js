// Function Declaration
/*
rumusan syntax function declaration:
function identifier(parameterList optional) { functionBody}
lebih fleksibel; karena bisa ditulis dimanapun
ini terjadi karena JS memiliki konsep Hoisting (bisa menampung variabel di atas function)
relatif lebih mudah dimengerti.

*/

// Function Expression
/* 
function identifier opt (parameterList opt ) { functionBody }
function ini harus didefinisikan terlebih dahulu sebelum dipanggil
lebih powerfull karena dia bersifat closure.
bisa sebagai argumen untuk function lain.
*/

function Declaration(nama) {
    console.log(`Halo ${nama}`);
}

Declaration('Reza');

let displayMessage = function Expression(nama) {
    // the variable displayed message defined as expression
    return `Halo ${nama}`;
}

console.log(displayMessage('Reza'));


function greetingToday(greeting) {
    console.log(`${greeting} today`);
}

greetingToday('Happy Aniversary');

const aPel = 5000;
const piSang = 10000;
const discountVoucher = 10000;
let totalApel;
let totalPiSang;

function calculateTotal(totalApel, totalPiSang) {
    let transaction = aPel * totalApel + piSang * totalPiSang - discountVoucher;
    return transaction;
}

console.log(calculateTotal(3,2));

const appleMalang = 5000;
const pisangAmbon = 10000;
let voucher = 0.1;
let totalApple;
let totalPisang;

function calculateTransaction(totalApple, totalPisang) {
    let transaction = appleMalang * totalApple + pisangAmbon * totalPisang;
    transaction = transaction - transaction * voucher;
    return transaction;
}

console.log('Total harga setelah potongan diskon adalah Rp.', calculateTransaction(3,2),'per kilogram');

let passport = true;
let usia = 15;

function getPassport() {
    if (passport && usia >= 18) {
        return 'Anda bisa pergi ke luar negeri';
    } else {
        return 'Anda tidak bisa pergi ke luar negeri';
    }
}

console.log(getPassport());

let stock = 10;

function getStock() {
    if (stock === 10) {
        return 'Stok masih tersedia';
    } else {
        return 'Stok habis';
    }
}

console.log(getStock());

let trafficColor = '';

if (trafficColor === 'Red') {
    console.log('Stop!');
} else if (trafficColor === 'yellow' ) {
    console.log('Slow down! and Be careful!');
} else if (trafficColor === 'Green') {
    console.log('Go faster!');
} else {
    console.log('traffic color is broken, be carefull');
};

let number = 150;

if (number < 10) {
    console.log('Ini adalah satuan');
} else if ( number < 100 ) {
    console.log('Ini adalah puluhan');
} else if ( number < 1000 ) {
    console.log('Ini adalah ratusan');
} else {
    console.log('Ini adalah ribuan');
}

// Object
const product = {
    name: 'Pisang',
    weight: 5,
    isSoldout: false
};

const person = {
    name: 'John Doe',
    age: 30,
    bornYear: 1990,
    isEmployed: true
};

console.log(person.name);
console.log(person.name, 'lahir pada tahun', person.bornYear);

// Array
const avengerTeam = [
    'Iron Man', 
    'Spider Man', 
    'Hulk', 
    'Thor'
];
console.log(avengerTeam.length);

const usernames = [
    'yandy',
    'dimas',
    'mita'
];

console.log('ada total', usernames.length, 'username');

const hasDareVevil = avengerTeam.includes('Daredevil');
console.log(hasDareVevil);

let newUsername = 'mita';

// if (usernames.includes(newUsername)) {
//     console.log('Username sudah ada');
// } else {
//     console.log('Username tersedia');
// }

const isTaken = usernames.includes(newUsername);
if (isTaken) {
    console.log('Username sudah ada');
} else {
    console.log('Username tersedia');
}

console.log(avengerTeam[0]);

const favoriteFood = [
    'Nasi Goreng',
    'Mie Ayam',
    'Sambal goreng kentang'
]

console.log('My second favorite food is', favoriteFood[1]);

// Undefined = tidak ada;
const a = undefined;

// Null = tidak ada;
const b = null;

console.log(typeof a);
console.log(typeof b);

// function-declaration
function sayHappyBirthday(name, age) {
    console.log('Selamat Ulang Tahun ke-' + age + ', ' + name);
};

sayHappyBirthday('Reza', 25);
sayHappyBirthday('Aisyah', 18);
sayHappyBirthday('Ratih', 30);

let angka;

function checkStatusNumber(angka) {
    if (angka > 0) {
        console.log('Angka ini adalah Positif');
    } else if (angka < 0) {
        console.log('Angka ini adalah Negatif');
    } else {
        console.log('Angka ini adalah netral');
    }
}

checkStatusNumber(0);

function calculationVariable(x,y) {
    let result = x + y;
    console.log(x + ' ditambah ' + y + ' sama dengan ' + result);
}

calculationVariable(3,2);

// return
const firstName = 'Reza';
const lastName = 'Paramarta';

function getFullName() {
    const fullName = firstName + ' ' + lastName;
    return fullName;
};

const fullName = getFullName(firstName, lastName);
console.log(fullName);

const sayHi = () => {
    console.log('Halo');
};

const getTwo = (nama, age) => nama + ' adalah umur ' + age;

console.log(getTwo('Reza', 25));

