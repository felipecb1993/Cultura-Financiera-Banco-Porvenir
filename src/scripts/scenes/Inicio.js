export default class Inicio extends Phaser.Scene {

	constructor(){

		super({key: 'Inicio'});

	}

	preload(){

        this.load.image('FondoInicio', 'assets/Imagenes/FondoInicio.png');
        this.load.spritesheet('EmpezarInicio', 'assets/Imagenes/EmpezarSprites.png', {frameWidth: 248.6, frameHeight: 83});
        this.load.audio('Dinero', 'assets/Audio/Dinero.mp3');
	}

	create(){

        this.add.image(400, 300, 'FondoInicio');
        this.add.text(0, 0, "hack", {font:"1px josefina_sans", fill:"#FFFFFF"});
        var botonEmpezar = this.add.sprite(400, 540, 'EmpezarInicio').setInteractive({ cursor: 'pointer'});
            botonEmpezar.setScale(0.8);
        var sonidoDinero = this.sound.add('Dinero');
        var delayCambio;

        botonEmpezar.on('pointerover', function(){
        	this.setFrame(1);
        });

        botonEmpezar.on('pointerout', function(){
        	this.setFrame(0);
        });

        botonEmpezar.on('pointerdown', function(){
        	this.setFrame(2);
        	//sonidoDinero.play();
        });

        botonEmpezar.on('pointerup', function(){
        	this.setFrame(0);
        	delayCambio = this.scene.time.delayedCall(600, this.scene.Delay, [], this);
        });

	}

	Delay(){
		
		this.scene.scene.start('Formulario');
	}

}	
