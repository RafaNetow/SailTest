/**
 * UsersController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


 module.exports = {

		hi: function (req, res) {
			re
				return res.send("Hi there!");
		},
		bye: function (req, res) {
				return res.redirect("http://www.sayonara.com");
		},
	    findUser: function(req, res){
			var userId = req.param("userId");
				if (!req.param('userId'))
     				res.badRequest('Sorry, you need to tell us the ID');
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
			});
		},
		findAllUserWithAgeMayorToEighteen: function(req,res){
     		Users.find({ age: { '>': 18 }}, function (err, user){
     			if (err) {
					console.log(err);
					return res.json(err);
				} if(!user)
                 	return res.json({success: false, msg: "User not found!"});
                 	return res.json(user);

     		});

		}






};

