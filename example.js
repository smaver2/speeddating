// mysqlCRUD.js

	buscarUsuario: function(usuario, cb) {
		console.log(usuario);
		con.query('SELECT * FROM usuarios WHERE nick = ?', usuario, function(err, results) {
	           return cb(null, results.length);
		});

	},
	
//index.js


router.post('/comprobarUsuario', function(req, res, next) {
	mysqlCRUD.buscarUsuario(req.body.nick, function(err, data){
		if (err) { res.status(500).send(err) }
		res.status(200).send(data);
	});
	
});
