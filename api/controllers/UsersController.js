
		'use strict';

	angular.module('app').controller('UsersController', ['$scope','UserService', function($scope) {
	  		  		$scope.response = '';


	  		  UserService.getUser($scope.user).
                success(function(data, status, headers, config) {
           						$scope.response = data;


                }).
                error(function(data, status, headers, config) {
                  				 $scope.response = data;
	}]);









