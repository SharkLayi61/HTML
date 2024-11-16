$(document).ready(function () {
    $('.button').click(function (e) { 
        e.preventDefault();
        $('h1').hide();
    });
});

$(document).ready(function () {
    $('.button2').click(function (e) { 
        e.preventDefault();
        $('h1').show();
    });
});

$(document).ready(function () {
    $('.button3').click(function (e) { 
        e.preventDefault();
        $('.text').slideToggle(1000);
    });
});