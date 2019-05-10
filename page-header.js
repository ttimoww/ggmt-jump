$(window).scroll(() =>{
    let header_height =  $('.page-header').height();
    $('.page-main').css('margin-top', header_height);
});