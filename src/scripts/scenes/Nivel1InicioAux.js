var nombre;

export default class Nivel1InicioAux extends Phaser.Scene {

	constructor(){

		super({key: 'Nivel1InicioAux'});

	}

	init(data){

		//console.log('init', data);
		this.nombre = data.nombre;
	}

	preload(){

		this.load.image('FondoCargando', 'assets/Imagenes/FondoIntroNivel1Ind.png');
		this.load.audio('Ovacion', 'assets/Audio/Ovacion.mp3');
	}

	create(){

		nombre = this.nombre;
		this.add.text(0, 0, "hack", {font:"1px josefina_sans", fill:"#FFFFFF"});
		this.add.image(400, 300, 'FondoCargando');

		this.add.text(0, 0, "hack", {font:"1px josefina_sans", fill:"#FFFFFF"});
		var SonidoOvacion = this.sound.add('Ovacion', {volume: 0.3});
		SonidoOvacion.play();

		this.load.image('FondoNivel1', 'assets/Imagenes/FondoNivel1.png');
		this.load.image('FondoNivel2', 'assets/Imagenes/FondoNivel2.png');
		this.load.image('FondoNivel3', 'assets/Imagenes/FondoNivel3.png');
		this.load.image('FondoFinal', 'assets/Imagenes/FondoFinal.png');

		this.load.image('FondoJustificacionNivel1', 'assets/Imagenes/FondoJustificacionNivel1.png');
		this.load.image('FondoJustificacionNivel2', 'assets/Imagenes/FondoJustificacionNivel2.png');
		this.load.image('FondoJustificacionNivel3', 'assets/Imagenes/FondoJustificacionNivel3.png');

		this.load.image('TextoNivel2', 'assets/Imagenes/FondoIntroNivel2Ind.png');
		this.load.image('TextoNivel3', 'assets/Imagenes/FondoIntroNivel3Ind.png');

		this.load.audio('Suspenso', 'assets/Audio/Suspenso.mp3');
		this.load.audio('Aplausos', 'assets/Audio/Aplausos.mp3');
		this.load.audio('Mal', 'assets/Audio/Mal.mp3');
		this.load.audio('Tiempo', 'assets/Audio/Tiempo.mp3');

		this.load.spritesheet('ContinuarNivel1', 'assets/Imagenes/ContinuarNivel1Sprites.png', {frameWidth: 320.3, frameHeight: 54});
		this.load.spritesheet('ContinuarNivel2', 'assets/Imagenes/ContinuarNivel2Sprites.png', {frameWidth: 320.3, frameHeight: 54});
		this.load.spritesheet('ContinuarNivel3', 'assets/Imagenes/ContinuarNivel3Sprites.png', {frameWidth: 320.3, frameHeight: 54});

		this.load.spritesheet('FondoProgreso', 'assets/Imagenes/FondoProgreso.png', {frameWidth: 470, frameHeight: 79});
		this.load.spritesheet('FondoOportunidades', 'assets/Imagenes/FondoOportunidades.png', {frameWidth: 265.25, frameHeight: 77});
		this.load.spritesheet('FondoRespuesta', 'assets/Imagenes/FondoRespuesta.png', {frameWidth: 402.5, frameHeight: 82});
		this.load.spritesheet('FondoRespuestaNivel2', 'assets/Imagenes/FondoRespuestaNivel2.png', {frameWidth: 402.5, frameHeight: 82});
		this.load.spritesheet('FondoRespuestaNivel3', 'assets/Imagenes/FondoRespuestaNivel3.png', {frameWidth: 402.5, frameHeight: 82});

		this.load.once('complete', () => {
        //console.log('Cargado');
        this.time.delayedCall(2000, this.Delay, [], this); 
    	});
    	this.load.start();

	}

	Delay(){
		
		this.scene.start('Nivel1Aux', {nombre: nombre});
		//this.scene.start('Derrota', {nombre: nombre});
	}
}