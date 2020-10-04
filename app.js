// get class for navbar
let nav = document.querySelector('.nav-bar')

// get button berger
let btn = document.querySelector('.btn-bar') 
console.log(btn)

// add event on button
btn.addEventListener('click', function(){
    // toggle a new class
    nav.classList.toggle('show-links');
})