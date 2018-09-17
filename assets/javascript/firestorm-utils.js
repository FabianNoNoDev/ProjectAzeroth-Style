var fs_utils = (function()
{
    var m_Self      = {};
    var m_Private   = {};

    /// Private functions

    /// Public functions
    /// Function to read cookies
    m_Self.readCookie = function(p_Name)
    {
        var l_NameCookie    = p_Name + "=";
        var l_Cookies       = document.cookie.split(';');

        for (var l_Itr = 0; l_Itr < l_Cookies.length; l_Itr++)
        {
            var l_Cookie = l_Cookies[l_Itr];
            while (l_Cookie.charAt(0) == ' ')
                l_Cookie = l_Cookie.substring(1, l_Cookie.length);

            if (l_Cookie.indexOf(l_NameCookie) == 0)
                return l_Cookie.substring(l_NameCookie.length, l_Cookie.length);
        }
        return false;
    };
    /// Function which return name of an element in lowercase
    m_Self.tagName = function(p_Element)
    {
        return $(p_Element).prop("tagName").toLowerCase();
    };
    /// Function which test undefined and null
    m_Self.isset = function(p_Value)
    {
        if (typeof p_Value != "undefined" && p_Value != undefined && p_Value != null)
            return true;
        return false;
    };

    m_Self.scrollerInit = function()
    {
        $('a').each(function(l_Index, l_Element)
        {
            var l_Pattern   = new RegExp("^#{1,1}.+");
            var l_Elem      = $(l_Element);
            var l_Href      = l_Elem.attr('href');

            if (l_Pattern.test(l_Href) && !fs_utils.isset(l_Elem.attr('no_anchor')) && !fs_utils.isset(l_Elem.attr('noAnchor')))
            {
                l_Elem.attr("scroll_to", l_Elem.attr("href").replace("#", ""));
                l_Elem.attr("href", "javascript:void(0);");

                l_Elem.unbind("click.scroller");
                l_Elem.bind("click.scroller", function(p_Event)
                {
                    var l_Target = $(p_Event.target);
                    var l_Anchor = "";
                    if (!fs_utils.isset(l_Target.attr('scroll_to')))
                        l_Anchor = $(l_Target.parent().get(0)).attr("scroll_to");
                    else
                        l_Anchor = l_Target.attr('scroll_to');

                    var l_TargetAnchor = $('#' + l_Anchor);
                    var l_MoveTo = 0;

                    if (fs_utils.isset(l_TargetAnchor))
                        l_MoveTo = l_TargetAnchor.offset().top - 100;

                    $('html, body').animate(
                    {
                        scrollTop : l_MoveTo
                    }, 1000);
                });
            }
        });
    };

    m_Self.IsValidEmail = function(p_Email)
    {
        var l_EmailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return l_EmailPattern.test(p_Email);
    };

    m_Self.displayModal = function(p_Title, p_Content, p_Time)
    {
        $("#modal_title").html(p_Title);
        $("#modal_content").html(p_Content);
        $("#modal_fs").modal("show");

        window.setTimeout(function()
        {
            $("#modal_fs").modal("hide");
            $("#modal_title").html("");
            $("#modal_content").html("");
        }, p_Time);
    };

    m_Self.Tooltips = function()
    {
        $('.tooltip-item').tooltipster(
        {
            content : 'Loading...',
            contentAsHTML: true,
            functionBefore : function(origin, continueTooltip)
            {
                if ($(this).attr("expansion").length < 1 || $(this).attr("item").length < 1)
                    return;

                continueTooltip();

                if (origin.data('ajax') !== 'cached')
                {
                    $.ajax(
                    {
                        type : 'POST',
                        url  : config.ajax + 'ajax/gettooltip',
                        data :
                        {
                            "csrf_test_name"    : fs_utils.readCookie("csrf_cookie_name"),
                            "expansion"         : $(this).attr("expansion"),
                            "item"              : $(this).attr("item"),
                            "bonus"             : $(this).attr("bonus")
                        },
                        success : function(data)
                        {
                            origin.tooltipster('content', data).data('ajax', 'cached');
                        }
                    });
                }
            }
        });
    };

    m_Self.BindPayment = function()
    {
        var l_ChoicePayment = $('.choice-payment-popup');
        l_ChoicePayment.unbind('click.popup');
        l_ChoicePayment.bind("click.popup", function()
        {
            $('#pw-frame-hidden').bPopup();
        });
    };
    return m_Self;
})(jQuery);