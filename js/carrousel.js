
/*template slide

`   <div class="slide ">
        <img src="./img/01.webp" alt="spider">
    </div>`
/******template slide********/
/*
`<div class="thumb">
            <img src="./img/01.webp" alt="spider">
        </div>`
*/ 


const images = [

    {   img: 'img/01.webp',
        title: 'Spider-Man'

    },
    {   img: 'img/02.webp',
        title: 'Lupi'

    },
    {   img: 'img/03.webp',
        title: 'Amici'
    },
    {   img: 'img/04.webp',
        title: 'Gato con lo zaino'

    },
    {   img: 'img/05.webp',
        title: 'Avengers'

    },
   
];
const slider = document.querySelector('.slider');
const thumbnails = document.querySelector('.thumbnails-container');

let currentIndex = 0;
let slides = '';
let thumbs = ''; 

 images.forEach((contenuto) => {
    slides +=  `<div class="slide ">
    <img src="${contenuto.img}" alt="" >
    <div class="opaci" > <h3>${contenuto.title}</h3> </div>
</div>
`;
    thumbs+= `<div class="thumb">
    <img src="${contenuto.img} " alt="">
</div>`;
 })
/*for (let i = 0; i < images.length; i++) {

    slides +=  `<div class="slide ">
    <img src="${images[i].nome}" alt="${images[i].title}" >
    <div class="opaci" > <h3>${images[i].title}</h3> </div>
</div>
`;
    thumbs+= `<div class="thumb">
    <img src="${images[i].nome} " alt="${images[i].title} ">
</div>`;

}*/
slider.innerHTML += slides;
thumbnails.innerHTML += thumbs;
document.querySelectorAll('.slide')[currentIndex].classList.add('.active');
document.querySelectorAll('.thumb')[currentIndex].classList.add('.active');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

next.addEventListener('click', goNext);
prev.addEventListener('click', goPrev);

//aggiungo evento hover
slider.addEventListener('mouseenter', stopAutoplay);
slider.addEventListener('mouseleave', startAutoplay);

//funzione inizio automatico 
function startAutoplay() {
    intervalId = setInterval(goNext, 1000);
  }
  //funzione stop slider
  function stopAutoplay() {
    clearInterval(intervalId);
  }

function goNext() {
    document.querySelectorAll('.slide')[currentIndex].classList.remove('active');
    document.querySelectorAll('.thumb')[currentIndex].classList.remove('active');
    if (currentIndex === images.length -1){
        currentIndex = 0;
    } else {
        currentIndex++;
    };

document.querySelectorAll('.slide')[currentIndex].classList.add('active');
document.querySelectorAll('.thumb')[currentIndex].classList.add('active');
};

prev.addEventListener('click', goPrev);
    function goPrev() {
        document.querySelectorAll('.slide')[currentIndex].classList.remove('active');
        document.querySelectorAll('.thumb')[currentIndex].classList.remove('active');
        if (currentIndex === 0){
            currentIndex === images.length -1;
        } else {
            currentIndex--;
        };
    document.querySelectorAll('.slide')[currentIndex].classList.add('active');
    document.querySelectorAll('.thumb')[currentIndex].classList.add('active');  
 };
startAutoplay();

