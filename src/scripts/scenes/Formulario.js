export default class Formulario extends Phaser.Scene {

	constructor(){

		super({key: 'Formulario'});

	}

	preload(){
		this.load.image('FondoFormulario', 'assets/Imagenes/FondoFormulario.png');
		this.load.audio('Dinero', 'assets/Audio/Dinero.mp3');
		this.load.html('Form', 'assets/Formulario/Formulario.html');
        
	}

	create(){

		this.add.image(400, 300, 'FondoFormulario');
		var sonidoDinero = this.sound.add('Dinero');
		var delayCambio;
		var estilo = ﻿{ 
			fontSize: 16,
			fontStyle: 'bold',
			//origin: { x: 0.5, y: 0.5 },
            fontFamily: 'josefina_sans',
            align: "center",
            color: "white",
            wordWrap: { width: 550, useAdvancedWrap: true }
        }
        this.add.text(0, 0, "hack", {font:"1px josefina_sans", fill:"#FFFFFF"});
		var aviso = this.add.text(400, 530, '', estilo);
		    aviso.setOrigin(0.5, 0.5);
					
		var formulario = this.add.dom(420, 430).createFromCache('Form');
		formulario.setPerspective(800);

		formulario.addListener('click');

		formulario.on('click', function (event) {

			if (event.target.name === 'loginButton')
			{
				var NombreIngresado = this.getChildByName('Nombre');
				var CiudadIngresado = this.getChildByName('Ciudad');
				//var EdadIngresada = this.getChildByName('Edad');
				//var CorreoIngresado = this.getChildByName('Correo');
				var Aceptar = this.getChildByName('Terminos')

				//console.log(Aceptar.checked);

				if (NombreIngresado.value !== '' && CiudadIngresado.value !== '' && Aceptar.checked === true)
			   {
				   this.removeListener('click');
				   formulario.setVisible(false);
				   //sonidoDinero.play();

				   var datos = "Nombre="+NombreIngresado.value+"&Ciudad="+CiudadIngresado.value;
				var ajx = new XMLHttpRequest();
					ajx.onreadystatechange = function (){
						   if (ajx.readyState == 4 && ajx.status == 200) {
							//console.log("Está adentro");
							}
					};	
					ajx.open("POST", "assets/Formulario/Formulario1.php", true);
					ajx.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
					ajx.send(datos);

				   delayCambio = this.scene.time.delayedCall(600, ()=>{this.scene.scene.start("Descripcion", {nombre: NombreIngresado.value});}, [], this);

			   }
			   else if(NombreIngresado.value !== '' && CiudadIngresado.value !== '' && Aceptar.checked === false){
				   aviso.setText('Debes marcar la casilla \n para continuar');

			   }
			   else if(NombreIngresado.value !== '' || CiudadIngresado.value !== '' || Aceptar.checked === true || Aceptar.checked === false){
				   aviso.setText('Te falta completar el formulario');
			   }
			}
			else{
			

			}
		});

	}

	Delay(){
		this.scene.scene.start('Descripcion');
	}
}
