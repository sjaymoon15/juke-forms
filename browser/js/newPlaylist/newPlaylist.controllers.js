"use strict";

juke.controller("newPlaylistCtrl", function($scope, PlaylistFactory, $log){
	// $scope.user = {};

	$scope.submit = function(){
		PlaylistFactory.create($scope.user)
		.then(function(res){
			$scope.user = null;
			console.log(res);
		})
		.catch($log.error)
	}


});