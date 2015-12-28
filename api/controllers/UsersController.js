module.exports = {
	getAllUsers: function(req, res) {
		var users = [
			{
				id: 1,
				firstName: "Rafael",
				lastName: "Sequeiros"
			},
			{
				id: 2,
				firstName: "Abelardo",
				lastName: "Mendoza"
			}
		];

		res.json(users);
	}
};
