// mysqlCRUD.js

	buscarUsuario: function(usuario, cb) {
		console.log(usuario);
		con.query('SELECT * FROM usuarios WHERE nick = ?', usuario, function(err, results) {
	           return cb(null, results.length);
		});

	},
	
//index.js


router.post('/comprobarUsuario', function(req, res, next) {
	resultado = mysqlCRUD.buscarUsuario(req.body.nick, function(err, data){
		return data;
	});
	res.send(resultado);
});
