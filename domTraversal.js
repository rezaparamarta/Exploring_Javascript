// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function() {
//     card.style.display = 'none';
// });

// DOM Traversal
const close = document.querySelectorAll('.close');
// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function(event) {
//         //close[i].parentElement.style.display = 'none';
//         event.target.parentElement.style.display = 'none';
//     });
// };
close.forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.target.parentElement.style.display = 'none';
        // DOM prevent Default
        //event.preventDefault();
        event.preventDefault();
        event.stopPropagation();
    });
});

// const nama = document.querySelector('.nama');
// console.log(nama.parentElement.nextElementSibling);

// Event bubbling
const cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
    card.addEventListener('click', function() {
        alert('ok');
    });
});


const container = document.querySelector('.container');
container.addEventListener('click', function(e) {
    if(e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    };
});


