

// fixed menu


$(window).scroll(function(){
    var scrollamount  = $(window).scrollTop()
    
    if(scrollamount > 500){
      $(".menu").addClass("fixed")
    }else{
      $(".menu").removeClass("fixed")
    }
    

})





 new WOW().init();











//////////type js///////////



var typed = new Typed('.ami', {

    strings: [
    'Assignment',
    'Essay',
    'Coursework',
    'Dissertation'
  ],
    stringsElement: null,

    typeSpeed: 100,

    backSpeed: 50,

    backDelay: 700,

    loop: true,

    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,



});







//counter



$('.counter').counterUp({
    delay: 10,
    time: 1000
});








//owlCarousel


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
//    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 1500,
    responsive: {
        0: {
            items: 1
        },
        
           576: {
            items: 2
        },
        
        
        600: {
            items: 2
        },
        
        
        1000: {
            items: 3
        }
    }
})
