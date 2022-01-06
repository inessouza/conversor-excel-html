const fs = require("fs");

fs.readFile("./user.json", {encoding: 'utf-8'}, (erro, dados) => {
	if (erro) {
			console.log("Ocorreu falha durante a leitura do arquivo.")
	} else {
		var conteudo = JSON.parse(dados) // parse converte texto para objeto javascript (JSON)
		conteudo.profissao = "Desenvolvedora Backend Jr."

		fs.writeFile("./user.json", JSON.stringify(conteudo), (erro) => { // stringify converte objeto javascript para texto
			if (erro) {
				console.log("Erro durante a escrita no arquivo")
			}
		})
	}

})