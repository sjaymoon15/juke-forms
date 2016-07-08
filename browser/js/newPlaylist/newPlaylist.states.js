"use strict";

juke.config(function($stateProvider){

	$stateProvider.state("newPlaylist", {
		url:"/playlists/new",
		templateUrl: "/js/newPlaylist/templates/newPlaylist.html",
	})

})