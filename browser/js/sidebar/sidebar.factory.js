"use strict";

juke.factory("SidebarFactory", function($http){

	var SidebarFactory = {};

	SidebarFactory.fetchAll = function(){
		return $http.get("/api/playlists")
		.then(function(res){
			return res.data;
		})
	};

	return SidebarFactory;

})