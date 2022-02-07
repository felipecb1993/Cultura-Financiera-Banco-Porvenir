var nombre;
var apellido;
export default class Descripcion extends Phaser.Scene {

	constructor(){

		super({key: 'Descripcion'});

	}

	init(data){

		//console.log('init', data);
		this.nombre = data.nombre;

	}

	preload(){
		this.load.image('FondoDescripcion', 'assets/Imagenes/FondoSeleccion.png');
		this.load.image('TarjetaIzq', 'assets/Imagenes/Empleados.png');
		this.load.image('TarjetaDer', 'assets/Imagenes/Independientes.png');
		this.load.spritesheet('Jugar', 'assets/Imagenes/JugarSprites.png', {frameWidth: 170.3, frameHeight: 61});
		this.load.audio('Dinero', 'assets/Audio/Dinero.mp3');
	}

	create(){

		this.add.image(400, 300, 'FondoDescripcion');
		var TarjetaIzq = this.add.image(230, 370, 'TarjetaIzq');
		var TarjetaDer = this.add.image(570, 370, 'TarjetaDer');

		var botonJugarIzq = this.add.sprite(225, 525, 'Jugar').setInteractive({ cursor: 'pointer'});
			botonJugarIzq.setScale(1);
		var botonJugarDer = this.add.sprite(575, 525, 'Jugar').setInteractive({ cursor: 'pointer'});
			botonJugarDer.setScale(1);
		var sonidoDinero = this.sound.add('Dinero');
		var delayCambio;
		nombre = this.nombre;

		botonJugarIzq.on('pointerover', function(){
        	this.setFrame(1);
			TarjetaIzq.setScale(1.05);
        });

        botonJugarIzq.on('pointerout', function(){
        	this.setFrame(0);
			TarjetaIzq.setScale(1);
        });

        botonJugarIzq.on('pointerdown', function(){
        	this.setFrame(2);
        	//sonidoDinero.play();
        });

        botonJugarIzq.on('pointerup', function(){
        	this.setFrame(0);
        	delayCambio = this.scene.time.delayedCall(600, this.scene.Delay, [], this);
        });

		botonJugarDer.on('pointerover', function(){
        	this.setFrame(1);
			TarjetaDer.setScale(1.05);
        });

        botonJugarDer.on('pointerout', function(){
        	this.setFrame(0);
			TarjetaDer.setScale(1);
        });

        botonJugarDer.on('pointerdown', function(){
        	this.setFrame(2);
        	//sonidoDinero.play();
        });

        botonJugarDer.on('pointerup', function(){
        	this.setFrame(0);
        	delayCambio = this.scene.time.delayedCall(600, this.scene.DelayUno, [], this);
        });
	}

	Delay(){

		this.scene.scene.start('Nivel1Inicio', {nombre: nombre});
	}

	DelayUno(){

		this.scene.scene.start('Nivel1InicioAux', {nombre: nombre});
	}
}