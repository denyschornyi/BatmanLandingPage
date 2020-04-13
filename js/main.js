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


    if(localStorage.getItem('bookmarkCheck') === 'true'){
        bookmark.attr('src','img/bookmark-added.svg');
    }

    bookmark.on('click', () =>{
        if(localStorage.getItem('bookmarkCheck') === 'false'){
            bookmark.attr('src','img/bookmark-added.svg');
            localStorage.setItem('bookmarkCheck', 'true' );

        }else if(localStorage.getItem('bookmarkCheck') === 'true'){
            bookmark.attr('src','img/bookmark.svg');
            localStorage.setItem('bookmarkCheck', 'false' );
        }else{
            bookmark.attr('src','img/bookmark-added.svg');
            localStorage.setItem('bookmarkCheck', 'true' );
        }
    });

    
    buttonWatch.on('click', () => {
        localStorage.setItem('bookmarkCheck', 'true' );
        bookmark.attr('src','img/bookmark-added.svg');
    });

});

