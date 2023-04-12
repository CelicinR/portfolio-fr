$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        900:{
            items:2
        },
        1200:{
            items:3
        }
    }
})


// ************** COMPETENCE **************//

var clickSpan = document.querySelectorAll('.competence nav span');
var showBlock = document.querySelectorAll('.competence .listCompetence div');

console.log(showBlock)

clickSpan[0].addEventListener('click',()=>{
    clickSpan[0].classList.add('active')
    clickSpan[1].classList.remove('active')
    clickSpan[2].classList.remove('active')
    clickSpan[3].classList.remove('active')

    // SHOW BLOCK

    showBlock[0].classList.remove('block')
    showBlock[1].classList.add('block')
    showBlock[2].classList.add('block')
    showBlock[3].classList.add('block')
})


clickSpan[1].addEventListener('click',()=>{
    clickSpan[1].classList.add('active')
    clickSpan[0].classList.remove('active')
    clickSpan[2].classList.remove('active')
    clickSpan[3].classList.remove('active')

    // SHOW BLOCK

    showBlock[1].classList.remove('block')
    showBlock[0].classList.add('block')
    showBlock[2].classList.add('block')
    showBlock[3].classList.add('block')

})


clickSpan[2].addEventListener('click',()=>{
    clickSpan[2].classList.add('active')
    clickSpan[0].classList.remove('active')
    clickSpan[1].classList.remove('active')
    clickSpan[3].classList.remove('active')

    // SHOW BLOCK

    showBlock[2].classList.remove('block')
    showBlock[0].classList.add('block')
    showBlock[1].classList.add('block')
    showBlock[3].classList.add('block')

})


clickSpan[3].addEventListener('click',()=>{
    clickSpan[3].classList.add('active')
    clickSpan[0].classList.remove('active')
    clickSpan[1].classList.remove('active')
    clickSpan[2].classList.remove('active')

    // SHOW BLOCK

    showBlock[3].classList.remove('block')
    showBlock[0].classList.add('block')
    showBlock[1].classList.add('block')
    showBlock[2].classList.add('block')

})
