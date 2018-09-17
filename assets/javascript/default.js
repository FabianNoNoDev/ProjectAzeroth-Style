$(document).ready(function()
{
    $('.selectpicker').selectpicker();

    $("input:radio").on("click", function(e)
    {
        var inp = $(this);
        //cache the selector
        if (inp.is(".theone"))
        {
            //see if it has the selected class
            inp.prop("checked", false).removeClass("theone");
            return;
        }
        $("input:radio[name='" + inp.prop("name") + "'].theone").removeClass("theone");
        inp.addClass("theone");
    });

    $('#close_authenticator').on("click", function(p_Event)
    {
        p_Event.preventDefault();
        $('#authenticator-popup').bPopup().close();
    });

    APNG.ifNeeded().then(function()
    {
        if ($(".apng-image").length > 0)
        {
            var l_Images = $(".apng-image");
            for (var l_Itr = 0; l_Itr < l_Images.length; l_Itr++)
                APNG.animateImage(l_Images[l_Itr]);
        }
    });

});

function disable()
{
    document.getElementById("myRadio").disabled = true;
}

function undisable()
{
    document.getElementById("myRadio").disabled = false;
}