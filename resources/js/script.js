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

