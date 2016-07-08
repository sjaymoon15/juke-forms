'use strict';

juke.controller('SidebarCtrl', function ($scope, SidebarFactory, $log) {

	SidebarFactory.fetchAll()
	.then(function(res){
		console.log(res);
		$scope.lists = res;
	})
	.catch($log.error);

});
