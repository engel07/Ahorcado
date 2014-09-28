var palabra = "Amoxicilina";
var hombre, l, espacio;

//Declaracion de la clase Ahorcado
var Ahorcado = function(con)
{

    //this es las variables locales de la clase, accesibles en toda la clase
    //this.contexto es el contexto del canvas que llega por parametro desde la variable con
    this.contexto = con;
	this.maximo   = 5;
	this.intentos = 0;
	this.vivo     = true;

	this.dibujar();

}

Ahorcado.prototype.dibujar = function ()
{
	var dibujo = this.contexto;
//dibujando el poste
	dibujo.beginPath();
	dibujo.moveTo(150,100);
	dibujo.lineTo(150,50);
	dibujo.lineTo(400,50);
	dibujo.lineTo(400,350);
	dibujo.lineWidth = 15;
	dibujo.strokeStyle = "#000000";
	dibujo.stroke();
	dibujo.closePath();

	if (this.intentos> 0)

	{
		//intentos = 1 --> rostro
		dibujo.beginPath();
		dibujo.arc(150,140,40,0,Math.PI * 2, false);
		dibujo.strokeStyle = "#F00";
		dibujo.lineWidth = 5;
		dibujo.stroke();
		dibujo.closePath();

		if(this.intentos > 1)
		{
			//intentos = 2 --> torso
			dibujo.beginPath();
			dibujo.moveTo(150,180);
			dibujo.lineTo(150,250);
			dibujo.strokeStyle = "#F00";
			dibujo.lineWidth = 5;
			dibujo.stroke();
			dibujo.closePath();

			//intentos = 3 --> brazos

			if(this.intentos > 2)
			{
				dibujo.beginPath();
				dibujo.moveTo(120,220);
				dibujo.lineTo(150,180);
				dibujo.lineTo(180,220);
				dibujo.strokeStyle="#F00";
				dibujo.lineWidth= 5;
				dibujo.stroke();
				dibujo.closePath();

				if (this.intentos > 3)
				{
					dibujo.beginPath();
					dibujo.moveTo(120,290);
					dibujo.lineTo(150,250);
					dibujo.lineTo(180,290);
					dibujo.strokeStyle="#F00";
					dibujo.lineWidth = 5;
					dibujo.stroke();
					dibujo.closePath();

					if(this.intentos > 4)
					{
						//intentos = 5 --> mori
						dibujo.beginPath();
						//ojo izquierdo
						dibujo.moveTo(125,120);
						dibujo.lineTo(145,145);
						dibujo.moveTo(145,120);
						dibujo.lineTo(125,145);

						//ojo derecho
						dibujo.moveTo(155,120);
						dibujo.lineTo(175,145);
						dibujo.moveTo(175,120);
						dibujo.lineTo(155,145);
						dibujo.strokeStyle="blue";
						dibujo.lineWidth=5;
						dibujo.stroke();
						dibujo.closePath();
					}
				}
			}
		}

	}

}

Ahorcado.prototype.trazar = function()
{
	this.intentos++;
	if (this.intentos >= this.maximo) {
		this.vivo = false;
		alert("Estas Muerto!!!");
	}

	this.dibujar();

}

function iniciar()
{
	l         = document.getElementById('letra');
	var b         = document.getElementById('boton');
	var canvas    = document.getElementById('c');
	canvas.width  = 500;
	canvas.height = 400;
	var contexto  = canvas.getContext('2d');
	hombre        = new Ahorcado(contexto);

	//convierte en mayuscula
	palabra = palabra.toUpperCase();

    //declaro un array con N espacios de acuerdo al largo de la palabra
	espacio = new Array(palabra.length);

	

  //Agregamos una funcion que se dispare al dar click al boton


    b.addEventListener("click", agregarLetra);

    //mostrarPista(palabra, espacio);

	
}

function agregarLetra()
{
	var letra = l.value;
	
	mostrarPalabra(palabra, hombre, letra);
	
}

function mostrarPalabra(palabra, ahorcado, letra)
{
	letra = letra.toUpperCase();
	// var pista = document.getElementById('pista');
	// var texto = "";

}


function mostrarPista(palabra, espacio)
{
	var pista = document.getElementById('pista');
	var texto = "";

}