var nombre;
var apellido;
var OportunidadesCont = 0;
var ProgresoCont = 0;
var Respuesta = "";
var Seleccion = "";
var RespuestaAboton;
var RespuestaBboton;
var RespuestaCboton;
var RespuestaDboton;
var Progreso;
var Oportunidades;
var PreguntaAleatorio;
var Pregunta = "";
var PreguntaCampo;
var RespuestaA = "";
var RespuestaB = "";
var RespuestaC = "";
var RespuestaD = "";
var RespuestaAcampo;
var RespuestaBcampo;
var RespuestaCcampo;
var RespuestaDcampo;
var Justificacion;
var JustificacionTodo;
var JustificacionCampo;
var FondoPublico;
var PreguntasOrdenadas = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];
var index = -1;
var SonidoSuspenso;
var SonidoAplausos;
var SonidoOvacion; 
var SonidoMal;
var SonidoTiempo;
var TemporizadorTexto;
var timer;
var ResetTimer = "";
var DonFinancieroNormal;
var DonFinancieroFeliz;
var DonFinancieroTriste;
var DonFinancieroPreocupado;
var timeDelay;
var Equivocado;
var Correcto;
var Derrota;
var Agotado;
var Casi;
var BotonContinuar;
var FondoPregunta;
var Nivel = 1;
var Puntaje = 0;
var FondoCambio;
var TextoNivel2;
var TextoNivel3;
var TextoNivel4;
var TextoNivel5;
var tempo;
var Logo;

var EstiloPregunta = ﻿{ 
			fontSize: 16,
            fontFamily: 'Arial',
            align: "center",
            color: "white",
            wordWrap: { width: 600, useBasicWrap: true }
        }
var EstiloRespuesta = ﻿{ 
			fontSize: 15,
			origin: { x: 0.5, y: 0.5 },
            fontFamily: 'Arial',
            align: "center",
            color: "white",
            wordWrap: { width: 290, useBasicWrap: true }
        }
var EstiloJustificacion = ﻿{ 
			fontSize: 18,
			fontStyle: 'bold',
            //fontFamily: 'Arial',
            fontFamily: 'josefina_sans',
            align: "justify",
            color: "white",
            wordWrap: { width: 700, useBasicWrap: true }
        }
export default class Nivel1 extends Phaser.Scene {

	constructor(){

		super({key: 'Nivel1'});

	}

	init(data){

		console.log('init', data);
		this.nombre = data.nombre;
		this.apellido = data.apellido;
	}

	preload(){

		// this.load.audio('Suspenso', 'assets/Audio/Suspenso.mp3');
		// this.load.audio('Aplausos', 'assets/Audio/Aplausos.mp3');
		// this.load.audio('Mal', 'assets/Audio/Mal.mp3');
		// //this.load.image('FondoNivel', 'assets/Imagenes/FondoNivel.png');
		// this.load.image('FondoPublico', 'assets/Imagenes/FondoPublico.png');
		// this.load.image('FondoPregunta', 'assets/Imagenes/FondoPregunta.png');

		// this.load.image('DonFinancieroNormal', 'assets/Imagenes/DonFinancieroNormal.png');
		// this.load.image('DonFinancieroFeliz', 'assets/Imagenes/DonFinancieroFeliz.png');
		// this.load.image('DonFinancieroTriste', 'assets/Imagenes/DonFinancieroTriste.png');
		// this.load.image('DonFinancieroPreocupado', 'assets/Imagenes/DonFinancieroPreocupado.png');

		// this.load.spritesheet('Continuar', 'assets/Imagenes/ContinuarAmarilloSprites.png', {frameWidth: 393.3, frameHeight: 116});

		// this.load.spritesheet('Equivocado', 'assets/Imagenes/Equivocado.png', {frameWidth: 200, frameHeight: 107});
		// this.load.spritesheet('Correcto', 'assets/Imagenes/Correcto.png', {frameWidth: 200, frameHeight: 107});
		// this.load.spritesheet('Derrota', 'assets/Imagenes/Derrota.png', {frameWidth: 200, frameHeight: 107});
		// this.load.spritesheet('Agotado', 'assets/Imagenes/Agotado.png', {frameWidth: 200, frameHeight: 107});

		// this.load.spritesheet('FondoProgreso', 'assets/Imagenes/FondoProgreso.png', {frameWidth: 354.2, frameHeight: 137});
		// this.load.spritesheet('FondoOportunidades', 'assets/Imagenes/FondoOportunidades.png', {frameWidth: 282.7, frameHeight: 138});
		// this.load.spritesheet('FondoRespuesta', 'assets/Imagenes/FondoRespuesta.png', {frameWidth: 400, frameHeight: 75.8});
	} 

	create(){

		OportunidadesCont = 0;
		ProgresoCont = 0;
		index = -1;
		Nivel = 1;
        Puntaje = 0;
        //timer = 60;

		this.add.image(400, 300, 'FondoNivel');

		FondoPublico = this.add.image(400, 300, 'FondoPublico');
		DonFinancieroNormal = this.add.image(300, 250, 'DonFinancieroNormal').setScale(0.65);
		DonFinancieroTriste = this.add.image(300, 260, 'DonFinancieroTriste').setScale(0.65);
		DonFinancieroTriste.setVisible(false);
		DonFinancieroFeliz = this.add.image(290, 250, 'DonFinancieroFeliz').setScale(0.65);
		DonFinancieroFeliz.setVisible(false);
		DonFinancieroPreocupado = this.add.image(309, 250, 'DonFinancieroPreocupado').setScale(0.65);
		DonFinancieroPreocupado.setVisible(false);

		Equivocado = this.add.sprite(515, 120, 'Equivocado').setScale(1.2);
		Equivocado.setVisible(false);
		Correcto = this.add.sprite(510, 100, 'Correcto').setScale(1.2);
		Correcto.setVisible(false);
		Derrota = this.add.sprite(510, 120, 'Derrota').setScale(1.2);
		Derrota.setVisible(false);
		Agotado = this.add.sprite(510, 120, 'Agotado').setScale(1.2);
		Agotado.setVisible(false);

		Casi = this.add.image(510, 120, 'Casi').setScale(1.2);
		Casi.setVisible(false);

		FondoPregunta = this.add.image(400, 400, 'FondoPregunta').setScale(1, 0.5);

		Progreso = this.add.sprite(95, 50, 'FondoProgreso').setScale(0.4);
		Progreso.setFrame(ProgresoCont);
		Oportunidades = this.add.sprite(715, 50, 'FondoOportunidades').setScale(0.4);
		Oportunidades.setFrame(OportunidadesCont);

		SonidoSuspenso = this.sound.add('Suspenso', {volume: 0.2});
		SonidoAplausos = this.sound.add('Aplausos', {volume: 0.3});
		SonidoOvacion = this.sound.add('Ovacion', {volume: 0.3});
		SonidoMal = this.sound.add('Mal', {volume: 0.2});
		SonidoTiempo = this.sound.add('Tiempo', {volume: 0.5, loop: true});

		BotonContinuar = this.add.sprite(400, 500, 'Continuar').setScale(0.7).setInteractive({ cursor: 'pointer'});
		BotonContinuar.setVisible(false);

		RespuestaAboton = this.add.sprite(200, 480, 'FondoRespuesta').setScale(1, 0.8).setInteractive({ cursor: 'pointer'});
		RespuestaBboton = this.add.sprite(600, 480, 'FondoRespuesta').setScale(1, 0.8).setInteractive({ cursor: 'pointer'});
		RespuestaCboton = this.add.sprite(200, 555, 'FondoRespuesta').setScale(1, 0.8).setInteractive({ cursor: 'pointer'});
		RespuestaDboton = this.add.sprite(600, 555, 'FondoRespuesta').setScale(1, 0.8).setInteractive({ cursor: 'pointer'});

		PreguntaCampo = this.add.text(100, 380, '', EstiloPregunta);
		RespuestaAcampo = this.add.text(50, 470, '', EstiloRespuesta);
		RespuestaBcampo = this.add.text(450, 470, '', EstiloRespuesta);
		RespuestaCcampo = this.add.text(50, 545, '', EstiloRespuesta);
		RespuestaDcampo = this.add.text(450, 545, '', EstiloRespuesta);
		JustificacionCampo = this.add.text(60, 230, '', EstiloJustificacion);
		JustificacionCampo.setVisible(false);

		TemporizadorTexto = this.add.text(65, 90, '', {fontSize: '32px', fontFamily: 'josefina_sans'});
		this.ControlTemporizador();
		
		nombre = this.nombre;
		apellido = this.apellido;

		this.anims.create({
        key: 'click',
        frames: this.anims.generateFrameNumbers('FondoRespuesta', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: 1
    	});

		this.PreguntasAleatorias(PreguntasOrdenadas);

		if(ProgresoCont < 4 || OportunidadesCont < 3){
		this.RefrescarPregunta();
		}

		//Continuar
		BotonContinuar.on('pointerover', function(){
        	this.setFrame(1);
        });

        BotonContinuar.on('pointerout', function(){
        	this.setFrame(0);
        });

        BotonContinuar.on('pointerup', function(){
        	
        	this.setFrame(2);
      		
			if(ProgresoCont < 4 && OportunidadesCont < 3){
				timer = 60;
				//console.log("Refrescar");			

        		this.scene.time.delayedCall(500, this.scene.Reinicio, [], this);
        		this.scene.time.delayedCall(500, this.scene.RefrescarPregunta, [], this);
			}
			else if(ProgresoCont == 4){
				this.scene.SiguienteNivel();
				}
			else if(OportunidadesCont == 3){
				Puntaje = Puntaje + ProgresoCont;
				console.log("Puntaje al perder: " + Puntaje);
				this.scene.CambioDerrota();
			}

        });

        //Respuesta A
		RespuestaAboton.on('pointerover', function(){
        	this.setFrame(5);
        });

        RespuestaAboton.on('pointerout', function(){
        	this.setFrame(0);
        });
        RespuestaAboton.on('pointerup', function(){
        	Seleccion = "A";
        	TemporizadorTexto.setVisible(false);
        	timer = 3600;
        	
        	this.scene.VerificarRespuesta();
        	this.scene.VerificarProgreso();
        	this.scene.VerificarOportunidades();
        	//this.scene.time.delayedCall(4000, this.scene.EspacioJustificacion, [], this);

        });

        //Respuesta B
        RespuestaBboton.on('pointerover', function(){
        	this.setFrame(5);
        });

        RespuestaBboton.on('pointerout', function(){
        	this.setFrame(0);
        });
        RespuestaBboton.on('pointerup', function(){
        	Seleccion = "B";
        	TemporizadorTexto.setVisible(false);
        	timer = 3600;
        	
        	this.scene.VerificarRespuesta();
        	this.scene.VerificarProgreso();
        	this.scene.VerificarOportunidades();
        	//this.scene.time.delayedCall(4000, this.scene.EspacioJustificacion, [], this);

        });

        //Respuesta C
        RespuestaCboton.on('pointerover', function(){
        	this.setFrame(5);
        });

        RespuestaCboton.on('pointerout', function(){
        	this.setFrame(0);
        });
        RespuestaCboton.on('pointerup', function(){
        	Seleccion = "C";
        	TemporizadorTexto.setVisible(false);
        	timer = 3600;
        	
        	this.scene.VerificarRespuesta();
        	this.scene.VerificarProgreso();
        	this.scene.VerificarOportunidades();
        	//this.scene.time.delayedCall(4000, this.scene.EspacioJustificacion, [], this);
        });

        //Respuesta D
        RespuestaDboton.on('pointerover', function(){
        	this.setFrame(5);
        });

        RespuestaDboton.on('pointerout', function(){
        	this.setFrame(0);
        });
        RespuestaDboton.on('pointerup', function(){
        	Seleccion = "D";
        	TemporizadorTexto.setVisible(false);
        	timer = 3600;
        	
        	this.scene.VerificarRespuesta();
        	this.scene.VerificarProgreso();
        	this.scene.VerificarOportunidades();
        	//this.scene.time.delayedCall(4000, this.scene.EspacioJustificacion, [], this);
 
        });

        Logo = this.add.image(400, 100, 'Logo').setScale(0.4);
		Logo.setVisible(false);

        FondoCambio = this.add.image(400, 300, 'FondoNivel');
        FondoCambio.setVisible(false);
        TextoNivel2 = this.add.image(400, 400, 'TextoNivel2');
        TextoNivel2.setVisible(false);
        TextoNivel3 = this.add.image(400, 400, 'TextoNivel3');
        TextoNivel3.setVisible(false);
        TextoNivel4 = this.add.image(400, 400, 'TextoNivel4');
        TextoNivel4.setVisible(false);
        TextoNivel5 = this.add.image(400, 400, 'TextoNivel5');
        TextoNivel5.setVisible(false);
	}

	update(){

			if(ResetTimer == "Si"){

				this.PerdioPorTiempo();
				ResetTimer = "No";

			}
			//console.log(timer);
			console.log("Nivel: " + Nivel);
	}

	PerdioPorTiempo(){
		Seleccion = "";
		SonidoTiempo.stop();
		RespuestaAboton.removeInteractive();
		RespuestaBboton.removeInteractive();
		RespuestaCboton.removeInteractive();
		RespuestaDboton.removeInteractive();
		TemporizadorTexto.setVisible(false);
        timer = 3600;
        this.VerificarOportunidades();
		DonFinancieroNormal.setVisible(false);
		DonFinancieroPreocupado.setVisible(false);
		DonFinancieroTriste.setVisible(true);
		this.time.delayedCall(6000, this.EspacioJustificacion, [], this);
	}

	ControlTemporizador(){

	timer = 60;
	var aux = "Ya";
	var minutes, seconds;
    tempo = setInterval(function () {
    	
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        TemporizadorTexto.setText(minutes + ":" + seconds);
        	if(timer <=10 && aux == "Ya"){
        		SonidoTiempo.play();
        		DonFinancieroNormal.setVisible(false);
        		DonFinancieroPreocupado.setVisible(true);
        		Casi.setVisible(false);
        		Agotado.setVisible(true); Agotado.setFrame(Math.floor(Math.random() * (2 - 0 + 1)) + 0);
        		aux = "Nop";
        	}
        	if(timer==59){TemporizadorTexto.setVisible(true);}
	        if (--timer < 0) {
	        	ResetTimer = "Si";
	        	aux = "Ya";
	        }
	    }, 1000);

	}

	EspacioJustificacion(){

		BotonContinuar.setVisible(true);
		Agotado.setVisible(false);
		Correcto.setVisible(false);
		Derrota.setVisible(false);
		Equivocado.setVisible(false);
		Casi.setVisible(false);
		FondoPublico.setVisible(false);
		DonFinancieroNormal.setVisible(false);
		DonFinancieroTriste.setVisible(false);
		DonFinancieroFeliz.setVisible(false);
		DonFinancieroPreocupado.setVisible(false);
		RespuestaAboton.setVisible(false);
		RespuestaBboton.setVisible(false);
		RespuestaCboton.setVisible(false);
		RespuestaDboton.setVisible(false);
		PreguntaCampo.setVisible(false);
		RespuestaAcampo.setVisible(false);
		RespuestaBcampo.setVisible(false);
		RespuestaCcampo.setVisible(false);
		RespuestaDcampo.setVisible(false);
		JustificacionCampo.setVisible(true);
		Logo.setVisible(true);
		FondoPregunta.setVisible(false);
	}

	Reinicio(){
		//console.log("Reinicio");
		//clearInterval(tempo);
		PreguntaCampo.setVisible(true);
		JustificacionCampo.setVisible(false);
		Logo.setVisible(false);
		RespuestaAcampo.setVisible(true);
		RespuestaBcampo.setVisible(true);
		RespuestaCcampo.setVisible(true);
		RespuestaDcampo.setVisible(true);
		BotonContinuar.setVisible(false);
		FondoPublico.setVisible(true);
		DonFinancieroNormal.setVisible(true);
		RespuestaAboton.setVisible(true);
		RespuestaBboton.setVisible(true);
		RespuestaCboton.setVisible(true);
		RespuestaDboton.setVisible(true);
		FondoPregunta.setVisible(true);
		FondoCambio.setVisible(false);
		TextoNivel2.setVisible(false);
		TextoNivel3.setVisible(false);
		TextoNivel4.setVisible(false);
		TextoNivel5.setVisible(false);
		
		timer = 60;
		//this.scene.ControlTemporizador();
		if(Nivel == 5 && ProgresoCont == 0 && timer>45){Casi.setVisible(true);} else{Casi.setVisible(false);}
	}

	VerificarRespuesta(){
		Casi.setVisible(false);
		SonidoTiempo.stop();
		RespuestaAboton.removeInteractive();
		RespuestaBboton.removeInteractive();
		RespuestaCboton.removeInteractive();
		RespuestaDboton.removeInteractive();
		DonFinancieroNormal.setVisible(false);
		DonFinancieroPreocupado.setVisible(false);
		if(Respuesta == "A" && Seleccion == "A"){ RespuestaAboton.anims.play('click', true);} else if (Respuesta != "A" && Seleccion == "A"){RespuestaAboton.setFrame(6);}
			else if(Respuesta == "B" && Seleccion == "B"){ RespuestaBboton.anims.play('click', true);} else if (Respuesta != "B" && Seleccion == "B"){RespuestaBboton.setFrame(6);}
				else if(Respuesta == "C" && Seleccion == "C"){ RespuestaCboton.anims.play('click', true);} else if (Respuesta != "C" && Seleccion == "C"){RespuestaCboton.setFrame(6);}
					else if(Respuesta == "D" && Seleccion == "D"){ RespuestaDboton.anims.play('click', true);} else if (Respuesta != "D" && Seleccion == "D"){RespuestaDboton.setFrame(6);}		
	}

	VerificarProgreso(){
		
		if(Respuesta == "A" && Seleccion == "A"){ ProgresoCont++; Progreso.setFrame(ProgresoCont); SonidoAplausos.play(); DonFinancieroFeliz.setVisible(true); Correcto.setVisible(true); if(ProgresoCont!=3){Correcto.setFrame(Math.floor(Math.random() * (3 - 1 + 1)) + 1);}else if(ProgresoCont == 3){Correcto.setFrame(0);} this.time.delayedCall(4000, this.EspacioJustificacion, [], this);}
			else if(Respuesta == "B" && Seleccion == "B"){ ProgresoCont++; Progreso.setFrame(ProgresoCont); SonidoAplausos.play(); DonFinancieroFeliz.setVisible(true); Correcto.setVisible(true); if(ProgresoCont!=3){Correcto.setFrame(Math.floor(Math.random() * (3 - 1 + 1)) + 1);}else if(ProgresoCont == 3){Correcto.setFrame(0);} this.time.delayedCall(4000, this.EspacioJustificacion, [], this);}
				else if(Respuesta == "C" && Seleccion == "C"){ ProgresoCont++; Progreso.setFrame(ProgresoCont); SonidoAplausos.play(); DonFinancieroFeliz.setVisible(true); Correcto.setVisible(true); if(ProgresoCont!=3){Correcto.setFrame(Math.floor(Math.random() * (3 - 1 + 1)) + 1);}else if(ProgresoCont == 3){Correcto.setFrame(0);} this.time.delayedCall(4000, this.EspacioJustificacion, [], this);}
					else if(Respuesta == "D" && Seleccion == "D"){ ProgresoCont++; Progreso.setFrame(ProgresoCont); SonidoAplausos.play(); DonFinancieroFeliz.setVisible(true); Correcto.setVisible(true); if(ProgresoCont!=3){Correcto.setFrame(Math.floor(Math.random() * (3 - 1 + 1)) + 1);}else if(ProgresoCont == 3){Correcto.setFrame(0);} this.time.delayedCall(4000, this.EspacioJustificacion, [], this);}
	}

	SiguienteNivel(){

		if(Nivel == 1){Nivel = 2; Puntaje = 4; ProgresoCont = 0; index = -1; Progreso.setFrame(ProgresoCont); this.NivelDos();}
		else if(Nivel == 2){Nivel = 3; Puntaje = 8; ProgresoCont = 0; index = -1;  Progreso.setFrame(ProgresoCont); this.NivelTres();}
		else if(Nivel == 3){Nivel = 4; Puntaje = 12; ProgresoCont = 0; index = -1;  Progreso.setFrame(ProgresoCont); this.NivelCuatro();}
		else if(Nivel == 4){Nivel = 5; Puntaje = 16; ProgresoCont = 0; index = -1;  Progreso.setFrame(ProgresoCont); this.NivelCinco();}
		else if(Nivel == 5){Puntaje = 20; ProgresoCont = 0; index = -1; this.CambioVictoria();}
				
		console.log("Nivel: " + Nivel);
		console.log("Puntaje: " + Puntaje);
	}

	NivelDos(){
		FondoCambio.setVisible(true);
		TextoNivel2.setVisible(true);
		SonidoOvacion.play();
		BotonContinuar.removeInteractive();

		this.time.delayedCall(5000, this.Reinicio, [], this);
        this.time.delayedCall(5000, this.RefrescarPregunta, [], this);
	}

	NivelTres(){
		FondoCambio.setVisible(true);
		TextoNivel3.setVisible(true);
		SonidoOvacion.play();
		BotonContinuar.removeInteractive();
		this.time.delayedCall(5000, this.Reinicio, [], this);
        this.time.delayedCall(5000, this.RefrescarPregunta, [], this);
	}

	NivelCuatro(){
		FondoCambio.setVisible(true);
		TextoNivel4.setVisible(true);
		SonidoOvacion.play();
		BotonContinuar.removeInteractive();
		this.time.delayedCall(5000, this.Reinicio, [], this);
        this.time.delayedCall(5000, this.RefrescarPregunta, [], this);
	}

	NivelCinco(){
		FondoCambio.setVisible(true);
		TextoNivel5.setVisible(true);
		SonidoOvacion.play();
		BotonContinuar.removeInteractive();
		this.time.delayedCall(5000, this.Reinicio, [], this);
        this.time.delayedCall(5000, this.RefrescarPregunta, [], this);
	}

	VerificarOportunidades(){
		
		Agotado.setVisible(false);
		if(Respuesta == "A" && Seleccion != "A"){ OportunidadesCont++; Oportunidades.setFrame(OportunidadesCont); SonidoMal.play(); RespuestaAboton.anims.play('click', true); DonFinancieroTriste.setVisible(true); if(OportunidadesCont <= 2){console.log("Se equivoco"); Equivocado.setVisible(true); Equivocado.setFrame(Math.floor(Math.random() * (2 - 0 + 1)) + 0);} if(OportunidadesCont == 3){Derrota.setVisible(true); Derrota.setFrame(Math.floor(Math.random() * (2 - 0 + 1)) + 0);} this.time.delayedCall(6000, this.EspacioJustificacion, [], this);}
			else if(Respuesta == "B" && Seleccion != "B"){ OportunidadesCont++; Oportunidades.setFrame(OportunidadesCont); SonidoMal.play(); RespuestaBboton.anims.play('click', true); DonFinancieroTriste.setVisible(true); if(OportunidadesCont <= 2){console.log("Se equivoco"); Equivocado.setVisible(true); Equivocado.setFrame(Math.floor(Math.random() * (2 - 0 + 1)) + 0);} if(OportunidadesCont == 3){Derrota.setVisible(true); Derrota.setFrame(Math.floor(Math.random() * (2 - 0 + 1)) + 0);} this.time.delayedCall(6000, this.EspacioJustificacion, [], this);}
				else if(Respuesta == "C" && Seleccion != "C"){ OportunidadesCont++; Oportunidades.setFrame(OportunidadesCont); SonidoMal.play(); RespuestaCboton.anims.play('click', true); DonFinancieroTriste.setVisible(true); if(OportunidadesCont <= 2){console.log("Se equivoco"); Equivocado.setVisible(true); Equivocado.setFrame(Math.floor(Math.random() * (2 - 0 + 1)) + 0);} if(OportunidadesCont == 3){Derrota.setVisible(true); Derrota.setFrame(Math.floor(Math.random() * (2 - 0 + 1)) + 0);} this.time.delayedCall(6000, this.EspacioJustificacion, [], this);}
					else if(Respuesta == "D" && Seleccion != "D"){ OportunidadesCont++; Oportunidades.setFrame(OportunidadesCont); SonidoMal.play(); RespuestaDboton.anims.play('click', true); DonFinancieroTriste.setVisible(true); if(OportunidadesCont <= 2){console.log("Se equivoco"); Equivocado.setVisible(true); Equivocado.setFrame(Math.floor(Math.random() * (2 - 0 + 1)) + 0);} if(OportunidadesCont == 3){Derrota.setVisible(true); Derrota.setFrame(Math.floor(Math.random() * (2 - 0 + 1)) + 0);} this.time.delayedCall(6000, this.EspacioJustificacion, [], this);}

	}

	Derrota(){
		console.log("Ha perdido");
		DonFinancieroNormal.setVisible(false);
		DonFinancieroFeliz.setVisible(false);
		DonFinancieroPreocupado.setVisible(false);
		DonFinancieroTriste.setVisible(true);
		TemporizadorTexto.setVisible(false);
		//Derrota.setVisible(true); 
		//Derrota.setFrame(Math.floor(Math.random() * (2 - 0 + 1)) + 0);
		this.time.delayedCall(4000, this.CambioDerrota, [], this);
	}
	CambioDerrota(){
		console.log("Entro a cambio de escena por derrota");
		var nombreCompleto = nombre + " " + apellido;
				var datos = "Nombre="+nombreCompleto+"&Puntaje="+Puntaje;
			        		var ajx = new XMLHttpRequest();
			        			ajx.onreadystatechange = function (){
			        				   if (ajx.readyState == 4 && ajx.status == 200) {
                    					console.log("Está adentro");
                						}
			        			};	
			        			ajx.open("POST", "assets/Formulario/FormularioTabla.php", true);
            					ajx.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            					ajx.send(datos);

						   		console.log(datos);
		clearInterval(tempo);
		//this.scene.restart('Derrota');
		this.time.delayedCall(1500, this.Perdio, [], this);
		//this.scene.start('Derrota', {nombre: nombre, apellido: apellido, puntaje: Puntaje});
	}
	Perdio(){
		this.scene.start('Derrota', {nombre: nombre, apellido: apellido, puntaje: Puntaje});
	}
	CambioVictoria(){
		console.log("Entro a cambio de escena por victoria");
		var nombreCompleto = nombre + " " + apellido;
				var datos = "Nombre="+nombreCompleto+"&Puntaje="+Puntaje;
			        		var ajx = new XMLHttpRequest();
			        			ajx.onreadystatechange = function (){
			        				   if (ajx.readyState == 4 && ajx.status == 200) {
                    					console.log("Está adentro");
                						}
			        			};	
			        			ajx.open("POST", "assets/Formulario/FormularioTabla.php", true);
            					ajx.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            					ajx.send(datos);

						   		console.log(datos);
		clearInterval(tempo);
		//this.scene.restart('Victoria');
		this.time.delayedCall(1500, this.Gano, [], this);
		//this.scene.start('Victoria', {nombre: nombre, apellido: apellido, puntaje: Puntaje});
	}
	Gano(){
		this.scene.start('Victoria', {nombre: nombre, apellido: apellido, puntaje: Puntaje});
	}
	RefrescarPregunta(){
		RespuestaAboton.setVisible(true);
		RespuestaBboton.setVisible(true);
		RespuestaCboton.setVisible(true);
		RespuestaDboton.setVisible(true);
		RespuestaAboton.setInteractive({ cursor: 'pointer'});
		RespuestaBboton.setInteractive({ cursor: 'pointer'});
		RespuestaCboton.setInteractive({ cursor: 'pointer'});
		RespuestaDboton.setInteractive({ cursor: 'pointer'});
		BotonContinuar.setInteractive({ cursor: 'pointer'});
		RespuestaAboton.setFrame(0);
		RespuestaBboton.setFrame(0);
		RespuestaCboton.setFrame(0);
		RespuestaDboton.setFrame(0);
		Correcto.setVisible(false);
		Equivocado.setVisible(false);
		Agotado.setVisible(false);
		Derrota.setVisible(false);

		DonFinancieroNormal.setVisible(true);
		DonFinancieroFeliz.setVisible(false);
		DonFinancieroTriste.setVisible(false);
		DonFinancieroPreocupado.setVisible(false);
		
		index++;
		ResetTimer = "No";
		
		SonidoSuspenso.play();

		PreguntaAleatorio = PreguntasOrdenadas[index];

		if(Nivel == 1){
			switch (PreguntaAleatorio){
			case 0:
					Pregunta = "¿Qué es capacidad de ahorro?";
					RespuestaA = "La cantidad de dinero que gasto mensualmente";
					RespuestaB = "El dinero que me queda después de pagar obligaciones y gastos básicos";
					RespuestaC = "La cantidad de dinero que gasto con tarjetas de crédito";
					RespuestaD = "La cantidad de dinero que me ingresa mensualmente";
					Respuesta = "B";
					Justificacion = "La capacidad de ahorro representa la capacidad de dinero mensual que podríamos destinar al ahorro ajustando nuestros gastos y obligaciones mensuales. \n \n \nFUENTE: Clever Finance";
					PreguntaCampo.x = 290; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 463;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 463;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 537;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 537;
					JustificacionCampo.x = 38; JustificacionCampo.y = 250;
			break;
			case 1: 
					Pregunta = "¿Cuál es la diferencia entre tarjeta débito y crédito?";
					RespuestaA = "Una es de plástico y la otra de cartón";
					RespuestaB = "Una es dinero propio y la otra es deuda";
					RespuestaC = "El monto de deuda";
					RespuestaD = "Ninguna de las anteriores";
					Respuesta = "B";
					Justificacion = "La tarjeta de débito te la da el banco cuando abres una cuenta de ahorros, por lo tanto, te permite utilizar tu propio dinero. La tarjeta de crédito te permite hacer compras con dinero del banco, por lo tanto, es dinero prestado que luego tendrás que devolver. \n \n \nFUENTE: Clever Finance";
					PreguntaCampo.x = 220; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 230;
			break;
			case 2:
					Pregunta = "¿Qué es un CDT?";
					RespuestaA = "Certificado de depósito a término";
					RespuestaB = "Crédito de disposición titular";
					RespuestaC = "Certificador de disminución de tasa";
					RespuestaD = "Control de depósitos y tarjetas";
					Respuesta = "A";
					Justificacion = "Un CDT (Certificado de depósito a término) es un título valor en el que puede invertir su dinero de manera fácil y segura durante un tiempo determinado y al finalizar el plazo recibir su inversión inicial más los intereses ganados. \n \n \nFUENTE: Asobancaria";
					PreguntaCampo.x = 335; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 230;
			break;
			case 3:
					Pregunta = "¿Qué significa “Tener Liquidez”?";
					RespuestaA = "El  dinero que tenemos disponible para invertir, pagar obligaciones o gastos";
					RespuestaB = "El dinero que gasto mensualmente";
					RespuestaC = "El dinero que prestó a un amigo";
					RespuestaD = "Ninguna de las anteriores";
					Respuesta = "A";
					Justificacion = "Tener liquidez es tener dinero disponible sin recurrir a préstamos o venta de activos. \n \n \nFUENTE: Clever Finance";
					PreguntaCampo.x = 290; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 463;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 260;
			break;
			case 4:
					Pregunta = "¿Cuál de estas entidades NO forma parte del sistema financiero Colombiano?";
					RespuestaA = "Establecimientos Bancarios";
					RespuestaB = "Compañías de seguros";
					RespuestaC = "Fondos de pensiones y cesantías";
					RespuestaD = "Compañías de transporte";
					Respuesta = "D";
					Justificacion = "Según la superintendencia financiera de Colombia, el sistema financiero está compuesto por: Establecimientos de crédito, Sociedades de servicios financieros, sociedades de capitalización, entidades aseguradoras e intermediarios de seguros. \n \n \nFUENTE: Superintendencia Financiera de Colombia.";
					PreguntaCampo.x = 130; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 240;
			break;
			case 5:
					Pregunta = "Una de las siguientes, NO es una forma de ahorrar:";
					RespuestaA = "Crear un fondo de emergencias";
					RespuestaB = "Preparar tu retiro";
					RespuestaC = "Comprar las últimas ofertas de la tienda";
					RespuestaD = "Cumplir objetivos financieros de corto y mediano plazo";
					Respuesta = "C";
					Justificacion = "Recuerda que ahorrar es “Guardar una parte del dinero que recibes hoy para utilizarla en un futuro”. \n \n \nFUENTE: Business School";
					PreguntaCampo.x = 220; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 538;
					JustificacionCampo.x = 38; JustificacionCampo.y = 240;
			break;
			case 6:
					Pregunta = "¿Qué debes tener en cuenta a la hora de realizar un presupuesto?";
					RespuestaA = "Ingresos, gastos, deudas, ahorro e inversiones";
					RespuestaB = "Ingresos y gastos";
					RespuestaC = "Deudas";
					RespuestaD = "Ingresos e inversiones";
					Respuesta = "A";
					Justificacion = "Recuerda que al realizar tu presupuesto debes tener presente tus ingresos, gastos, deudas, metas de ahorro (corto, mediano o largo plazo) y las posibles inversiones que podrías realizar. \n \n \nFUENTE: Clever Finance";
					PreguntaCampo.x = 170; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 463;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 230;
			break;
			case 7:
					Pregunta = "¿En qué deberías gastar tu fondo de emergencias?";
					RespuestaA = "Si tu casa se inunda y hay que repararla";
					RespuestaB = "En el black Friday";
					RespuestaC = "En las vacaciones con tu pareja";
					RespuestaD = "Si hay productos con más del 80% de descuento";
					Respuesta = "A";
					Justificacion = "Un fondo de emergencia es una cantidad de dinero que se reserva y se recurre a este únicamente en casos de emergencia o ante gastos inesperados que no podemos abordar de otro modo. \n \n \nFUENTE: Clever Finance";
					PreguntaCampo.x = 210; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 463;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 538;
					JustificacionCampo.x = 38; JustificacionCampo.y = 230;
			break;
			case 8:
					Pregunta = "¿Qué es el ahorro formal?";
					RespuestaA = "Es el dinero que se guarda debajo del colchón o escondido en algún lugar.";
					RespuestaB = "Es el dinero que sobra y se guarda formalmente con un familiar.";
					RespuestaC = "Una forma de ahorro en la que guardas el dinero en una institución financiera";
					RespuestaD = "Todas las anteriores";
					Respuesta = "C";
					Justificacion = "El ahorro formal es una forma de ahorrar en la que se guarda su dinero en reserva en una institución financiera vigilada, controlada y supervisada por una entidad del Estado. Esta entidad garantiza la seguridad de sus ahorros. \n \n \nFUENTE: Asobancaria";
					PreguntaCampo.x = 310; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 463;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 463;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 538;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 240;
			break;
			case 9:
					Pregunta = "Para elaborar un plan de ahorros, lo primero que debes hacer es:";
					RespuestaA = "Solicitar un crédito";
					RespuestaB = "Ahorrar sin importar para qué deseas hacerlo ";
					RespuestaC = "Definir los objetivos que quieres alcanzar";
					RespuestaD = "Comprar la lotería";
					Respuesta = "C";
					Justificacion = "El sueño de obtener las cosas que queremos y vivir sin preocupaciones es posible de alcanzar, si no tenemos el dinero suficiente o nos falta una parte, podríamos destinar una parte de nuestros ingresos para poco a poco, ir juntando el dinero necesario para cumplir nuestra meta; a esto es lo que llamamos un plan de ahorro. \n \n \nFUENTE: Asobancaria";
					PreguntaCampo.x = 155; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 463;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 538;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 240;
			break;
			}
		}

		if(Nivel == 2){
			switch (PreguntaAleatorio){
			case 0:
					Pregunta = "¿Qué traducen las siglas FOGAFIN?";
					RespuestaA = "Fondo garante de las finanzas nacionales";
					RespuestaB = "Fondo guardián de aduanas y finanzas nacionales";
					RespuestaC = "Fondo de garantías de instituciones financieras";
					RespuestaD = "Fondo de garantías de finanzas nacionales";
					Respuesta = "C";
					Justificacion = "El Fondo de Garantías de Instituciones Financieras – FOGAFIN encargado de proteger los ahorros de los clientes financieros. \n \n \nFUENTE: FOGAFIN";
					PreguntaCampo.x = 260; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 463;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 463;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 538;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 538;
					JustificacionCampo.x = 38; JustificacionCampo.y = 240;
			break;
			case 1: 
					Pregunta = "¿Cuál de los siguientes NO es un objetivo de la superintendencia financiera en Colombia?";
					RespuestaA = "Supervisar el sistema financiero";
					RespuestaB = "Promover  y desarrollar el mercado de valores";
					RespuestaC = "Preservar la estabilidad y confianza del Sistema Financiero";
					RespuestaD = "Brindar créditos bancarios";
					Respuesta = "D";
					Justificacion = "La Superintendencia Financiera de Colombia tiene por objetivo supervisar el sistema financiero colombiano buscando preservar su estabilidad, seguridad y confianza. \n \n \nFUENTE: Superintendencia Financiera de Colombia";
					PreguntaCampo.x = 110; PreguntaCampo.y = 370;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 463;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 538;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 230;
			break;
			case 2:
					Pregunta = "¿Cuántas cuentas de ahorro pueden estar exentas del impuesto  4 x mil?";
					RespuestaA = "1";
					RespuestaB = "5";
					RespuestaC = "2";
					RespuestaD = "Todas las que tengas";
					Respuesta = "A";
					Justificacion = "El cuatro x mil es un impuesto que  aplica el Estado y se debe pagar cada vez que realizamos algún movimiento financiero. Consiste en descontar 4 pesos por cada mil pesos que mueves, ya sea un retiro, pago o traslado. Por ley tienes derecho a tener solo una cuenta de ahorros libre de este impuesto. \n \n \nFUENTE: Clever Finance";
					PreguntaCampo.x = 140; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 240;
			break;
			case 3:
					Pregunta = "¿Cuál de estos NO es un beneficio de abrir una cuenta de ahorros?";
					RespuestaA = "Generar historial financiero";
					RespuestaB = "Se puede utilizar para ahorrar";
					RespuestaC = "Es un producto exclusivo para mayores de 50 años";
					RespuestaD = "Retirar el dinero en cualquier momento";
					Respuesta = "C";
					Justificacion = "Estos son algunos de los beneficios que tienes al momento de abrir tu cuenta de ahorros: Generas historial financiero, podrás retirar tu dinero en cualquier momento, la puedes utilizar para ahorrar, puedes hacer compras con tu tarjeta débito sin necesidad de tener efectivo y la puedes usar para hacer compras por internet a través de PSE. (Pagos en línea). \n \n \nFUENTE: Clever Finance";
					PreguntaCampo.x = 160; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 538;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 230;
			break;
			case 4:
					Pregunta = "¿Qué significa rediferir una deuda?";
					RespuestaA = "Cambiar los plazos y cuotas de un crédito. ";
					RespuestaB = "Pagar el total de la deuda";
					RespuestaC = "Adquirir un préstamo para pagar una deuda";
					RespuestaD = "Pagar la mitad de la deuda";
					Respuesta = "A";
					Justificacion = "Rediferir significa replantear los montos y fechas de pago de un crédito que se tenían pactadas inicialmente. \n \n \nFUENTE: Clever Finance";
					PreguntaCampo.x = 270; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 463;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 538;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 250;
			break;
			case 5:
					Pregunta = "¿Qué significa que un banco compre tu cartera?";
					RespuestaA = "Te dan de regalo un bolso";
					RespuestaB = "Trasladar un saldo parcial o total de tu deuda a otra entidad financiera";
					RespuestaC = "Pagar el total de tu deuda";
					RespuestaD = "Todas las anteriores";
					Respuesta = "B";
					Justificacion = "Es una línea de crédito que consiste en el traslado de un saldo pendiente con una entidad financiera a otra que le ofrece mejores condiciones, ya sea de pago (intereses) o de tiempo (cuotas). \n \n \nFUENTE: El Tiempo";
					PreguntaCampo.x = 230; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 463;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 240;
			break;
			case 6:
					Pregunta = "Cuando no pagas cumplidamente las cuotas de tu deuda:";
					RespuestaA = "Los intereses se congelan";
					RespuestaB = "El banco te felicita";
					RespuestaC = "Se cobrarán intereses por mora";
					RespuestaD = "El banco se olvida de tu deuda";
					Respuesta = "C";
					Justificacion = "Los intereses moratorios son un porcentaje que se cobra cuando te atrasas en el pago de tu préstamo o crédito. Estos solo se aplican una vez que vence tu plazo límite de pago que estableces con la institución financiera al momento de adquirir un préstamo. \n \n \nFUENTE: Asobancaria";
					PreguntaCampo.x = 200; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 230;
			break;
			case 7:
					Pregunta = "¿Qué es tener solvencia financiera?";
					RespuestaA = "Tener muchas propiedades a mi nombre";
					RespuestaB = "Tener poco dinero y muchas deudas";
					RespuestaC = "La capacidad para cumplir con obligaciones según tus activos e ingresos ";
					RespuestaD = "La cantidad de ingresos, deudas, ahorro y gastos que tengo";
					Respuesta = "C";
					Justificacion = "La solvencia financiera es la capacidad de una persona o empresa para cumplir con todas sus obligaciones financieras en el corto, mediano y largo plazo. \n \n \nFUENTE: Clever Finance";
					PreguntaCampo.x = 260; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 463;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 538;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 538;
					JustificacionCampo.x = 38; JustificacionCampo.y = 240;
			break;
			case 8:
					Pregunta = "¿Cuál de los siguientes métodos se utiliza  para salir de deudas?";
					RespuestaA = "Método Avengers";
					RespuestaB = "Método Bola de nieve";
					RespuestaC = "Método Italiano";
					RespuestaD = "Método Colombiano";
					Respuesta = "B";
					Justificacion = "El método bola de nieve consiste en enfocarse en saldar la deuda más pequeña que tengas para salir de ella lo más rápido posible y luego utilizar ese saldo para pagar la siguiente deuda en la lista. \n \n \nFUENTE: Clever Finance";
					PreguntaCampo.x = 170; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 240;
			break;
			case 9:
					Pregunta = "¿A quien se le denomina deudor?";
					RespuestaA = "Quien tiene derecho a cobrar";
					RespuestaB = "Quien guarda sus ahorros en el banco";
					RespuestaC = "Quien tiene el compromiso de pago";
					RespuestaD = "Ninguno de los anteriores";
					Respuesta = "C";
					Justificacion = "Deudor es aquella persona o empresa que está obligada a cumplir con el pago de una deuda. \n \n \nFUENTE: Clever Finance";
					PreguntaCampo.x = 280; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 240;
			break;
			}
		}

		if(Nivel == 3){
			switch (PreguntaAleatorio){
			case 0:
					Pregunta = "¿Qué es una inversión?";
					RespuestaA = "Una cantidad de dinero que se espera incremente a través de ganancias";
					RespuestaB = "El dinero que me presta un banco";
					RespuestaC = "Un crédito que otorga los bancos a emprendedores";
					RespuestaD = "Ninguna de las anteriores";
					Respuesta = "A";
					Justificacion = "Una inversión es una cantidad de dinero que se pone a disposición de un proyecto o terceros, con la finalidad de que se incremente con las ganancias. \n \n \nFUENTE: Clever Finance";
					PreguntaCampo.x = 300; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 463;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 537;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 240;
			break;
			case 1: 
					Pregunta = "¿Qué es el interés simple?";
					RespuestaA = "El interés que siempre paga sobre el mismo capital";
					RespuestaB = "Un interés extra por entrar en mora ";
					RespuestaC = "La suma de los intereses de mora y los compuestos";
					RespuestaD = "Todas las anteriores";
					Respuesta = "A";
					Justificacion = "El interés simple es aquel que siempre paga intereses sobre el mismo monto de dinero y no se acumula al capital. \n \n \nFUENTE: Clever Finance";
					PreguntaCampo.x = 300; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 463;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 538;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 230;
			break;
			case 2:
					Pregunta = "¿Qué es el interés compuesto?";
					RespuestaA = "Aquel que se suma al capital inicial y sobre el cual se generan nuevos intereses";
					RespuestaB = "El interés que se paga sobre el mismo capital";
					RespuestaC = "El interés de mora más el interés simple";
					RespuestaD = "Ninguno de los anteriores";
					Respuesta = "A";
					Justificacion = "El interés compuesto es aquel que se suma al capital inicial y sobre el que se van generando nuevos intereses. Sus características principales son: El capital inicial va creciendo en cada periodo porque se van sumando los intereses, la tasa de interés se aplica sobre un capital que va cambiando y los intereses aumentan en cada periodo. \n \n \nFUENTE: Clever Finance";
					PreguntaCampo.x = 300; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 463;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 463;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 538;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 230;
			break;
			case 3:
					Pregunta = "¿Cuáles son los medios de pago más comunes?";
					RespuestaA = "Dinero Plástico";
					RespuestaB = "Efectivo";
					RespuestaC = "Dinero Plástico, Efectivo y cheques";
					RespuestaD = "Ninguno de los anteriores";
					Respuesta = "C";
					Justificacion = "Los medios de pago son un conjunto de instrumentos que permiten transferir dinero y realizar transacciones económicas. Con estas se pueden adquirir bienes y servicios o pagar obligaciones. Las más importantes son: Dinero Plástico (tarjetas), dinero en efectivo y cheques. \n \n \nFUENTE: ASOBANCARIA";
					PreguntaCampo.x = 235; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 210;
			break;
			case 4:
					Pregunta = "Existen otras formas de ahorro diferentes al dinero, como:";
					RespuestaA = "Energía";
					RespuestaB = "Tiempo";
					RespuestaC = "Agua";
					RespuestaD = "Todas las anteriores";
					Respuesta = "D";
					Justificacion = "Recuerda que existen diferentes formas de ahorro entre ellas: Energía, electricidad, tiempo, agua, comida y muchas otras. \n \n \nFUENTE: Clever Finance";
					PreguntaCampo.x = 210; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 230;
			break;
			case 5:
					Pregunta = "¿Qué es la tasa de usura?";
					RespuestaA = "Una tasa de interés mensual obligatoria";
					RespuestaB = "Una tasa de interés que elige pagar el deudor";
					RespuestaC = "Es el límite máximo para el cobro de intereses en los préstamos.";
					RespuestaD = "Ninguna de las anteriores";
					Respuesta = "C";
					Justificacion = "Existe una regla común para todo tipo de préstamos, sin importar quien preste, no puede cobrar una tasa de interés superior a la que certifique la Superintendencia Financiera de Colombia como “Tasa de Usura”. En otras palabras, la tasa de usura es el límite máximo para el cobro de intereses en los préstamos. \n \n \nFUENTE: ASOBANCARIA";
					PreguntaCampo.x = 300; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 463;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 538;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 250;
			break;
			case 6:
					Pregunta = "El “gota a gota” o “paga diario” es una modalidad de crédito:";
					RespuestaA = "Legal";
					RespuestaB = "Crédito otorgado por bancos";
					RespuestaC = "Ilegal";
					RespuestaD = "Ninguna de las anteriores";
					Respuesta = "C";
					Justificacion = "El gota a gota, es una forma de préstamo informal y fraudulento mediante la cual los prestamistas particulares ofrecen dinero con solo firmar un talonario de pagos diarios, con intereses que pueden superar el 10% por día, un porcentaje que haría cualquier deuda casi imposible de pagar. \n \n \nFUENTE: Blog financiero Rankia";
					PreguntaCampo.x = 180; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 250;
			break;
			case 7:
					Pregunta = "Si te prometen exorbitantes ganancias a cambio de invertir una suma de dinero y adicionalmente te piden llevar más personas para que inviertan su dinero, podrías estar ante:";
					RespuestaA = "Fraude";
					RespuestaB = "Usura";
					RespuestaC = "Inversiones seguras";
					RespuestaD = "Ninguna de las anteriores";
					Respuesta = "A";
					Justificacion = "El fraude financiero ocurre cuando una persona te priva de tu dinero, capital o de otra manera daña su salud financiera por medio de prácticas engañosas, confusas u otras prácticas ilegales. Esto se puede hacer a través de una variedad de métodos como robo de identidad o fraude de inversión. \n \n \nFUENTE: Victim Connect";
					PreguntaCampo.x = 105; PreguntaCampo.y = 363;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 230;
			break;
			case 8:
					Pregunta = "¿Qué es una pirámide financiera?";
					RespuestaA = "Varios prestamos";
					RespuestaB = "Inversión segura";
					RespuestaC = "Estafa";
					RespuestaD = "Ninguna de las anteriores";
					Respuesta = "C";
					Justificacion = "Es un sistema que siempre generará pérdidas a sus participantes, por ello se considera una  modalidad de estafa. El esquema piramidal se caracteriza por  ganar dinero solo mediante el reclutamiento de otros “miembros” que  tienen que pagar una o varias cuotas de inscripción para entrar en el negocio. En este esquema nunca queda claro a qué negocio se dedica la organización. \n \n \nFUENTE: ASOBANCARIA";
					PreguntaCampo.x = 280; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 240;
			break;
			case 9:
					Pregunta = "Exceder la tasa de usura se considera: ";
					RespuestaA = "Legal";
					RespuestaB = "Ilegal";
					RespuestaC = "Un interés común";
					RespuestaD = "Todas las anteriores";
					Respuesta = "B";
					Justificacion = "Si crees ser víctima de este delito, puedes reportarlo ante la Superintendencia de Industria y Comercio, quien como ente de control se  encarga de investigar y sancionar con cárcel y/o multas a empresas que exceden en sus intereses. En caso de ser una entidad financiera vigilada también puedes recurrir a la Superintendencia Financiera de Colombia. \n \n \nFUENTE: Ley 599 de 2000";
					PreguntaCampo.x = 260; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 220;
			break;
			}
		}

		if(Nivel == 4){
			switch (PreguntaAleatorio){
			case 0:
					Pregunta = "Si decides invertir en ti, ¿Cuál sería la inversión ideal?";
					RespuestaA = "En viajes";
					RespuestaB = "En ropa";
					RespuestaC = "En fiestas";
					RespuestaD = "En estudio";
					Respuesta = "D";
					Justificacion = "La educación es el pasaporte al futuro y no sólo para cada una de las personas a nivel individual, sino también para la sociedad en su conjunto. \n \n \nFUENTE: Clever Finance";
					PreguntaCampo.x = 220; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 230;
			break;
			case 1: 
					Pregunta = "¿Qué significa que un banco capte dinero?";
					RespuestaA = "Recolectar el dinero";
					RespuestaB = "Imprimir el dinero";
					RespuestaC = "Dar dinero a través de créditos ";
					RespuestaD = "Todas las anteriores";
					Respuesta = "A";
					Justificacion = "La captación, como su nombre lo indica, consiste en captar o recolectar dinero de las personas u organizaciones. Este dinero, dependiendo del tipo de cuenta que tenga una persona, (cuenta de ahorros, cuenta corriente, certificados de depósito a término fijo [CDT], etc.), gana unos intereses. \n \n \nFUENTE: Banco de la República";
					PreguntaCampo.x = 240; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 240;
			break;
			case 2:
					Pregunta = "¿Qué significa la colocación de dinero?";
					RespuestaA = "Poner dinero en circulación ";
					RespuestaB = "Recolectar dinero";
					RespuestaC = "Guardar el dinero en una bóveda";
					RespuestaD = "Ninguna de las anteriores";
					Respuesta = "A";
					Justificacion = "La colocación permite poner dinero en circulación en la economía, ya que los bancos toman el dinero o los recursos que obtienen a través de la captación y, con éstos, otorgan créditos a las personas, empresas u organizaciones que los soliciten. Por dar estos préstamos los bancos cobran, dependiendo del tipo de préstamo, una cantidad determinada de dinero llamados intereses (intereses de colocación). \n \n \nFUENTE: Banco de la República";
					PreguntaCampo.x = 250; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 240;
			break;
			case 3:
					Pregunta = "¿Qué significa: Amortizar un crédito?";
					RespuestaA = "Un abono para reducir el monto de dinero de un préstamo";
					RespuestaB = "Aumentar los intereses de un crédito";
					RespuestaC = "Pagar el crédito total";
					RespuestaD = "Ninguna de las anteriores";
					Respuesta = "A";
					Justificacion = "La amortización, es el método que muestra el desglose de pagos que son necesarios para liquidar una deuda. Cuando solicitas un crédito, normalmente te dan la oportunidad de visualizar una tabla de amortización para que conozcas las cuotas de los pagos que debes realizar. Cada uno, está compuesto por el importe del interés de la deuda más el del capital solicitado. La finalidad de esta tabla, es que puedas saber desde un inicio la cantidad que necesitas destinar al pago total de tu préstamo o financiamiento y tomar la decisión más conveniente. \n \n \nFUENTE: Banco de la República";
					PreguntaCampo.x = 265; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 463;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 190;
			break;
			case 4:
					Pregunta = "¿Qué es un gasto hormiga?";
					RespuestaA = "Invertir en productos animales";
					RespuestaB = "Comprar hormigas";
					RespuestaC = "Gastar dinero en comida de animales";
					RespuestaD = "Pequeños gastos diarios";
					Respuesta = "D";
					Justificacion = "Los gastos hormiga son esos pequeños consumos diarios que se realizan casi inadvertidamente y que al final del día parecen que no afectan en nada sus finanzas. Sin embargo, si realiza el ejercicio de sumar ese consumo diario y los traslada a períodos de tiempo más  largos, podrá evidenciar que ha gastado una gran cantidad de dinero y que pudo haber establecido un buen ahorro con esos recursos. \n \n \nFUENTE: ASOBANCARIA";
					PreguntaCampo.x = 300; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 230;
			break;
			case 5:
					Pregunta = "¿En qué consiste un “periodo de gracia”?";
					RespuestaA = "Rango de tiempo donde el deudor no paga las cuotas de su préstamo";
					RespuestaB = "Rango de tiempo donde el deudor paga el doble de su préstamo";
					RespuestaC = "El banco perdona tu deuda y no se debe nada";
					RespuestaD = "Ninguna de las anteriores";
					Respuesta = "A";
					Justificacion = "Es un rango de tiempo durante el cual el deudor no paga la cuota del préstamo o crédito solicitado. Para el caso, los Bancos seguirán calculando intereses corrientes sobre el saldo a capital que tenía antes de empezar el periodo de gracia. De esta manera, los intereses liquidados se empezarán a cobrar cuando se reanuden los pagos. \n \n \nFUENTE: Clever Finance – Banco Mundo Mujer";
					PreguntaCampo.x = 240; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 463;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 463;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 538;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 240;
			break;
			case 6:
					Pregunta = "¿Qué significa que se pida garantía al prestar dinero?";
					RespuestaA = "Los intereses ";
					RespuestaB = "Los intereses de mora";
					RespuestaC = "Recursos para respaldar la deuda";
					RespuestaD = "Ninguna de las anteriores";
					Respuesta = "C";
					Justificacion = "Una garantía es un activo o una propiedad que el prestatario (deudor) proporciona al prestamista para asegurar un préstamo o crédito. Debido a que prestar dinero es arriesgado, un prestamista puede exigir al prestatario colocar un activo, como una casa, un auto u otra propiedad personal, que el prestamista puede embargar si el prestatario no devuelve el préstamo. \n \n \nFUENTE: Napkin Finanace";
					PreguntaCampo.x = 210; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 230;
			break;
			case 7:
					Pregunta = "¿Qué es una hipoteca?";
					RespuestaA = "Una garantía que se ofrece al solicitar un crédito";
					RespuestaB = "Una garantía que se ofrece al abrir una cuenta de ahorros";
					RespuestaC = "Intereses que se deben pagar al finalizar un periodo";
					RespuestaD = "Todos las anteriores";
					Respuesta = "A";
					Justificacion = "Una hipoteca es la garantía que se ofrece al solicitar un crédito. Esa garantía consiste en bienes inmuebles de cierto valor que logran cubrir o exceder el valor que se solicita en préstamo. \n \n \nFUENTE: Clever Finance";
					PreguntaCampo.x = 320; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 463;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 463;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 538;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 230;
			break;
			case 8:
					Pregunta = "¿Cuál de estos es un impuesto en Colombia?";
					RespuestaA = "IVA";
					RespuestaB = "Impuesto al consumo";
					RespuestaC = "Impuesto predial";
					RespuestaD = "Todas las anteriores";
					Respuesta = "D";
					Justificacion = "En Colombia existen impuestos a nivel nacional y regional. Los impuestos de carácter nacional aplican para todas las personas naturales o jurídicas residentes en el país y los impuestos de carácter regional son determinados por cada departamento o municipio conforme los parámetros fijados por la Ley. \n \n \nFUENTE: DIAN";
					PreguntaCampo.x = 220; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 210;
			break;
			case 9:
					Pregunta = "¿Qué son los impuestos indirectos?";
					RespuestaA = "Aquellos que recaen sobre la persona directamente";
					RespuestaB = "Aquellos que recaen sobre bienes y servicios";
					RespuestaC = "Aquellos que recaen sobre la persona, bienes y servicios";
					RespuestaD = "Ninguna de las anteriores";
					Respuesta = "B";
					Justificacion = "“Los impuestos indirectos, se le imponen a bienes y servicios y a las transacciones que se realizan con ellos; es decir, las personas, indirectamente, a través de la compra de bienes y servicios, pagan el impuesto. Un ejemplo de este tipo de impuesto es el impuesto al valor agregado (IVA).” \n \n \nFUENTE: Banco de la República";
					PreguntaCampo.x = 260; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 463;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 463;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 538;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 230;
			break;
			}
		}

		if(Nivel == 5){
			switch (PreguntaAleatorio){
			case 0:
					Pregunta = "¿Qué es la devaluación?";
					RespuestaA = "Que nuestro dinero vale menos en el extranjero";
					RespuestaB = "El Intercambio de divisas";
					RespuestaC = "Que no hay bancos ";
					RespuestaD = "Ninguna de las anteriores";
					Respuesta = "A";
					Justificacion = "La devaluación de una moneda generalmente sucede porque no hay demanda de la moneda local o hay mayor demanda que oferta de la moneda extranjera. \n \n \nFUENTE: Banco de la República";
					PreguntaCampo.x = 300; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 463;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 230;
			break;
			case 1: 
					Pregunta = "¿Qué es el PIB - Producto Interno Bruto?";
					RespuestaA = "La cantidad de dinero imprime un país";
					RespuestaB = "La cantidad de inversiones que han hecho los colombianos";
					RespuestaC = "El valor total de bienes y servicios producidos por un país";
					RespuestaD = "Ninguna de las anteriores";
					Respuesta = "C";
					Justificacion = "PIB es el valor total de los bienes y servicios producidos en un país durante un cierto periodo de tiempo (generalmente un trimestre o un año); es decir, el total de lo que se produce con los recursos que se han utilizado en la economía, valorando cada bien final o servicio al precio que se maneja comúnmente en el mercado. \n \n \nFUENTE: Banco de la República";
					PreguntaCampo.x = 250; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 463;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 538;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 240;
			break;
			case 2:
					Pregunta = "¿Qué es el Impuesto Sobre la Renta?";
					RespuestaA = "Un impuesto que grava la utilidad de personas, empresas y entidades legales";
					RespuestaB = "Un impuesto sobre las casas";
					RespuestaC = "Un impuesto sobre los bienes y servicios adquiridos";
					RespuestaD = "Ninguna de las anteriores";
					Respuesta = "A";
					Justificacion = "Es un impuesto que se declara y se paga cada año y recae sobre los ingresos de las personas o de las empresas. \n \n \nFUENTE: DIAN";
					PreguntaCampo.x = 260; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 463;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 538;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 240;
			break;
			case 3:
					Pregunta = "¿Cuáles son las dos actividades fundamentales de los Bancos?";
					RespuestaA = "Imprimir billetes y cobrar intereses";
					RespuestaB = "Imprimir billetes y dar créditos";
					RespuestaC = "Colocación de dinero y captación ";
					RespuestaD = "Captación e impresión de billetes";
					Respuesta = "C";
					Justificacion = "Los bancos son organizaciones que tienen como función tomar recursos de personas, empresas u otro tipo de organizaciones y, con estos recursos, dar créditos a aquellos que los soliciten; es decir, realizan dos actividades fundamentales: la captación y la colocación de dinero. \n \n \nFUENTE: BANCO DE LA REPÚBLICA";
					PreguntaCampo.x = 180; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 230;
			break;
			case 4:
					Pregunta = "¿Qué es retención en la fuente?";
					RespuestaA = "Cobro anticipado de un impuesto";
					RespuestaB = "Un impuesto";
					RespuestaC = "Un interés";
					RespuestaD = "Un ingreso adicional";
					Respuesta = "A";
					Justificacion = "La retención en la fuente es un mecanismo de recaudo anticipado que tiene el Gobierno nacional, más no se trata del pago de otro impuesto. Por lo tanto, con esta figura, el Estado no necesita esperar un año completo para llevar a cabo el recaudo de retención, sino que por el contrario lo cobra de manera permanente al momento en que ocurre el hecho generador. \n \n \nFUENTE: GERENCIE";
					PreguntaCampo.x = 280; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 230;
			break;
			case 5:
					Pregunta = "¿Qué es DTF?";
					RespuestaA = "Déficit  territorial financiero";
					RespuestaB = "Déficit financiero del trabajo";
					RespuestaC = "Depósito a término fiscal";
					RespuestaD = "Depósito a término fijo";
					Respuesta = "D";
					Justificacion = "DTF o Depósito a término Fijo, es una tasa o porcentaje muy utilizada, principalmente en el sistema financiero que consiste en la entrega de una cantidad de dinero por parte de una persona u organización a una entidad bancaria durante un tiempo determinado. Transcurrido ese plazo, la entidad devuelve el dinero, junto con los intereses pactados. También puede ser que los intereses se pagan periódicamente mientras dure la operación. \n \n \nFUENTE: Finanzas para todos";
					PreguntaCampo.x = 340; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 200;
			break;
			case 6:
					Pregunta = "¿Qué es Economía Naranja?";
					RespuestaA = "Industria de naranjas";
					RespuestaB = "Industrias creativas y culturales";
					RespuestaC = "Industria de emprendedores";
					RespuestaD = "Industrias de comida";
					Respuesta = "B";
					Justificacion = "Es una herramienta de desarrollo cultural, social y económico. Se diferencia de otras economías por el hecho de fundamentarse en la creación, producción y distribución de bienes y servicios, cuyo contenido de carácter cultural y creativo se puede proteger por los derechos de propiedad intelectual. \n \n \nFUENTE: Ministerio de Cultura";
					PreguntaCampo.x = 290; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 240;
			break;
			case 7:
					Pregunta = "¿Qué es el IVA?";
					RespuestaA = "Impuesto al valor agregado";
					RespuestaB = "Impuesto por vivienda";
					RespuestaC = "Impuesto de valor anual";
					RespuestaD = "Impuesto por ser mayor de edad";
					Respuesta = "A";
					Justificacion = "Cada vez que usted adquiere bienes de consumo asume un costo adicional por los mismos, el cual se traduce en el conocido Impuesto al Valor Agregado (IVA). Este impuesto, que se cobra en el momento de la realización, consumo o compra, de productos, servicios, transacciones comerciales o importaciones y cuyo valor depende del monto de la transacción, así como del producto o mercancía, este es establecido por la Dirección de Impuestos y Aduanas Nacionales de Colombia (DIAN). \n \n \nFuente: Asobancaria";
					PreguntaCampo.x = 340; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 200;
			break;
			case 8:
					Pregunta = "¿Cuál de las siguientes conductas por parte de un banco debe ser sancionada por la superintendencia financiera?";
					RespuestaA = "Por crear productos y servicios";
					RespuestaB = "Por no tener cajeros suficientes";
					RespuestaC = "Por prestar dinero";
					RespuestaD = "Sobrepasar el límite de cobro de intereses";
					Respuesta = "D";
					Justificacion = "Uno de los objetivos estratégicos de la Superintendencia Financiera es proteger al consumidor financiero. \n \n \nFUENTE: Superintendencia Financiera de Colombia";
					PreguntaCampo.x = 100; PreguntaCampo.y = 370;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 538;
					JustificacionCampo.x = 38; JustificacionCampo.y = 250;
			break;
			case 9:
					Pregunta = "¿Para qué sirven los seguros?";
					RespuestaA = "Respaldo ante imprevistos";
					RespuestaB = "Reducir riesgos";
					RespuestaC = "Tranquilidad personal y familiar";
					RespuestaD = "Todas las anteriores";
					Respuesta = "D";
					Justificacion = "Los seguros son instrumentos financieros que nos ayudan a reducir la incertidumbre económica sobre el futuro, ya que firmando un contrato (póliza) con una Compañía de Seguros (ya sea de Vida o Generales) en la cual yo me comprometo a pagar una determinada cantidad de dinero (prima) estoy garantizando cierto pago futuro en la eventualidad que ocurra alguna circunstancia por la cual yo me estoy asegurando. \n \n \nFUENTE: ASOBANCARIA";
					PreguntaCampo.x = 290; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 50; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 450; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 50; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 450; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 38; JustificacionCampo.y = 220;
			break;
			}
		}

		//TemporizadorTexto.setVisible(true);
		PreguntaCampo.setText(Pregunta);
		RespuestaAcampo.setText('A: ' + RespuestaA);
		RespuestaBcampo.setText('B: ' + RespuestaB);
		RespuestaCcampo.setText('C: ' + RespuestaC);
		RespuestaDcampo.setText('D: ' + RespuestaD);
		JustificacionCampo.setText(/*Pregunta + "\n \n \n" + */Justificacion);

	}

	PreguntasAleatorias(a) {
	    for (let i = a.length - 1; i > 0; i--) {
	        const j = Math.floor(Math.random() * (i + 1));
	        [a[i], a[j]] = [a[j], a[i]];
	    }
	    return a;
	}

}