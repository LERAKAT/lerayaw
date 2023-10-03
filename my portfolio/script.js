/*---typing animation---*/
var typed = new Typed(".typing",{
    strings:[" ","Web Designer" , "Front End Developper" , "Graphic Designer" ,"Back End Developper"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})


/***text hover */
$(function(){
    $('.portfolio-img').hover(function(){
        $(this).find('.portfolio-img h2, p') .slideDown(200);
    },function(){
        $(this).find('.portfolio-img h2, p') .slideUp(200);

    });
})