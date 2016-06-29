var mongoose = require('mongoose');

module.exports = function() {

	var entidadesSchema = mongoose.Schema({
		nomedaentidade: {
			type: String,
			trim: true
		},
		telefone: {
			type: String,
		},
		email: {
			type: String,
		},
		site: {
			type: String,
		},
		cnpj: {
			type: String,
		},
		ie: {
			type: String,
		},
		im: {
			type: String,
		},
		cidade: {
			type: String,
		},
		estado: {
			type: String,
		},
		texto: {
			type: String,
		},
		valortotal: {
			type: Number,
			default: 0.0
		},
		data_cad: {
			type: Date,
			default: Date.now
		}
	});

	return mongoose.model('Entidades', entidadesSchema);
}
// if (valor.status) 
// valor.doacao.valordoado
// Entidades.findByIdAndUpdate(id, {valortotal: valordoado}, function () {} )
