// 显示扩展图标
chrome.extension.sendRequest({}, function(response) {});
// 插入css
$('<link>').attr({
    'rel': 'stylesheet', 
    'type': 'text/css', 
    'href': 'chrome-extension://' + chrome.runtime.id + '/e.css'
}).appendTo($('head'));

function roll() {
    var sections = $('#cate_view section'),
        button = $('<button>').addClass('_helper_roll').text('roll菜');

    for( var i = 0; i < sections.length; i++ ) {
        button.clone().appendTo(sections.eq(i).children('h2'));
    }

    // 最前面浮动的那个header也要加上按钮
    // button.clone().appendTo($('#toolbar_text'));
    $('#menu_toolbar').hide();

    $('#cate_view').on('click', '._helper_roll', function(){
        var list = $(this).parent().parent().children('ul').children(),
            count = list.length;

        if( !count ) return;

        var rand = Math.floor(Math.random()*count),
            selected = list.eq(rand);

        $('._helper_highlighted').removeClass('_helper_highlighted');

        selected.addClass('_helper_highlighted');

        // var rand_surprise = Math.floor(Math.random() * (surprise.length * 2));
        // if( rand_surprise < surprise.length ) 
        //     selected.find('.food_name').attr('_helper_surprise', surprise[rand_surprise]);

        var y = selected.offset().top;
        $('html, body').animate({'scrollTop': y - 200});

        return false;
    });
}

function blacklist() {
    var fav = $('.rst-fav-wrapper .status');
    if( fav.text() == fav.data('faved') ) {
        $('body').css({
            'background': '#f00'
        });
        $('<div>').addClass('_helper_blacklisted').text('黑名单').appendTo($('.rst_header_con'));
    }
}

roll();
setTimeout(blacklist, 1000);