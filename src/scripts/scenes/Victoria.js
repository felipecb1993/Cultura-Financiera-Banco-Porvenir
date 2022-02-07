export default class Victoria extends Phaser.Scene {

	constructor(){

		super({key: 'Victoria'});

	}

	init(data){

		console.log('init', data);
		this.nombre = data.nombre;
		this.apellido = data.apellido;
		this.puntaje = data.puntaje;;
	}

	preload(){

		this.load.image('FondoVictoria', 'assets/Imagenes/FondoNaranja.png');
		this.load.image('DonFinancieroFeliz', 'assets/Imagenes/DonFinancieroFeliz.png');
		this.load.image('Ganador', 'assets/Imagenes/Ganador.png');
		this.load.spritesheet('VolverAEmpezar', 'assets/Imagenes/VolverAEmpezarSprites.png', {frameWidth: 393.3, frameHeight: 116});
		//this.load.html('TablaC', 'assets/Formulario/Clasificacion.php?');
	}

	create(){

	this.load.html('TablaV', 'assets/Formulario/Clasificacion.php?');
    this.load.once('complete', () => {
        console.log('load complete2');
        this.add.dom(630, 300).createFromCache('TablaV');   
    });
    this.load.start();

		var Titulo = ﻿{ 
			fontSize: 25,
            fontFamily: 'josefina_sans',
            align: "center",
            color: "black",
            wordWrap: { width: 600, useAdvancedWrap: true }
        }

        var nombre = this.nombre;
        var apellido = this.apellido;
		//var SonidoOvacion = this.sound.add('Ovacion', {volume: 0.5});
		//SonidoOvacion.play();

		this.add.image(400, 300, 'FondoVictoria');
		this.add.image(150, 350, 'DonFinancieroFeliz').setScale(0.6);
		
		//var TablaC = this.add.dom(630, 300).createFromCache('TablaC');
			
		var Ganador = this.add.sprite(350, 210, 'Ganador').setScale(0.65);
		var botonVolverAEmpezar = this.add.sprite(400, 530, 'VolverAEmpezar').setInteractive({ cursor: 'pointer'}).setScale(0.7);
		//var sonidoDinero = this.sound.add('Dinero');
		botonVolverAEmpezar.on('pointerover', function(){
        	this.setFrame(1);
        });

        botonVolverAEmpezar.on('pointerout', function(){
        	this.setFrame(0);
        });

        botonVolverAEmpezar.on('pointerdown', function(){
        	this.setFrame(2);
        	//sonidoDinero.play();
        });

        botonVolverAEmpezar.on('pointerup', function(){
        	this.setFrame(0);
        	this.scene.scene.start('Nivel1Inicio', {nombre: nombre, apellido: apellido});
        });
        //TablaC.removeElement('TablaC');
        this.add.text(120, 30, "¡FELICITACIONES! \n RESPONDISTE BIEN TODAS LAS PREGUNTAS", Titulo);
	}

}