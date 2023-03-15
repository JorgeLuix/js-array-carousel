
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
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];
const slider = document.querySelector('.slider');
const thumbnails = document.querySelector('.thumbnails-container');

let currentIndex = 0;
let slides = '';
let thumbs = '';
for (let i = 0; i < images.length; i++) {

    slides +=  `<div class="slide ">
    <img src="${images[i]}" alt="spider-${i}" >
</div>
`;
    thumbs+= `<div class="thumb">
    <img src="${images[i]} " alt="spider-${i} ">
</div>`;

}
slider.innerHTML += slides;
thumbnails.innerHTML += thumbs;
document.querySelectorAll('.slide')[0].classList.add('active');
document.querySelectorAll('.thumb')[0].classList.add('active');



const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

next.addEventListener('click', goNext);

function goNext() {
    document.querySelectorAll('.slide')[currentIndex].classList.remove('active');
    document.querySelectorAll('.thumb')[currentIndex].classList.remove('active');
    if (currentIndex === images.lenght -1){
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
            currentIndex === images.lenght -1;
        } else {
            currentIndex--;
        };
    document.querySelectorAll('.slide')[currentIndex].classList.add('active');
    document.querySelectorAll('.thumb')[currentIndex].classList.add('active');  
 };


