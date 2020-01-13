function createParallax(imageN,classN,textP){

    let image = document.getElementsByClassName(imageN);
    let imageQ = document.querySelector(classN);
    if(imageQ != null){
    imageQ = imageQ.parentNode;
   
    let container = document.createElement('div');
    container.className = "parallax__wrapper"
    let text = document.createElement('h3')
    text.className = "parallax__text"

    text.innerText = textP;

    container.append(text);

    imageQ.append(container)


    new simpleParallax(image, {
        delay: 0,
        orientation: 'down',
        scale: 1.5,
        overfow: true,
    });
    }
}

createParallax("parallax__banner--1",".parallax__banner--1","Een knipbeurt op maat" );
createParallax("parallax__banner--2",".parallax__banner--2","Gezelligheid in bilzen" );

createParallax("parallax__banner--3",".parallax__banner--3","Prijzen & services" );

createParallax("parallax__banner--4",".parallax__banner--4","Contact" );

createParallax("parallax__banner--5",".parallax__banner--5","Gallerij" );


window.addEventListener('resize',function(){
    slideWidth = slide[0].getBoundingClientRect().width;
    slide.forEach(setSlidePosition);
    const currentSlide = track.querySelector('.current-slide');
    track.style.transform = 'translateX(-' + currentSlide.style.left + ')';
})




//carousel handler

const track = document.querySelector('.carousel__track');
const slide = Array.from(track.children);


const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');

const dotsNav = document.querySelector('.carousel__nav');


let slideWidth = slide[0].getBoundingClientRect().width;



// Arrange the slides next to one another

// slide[0].style.left = slideWidth * 0 + 'px';
// slide[1].style.left = slideWidth * 1 + 'px';
// slide[2].style.left = slideWidth * 2 + 'px';

const setSlidePosition = (slide, index) =>{
    slide.style.left = slideWidth * index + 'px';
}

slide.forEach(setSlidePosition);

const moveToSlide = (track,currentSlide,targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const generateDots = () =>{
    for(i = 0; i < slide.length; i++){
       let list =  document.createElement('button');
       
       
       if(i === 0){
            list.setAttribute('class','carousel__indicator current-slide')
            
       }else{
            list.setAttribute('class','carousel__indicator ')
        }
    dotsNav.append(list);
    }
}

generateDots();
const dots = Array.from(dotsNav.children);

console.log(dots);



const updateDots = (currentDot,targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}


// When click left, move slides to left.
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    let prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector(".current-slide");
    let prevDot = currentDot.previousElementSibling;

    console.log(currentSlide.previousElementSibling)
    

    if(currentSlide.previousElementSibling != undefined){
        moveToSlide(track,currentSlide,prevSlide)
        updateDots(currentDot,prevDot);
    }else{
        prevSlide = track.lastElementChild;
        prevDot = dotsNav.lastElementChild;
        console.log(prevSlide);
        moveToSlide(track,currentSlide, prevSlide);
        updateDots(currentDot,prevDot);
    }
})


// When click right, move slides to right
nextButton.addEventListener('click', e => {
    //move the slide
    const currentSlide = track.querySelector('.current-slide');
    let nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector(".current-slide");
    let nextDot = currentDot.nextElementSibling;

    console.log(currentSlide)
   
    if(currentSlide.nextElementSibling != undefined){
        moveToSlide(track,currentSlide, nextSlide);
        updateDots(currentDot,nextDot);
    }
    else{
        nextSlide = track.firstElementChild;
        nextDot = dotsNav.firstElementChild;
        moveToSlide(track,currentSlide, nextSlide);
        updateDots(currentDot,nextDot);
    }
})

// When click slide indicator move to slide.

dotsNav.addEventListener('click',e =>{
    // what indicator was clicked on?
    const targetDot = e.target.closest('button');

    if(!targetDot)return;

    const currentSlide = track.querySelector(".current-slide");
    const currentDot = dotsNav.querySelector(".current-slide");
    const targetIndex = dots.findIndex(dot => dot === targetDot)
    const targetSlide = slide[targetIndex];
    
    console.log(targetDot)

    moveToSlide(track,currentSlide,targetSlide);
    updateDots(currentDot, targetDot);

})
