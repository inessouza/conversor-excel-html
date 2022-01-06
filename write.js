const fs = require("fs");

fs.writeFile("./ines.souza", "Nome: Inês Souza", (err) =>{
	if (err) {
		console.log("Ocorreu um erro ao salvar o arquivo!")
	}
})