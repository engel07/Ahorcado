var palabra = "Tamarindo";
var hombre;

//Declaracion de la clase Ahorcado
var Ahorcado = function (con)
{

	this.contexto = con;
	this.maximo   = 5;
	this.intentos = 0;

}

function iniciar()
{
	var canvas    = document.getElementById("c");
	canvas.width  = 500;
	canvas.height = 400;
	var contexto  = canvas.getContext("2d");
	var hombre    = new Ahorcado(contexto);
 
	
}