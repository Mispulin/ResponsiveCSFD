$(document).ready(function () {
    
    $('.toggle').click(function () {        
        if ($(this).text() == '▼') {            
            $(this).text('▲');
            box = $(this).closest('.box');      
            lis = box.find('li.hide'); 
            ps = box.find('p.hide');  
            divs = box.find('div.hide');
        } else if ($(this).text() == '▲') {            
            $(this).text('▼');
            box = $(this).closest('.box');
            lis = box.find('li.show'); 
            ps = box.find('p.show');    
            divs = box.find('div.show');
        }        
        ps.toggleClass('hide');
        ps.toggleClass('show'); 
        lis.toggleClass('hide');
        lis.toggleClass('show');
        divs.toggleClass('hide');
        divs.toggleClass('show');
        box.find('.continue').toggleClass('hide');
    });    
    
    $('.toggle-first').click(function () {        
        if ($(this).text() == '▼') {            
            $(this).text('▲');
            box = $(this).closest('.filmography');
            lis = box.find('.years:first-child li.hide');
        } else if ($(this).text() == '▲') {            
            $(this).text('▼');    
            box = $(this).closest('.filmography');
            lis = box.find('.years:first-child li.show');
        }
        lis.toggleClass('hide');
        lis.toggleClass('show');
    });
    
    $('.toggle-second').click(function () {        
        if ($(this).text() == '▼') {            
            $(this).text('▲');
            box = $(this).closest('.filmography-section');
            lis = box.find('li.hide');
        } else if ($(this).text() == '▲') {            
            $(this).text('▼');    
            box = $(this).closest('.filmography-section');
            lis = box.find('li.show');
        }
        lis.toggleClass('hide');
        lis.toggleClass('show');
    });
    
    $('.toggle-videos').click(function () {      
        box = $(this).closest('#videos-tab');  
        if ($(this).text() == '▼') {            
            $(this).text('▲');
            lis = box.find('div.hide');
        } else if ($(this).text() == '▲') {            
            $(this).text('▼');    
            lis = box.find('div.show');
        }
        lis.toggleClass('hide');
        lis.toggleClass('show');
    });
    
      
    userMenuIcon = $('#user-menu-trigger');
    userPhotoIcon = $('#user-menu-logged-trigger');
    footerMenuLi = $('.footer-menu .hide');
    
    $('#login').click(function () {
        thisMenu = $('#user-menu');
        otherMenu = $('#user-menu-logged');
        
        userMenuIcon.toggleClass('hide');
        userPhotoIcon.toggleClass('hide');     
        if ($(window).width() < 768) {
            thisMenu.toggleClass('slide-open'); // zavře aktuálně otevřené menu
        }
        thisMenu.toggleClass('hide-menu');
        otherMenu.toggleClass('hide-menu');
        footerMenuLi.toggleClass('hide');
        $('#myRating').toggleClass('hide');
        logged = true;
    });
    
    $('#logout').click(function () {
        thisMenu = $('#user-menu-logged');
        otherMenu = $('#user-menu');
        
        userMenuIcon.toggleClass('hide');
        userPhotoIcon.toggleClass('hide');
        if ($(window).width() < 768) {
            thisMenu.toggleClass('slide-open'); // zavře aktuálně otevřené menu
        }        
        thisMenu.toggleClass('hide-menu');
        otherMenu.toggleClass('hide-menu');
        $('#myRating').toggleClass('hide');
        footerMenuLi.toggleClass('hide');
        logged = false;
    });
    
    $('#logo').click(function () {
        window.location.href = 'index.html';  
    });
    
    // puts ID into URL
    $("ul.nav-tabs > li > a").on("shown.bs.tab", function(e) {
        var id = $(e.target).attr("href").substr(1);
        id = id.substring(0, id.length-4);
        window.location.hash = id;    
    });

    // opens tab with url
    var hash = (window.location.hash);
    $('.nav-tabs a[href="' + hash + '-tab"]').tab('show');    
    
    
    $('#show-posters').click(function () {
        $('#poster-area').toggleClass('hidden');
        $('#show-posters').toggleClass('hidden');
    });
    
    $('#hide-posters').click(function () {
        $('#poster-area').toggleClass('hidden');
        $('#show-posters').toggleClass('hidden');
    });
    
    $('.toggle-makers').click(function () {
        $('.rest-of-makers').toggleClass('hide');        
        $(this).text('');
    });
    
    $('.delete-rating').click(function () {
        $('.header .col-xs-4').toggleClass('hide');
        $('#myRating .header .col-xs-2').toggleClass('hide');
        $('.no-rating').text('není zadáno hodnocení');  
        $('#rating').html('');  
    });
    
    $('.add-rating').click(function () {
        $('.star-selector').toggleClass('hide');
        if ($('.no-rating').text() == '') {
            $('.no-rating').text('není zadáno hodnocení');
        } else {
            $('.no-rating').text('');  
        } 
    });
    
    $('.change-rating').click(function () {
        $('.star-selector').toggleClass('hide');
        $('.no-rating').toggleClass('hide');
        $('#rating').toggleClass('hide');
        if ($('.no-rating').text() == '') {
            $('.no-rating').text('není zadáno hodnocení');
        } else {
            $('.no-rating').text('');  
        } 
    });
    
    $('#0').click(function () {
        $('.star-selector').toggleClass('hide');
        $('#rating').html('<span class="garbage">odpad!</span>');
        if ($('#rating').hasClass('hide')) {
            $('#rating').toggleClass('hide');
        }
        if ($('#myRating .header .col-xs-2').hasClass('hide')) {
            $('.header .col-xs-4').toggleClass('hide');
            $('#myRating .header .col-xs-2').toggleClass('hide');            
        }
    });
    
    $('#1').click(function () {
        $('.star-selector').toggleClass('hide');
        $('#rating').html('<img src="img/star.gif" alt="*">');
        if ($('#rating').hasClass('hide')) {
            $('#rating').toggleClass('hide');
        }
        if ($('#myRating .header .col-xs-2').hasClass('hide')) {
            $('.header .col-xs-4').toggleClass('hide');
            $('#myRating .header .col-xs-2').toggleClass('hide');            
        }
    });
    
    $('#2').click(function () {
        $('.star-selector').toggleClass('hide');
        $('#rating').html('<img src="img/star.gif" alt="*"><img src="img/star.gif" alt="*">');
        if ($('#rating').hasClass('hide')) {
            $('#rating').toggleClass('hide');
        }        
        if ($('#myRating .header .col-xs-2').hasClass('hide')) {
            $('.header .col-xs-4').toggleClass('hide');
            $('#myRating .header .col-xs-2').toggleClass('hide');            
        }
    });
    
    $('#3').click(function () {
        $('.star-selector').toggleClass('hide');
        $('#rating').html('<img src="img/star.gif" alt="*"><img src="img/star.gif" alt="*"><img src="img/star.gif" alt="*">');
        if ($('#rating').hasClass('hide')) {
            $('#rating').toggleClass('hide');
        }
        if ($('#myRating .header .col-xs-2').hasClass('hide')) {
            $('.header .col-xs-4').toggleClass('hide');
            $('#myRating .header .col-xs-2').toggleClass('hide');            
        }
    });
    
    $('#4').click(function () {
        $('.star-selector').toggleClass('hide');
        $('#rating').html('<img src="img/star.gif" alt="*"><img src="img/star.gif" alt="*"><img src="img/star.gif" alt="*"><img src="img/star.gif" alt="*">');
        if ($('#rating').hasClass('hide')) {
            $('#rating').toggleClass('hide');
        }
        if ($('#myRating .header .col-xs-2').hasClass('hide')) {
            $('.header .col-xs-4').toggleClass('hide');
            $('#myRating .header .col-xs-2').toggleClass('hide');            
        }
    });
    
    $('#5').click(function () {
        $('.star-selector').toggleClass('hide');
        $('#rating').html('<img src="img/star.gif" alt="*"><img src="img/star.gif" alt="*"><img src="img/star.gif" alt="*"><img src="img/star.gif" alt="*"><img src="img/star.gif" alt="*">');
        if ($('#rating').hasClass('hide')) {
            $('#rating').toggleClass('hide');
        }
        if ($('#myRating .header .col-xs-2').hasClass('hide')) {
            $('.header .col-xs-4').toggleClass('hide');
            $('#myRating .header .col-xs-2').toggleClass('hide');            
        }
    });
    
});