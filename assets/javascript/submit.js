$(document).ready(function()
{
    // Auto-submit login
    $('#login-form').keypress(function(e)
    {
        // Key code enter
        if (e.which == 13)
        {
            $('#submit-login').click();
            return false;
        }
    });

    $('#register-full').keypress(function(e)
    {
        // Key code enter
        if (e.which == 13)
        {
            $('#submit-register').click();
            return false;
        }
    });

    $('#authenticator_code').keypress(function(e)
    {
        // Key code enter
        if (e.which == 13)
        {
            $('#submit-authenticator').click();
            return false;
        }
    });

    $('#input_authenticator_popup').keypress(function(e)
    {
        // Key code enter
        if (e.which == 13)
        {
            $('#submit_authenticator_code').click();
            return false;
        }
    });

    $('#authenticator-form').keypress(function(e)
    {
        // Key code enter
        if (e.which == 13)
        {
            $('#submit-authenticator').click();
            return false;
        }
    });
});