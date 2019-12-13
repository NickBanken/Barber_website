var image = document.getElementsByClassName('parallax__banner--1');
let imageQ = document.querySelector('.parallax__banner--1');
imageQ = imageQ.parentNode;

let container = document.createElement('div');
container.className = "parallax__wrapper"
let text = document.createElement('h3')
text.className = "parallax__text"

text.innerText = "Een knipbeurt op maat"

container.append(text);

imageQ.append(container)

var image2 = document.getElementsByClassName('parallax__banner--2');
imageQ = document.querySelector('.parallax__banner--2');
imageQ = imageQ.parentNode;

container = document.createElement('div');
container.className = "parallax__wrapper"
text = document.createElement('h3')
text.className = "parallax__text"

text.innerText = "Gezelligheid in bilzen"

container.append(text);

imageQ.append(container)

console.log(imageQ);

new simpleParallax(image, {
    delay: 0,
    orientation: 'down',
    scale: 1.5,
    overfow: true,
});

new simpleParallax(image2, {
    delay: 0,
    orientation: 'down',
    scale: 1.5,
    overfow: true,
});