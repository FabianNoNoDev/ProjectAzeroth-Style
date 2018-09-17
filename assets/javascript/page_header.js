
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll > 0) {
        $("#lang_bar_background").attr("scrolled", "1");
        $("#menu_bar_background").attr("scrolled", "1");
        $("#logo_img").attr("scrolled", "1");
        $("#lang_bar").attr("scrolled", "1");
        $("nav").attr("scrolled", "1");
    } else {
        $("#lang_bar_background").attr("scrolled", "0");
        $("#menu_bar_background").attr("scrolled", "0");
        $("#logo_img").attr("scrolled", "0");
        $("#lang_bar").attr("scrolled", "0");
        $("nav").attr("scrolled", "0");
    }
});

function Header_OnResize() {
    $("#content").css("padding-top", ($("#header").height() + 90) + "px");
}

$(window).resize(function() {
    Header_OnResize();
});

$(document).ready(function() {
    Header_OnResize();
});

$(document).ready(function() {
    $('[data-toggle="offcanvas_connection"]').click(function() {
        $('.row-offcanvas-connection').toggleClass('active')
        $('.btn_nav_connection').toggleClass('active')

        if ($('.row-offcanvas-menu').hasClass('active')) {
            $('.row-offcanvas-menu').toggleClass('active')
        }

        if ($('.btn_nav_menu').hasClass('active')) {
            $('.btn_nav_menu').toggleClass('active')
        }

        if (!$('body').hasClass('bg_offcanvas')) {
            $('body').toggleClass('bg_offcanvas')
        }

        if (!$('.row-offcanvas-connection').hasClass('active')) {
            if ($('body').hasClass('bg_offcanvas')) {
                $('body').toggleClass('bg_offcanvas')
            }

            var scroll = $(window).scrollTop();

            if (scroll == 0) {
                $("#lang_bar").attr("scrolled", "0");
                $("nav").attr("scrolled", "0");
            }
        } else {
            var scroll = $(window).scrollTop();

            if (scroll == 0) {
                $("#lang_bar").attr("scrolled", "1");
                $("nav").attr("scrolled", "1");
            }
        }
    });
    $('[data-toggle="offcanvas_account"]').click(function() {
        $('.row-offcanvas-account').toggleClass('active')
        $('.btn_nav_acccount').toggleClass('active')

        if ($('.row-offcanvas-menu').hasClass('active')) {
            $('.row-offcanvas-menu').toggleClass('active')
        }

        if ($('.btn_nav_menu').hasClass('active')) {
            $('.btn_nav_menu').toggleClass('active')
        }

        if (!$('body').hasClass('bg_offcanvas')) {
            $('body').toggleClass('bg_offcanvas')
        }

        if (!$('.row-offcanvas-account').hasClass('active')) {
            if ($('body').hasClass('bg_offcanvas')) {
                $('body').toggleClass('bg_offcanvas')
            }

            var scroll = $(window).scrollTop();

            if (scroll == 0) {
                $("#lang_bar").attr("scrolled", "0");
                $("nav").attr("scrolled", "0");
            }
        } else {
            var scroll = $(window).scrollTop();

            if (scroll == 0) {
                $("#lang_bar").attr("scrolled", "1");
                $("nav").attr("scrolled", "1");
            }
        }
    });
    $('[data-toggle="offcanvas_menu"]').click(function() {
        $('.row-offcanvas-menu').toggleClass('active')
        $('.btn_nav_menu').toggleClass('active')

        if ($('.row-offcanvas-connection').hasClass('active')) {
            $('.row-offcanvas-connection').toggleClass('active')
        }

        if ($('.btn_nav_connection').hasClass('active')) {
            $('.btn_nav_connection').toggleClass('active')
        }

        if ($('.row-offcanvas-account').hasClass('active')) {
            $('.row-offcanvas-account').toggleClass('active')
        }

        if ($('.btn_nav_account').hasClass('active')) {
            $('.btn_nav_account').toggleClass('active')
        }

        if (!$('body').hasClass('bg_offcanvas')) {
            $('body').toggleClass('bg_offcanvas')
        }

        if (!$('.row-offcanvas-menu').hasClass('active')) {
            if ($('body').hasClass('bg_offcanvas')) {
                $('body').toggleClass('bg_offcanvas')
            }

            var scroll = $(window).scrollTop();

            if (scroll == 0) {
                $("#lang_bar").attr("scrolled", "0");
                $("nav").attr("scrolled", "0");
            }
        } else {
            var scroll = $(window).scrollTop();

            if (scroll == 0) {
                $("#lang_bar").attr("scrolled", "1");
                $("nav").attr("scrolled", "1");
            }
        }
    });
    $( ".row-offcanvas a" ).bind( "click", function() {
        if ($('.row-offcanvas-menu').hasClass('active')) {
            $('.row-offcanvas-menu').toggleClass('active')
        }

        if ($('.row-offcanvas-connection').hasClass('active')) {
            $('.row-offcanvas-connection').toggleClass('active')
        }


        if ($('.row-offcanvas-account').hasClass('active')) {
            $('.row-offcanvas-account').toggleClass('active')
        }

        if ($('.btn_nav_menu').hasClass('active')) {
            $('.btn_nav_menu').toggleClass('active')
        }

        if ($('body').hasClass('bg_offcanvas')) {
            $('body').toggleClass('bg_offcanvas')
        }

        var scroll = $(window).scrollTop();

        if (scroll == 0) {
            $("#lang_bar").attr("scrolled", "0");
            $("nav").attr("scrolled", "0");
        }
    });
});

$(document).ready(function()
{
    $('.account_links li').unbind('click.closedropdown');
    $('.account_links li').bind('click.closedropdown', function()
    {
        $('#dropdown-account').dropdown('toggle');
    });

    $('.dropdown_connection .connection_link, .dropdown_connection .register button').unbind('click.closedropdown');
    $('.dropdown_connection .connection_link, .dropdown_connection .register button').bind('click.closedropdown', function()
    {
        $('#dropdown_connection').dropdown('toggle');
    });
});