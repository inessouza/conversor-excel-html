const fs = require('fs');

fs.readFile("./ines.souza", {encoding: 'utf-8'}, (erro, dados) => {
	if (erro) {
		console.log("Ocorreu falha durante a leitura do arquivo.")
	} else {
		console.log(dados)
	}
})