///**
// * Created by victorvolkov1 on 30.07.16.
// */

var menuButton = $('.hamburger');
var hideMenu = $('.hide-menu');
hideMenu.hide();


menuButton.on('click', function(){
    if(hideMenu.css('display') == 'none'){
        hideMenu.show();

    } else {
        hideMenu.hide();
    }
});

$(function headerNavLight() {
    $('.nav li a').css({
            'color': '#080808',
            'text-decoration': 'none'
        }
    );
    $('.nav li').on('click', function () {
        var id = $(this).attr('id');
        for (var i = 0; i <= 5; i++) {
            if (i == id) {
                $('#' + id + ' a').css({
                        'color': '#428bca',
                        'border-bottom': 'solid #428bca',
                        'padding-bottom': '30px'
                    }
                );
            } else {
                $('#' + i + ' a').css({
                        'color': '#080808',
                        'text-decoration': 'none',
                        'border-bottom': 'none',
                        'padding-bottom': '0'
                    }
                );
            }
        }
    });
});

$(function choosingColor() {
    var colorSelector = $('.color-check');
    var stack = [];
    $('.product__image > img').each(function(i, elem){
        stack.push($(elem).attr('id').substring(6));
    });

    colorSelector.click(function () {
        var id = $(this).attr('id').substring(6);
        $(this).addClass('active');
        var elem = jQuery.inArray(id, stack);

        for(var i = 0; i < stack.length; i++) {
            if(i == elem) {
                $('.product__image #image-' + stack[i]).show();
                $('#color-name-' + stack[i]).show();
            } else {
                $('.product__image #image-' + stack[i]).hide();
                $('#color-name-' + stack[i]).hide();
                $('#color-' + stack[i]).removeClass('active');
            }
        }
    });
});

$(function gallery() {

    var leftBtn = $('.mini-images .fa-chevron-left');
    var rightBtn = $('.mini-images .fa-chevron-right');
    var lastImage = $('.thumbs img:last').attr('id').substring(4);
    var firstImage = $('.thumbs img:first').attr('id').substring(4);
    var currentImage = $('.thumbs').find('.show').attr('id').substring(4);
    leftBtn.hide();

    $('.mini-images img').click(function () {
        $('.mini-images img').removeClass('show');
        $(this).addClass('show');
        $('.main-image img').hide();
        $('#big-img-' + $(this).attr('id').substring(4)).show();
        currentImage = $(this).attr('id').substring(4);
        if (currentImage > firstImage) {
            leftBtn.css({
                'display': 'inline-block'
            });
        } else {
            leftBtn.hide();
        }

        if (currentImage < lastImage) {
            rightBtn.css({
                'display': 'inline-block'
            });
        } else {
            rightBtn.hide();
        }


    });
    $('.mini-images .fa').click(function () {
        //alert($(this).attr('class').substring(14));
        if ($(this).attr('class').substring(14) == 'right') {
            if (currentImage == 1) {
                leftBtn.css({
                    'display': 'inline-block'
                });
            }
            $('#big-img-' + currentImage).hide();
            $('#big-img-' + currentImage).next().show();
            $('#big-img-' + currentImage).prev().hide();
            $('#img-' + currentImage).removeClass('show');
            $('#img-' + currentImage).next().addClass('show');

            currentImage++;

            if (currentImage == parseInt(lastImage)) {
                rightBtn.hide();
            }

        }

        if ($(this).attr('class').substring(14) == 'left') {
            if (currentImage == 4) {
                rightBtn.css({
                    'display': 'inline-block'
                });
            }
            $('#big-img-' + currentImage).hide();
            $('#big-img-' + currentImage).prev().show();
            $('#big-img-' + currentImage).next().hide();
            $('#img-' + currentImage).removeClass('show');
            $('#img-' + currentImage).prev().addClass('show');
            currentImage--;

            if (currentImage == 1) {
                leftBtn.hide();
            }
        }
    });


});

$(function tabs() {
    var specBtn = $('.tabs .spec-btn');
    var overviewBtn = $('.tabs .overview-btn');
    var specifications = $('#spec');
    var overview = $('#overview');
    specifications.hide();

    specBtn.click(function() {
        overview.hide();
        specifications.show();
        specBtn.css({
            'background-color' :'#A3A0A0'
        });
        overviewBtn.css({
            'background-color' :'#D5D5D5'
        });
    });

    overviewBtn.click(function() {
        specifications.hide();
        overview.show();
        overviewBtn.css({
            'background-color' :'#A3A0A0'
        });
        specBtn.css({
            'background-color' :'#D5D5D5'
        });
    });
});