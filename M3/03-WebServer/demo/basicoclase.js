
/*
FRONT ---> fetch(localhost:3001/home)  -------> SERVER: localhost:3001 || request(/home)
																																					response (Hola Mundo)

FRONT ---> fetch(localhost:3001/pokemones) ---> SERVER: localhost:3001 || request (/pokemones) ?	---> DB (M4) traer los pokemones guardados																  
																			response([{poke1}, {poke2}])
*/

var http = require('http') // importamos el módulo http para poder trabajar con el protocolo
var fs = require('fs') //Importamos el módulo fs que nos permite leer y escribir archivos del file system


const PORT = '3001'

http.createServer(function (request, response) {
	console.log("soy request", request.url)
	//console.log("soy response", response)


	if (request.url === '/') {
		response.writeHead(200, { 'Content-Type': 'text/plain' })
		response.end('Hola, Mundo!\n')
	}
	else if (request.url === '/inventado') {
		response.writeHead(200, { 'Content-Type': 'text/html' })
		var html = fs.readFileSync(__dirname + '/html/index.html')
		response.end(html)
	}
	else if (request.url === '/json') {
		response.writeHead(200, { 'Content-Type': 'application/json' }) //Vamos a devolver texto en formato JSON
		var obj = {
			nombre: 'WebServer',
			apellido: 'Demo'
		}
		response.end(JSON.stringify(obj))
	}
	else if (request.url === '/template') {
		response.writeHead(200, { 'Content-Type': 'text/html' })
		var html = fs.readFileSync(__dirname + '/html/template.html', 'utf8') //Codificamos el buffer para que sea una String
		var nombre = 'Pepita La Pistolera' //Esta es la variable con la que vamos a reemplazar el template
		html = html.replace('{nombre}', nombre) // Usamos el método replace es del objeto String
		response.end(html)
	}

	else {
		response.writeHead(404, { 'Content-Type': 'text/plain' })
		response.end("La pagina que buscas no existe, fijate bien lo que escribis")
	}


}).listen(PORT, () => console.log("server corriendo en puerto 3001")) //Por último tenemos que especificar en que puerto y en qué dirección va a estar escuchando nuestro servidor

/*    ----CRUD ---- create read update delete sobre la ruta HOME
GET /home --> traiga la info de DB
POST /home ---> lleve la info a DB
PUT /home --> modificar tal campo de DB
DELETE /home --> eliminar tal campo de DB
*/
