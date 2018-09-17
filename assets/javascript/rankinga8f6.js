$(document).ready(function()
{
    // Function to update the list of realms in ranking
    var UpdateRealms = function()
    {
        var l_CurrenExpansion = $('#expansion-ranking').val();

        $.ajax(
        {
            url : config.ajax + 'ajax/getrealmlist/',
            dataType : "JSON",
            type : "POST",
            data :
            {
                expansion : l_CurrenExpansion,
                csrf_test_name : fs_utils.readCookie('csrf_cookie_name')
            },
            success : function(l_DataRealms)
            {
                $('#realm-ranking').empty();
                $.each(l_DataRealms, function(l_Key, l_ObjectRealm)
                {
                    $('#realm-ranking').append($('<option>',
                    {
                        value : l_ObjectRealm.value,
                        text : l_ObjectRealm.text
                    }));
                });
                $('#realm-ranking').selectpicker('refresh');
            }
        });
    };

    // Function to update the ranking view
    var UpdateRanking = function()
    {
        $('#ranking-load').show();
        $('#ranking').html("");

        var l_CurrenExpansion = $('#expansion-ranking').val();
        var l_CurrenRealm = $('#realm-ranking').val();

        $.ajax(
        {
            url : config.ajax + 'ajax/getranking/',
            dataType : "html",
            type : "POST",
            data :
            {
                csrf_test_name : fs_utils.readCookie('csrf_cookie_name'),
                realm : l_CurrenRealm,
                expansion : l_CurrenExpansion
            },
            success : function(l_Html)
            {
                $('#ranking').hide().html(l_Html).fadeIn('slow');
            },
            complete : function(p_Data)
            {
                $('#ranking-load').hide();
            }
        });
    };

    // Listener when the expansion is change
    $(document).on('change', '#expansion-ranking', function()
    {
        UpdateRealms();
        setTimeout(UpdateRanking, 500);
    });

    // Listener when the realm is change
    $(document).on('change', '#realm-ranking', function()
    {
        UpdateRanking();
    });

    // Listener on switch type of ranking (2c2, 3c3, ...)
    $(document).on('click', '.ranking_button', function()
    {
        $('#TwoVSTwo').hide();
        $('#ThreeVSThree').hide();
        $('#FiveVSFive').hide();
        $('#Achievement').hide();
        $('#RandomBattlegtound').hide();

        $(".ranking_button").removeClass('ranking_button_active');
        $(this).addClass('ranking_button_active');

        var l_ID = String($(this).attr('id')).replace('select_', "");

        $('#' + l_ID).show("slow");
    });
});