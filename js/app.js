// script image randomizer
const pics = [
    'url("./img/1.png")',
    'url("./img/2.png")',
    'url("./img/3.png")',
    'url("./img/4.jng")',
    'url("./img/5.jpg")',
    'url("./img/6.jpg")',
    'url("./img/7.jpg")',
    'url("./img/8.jpg")',
    'url("./img/9.jpg")',
    'url("./img/10.jpg")',
    'url("./img/11.jpg")',
    'url("./img/12.jpg")'
];
const pic= document.querySelector('.page-container');

function showimage(){
    var a = Math.floor(Math.random()*pics.length);
    console.log(a);
    var img = pics[a];
    console.log(img); 
    pic.style.backgroundImage = img;
}