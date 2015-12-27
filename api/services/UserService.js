angular.module('app').service('UserService', ['$http', function($http){
		$scope.user = ''


		$scope.getUser = function() {
			Users.findOne({id: userId}, function (err, user){
				if (err) {
					console.log(err);
					return res.json(err);
				}
                 if(!user)
                 	return res.json({success: false, msg: "User not found!"});
				else{
					console.log('Usuario:', user);
						return res.json(user);
				}
		}

}]);
