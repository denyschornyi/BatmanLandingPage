$(document).ready(function() {
    let tabsItem = $('.tabs-item'),
        bookmark = $('.header-bookmark'),
        buttonWatch =$('.button');

    tabsItem.on('click', function(event){
        event.preventDefault();
        let showTab = $(this).attr('href');

        $('.visible').toggleClass('visible');
        $(showTab).toggleClass('visible');

        $('.tabs-item-active').toggleClass('tabs-item-active');
        $(this).toggleClass('tabs-item-active');
        console.log(showTab);
       
    });
    let bookmarkCheck = false;
    bookmark.on('click', () =>{
        if(bookmarkCheck == false){
            bookmarkCheck = true;
            bookmark.attr('src','img/bookmark-added.svg');
        }else if(bookmarkCheck == true){
            bookmarkCheck = false;
            bookmark.attr('src','img/bookmark.svg');
        }
    });
    buttonWatch.on('click', () => {
        bookmarkCheck = true;
        bookmark.attr('src','img/bookmark-added.svg');
    });

});

