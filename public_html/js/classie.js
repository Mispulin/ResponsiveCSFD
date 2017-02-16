/*!
 * http://tympanus.net/Blueprints/SlidePushMenus/ classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */

(function (window) {

    'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;

    if ('classList' in document.documentElement) {
        hasClass = function (elem, c) {
            return elem.classList.contains(c);
        };
        addClass = function (elem, c) {
            elem.classList.add(c);
        };
        removeClass = function (elem, c) {
            elem.classList.remove(c);
        };
    }
    else {
        hasClass = function (elem, c) {
            return classReg(c).test(elem.className);
        };
        addClass = function (elem, c) {
            if (!hasClass(elem, c)) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function (elem, c) {
            elem.className = elem.className.replace(classReg(c), ' ');
        };
    }

    function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
    }

    window.classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };

})(window);

// MAIN MENU XS

var mainMenu = document.getElementById( 'main-menu' ),
mainMenuTrigger = document.getElementById( 'main-menu-trigger' ),
body = document.body;

mainMenuTrigger.onclick = function() {
    otherMenu1 = $('#user-menu-logged'); 
    otherMenu1Trigger = $('#user-menu-logged-trigger'); 
    otherMenu2 = $('#user-menu'); 
    otherMenu2Trigger = $('#user-menu-trigger'); 
    if (otherMenu1.hasClass('slide-open')) {
        otherMenu1.removeClass('slide-open');
        otherMenu1Trigger.removeClass('active');
    }
    if (otherMenu2.hasClass('slide-open')) {
        otherMenu2.removeClass('slide-open');
        otherMenu2Trigger.removeClass('active');
    }
        classie.toggle( this, 'active' );
        classie.toggle( mainMenu, 'slide-open' );
};

// USER LOGIN MENU XS

var userMenu = document.getElementById( 'user-menu' ),
userMenuTrigger = document.getElementById( 'user-menu-trigger' ),
body = document.body;

userMenuTrigger.onclick = function() {
    otherMenu = $('#main-menu'); 
    otherMenuTrigger = $('#main-menu-trigger'); 
    if (otherMenu.hasClass('slide-open')) {
        otherMenu.removeClass('slide-open');
        otherMenuTrigger.removeClass('active');
    }
        classie.toggle( this, 'active' );
        classie.toggle( userMenu, 'slide-open' );
};

// USER LOGGED MENU XS

var userMenuLogged = document.getElementById( 'user-menu-logged' ),
userMenuLoggedTrigger = document.getElementById( 'user-menu-logged-trigger' ),
body = document.body;

userMenuLoggedTrigger.onclick = function() {
    otherMenu = $('#main-menu'); 
    otherMenuTrigger = $('#main-menu-trigger'); 
    if (otherMenu.hasClass('slide-open')) {
        otherMenu.removeClass('slide-open');
        otherMenuTrigger.removeClass('active');
    }
        classie.toggle( this, 'active' );
        classie.toggle( userMenuLogged, 'slide-open' );
};

// SEARCH AREA XS

var searchForm = document.getElementById( 'search-area' ),
searchFormTrigger = document.getElementById( 'search-trigger' ),
body = document.body;

searchFormTrigger.onclick = function() {
        classie.toggle( this, 'active' );
	classie.toggle( document.body, 'slide-push-tobottom' );
        classie.toggle( searchForm, 'slide-open' );
};