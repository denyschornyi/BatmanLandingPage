$(document).ready(function() {
    let tabsItem = $('.tabs-item');

    tabsItem.on('click', function(event){
        event.preventDefault();
        let showTab = $(this).attr('href');

        $('.visible').toggleClass('visible');
        $(showTab).toggleClass('visible');

        $('.tabs-item-active').toggleClass('tabs-item-active');
        $(this).toggleClass('tabs-item-active');
        console.log(showTab);
       
    });
});