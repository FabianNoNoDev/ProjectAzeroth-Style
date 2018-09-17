function Home_ResizeRegisterModule()
{
	if(!$("#module_register").length
	|| !$("#module_register_padding").length)
		return;

	$("#module_register")			.parent().removeClass("grid_elem_25").removeClass("grid_elem_33").removeClass("grid_elem_50").removeClass("grid_elem_66").removeClass("grid_elem_75").removeClass("grid_elem_100");
	$("#module_register_padding")	.parent().removeClass("grid_elem_25").removeClass("grid_elem_33").removeClass("grid_elem_50").removeClass("grid_elem_66").removeClass("grid_elem_75").removeClass("grid_elem_100");

	if($(document).width() < 640)
	{
		$("#module_register").parent()			.addClass("grid_elem_100");
	}
	if($(document).width() >= 640 && $(document).width() < 960)
	{
		$("#module_register").parent()			.addClass("grid_elem_50");
		$("#module_register_padding").parent()	.addClass("grid_elem_50");
	}
	if($(document).width() >= 960 && $(document).width() < 1280)
	{
		$("#module_register").parent()			.addClass("grid_elem_50");
		$("#module_register_padding").parent()	.addClass("grid_elem_50");
	}
	if($(document).width() >= 1280)
	{
		$("#module_register").parent()			.addClass("grid_elem_33");
		$("#module_register_padding").parent()	.addClass("grid_elem_66");
	}
}

function Home_NotConnected_OnResize()
{
	if(!$("#module_online_players").length
	|| !$("#module_news").length
	|| !$("#module_update").length
	|| !$("#module_rankings").length
	|| !$("#module_follow_us").length
	|| $("#module_slider").length
	|| $(".home_contest_video").length)
		return;

	$("#module_online_players")		.parent().removeClass("grid_elem_25").removeClass("grid_elem_33").removeClass("grid_elem_50").removeClass("grid_elem_66").removeClass("grid_elem_75").removeClass("grid_elem_100");
	$("#module_news")				.parent().removeClass("grid_elem_25").removeClass("grid_elem_33").removeClass("grid_elem_50").removeClass("grid_elem_66").removeClass("grid_elem_75").removeClass("grid_elem_100");
	$("#module_update")				.parent().removeClass("grid_elem_25").removeClass("grid_elem_33").removeClass("grid_elem_50").removeClass("grid_elem_66").removeClass("grid_elem_75").removeClass("grid_elem_100");
	$("#module_rankings")			.parent().removeClass("grid_elem_25").removeClass("grid_elem_33").removeClass("grid_elem_50").removeClass("grid_elem_66").removeClass("grid_elem_75").removeClass("grid_elem_100");
	$("#module_follow_us")			.parent().removeClass("grid_elem_25").removeClass("grid_elem_33").removeClass("grid_elem_50").removeClass("grid_elem_66").removeClass("grid_elem_75").removeClass("grid_elem_100");

	$("#module_news").parent().remove().insertBefore($("#module_update").parent());

	if($(document).width() < 640)
	{
		$("#module_online_players").parent()	.addClass("grid_elem_100");
		$("#module_news").parent()				.addClass("grid_elem_100");
		$("#module_update").parent()			.addClass("grid_elem_100");
		$("#module_follow_us").parent()			.addClass("grid_elem_100");
		$("#module_rankings").parent()			.addClass("grid_elem_100");
	}
	if($(document).width() >= 640 && $(document).width() < 960)
	{
		$("#module_online_players").parent()	.addClass("grid_elem_50");
		$("#module_news").parent()				.addClass("grid_elem_50");
		$("#module_update").parent()			.addClass("grid_elem_50");
		$("#module_follow_us").parent()			.addClass("grid_elem_50");
		$("#module_rankings").parent()			.addClass("grid_elem_100");
	}
	if($(document).width() >= 960 && $(document).width() < 1280)
	{
		$("#module_online_players").parent()	.addClass("grid_elem_33");
		$("#module_news").parent()				.addClass("grid_elem_33");
		$("#module_update").parent()			.addClass("grid_elem_33");
		$("#module_rankings").parent()			.addClass("grid_elem_66");
		$("#module_follow_us").parent()			.addClass("grid_elem_33");

		$("#module_news").parent().remove().insertAfter($("#module_online_players").parent());
	}
	if($(document).width() >= 1280)
	{
		$("#module_online_players").parent()	.addClass("grid_elem_66");
		$("#module_news").parent()				.addClass("grid_elem_25");
		$("#module_update").parent()			.addClass("grid_elem_25");
		$("#module_rankings").parent()			.addClass("grid_elem_50");
		$("#module_follow_us").parent()			.addClass("grid_elem_33");
	}
}

function Home_PlayDisconnected_OnResize()
{
	if(!$("#module_gamerules").length
	|| !$("#module_vote").length
	|| !$("#module_expansion").length)
		return;

	$("#module_gamerules").parent().removeClass("grid_elem_25").removeClass("grid_elem_33").removeClass("grid_elem_50").removeClass("grid_elem_66").removeClass("grid_elem_75").removeClass("grid_elem_100");
	$("#module_vote")     .parent().removeClass("grid_elem_25").removeClass("grid_elem_33").removeClass("grid_elem_50").removeClass("grid_elem_66").removeClass("grid_elem_75").removeClass("grid_elem_100");
	$("#module_expansion").parent().removeClass("grid_elem_25").removeClass("grid_elem_33").removeClass("grid_elem_50").removeClass("grid_elem_66").removeClass("grid_elem_75").removeClass("grid_elem_100");
	$("#voteforus_gamerule_alt_container_first").removeClass("grid_elem_25").removeClass("grid_elem_33").removeClass("grid_elem_50").removeClass("grid_elem_66").removeClass("grid_elem_75").removeClass("grid_elem_100");
	$("#voteforus_gamerule_alt_container_second").removeClass("grid_elem_25").removeClass("grid_elem_33").removeClass("grid_elem_50").removeClass("grid_elem_66").removeClass("grid_elem_75").removeClass("grid_elem_100");

	$("#module_vote").remove().insertAfter($("#grid_voteforus_gamerule_place_one"));
	$("#module_gamerules").remove().insertAfter($("#module_vote"));

	if($(document).width() < 640)
	{
		$("#module_expansion").parent()					.addClass("grid_elem_100");
		$("#voteforus_gamerule_alt_container_first")	.addClass("grid_elem_100");
		$("#voteforus_gamerule_alt_container_second")	.addClass("grid_elem_100");

		$("#module_vote").remove().appendTo($("#voteforus_gamerule_alt_container_first"));
		$("#module_gamerules").remove().appendTo($("#voteforus_gamerule_alt_container_second"));
	}
	if($(document).width() >= 640 && $(document).width() < 960)
	{
		$("#module_expansion").parent()					.addClass("grid_elem_100");
		$("#voteforus_gamerule_alt_container_first")	.addClass("grid_elem_50");
		$("#voteforus_gamerule_alt_container_second")	.addClass("grid_elem_50");

		$("#module_vote").remove().appendTo($("#voteforus_gamerule_alt_container_first"));
		$("#module_gamerules").remove().appendTo($("#voteforus_gamerule_alt_container_second"));
	}
	if($(document).width() >= 960 && $(document).width() < 1280)
	{
		$("#module_expansion").parent()					.addClass("grid_elem_100");
		$("#voteforus_gamerule_alt_container_first")	.addClass("grid_elem_66");
		$("#voteforus_gamerule_alt_container_second")	.addClass("grid_elem_33");

		$("#module_vote").remove().appendTo($("#voteforus_gamerule_alt_container_first"));
		$("#module_gamerules").remove().appendTo($("#voteforus_gamerule_alt_container_second"));
	}
	if($(document).width() >= 1280)
	{
		$("#module_expansion").parent()	.addClass("grid_elem_75");
		$("#module_vote").parent()		.addClass("grid_elem_25");
		$("#module_gamerules").parent()	.addClass("grid_elem_25");
	}
}

function Home_Connected_OnResize()
{
	if((!$("#module_online_players").length
	|| !$("#module_news").length
	|| !$("#module_update").length
	|| !$("#module_rankings").length
	|| !$("#module_follow_us").length
	|| !$("#home_slider").length)
		&& !$(".home_contest_video").length)
		return;

	$("#module_online_players")		.parent().removeClass("grid_elem_25").removeClass("grid_elem_33").removeClass("grid_elem_50").removeClass("grid_elem_66").removeClass("grid_elem_75").removeClass("grid_elem_100");
	$("#module_news")				.parent().removeClass("grid_elem_25").removeClass("grid_elem_33").removeClass("grid_elem_50").removeClass("grid_elem_66").removeClass("grid_elem_75").removeClass("grid_elem_100");
	$("#module_update")				.parent().removeClass("grid_elem_25").removeClass("grid_elem_33").removeClass("grid_elem_50").removeClass("grid_elem_66").removeClass("grid_elem_75").removeClass("grid_elem_100");
	$("#module_rankings")			.parent().removeClass("grid_elem_25").removeClass("grid_elem_33").removeClass("grid_elem_50").removeClass("grid_elem_66").removeClass("grid_elem_75").removeClass("grid_elem_100");
	$("#module_follow_us")			.parent().removeClass("grid_elem_25").removeClass("grid_elem_33").removeClass("grid_elem_50").removeClass("grid_elem_66").removeClass("grid_elem_75").removeClass("grid_elem_100");

	$("#module_news").parent().remove().insertBefore($("#module_update").parent());
	$("#module_online_players").parent().remove().insertBefore($("#module_follow_us").parent());

	$("#home_online_social").children().addClass("subbg");

	if($(document).width() < 640)
	{
		$("#module_online_players").parent()	.addClass("grid_elem_100");
		$("#module_news").parent()				.addClass("grid_elem_100");
		$("#module_update").parent()			.addClass("grid_elem_100");
		$("#module_follow_us").parent()			.addClass("grid_elem_100");
		$("#module_rankings").parent()			.addClass("grid_elem_100");
	}
	if($(document).width() >= 640 && $(document).width() < 960)
	{
		$("#module_online_players").parent()	.addClass("grid_elem_50");
		$("#module_news").parent()				.addClass("grid_elem_50");
		$("#module_update").parent()			.addClass("grid_elem_50");
		$("#module_follow_us").parent()			.addClass("grid_elem_50");
		$("#module_rankings").parent()			.addClass("grid_elem_100");
	}
	if($(document).width() >= 960 && $(document).width() < 1280)
	{
		$("#module_online_players").parent()	.addClass("grid_elem_33");
		$("#module_news").parent()				.addClass("grid_elem_33");
		$("#module_update").parent()			.addClass("grid_elem_33");
		$("#module_rankings").parent()			.addClass("grid_elem_66");
		$("#module_follow_us").parent()			.addClass("grid_elem_33");

		$("#module_news").parent().remove().insertAfter($("#module_online_players").parent());
	}
	if($(document).width() >= 1280)
	{
		$("#module_news").parent()				.addClass("grid_elem_75");
		$("#module_follow_us").parent()			.addClass("grid_elem_25");

		$("#module_update").parent()			.addClass("grid_elem_25");
		$("#module_online_players").parent()	.addClass("grid_elem_25");
		$("#module_rankings").parent()			.addClass("grid_elem_50");

		$("#module_online_players").parent().remove().insertAfter($("#module_update").parent());
		$("#module_news").parent().remove().insertBefore($("#module_follow_us").parent());

		$("#home_online_social").children().removeClass("subbg");
	}
}

function Home_OnResize()
{
	Home_ResizeRegisterModule();
	Home_NotConnected_OnResize();
	Home_PlayDisconnected_OnResize();
	Home_Connected_OnResize();
}

$(window).resize(function() {
	Home_OnResize();
});
$(document).ready(function() {
    Home_OnResize();
});