
var Top1Nombre="";
var Top2Nombre="";
var Top3Nombre="";
var	Top1Puntaje="";
var Top2Puntaje="";
var Top3Puntaje="";
var CampoNombreTop1;
var CampoNombreTop2;
var CampoNombreTop3;
var CampoPuntajeTop1;
var CampoPuntajeTop2;
var CampoPuntajeTop3;

export default class Derrota extends Phaser.Scene {

	constructor(){

		super({key: 'Derrota'});

	}

	init(data){
		this.nombre = data.nombre;
		this.puntaje = data.puntaje;
		this.escena = data.escena;
	}

	preload(){

		this.load.spritesheet('VolverAEmpezar', 'assets/Imagenes/VolverAEmpezarSprites.png', {frameWidth: 320.6, frameHeight: 55});
		this.load.image('FondoFinal', 'assets/Imagenes/FondoFinal.png');
	}

	create(){
	
		

		var Titulo = ﻿{ 
			fontSize: 22,
            fontFamily: 'josefina_sans',
            align: "center",
            color: "#fc7303",
            wordWrap: { width: 400, useAdvancedWrap: true }
        }
		var TituloNumero = ﻿{ 
			fontSize: 37,
            fontFamily: 'josefina_sans',
            align: "center",
            color: "#fc7303",
            wordWrap: { width: 400, useAdvancedWrap: true }
        }

		var TituloBlanco = ﻿{ 
			fontSize: 19,
            fontFamily: 'josefina_sans',
            align: "center",
            color: "white",
            wordWrap: { width: 400, useAdvancedWrap: true }
        }

		var CampoPuntajePersonal;

        var nombre = this.nombre;
		var puntaje = this.puntaje;
		var escena = this.escena;

		this.add.image(400, 300, 'FondoFinal');

		nombre = nombre.slice(0, 20);

		CampoNombreTop1 = this.add.text(400, 100, '', TituloBlanco).setOrigin(0.5);
		CampoNombreTop2 = this.add.text(180, 180, '', TituloBlanco).setOrigin(0.5);
		CampoNombreTop3 = this.add.text(620, 230, '', TituloBlanco).setOrigin(0.5);
		CampoPuntajeTop1 = this.add.text(400, 260, '', TituloNumero).setOrigin(0.5);
		CampoPuntajeTop2 = this.add.text(180, 300, '', TituloNumero).setOrigin(0.5);
		CampoPuntajeTop3 = this.add.text(620, 320, '', TituloNumero).setOrigin(0.5);

		this.rest();

		//Puntaje Personal
		if(puntaje==1){
			CampoPuntajePersonal = this.add.text(380, 440, nombre + ": " + puntaje + " punto", Titulo).setOrigin(0.5);
		}
		else{
			CampoPuntajePersonal = this.add.text(380, 440, nombre + ": " + puntaje + " puntos", Titulo).setOrigin(0.5);
		}

		var botonVolverAEmpezar = this.add.sprite(400, 530, 'VolverAEmpezar').setInteractive({ cursor: 'pointer'}).setScale(0.7);

		botonVolverAEmpezar.on('pointerover', function(){
        	this.setFrame(1);
        });

        botonVolverAEmpezar.on('pointerout', function(){
        	this.setFrame(0);
        });

        botonVolverAEmpezar.on('pointerdown', function(){
        	this.setFrame(2);
        });

        botonVolverAEmpezar.on('pointerup', function(){
        	this.setFrame(0);
			if(escena == "empleado"){
        		this.scene.scene.start('Nivel1Inicio', {nombre: nombre});
			}
			else if(escena == "independiente"){
				this.scene.scene.start('Nivel1InicioAux', {nombre: nombre});
			}
        });

	}

	rest()
	{
		var str;
		var arrStr;
	
			var xmlhttp = new XMLHttpRequest();			
			
			xmlhttp.open("GET","assets/Formulario/getuser.php",true);

			xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				
				str = this.responseText;
				
				arrStr = str.split(',');
				
				Top1Nombre = arrStr[0];
				Top1Puntaje = arrStr[1];
				
				Top2Nombre = arrStr[2];
				Top2Puntaje = arrStr[3];
			
				Top3Nombre = arrStr[4];
				Top3Puntaje = arrStr[5];
		
				CampoNombreTop1.setText(Top1Nombre);
				CampoNombreTop2.setText(Top2Nombre);
				CampoNombreTop3.setText(Top3Nombre);
		
				//Top 1
				if(Top1Puntaje==1){
					CampoPuntajeTop1.setText(Top1Puntaje + " punto");
				}
				else{
					CampoPuntajeTop1.setText(Top1Puntaje + " puntos");
				}
		
				//Top 2
				if(Top2Puntaje==1){
					CampoPuntajeTop2.setText(Top2Puntaje + " punto");
				}
				else{
					CampoPuntajeTop2.setText(Top2Puntaje + " puntos");
				}
		
				//Top 3
				if(Top3Puntaje==1){
					CampoPuntajeTop3.setText(Top3Puntaje + " punto");
				}
				else{
					CampoPuntajeTop3.setText(Top3Puntaje + " puntos");
				}
			}
			};
			//xmlhttp.open("GET","https://juegos.cleverfinance.co/Porvenir/ABCparaCamellar/rest/getuser.php",true);

			xmlhttp.send();

	}

}