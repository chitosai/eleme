// 显示扩展图标
chrome.extension.sendRequest({}, function(response) {});
// 插入css
$('<link>').attr({
    'rel': 'stylesheet', 
    'type': 'text/css', 
    'href': 'chrome-extension://' + chrome.runtime.id + '/e.css'
}).appendTo($('head'));

// var surprise = ['送可乐', '四折', '第二份免费', '加鸡腿', '送COCO奶茶', '加20元送妹子'];

var sections = $('.restaurant-menu section'),
    total = sections.length,
    section,
    button = $('<button>').addClass('_helper_roll').text('roll菜');

for( var i = 0; i < total; i++ ) {
    section = sections.eq(i);
    button.clone().appendTo(section.children('h2'));
}

// 最前面浮动的那个header也要加上按钮
// button.clone().appendTo($('#toolbar_text'));
$('#menu_toolbar').hide();

$('.restaurant-menu').on('click', '._helper_roll', function(){
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