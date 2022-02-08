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
var RespuestaAbotonNivel2;
var RespuestaBbotonNivel2;
var RespuestaCbotonNivel2;
var RespuestaDbotonNivel2;
var RespuestaAbotonNivel3;
var RespuestaBbotonNivel3;
var RespuestaCbotonNivel3;
var RespuestaDbotonNivel3;
var Justificacion;
var JustificacionTodo;
var JustificacionCampo;
var PreguntasOrdenadasNivel1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
var PreguntasOrdenadasNivel2 = [0, 1, 2, 3, 4];
var PreguntasOrdenadasNivel3 = [0, 1, 2, 3, 4];
var index = -1;
var SonidoSuspenso;
var SonidoAplausos;
var SonidoOvacion; 
var SonidoMal;
var SonidoTiempo;
var TemporizadorTexto;
var TemporizadorTexto2;
var TemporizadorTexto3;
var timer;
var ResetTimer = "";
var timeDelay;
var Nivel = 1;
var Puntaje = 0;
var FondoCambio;
var TextoNivel2;
var TextoNivel3;
var tempo;
var FondoNivel1;
var FondoNivel2;
var FondoNivel3;
var FondoJustificacionNivel1;
var FondoJustificacionNivel2;
var FondoJustificacionNivel3;
var ContinuarNivel1;
var ContinuarNivel2;
var ContinuarNivel3;
var InicioTiempo;
var FinalTiempo;
var TiempoFormato;

var EstiloPregunta = ﻿{ 
			fontSize: 16,
			fontStyle: 'bold',
            fontFamily: 'josefina_sans',
            align: "center",
            color: "black",
            wordWrap: { width: 600, useAdvancedWrap: true }
        }
var EstiloRespuesta = ﻿{ 
			fontSize: 15,
			origin: { x: 0.5, y: 0.5 },
            fontFamily: 'josefina_sans',
            align: "center",
            color: "white",
            wordWrap: { width: 350, useBasicWrap: true }
        }
var EstiloJustificacion = ﻿{ 
			fontSize: 16,
			fontStyle: 'bold',
            //fontFamily: 'Arial',
            fontFamily: 'josefina_sans',
            align: "justify",
            color: "black",
            wordWrap: { width: 350, useBasicWrap: true }
        }
export default class Nivel1Aux extends Phaser.Scene {

	constructor(){

		super({key: 'Nivel1Aux'});

	}

	init(data){

		//console.log('init', data);
		this.nombre = data.nombre;
	}

	preload(){

	} 

	create(){

		OportunidadesCont = 0;
		ProgresoCont = 0;
		index = -1;
		Nivel = 1;
        Puntaje = 0;
        InicioTiempo = performance.now();

		FondoNivel1 = this.add.image(400, 300, 'FondoNivel1');
		FondoNivel2 = this.add.image(400, 300, 'FondoNivel2');
		FondoNivel3 = this.add.image(400, 300, 'FondoNivel3');
		FondoNivel2.setVisible(false);
		FondoNivel3.setVisible(false);

		FondoJustificacionNivel1 = this.add.image(400, 300, 'FondoJustificacionNivel1');
		FondoJustificacionNivel2 = this.add.image(400, 300, 'FondoJustificacionNivel2');
		FondoJustificacionNivel3 = this.add.image(400, 300, 'FondoJustificacionNivel3');
		FondoJustificacionNivel1.setVisible(false);
		FondoJustificacionNivel2.setVisible(false);
		FondoJustificacionNivel3.setVisible(false);

		Progreso = this.add.sprite(130, 40, 'FondoProgreso').setScale(0.9);
		Progreso.setFrame(Puntaje);
		Oportunidades = this.add.sprite(715, 40, 'FondoOportunidades').setScale(0.45);
		Oportunidades.setFrame(OportunidadesCont);

		SonidoSuspenso = this.sound.add('Suspenso', {volume: 0.2});
		SonidoAplausos = this.sound.add('Aplausos', {volume: 0.3});
		SonidoOvacion = this.sound.add('Ovacion', {volume: 0.3});
		SonidoMal = this.sound.add('Mal', {volume: 0.2});
		SonidoTiempo = this.sound.add('Tiempo', {volume: 0.5, loop: true});

		ContinuarNivel1 = this.add.sprite(600, 500, 'ContinuarNivel1').setScale(0.8).setInteractive({ cursor: 'pointer'});
		ContinuarNivel2 = this.add.sprite(600, 500, 'ContinuarNivel2').setScale(0.8).setInteractive({ cursor: 'pointer'});
		ContinuarNivel3 = this.add.sprite(600, 500, 'ContinuarNivel3').setScale(0.8).setInteractive({ cursor: 'pointer'});
		ContinuarNivel1.setVisible(false);
		ContinuarNivel2.setVisible(false);
		ContinuarNivel3.setVisible(false);

		RespuestaAboton = this.add.sprite(200, 480, 'FondoRespuesta').setScale(0.9, 0.8).setInteractive({ cursor: 'pointer'});
		RespuestaBboton = this.add.sprite(600, 480, 'FondoRespuesta').setScale(0.9, 0.8).setInteractive({ cursor: 'pointer'});
		RespuestaCboton = this.add.sprite(200, 555, 'FondoRespuesta').setScale(0.9, 0.8).setInteractive({ cursor: 'pointer'});
		RespuestaDboton = this.add.sprite(600, 555, 'FondoRespuesta').setScale(0.9, 0.8).setInteractive({ cursor: 'pointer'});
		RespuestaAbotonNivel2 = this.add.sprite(200, 480, 'FondoRespuestaNivel2').setScale(0.9, 0.8).setInteractive({ cursor: 'pointer'});
		RespuestaBbotonNivel2 = this.add.sprite(600, 480, 'FondoRespuestaNivel2').setScale(0.9, 0.8).setInteractive({ cursor: 'pointer'});
		RespuestaCbotonNivel2 = this.add.sprite(200, 555, 'FondoRespuestaNivel2').setScale(0.9, 0.8).setInteractive({ cursor: 'pointer'});
		RespuestaDbotonNivel2 = this.add.sprite(600, 555, 'FondoRespuestaNivel2').setScale(0.9, 0.8).setInteractive({ cursor: 'pointer'});
		RespuestaAbotonNivel3 = this.add.sprite(200, 480, 'FondoRespuestaNivel3').setScale(0.9, 0.8).setInteractive({ cursor: 'pointer'});
		RespuestaBbotonNivel3 = this.add.sprite(600, 480, 'FondoRespuestaNivel3').setScale(0.9, 0.8).setInteractive({ cursor: 'pointer'});
		RespuestaCbotonNivel3 = this.add.sprite(200, 555, 'FondoRespuestaNivel3').setScale(0.9, 0.8).setInteractive({ cursor: 'pointer'});
		RespuestaDbotonNivel3 = this.add.sprite(600, 555, 'FondoRespuestaNivel3').setScale(0.9, 0.8).setInteractive({ cursor: 'pointer'});
		RespuestaAbotonNivel2.setVisible(false);
		RespuestaBbotonNivel2.setVisible(false);
		RespuestaCbotonNivel2.setVisible(false);
		RespuestaDbotonNivel2.setVisible(false);
		RespuestaAbotonNivel3.setVisible(false);
		RespuestaBbotonNivel3.setVisible(false);
		RespuestaCbotonNivel3.setVisible(false);
		RespuestaDbotonNivel3.setVisible(false);

		PreguntaCampo = this.add.text(400, 380, '', EstiloPregunta);
		RespuestaAcampo = this.add.text(50, 470, '', EstiloRespuesta);
		RespuestaBcampo = this.add.text(450, 470, '', EstiloRespuesta);
		RespuestaCcampo = this.add.text(50, 545, '', EstiloRespuesta);
		RespuestaDcampo = this.add.text(450, 545, '', EstiloRespuesta);
		JustificacionCampo = this.add.text(410, 200, '', EstiloJustificacion);
		JustificacionCampo.setVisible(false);

		TemporizadorTexto = this.add.text(365, 300, '', {fontSize: '32px', fontFamily: 'josefina_sans', color: '#F07F23'});
		TemporizadorTexto2 = this.add.text(365, 300, '', {fontSize: '32px', fontFamily: 'josefina_sans', color: '#F49815'});
		TemporizadorTexto3 = this.add.text(365, 300, '', {fontSize: '32px', fontFamily: 'josefina_sans', color: '#88AC28'});
		TemporizadorTexto2.setVisible(false);
		TemporizadorTexto3.setVisible(false);
		this.ControlTemporizador();
		
		nombre = this.nombre;

		this.anims.create({
        key: 'click',
        frames: this.anims.generateFrameNumbers('FondoRespuesta', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: 1
    	});

		this.anims.create({
			key: 'click2',
			frames: this.anims.generateFrameNumbers('FondoRespuestaNivel2', { start: 0, end: 3 }),
			frameRate: 10,
			repeat: 1
			});
		
			this.anims.create({
				key: 'click3',
				frames: this.anims.generateFrameNumbers('FondoRespuestaNivel3', { start: 0, end: 3 }),
				frameRate: 10,
				repeat: 1
				});

		this.PreguntasAleatorias(PreguntasOrdenadasNivel1);
		this.PreguntasAleatorias(PreguntasOrdenadasNivel2);
		this.PreguntasAleatorias(PreguntasOrdenadasNivel3);

		if(ProgresoCont < 3 || OportunidadesCont < 3){
		this.RefrescarPregunta();
		}

		//Continuar
		ContinuarNivel1.on('pointerover', function(){
        	this.setFrame(1);
        });

        ContinuarNivel1.on('pointerout', function(){
        	this.setFrame(0);
        });

        ContinuarNivel1.on('pointerup', function(){
        	
        	this.setFrame(2);
      		
			if(ProgresoCont < 3 && OportunidadesCont < 3){
				timer = 60;
				//console.log("Refrescar");			

        		this.scene.time.delayedCall(500, this.scene.Reinicio, [], this);
        		this.scene.time.delayedCall(500, this.scene.RefrescarPregunta, [], this);
			}
			else if(ProgresoCont == 3){
				this.scene.SiguienteNivel();
				}
			else if(OportunidadesCont == 3){
				Puntaje = Puntaje /*+ ProgresoCont*/;
				//console.log("Puntaje al perder: " + Puntaje);
				this.scene.CambioDerrota();
			}

        });

		ContinuarNivel2.on('pointerover', function(){
        	this.setFrame(1);
        });

        ContinuarNivel2.on('pointerout', function(){
        	this.setFrame(0);
        });

        ContinuarNivel2.on('pointerup', function(){
        	
        	this.setFrame(2);
      		
			if(ProgresoCont < 3 && OportunidadesCont < 3){
				timer = 60;
				//console.log("Refrescar");			

        		this.scene.time.delayedCall(500, this.scene.Reinicio, [], this);
        		this.scene.time.delayedCall(500, this.scene.RefrescarPregunta, [], this);
			}
			else if(ProgresoCont == 3){
				this.scene.SiguienteNivel();
				}
			else if(OportunidadesCont == 3){
				Puntaje = Puntaje /*+ ProgresoCont*/;
				//console.log("Puntaje al perder: " + Puntaje);
				this.scene.CambioDerrota();
			}

        });

		ContinuarNivel3.on('pointerover', function(){
        	this.setFrame(1);
        });

        ContinuarNivel3.on('pointerout', function(){
        	this.setFrame(0);
        });

        ContinuarNivel3.on('pointerup', function(){
        	
        	this.setFrame(2);
      		
			if(ProgresoCont < 3 && OportunidadesCont < 3){
				timer = 60;
				//console.log("Refrescar");			

        		this.scene.time.delayedCall(500, this.scene.Reinicio, [], this);
        		this.scene.time.delayedCall(500, this.scene.RefrescarPregunta, [], this);
			}
			else if(ProgresoCont == 3){
				this.scene.SiguienteNivel();
				}
			else if(OportunidadesCont == 3){
				Puntaje = Puntaje /*+ ProgresoCont*/;
				//console.log("Puntaje al perder: " + Puntaje);
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
			TemporizadorTexto2.setVisible(false);
			TemporizadorTexto3.setVisible(false);
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
			TemporizadorTexto2.setVisible(false);
			TemporizadorTexto3.setVisible(false);
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
			TemporizadorTexto2.setVisible(false);
			TemporizadorTexto3.setVisible(false);
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
			TemporizadorTexto2.setVisible(false);
			TemporizadorTexto3.setVisible(false);
        	timer = 3600;
        	
        	this.scene.VerificarRespuesta();
        	this.scene.VerificarProgreso();
        	this.scene.VerificarOportunidades();
        	//this.scene.time.delayedCall(4000, this.scene.EspacioJustificacion, [], this);
 
        });

		        //Respuesta A
				RespuestaAbotonNivel2.on('pointerover', function(){
					this.setFrame(5);
				});
		
				RespuestaAbotonNivel2.on('pointerout', function(){
					this.setFrame(0);
				});
				RespuestaAbotonNivel2.on('pointerup', function(){
					Seleccion = "A";
					TemporizadorTexto.setVisible(false);
					TemporizadorTexto2.setVisible(false);
					TemporizadorTexto3.setVisible(false);
					timer = 3600;
					
					this.scene.VerificarRespuesta();
					this.scene.VerificarProgreso();
					this.scene.VerificarOportunidades();
					//this.scene.time.delayedCall(4000, this.scene.EspacioJustificacion, [], this);
		
				});
		
				//Respuesta B
				RespuestaBbotonNivel2.on('pointerover', function(){
					this.setFrame(5);
				});
		
				RespuestaBbotonNivel2.on('pointerout', function(){
					this.setFrame(0);
				});
				RespuestaBbotonNivel2.on('pointerup', function(){
					Seleccion = "B";
					TemporizadorTexto.setVisible(false);
					TemporizadorTexto2.setVisible(false);
					TemporizadorTexto3.setVisible(false);
					timer = 3600;
					
					this.scene.VerificarRespuesta();
					this.scene.VerificarProgreso();
					this.scene.VerificarOportunidades();
					//this.scene.time.delayedCall(4000, this.scene.EspacioJustificacion, [], this);
		
				});
		
				//Respuesta C
				RespuestaCbotonNivel2.on('pointerover', function(){
					this.setFrame(5);
				});
		
				RespuestaCbotonNivel2.on('pointerout', function(){
					this.setFrame(0);
				});
				RespuestaCbotonNivel2.on('pointerup', function(){
					Seleccion = "C";
					TemporizadorTexto.setVisible(false);
					TemporizadorTexto2.setVisible(false);
					TemporizadorTexto3.setVisible(false);
					timer = 3600;
					
					this.scene.VerificarRespuesta();
					this.scene.VerificarProgreso();
					this.scene.VerificarOportunidades();
					//this.scene.time.delayedCall(4000, this.scene.EspacioJustificacion, [], this);
				});
		
				//Respuesta D
				RespuestaDbotonNivel2.on('pointerover', function(){
					this.setFrame(5);
				});
		
				RespuestaDbotonNivel2.on('pointerout', function(){
					this.setFrame(0);
				});
				RespuestaDbotonNivel2.on('pointerup', function(){
					Seleccion = "D";
					TemporizadorTexto.setVisible(false);
					TemporizadorTexto2.setVisible(false);
					TemporizadorTexto3.setVisible(false);
					timer = 3600;
					
					this.scene.VerificarRespuesta();
					this.scene.VerificarProgreso();
					this.scene.VerificarOportunidades();
					//this.scene.time.delayedCall(4000, this.scene.EspacioJustificacion, [], this);
		 
				});

				//Respuesta A
				RespuestaAbotonNivel3.on('pointerover', function(){
					this.setFrame(5);
				});
		
				RespuestaAbotonNivel3.on('pointerout', function(){
					this.setFrame(0);
				});
				RespuestaAbotonNivel3.on('pointerup', function(){
					Seleccion = "A";
					TemporizadorTexto.setVisible(false);
					TemporizadorTexto2.setVisible(false);
					TemporizadorTexto3.setVisible(false);
					timer = 3600;
					
					this.scene.VerificarRespuesta();
					this.scene.VerificarProgreso();
					this.scene.VerificarOportunidades();
					//this.scene.time.delayedCall(4000, this.scene.EspacioJustificacion, [], this);
		
				});
		
				//Respuesta B
				RespuestaBbotonNivel3.on('pointerover', function(){
					this.setFrame(5);
				});
		
				RespuestaBbotonNivel3.on('pointerout', function(){
					this.setFrame(0);
				});
				RespuestaBbotonNivel3.on('pointerup', function(){
					Seleccion = "B";
					TemporizadorTexto.setVisible(false);
					TemporizadorTexto2.setVisible(false);
					TemporizadorTexto3.setVisible(false);
					timer = 3600;
					
					this.scene.VerificarRespuesta();
					this.scene.VerificarProgreso();
					this.scene.VerificarOportunidades();
					//this.scene.time.delayedCall(4000, this.scene.EspacioJustificacion, [], this);
		
				});
		
				//Respuesta C
				RespuestaCbotonNivel3.on('pointerover', function(){
					this.setFrame(5);
				});
		
				RespuestaCbotonNivel3.on('pointerout', function(){
					this.setFrame(0);
				});
				RespuestaCbotonNivel3.on('pointerup', function(){
					Seleccion = "C";
					TemporizadorTexto.setVisible(false);
					TemporizadorTexto2.setVisible(false);
					TemporizadorTexto3.setVisible(false);
					timer = 3600;
					
					this.scene.VerificarRespuesta();
					this.scene.VerificarProgreso();
					this.scene.VerificarOportunidades();
					//this.scene.time.delayedCall(4000, this.scene.EspacioJustificacion, [], this);
				});
		
				//Respuesta D
				RespuestaDbotonNivel3.on('pointerover', function(){
					this.setFrame(5);
				});
		
				RespuestaDbotonNivel3.on('pointerout', function(){
					this.setFrame(0);
				});
				RespuestaDbotonNivel3.on('pointerup', function(){
					Seleccion = "D";
					TemporizadorTexto.setVisible(false);
					TemporizadorTexto2.setVisible(false);
					TemporizadorTexto3.setVisible(false);
					timer = 3600;
					
					this.scene.VerificarRespuesta();
					this.scene.VerificarProgreso();
					this.scene.VerificarOportunidades();
					//this.scene.time.delayedCall(4000, this.scene.EspacioJustificacion, [], this);
		 
				});

        TextoNivel2 = this.add.image(400, 300, 'TextoNivel2');
        TextoNivel2.setVisible(false);
        TextoNivel3 = this.add.image(400, 300, 'TextoNivel3');
        TextoNivel3.setVisible(false);

	}

	update(){

		if(ResetTimer == "Si"){

			this.PerdioPorTiempo();
			ResetTimer = "No";

		}

		FinalTiempo = performance.now() - InicioTiempo;

		var horas = Math.floor(FinalTiempo/(1000*60*60));
		if(horas <=9){ var horasFinal = "0" + horas;}
		else {var horasFinal =  horas;}

		var minutos = Math.floor(FinalTiempo/(1000*60))%60;
		if(minutos <=9){ var minutosFinal = "0" + minutos;}
		else {var minutosFinal =  minutos;}

		var segundos = Math.floor(FinalTiempo/1000)%60;
		if(segundos <=9){ var segundosFinal = "0" + segundos;}
		else {var segundosFinal =  segundos;}

		TiempoFormato = horasFinal + ":" + minutosFinal + ":" + segundosFinal;
			
	}

	PerdioPorTiempo(){
		Seleccion = "";
		SonidoTiempo.stop();
		RespuestaAboton.removeInteractive();
		RespuestaBboton.removeInteractive();
		RespuestaCboton.removeInteractive();
		RespuestaDboton.removeInteractive();
		RespuestaAbotonNivel2.removeInteractive();
		RespuestaBbotonNivel2.removeInteractive();
		RespuestaCbotonNivel2.removeInteractive();
		RespuestaDbotonNivel2.removeInteractive();
		RespuestaAbotonNivel3.removeInteractive();
		RespuestaBbotonNivel3.removeInteractive();
		RespuestaCbotonNivel3.removeInteractive();
		RespuestaDbotonNivel3.removeInteractive();
		
		TemporizadorTexto.setVisible(false);
		TemporizadorTexto2.setVisible(false);
		TemporizadorTexto3.setVisible(false);
        timer = 3600;
        this.VerificarOportunidades();
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
		TemporizadorTexto2.setText(minutes + ":" + seconds);
		TemporizadorTexto3.setText(minutes + ":" + seconds);
        	if(timer <=10 && aux == "Ya"){
        		SonidoTiempo.play();
        		
        		
        		aux = "Nop";
        	}
        	if(timer==59){if(Nivel==1){TemporizadorTexto.setVisible(true);} else if(Nivel==2){TemporizadorTexto2.setVisible(true);} else if(Nivel==3){TemporizadorTexto3.setVisible(true);}}
	        if (--timer < 0) {
	        	ResetTimer = "Si";
	        	aux = "Ya";
	        }
	    }, 1000);

	}

	EspacioJustificacion(){

		Oportunidades.setVisible(false);
		Progreso.setVisible(false);
		RespuestaAboton.setVisible(false);
		RespuestaBboton.setVisible(false);
		RespuestaCboton.setVisible(false);
		RespuestaDboton.setVisible(false);
		RespuestaAbotonNivel2.setVisible(false);
		RespuestaBbotonNivel2.setVisible(false);
		RespuestaCbotonNivel2.setVisible(false);
		RespuestaDbotonNivel2.setVisible(false);
		RespuestaAbotonNivel3.setVisible(false);
		RespuestaBbotonNivel3.setVisible(false);
		RespuestaCbotonNivel3.setVisible(false);
		RespuestaDbotonNivel3.setVisible(false);
		PreguntaCampo.setVisible(false);
		RespuestaAcampo.setVisible(false);
		RespuestaBcampo.setVisible(false);
		RespuestaCcampo.setVisible(false);
		RespuestaDcampo.setVisible(false);
		JustificacionCampo.setVisible(true);

		if(Nivel==1){
			FondoJustificacionNivel1.setVisible(true);
			ContinuarNivel1.setVisible(true);
		}
		else if(Nivel==2){
			FondoJustificacionNivel2.setVisible(true);
			ContinuarNivel2.setVisible(true);
		}
		else if(Nivel==3){
			FondoJustificacionNivel3.setVisible(true);
			ContinuarNivel3.setVisible(true);
		}
	}

	Reinicio(){
		//console.log("Reinicio");
		//clearInterval(tempo);
		Progreso.setVisible(true);
		Oportunidades.setVisible(true);
		PreguntaCampo.setVisible(true);
		JustificacionCampo.setVisible(false);
		FondoJustificacionNivel1.setVisible(false);
		FondoJustificacionNivel2.setVisible(false);
		FondoJustificacionNivel3.setVisible(false);
		ContinuarNivel1.setVisible(false);
		ContinuarNivel2.setVisible(false);
		ContinuarNivel3.setVisible(false);
		RespuestaAcampo.setVisible(true);
		RespuestaBcampo.setVisible(true);
		RespuestaCcampo.setVisible(true);
		RespuestaDcampo.setVisible(true);
		if(Nivel==1){
		RespuestaAboton.setVisible(true);
		RespuestaBboton.setVisible(true);
		RespuestaCboton.setVisible(true);
		RespuestaDboton.setVisible(true);
		}
		else if(Nivel==2){
		RespuestaAbotonNivel2.setVisible(true);
		RespuestaBbotonNivel2.setVisible(true);
		RespuestaCbotonNivel2.setVisible(true);
		RespuestaDbotonNivel2.setVisible(true);
		}
		else if(Nivel==3){
		RespuestaAbotonNivel3.setVisible(true);
		RespuestaBbotonNivel3.setVisible(true);
		RespuestaCbotonNivel3.setVisible(true);
		RespuestaDbotonNivel3.setVisible(true);
		}
		TextoNivel2.setVisible(false);
		TextoNivel3.setVisible(false);

		
		timer = 60;
		//this.scene.ControlTemporizador();
		if(Nivel == 5 && ProgresoCont == 0 && timer>45){} else{}
	}

	VerificarRespuesta(){
		
		SonidoTiempo.stop();
		RespuestaAboton.removeInteractive();
		RespuestaBboton.removeInteractive();
		RespuestaCboton.removeInteractive();
		RespuestaDboton.removeInteractive();
		RespuestaAbotonNivel2.removeInteractive();
		RespuestaBbotonNivel2.removeInteractive();
		RespuestaCbotonNivel2.removeInteractive();
		RespuestaDbotonNivel2.removeInteractive();
		RespuestaAbotonNivel3.removeInteractive();
		RespuestaBbotonNivel3.removeInteractive();
		RespuestaCbotonNivel3.removeInteractive();
		RespuestaDbotonNivel3.removeInteractive();

		if(Nivel==1){
		if(Respuesta == "A" && Seleccion == "A"){ RespuestaAboton.anims.play('click', true);} else if (Respuesta != "A" && Seleccion == "A"){RespuestaAboton.setFrame(6);}
			else if(Respuesta == "B" && Seleccion == "B"){ RespuestaBboton.anims.play('click', true);} else if (Respuesta != "B" && Seleccion == "B"){RespuestaBboton.setFrame(6);}
				else if(Respuesta == "C" && Seleccion == "C"){ RespuestaCboton.anims.play('click', true);} else if (Respuesta != "C" && Seleccion == "C"){RespuestaCboton.setFrame(6);}
					else if(Respuesta == "D" && Seleccion == "D"){ RespuestaDboton.anims.play('click', true);} else if (Respuesta != "D" && Seleccion == "D"){RespuestaDboton.setFrame(6);}
		}
		else if(Nivel==2){
			if(Respuesta == "A" && Seleccion == "A"){ RespuestaAbotonNivel2.anims.play('click2', true);} else if (Respuesta != "A" && Seleccion == "A"){RespuestaAbotonNivel2.setFrame(6);}
			else if(Respuesta == "B" && Seleccion == "B"){ RespuestaBbotonNivel2.anims.play('click2', true);} else if (Respuesta != "B" && Seleccion == "B"){RespuestaBbotonNivel2.setFrame(6);}
				else if(Respuesta == "C" && Seleccion == "C"){ RespuestaCbotonNivel2.anims.play('click2', true);} else if (Respuesta != "C" && Seleccion == "C"){RespuestaCbotonNivel2.setFrame(6);}
					else if(Respuesta == "D" && Seleccion == "D"){ RespuestaDbotonNivel2.anims.play('click2', true);} else if (Respuesta != "D" && Seleccion == "D"){RespuestaDbotonNivel2.setFrame(6);}
		}
		else if(Nivel==3){
			if(Respuesta == "A" && Seleccion == "A"){ RespuestaAbotonNivel3.anims.play('click3', true);} else if (Respuesta != "A" && Seleccion == "A"){RespuestaAbotonNivel3.setFrame(6);}
			else if(Respuesta == "B" && Seleccion == "B"){ RespuestaBbotonNivel3.anims.play('click3', true);} else if (Respuesta != "B" && Seleccion == "B"){RespuestaBbotonNivel3.setFrame(6);}
				else if(Respuesta == "C" && Seleccion == "C"){ RespuestaCbotonNivel3.anims.play('click3', true);} else if (Respuesta != "C" && Seleccion == "C"){RespuestaCbotonNivel3.setFrame(6);}
					else if(Respuesta == "D" && Seleccion == "D"){ RespuestaDbotonNivel3.anims.play('click3', true);} else if (Respuesta != "D" && Seleccion == "D"){RespuestaDbotonNivel3.setFrame(6);}
		}
	}

	VerificarProgreso(){
		
		if(Respuesta == "A" && Seleccion == "A"){ Puntaje++; ProgresoCont++; Progreso.setFrame(Puntaje); SonidoAplausos.play(); this.time.delayedCall(4000, this.EspacioJustificacion, [], this);}
			else if(Respuesta == "B" && Seleccion == "B"){ Puntaje++; ProgresoCont++; Progreso.setFrame(Puntaje); SonidoAplausos.play(); this.time.delayedCall(4000, this.EspacioJustificacion, [], this);}
				else if(Respuesta == "C" && Seleccion == "C"){ Puntaje++; ProgresoCont++; Progreso.setFrame(Puntaje); SonidoAplausos.play(); this.time.delayedCall(4000, this.EspacioJustificacion, [], this);}
					else if(Respuesta == "D" && Seleccion == "D"){ Puntaje++; ProgresoCont++; Progreso.setFrame(Puntaje); SonidoAplausos.play(); this.time.delayedCall(4000, this.EspacioJustificacion, [], this);}
	}

	SiguienteNivel(){

		if(Nivel == 1){Nivel = 2; Puntaje = 3; ProgresoCont = 0; index = -1; Progreso.setFrame(Puntaje); this.NivelDos();}
		else if(Nivel == 2){Nivel = 3; Puntaje = 6; ProgresoCont = 0; index = -1;  Progreso.setFrame(Puntaje); this.NivelTres();}
		else if(Nivel == 3){Puntaje = 9; ProgresoCont = 0; index = -1; this.CambioVictoria();}
				
		//console.log("Nivel: " + Nivel);
		//console.log("Puntaje: " + Puntaje);
	}

	NivelDos(){
		
		TextoNivel2.setVisible(true);
		SonidoOvacion.play();
		ContinuarNivel1.removeInteractive();
		ContinuarNivel2.removeInteractive();
		ContinuarNivel3.removeInteractive();
		FondoNivel1.setVisible(false);
		FondoNivel2.setVisible(true);
		TemporizadorTexto2.setVisible(true);
		TemporizadorTexto.setVisible(false);

		this.time.delayedCall(4000, this.Reinicio, [], this);
        this.time.delayedCall(4000, this.RefrescarPregunta, [], this);
	}

	NivelTres(){
		
		TextoNivel3.setVisible(true);
		SonidoOvacion.play();
		ContinuarNivel1.removeInteractive();
		ContinuarNivel2.removeInteractive();
		ContinuarNivel3.removeInteractive();
		FondoNivel2.setVisible(false);
		FondoNivel3.setVisible(true);
		TemporizadorTexto2.setVisible(false);
		TemporizadorTexto3.setVisible(true);

		this.time.delayedCall(4000, this.Reinicio, [], this);
        this.time.delayedCall(4000, this.RefrescarPregunta, [], this);
	}


	VerificarOportunidades(){
		
		if(Nivel==1){
		if(Respuesta == "A" && Seleccion != "A"){ OportunidadesCont++; Oportunidades.setFrame(OportunidadesCont); SonidoMal.play(); RespuestaAboton.anims.play('click', true); this.time.delayedCall(6000, this.EspacioJustificacion, [], this);}
			else if(Respuesta == "B" && Seleccion != "B"){ OportunidadesCont++; Oportunidades.setFrame(OportunidadesCont); SonidoMal.play(); RespuestaBboton.anims.play('click', true); this.time.delayedCall(6000, this.EspacioJustificacion, [], this);}
				else if(Respuesta == "C" && Seleccion != "C"){ OportunidadesCont++; Oportunidades.setFrame(OportunidadesCont); SonidoMal.play(); RespuestaCboton.anims.play('click', true); this.time.delayedCall(6000, this.EspacioJustificacion, [], this);}
					else if(Respuesta == "D" && Seleccion != "D"){ OportunidadesCont++; Oportunidades.setFrame(OportunidadesCont); SonidoMal.play(); RespuestaDboton.anims.play('click', true); this.time.delayedCall(6000, this.EspacioJustificacion, [], this);}
		}
		else if(Nivel==2){
			if(Respuesta == "A" && Seleccion != "A"){ OportunidadesCont++; Oportunidades.setFrame(OportunidadesCont); SonidoMal.play(); RespuestaAbotonNivel2.anims.play('click2', true); this.time.delayedCall(6000, this.EspacioJustificacion, [], this);}
			else if(Respuesta == "B" && Seleccion != "B"){ OportunidadesCont++; Oportunidades.setFrame(OportunidadesCont); SonidoMal.play(); RespuestaBbotonNivel2.anims.play('click2', true); this.time.delayedCall(6000, this.EspacioJustificacion, [], this);}
				else if(Respuesta == "C" && Seleccion != "C"){ OportunidadesCont++; Oportunidades.setFrame(OportunidadesCont); SonidoMal.play(); RespuestaCbotonNivel2.anims.play('click2', true); this.time.delayedCall(6000, this.EspacioJustificacion, [], this);}
					else if(Respuesta == "D" && Seleccion != "D"){ OportunidadesCont++; Oportunidades.setFrame(OportunidadesCont); SonidoMal.play(); RespuestaDbotonNivel2.anims.play('click2', true); this.time.delayedCall(6000, this.EspacioJustificacion, [], this);}
		}
		else if(Nivel==3){
			if(Respuesta == "A" && Seleccion != "A"){ OportunidadesCont++; Oportunidades.setFrame(OportunidadesCont); SonidoMal.play(); RespuestaAbotonNivel3.anims.play('click3', true); this.time.delayedCall(6000, this.EspacioJustificacion, [], this);}
			else if(Respuesta == "B" && Seleccion != "B"){ OportunidadesCont++; Oportunidades.setFrame(OportunidadesCont); SonidoMal.play(); RespuestaBbotonNivel3.anims.play('click3', true); this.time.delayedCall(6000, this.EspacioJustificacion, [], this);}
				else if(Respuesta == "C" && Seleccion != "C"){ OportunidadesCont++; Oportunidades.setFrame(OportunidadesCont); SonidoMal.play(); RespuestaCbotonNivel3.anims.play('click3', true); this.time.delayedCall(6000, this.EspacioJustificacion, [], this);}
					else if(Respuesta == "D" && Seleccion != "D"){ OportunidadesCont++; Oportunidades.setFrame(OportunidadesCont); SonidoMal.play(); RespuestaDbotonNivel3.anims.play('click3', true); this.time.delayedCall(6000, this.EspacioJustificacion, [], this);}
		}
	}

	Derrota(){
		//console.log("Ha perdido");
		TemporizadorTexto.setVisible(false);
		TemporizadorTexto2.setVisible(false);
		TemporizadorTexto3.setVisible(false);
		//Derrota.setVisible(true); 
		//Derrota.setFrame(Math.floor(Math.random() * (2 - 0 + 1)) + 0);
		this.time.delayedCall(4000, this.CambioDerrota, [], this);
	}
	CambioDerrota(){
		//console.log("Entro a cambio de escena por derrota");
		var nombreCompleto = nombre.slice(0, 14);

				var datos = "Nombre="+nombreCompleto+"&Puntaje="+Puntaje+"&Tiempo="+/*FinalTiempo*0.0000167*/FinalTiempo;
			        		var ajx = new XMLHttpRequest();
			        			ajx.onreadystatechange = function (){
			        				   if (ajx.readyState == 4 && ajx.status == 200) {
                    					//console.log("Está adentro");
                						}
			        			};	
			        			ajx.open("POST", "assets/Formulario/FormularioTabla.php", true);
            					ajx.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            					ajx.send(datos);

						   		//console.log(datos);
		clearInterval(tempo);
		//this.scene.restart('Derrota');
		this.time.delayedCall(1500, this.Perdio, [], this);
		//this.scene.start('Derrota', {nombre: nombre, apellido: apellido, puntaje: Puntaje});
	}
	Perdio(){
		this.scene.start('Derrota', {nombre: nombre, puntaje: Puntaje, escena: "independiente"});
	}
	CambioVictoria(){
		//console.log("Entro a cambio de escena por victoria");
		var nombreCompleto = nombre.slice(0, 14);
		
				var datos = "Nombre="+nombreCompleto+"&Puntaje="+Puntaje+"&Tiempo="+/*FinalTiempo*0.0000167*/FinalTiempo;
			        		var ajx = new XMLHttpRequest();
			        			ajx.onreadystatechange = function (){
			        				   if (ajx.readyState == 4 && ajx.status == 200) {
                    					//console.log("Está adentro");
                						}
			        			};	
			        			ajx.open("POST", "assets/Formulario/FormularioTabla.php", true);
            					ajx.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            					ajx.send(datos);

						   		//console.log(datos);
		clearInterval(tempo);
		//this.scene.restart('Victoria');
		this.time.delayedCall(1500, this.Gano, [], this);
		//this.scene.start('Victoria', {nombre: nombre, apellido: apellido, puntaje: Puntaje});
	}
	Gano(){
		this.scene.start('Derrota', {nombre: nombre, puntaje: Puntaje, escena: "independiente"});
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
		RespuestaAbotonNivel2.setInteractive({ cursor: 'pointer'});
		RespuestaBbotonNivel2.setInteractive({ cursor: 'pointer'});
		RespuestaCbotonNivel2.setInteractive({ cursor: 'pointer'});
		RespuestaDbotonNivel2.setInteractive({ cursor: 'pointer'});
		RespuestaAbotonNivel3.setInteractive({ cursor: 'pointer'});
		RespuestaBbotonNivel3.setInteractive({ cursor: 'pointer'});
		RespuestaCbotonNivel3.setInteractive({ cursor: 'pointer'});
		RespuestaDbotonNivel3.setInteractive({ cursor: 'pointer'});
		ContinuarNivel1.setInteractive({ cursor: 'pointer'});
		ContinuarNivel2.setInteractive({ cursor: 'pointer'});
		ContinuarNivel3.setInteractive({ cursor: 'pointer'});
		RespuestaAboton.setFrame(0);
		RespuestaBboton.setFrame(0);
		RespuestaCboton.setFrame(0);
		RespuestaDboton.setFrame(0);
		RespuestaAbotonNivel2.setFrame(0);
		RespuestaBbotonNivel2.setFrame(0);
		RespuestaCbotonNivel2.setFrame(0);
		RespuestaDbotonNivel2.setFrame(0);
		RespuestaAbotonNivel3.setFrame(0);
		RespuestaBbotonNivel3.setFrame(0);
		RespuestaCbotonNivel3.setFrame(0);
		RespuestaDbotonNivel3.setFrame(0);
		
		index++;
		ResetTimer = "No";
		
		SonidoSuspenso.play();

		if(Nivel==1){
		PreguntaAleatorio = PreguntasOrdenadasNivel1[index];
		//console.log(PreguntasOrdenadasNivel1);
		}
		else if (Nivel==2){
		PreguntaAleatorio = PreguntasOrdenadasNivel2[index];
		//console.log(PreguntasOrdenadasNivel2);
		}
		else if(Nivel==3){
		PreguntaAleatorio = PreguntasOrdenadasNivel3[index];
		//console.log(PreguntasOrdenadasNivel3);
		}
		//console.log("Nivel: "+Nivel);
		//console.log("ProgresoNivel: "+ProgresoCont);
		//console.log("Puntaje: "+Puntaje);
		
		if(Nivel == 1){
			switch (PreguntaAleatorio){
			case 0:
					Pregunta = "¿Cuál de las siguientes opciones consideras que es un aspecto a tener en cuenta en un estudio de mercado? ";
					RespuestaA = "Hábitos de compra de la población objetivo.";
					RespuestaB = "Análisis de la competencia.";
					RespuestaC = "Región o población objetivo.";
					RespuestaD = "Todas las anteriores.";
					Respuesta = "D";
					Justificacion = "Los estudios de mercado son útiles para analizar aspectos como hábitos de compra, región de operación, requerimientos de productos o análisis de la competencia, para así asegurar el buen desempeño del negocio.";
					PreguntaCampo.x = 120; PreguntaCampo.y = 360;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 1: 
					Pregunta = "¿Cuál de los siguientes documentos crees que se debe crear al iniciar un emprendimiento?";
					RespuestaA = "Un contrato de confidencialidad.";
					RespuestaB = "Un plan de negocio.";
					RespuestaC = "Una declaración de los impuestos aplicables.";
					RespuestaD = "Un portafolio de inversión.";
					Respuesta = "B";
					Justificacion = "El plan de negocio es un documento en el que se plantea un nuevo proyecto centrado en un producto o en un servicio. Por lo tanto, este documento se redacta antes de la realización de una inversión o al comienzo de un negocio.";
					PreguntaCampo.x = 120; PreguntaCampo.y = 360;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 2:
					Pregunta = "¿Si un emprendimiento está relacionado con la comercialización de productos, sabe cuál es la entidad encargada de asesorar y vigilar este emprendimiento?";
					RespuestaA = "Superintendencia de Industria y Comercio.";
					RespuestaB = "Contraloría General de la Nación.";
					RespuestaC = "Superintendencia Financiera.";
					RespuestaD = "Dirección Nacional de Comercio. ";
					Respuesta = "A";
					Justificacion = "La Superintendencia de Industria y Comercio es la autoridad nacional de protección de la competencia y los datos personales, protege los derechos de los consumidores y asesora a los emprendedores respecto a sus obligaciones como comerciantes de productos.";
					PreguntaCampo.x = 120; PreguntaCampo.y = 360;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 3:
					Pregunta = "¿Sabes cuál es la entidad encargada de administrar y autorizar la creación de nuevas empresas en Colombia?";
					RespuestaA = "Ministerio de Trabajo.";
					RespuestaB = "Ministerio de Hacienda.";
					RespuestaC = "Cámara de Comercio.";
					RespuestaD = "Superintendencia de Sociedades.";
					Respuesta = "C";
					Justificacion = "Las Cámaras de Comercio en Colombia sirven como autoridad a cargo de los intereses generales del comercio ante el gobierno y comerciantes. Son las encargadas de estudiar el cumplimiento de requisitos y aprobar la creación de nuevas empresas.";
					PreguntaCampo.x = 120; PreguntaCampo.y = 360;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 4:
					Pregunta = "Escoge un ejemplo de un costo fijo en un producto.";
					RespuestaA = "Servicios públicos.";
					RespuestaB = "Materia prima.";
					RespuestaC = "Impuestos";
					RespuestaD = "Mano de obra.";
					Respuesta = "A";
					Justificacion = "Los costos fijos son aquellos que siempre deberás pagar, independientemente del nivel de producción de tu negocio o emprendimiento. Puede haber meses en que no produzcas o vendas, pero en los que igualmente deberás pagarlos, un ejemplo son los servicios públicos como el agua o la luz. ";
					PreguntaCampo.x = 200; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 5:
					Pregunta = "De las siguientes opciones, ¿sabe cuál es un ejemplo de costo variable en un producto?";
					RespuestaA = "Servicios públicos.";
					RespuestaB = "Materia prima.";
					RespuestaC = "Administración. ";
					RespuestaD = "Internet.";
					Respuesta = "B";
					Justificacion = "Son aquellos que cambian de acuerdo al número de unidades producidas, ya sea cada día, mes o año. Así tenemos el precio de la materia prima que varía constantemente. Por ejemplo, agua para elaborar gaseosa; tela, hilo y botones para una prenda de vestir; etc";
					PreguntaCampo.x = 120; PreguntaCampo.y = 360;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 6:
					Pregunta = "¿Sabes cuál es el punto de equilibrio en un emprendimiento de venta de productos o servicios?";
					RespuestaA = "Es el dinero que debo recibir mensualmente como mínimo.";
					RespuestaB = "Es el dinero que queda luego de la venta de los productos o servicios en el mes.";
					RespuestaC = "Es la cantidad mínima a vender para no obtener pérdidas.";
					RespuestaD = "Es la cantidad máxima a vender para no obtener pérdidas.";
					Respuesta = "C";
					Justificacion = "El punto de equilibrio sirve en un emprendimiento para saber cuándo los ingresos y los egresos están al mismo nivel. ";
					PreguntaCampo.x = 120; PreguntaCampo.y = 360;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 463;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 463;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 538;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 538;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 7:
					Pregunta = "Para un emprendimiento virtual hay que tener en cuenta… Selecciona una opción:";
					RespuestaA = "La opción de pagos en línea.";
					RespuestaB = "El mantenimiento de la red social o página web.";
					RespuestaC = "La seguridad de la red social o página web.";
					RespuestaD = "Todas las anteriores.";
					Respuesta = "D";
					Justificacion = "Si quieres iniciar un emprendimiento virtual para ahorrar gastos, debes tener en cuenta la creación, diseño, mantenimiento y seguridad de tu página web; la creación de perfiles en redes sociales, la identificación de tus principales competidores virtuales, estudiar las facilidades de pagos y envíos, entre otras.";
					PreguntaCampo.x = 120; PreguntaCampo.y = 360;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 463;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 8:
				Pregunta = "¿Sabes quién es el encargado de firmar los contratos que llegue a necesitar la empresa o el emprendimiento?";
				RespuestaA = "Supervisor(a).";
				RespuestaB = "Dueño(a) del emprendimiento.";
				RespuestaC = "Representante Legal.";
				RespuestaD = "Empleado más responsable.";
				Respuesta = "C";
				Justificacion = "Cuando un emprendimiento fue constituido como empresa, necesita de un Representante Legal que se responsabilice de todos los aspectos legales, entre ellos, la firma de contratos. ";
				PreguntaCampo.x = 120; PreguntaCampo.y = 360;
				RespuestaAcampo.x = 30; RespuestaAcampo.y = 470;
				RespuestaBcampo.x = 430; RespuestaBcampo.y = 470;
				RespuestaCcampo.x = 30; RespuestaCcampo.y = 545;
				RespuestaDcampo.x = 430; RespuestaDcampo.y = 545;
				JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 9: 
				Pregunta = "¿Qué crees que es necesario para tener un orden financiero con las cuentas del emprendimiento?";
				RespuestaA = "Llevar la contabilidad de las operaciones que se realizan.";
				RespuestaB = "Tener un plan de negocio.";
				RespuestaC = "Tener un estudio de mercado.";
				RespuestaD = "Contar con una persona especializada en temas financieros.";
				Respuesta = "A";
				Justificacion = "La contabilidad es la actividad que se debe llevar para controlar el dinero, no es necesario que se realice por parte de un experto. Para esto debes tener en cuenta la creación y seguimiento de un presupuesto, el registro de ingresos y gastos diarios, y la evaluación a final del mes en la que se verifique el orden de las finanzas.";
				PreguntaCampo.x = 120; PreguntaCampo.y = 360;
				RespuestaAcampo.x = 30; RespuestaAcampo.y = 463;
				RespuestaBcampo.x = 430; RespuestaBcampo.y = 470;
				RespuestaCcampo.x = 30; RespuestaCcampo.y = 545;
				RespuestaDcampo.x = 430; RespuestaDcampo.y = 538;
				JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 10:
				Pregunta = "¿Sabes qué debes tener en cuenta al realizar un presupuesto para tu emprendimiento?";
				RespuestaA = "No mezclar los ingresos y los gastos personales con los de tu emprendimiento.";
				RespuestaB = "Asignar un porcentaje de tus ganancias para ahorro o inversión que beneficie tu emprendimiento.";
				RespuestaC = "Identificar si existen gastos innecesarios y evitarlos al siguiente mes.";
				RespuestaD = "Todas las anteriores.";
				Respuesta = "D";
				Justificacion = "Un presupuesto es una herramienta que te permite planear, hacer seguimiento e identificar fugas de dinero acerca de tu emprendimiento. Haciendo uso de él cada mes, puedes evitar gastos innecesarios, identificar tus ganancias, distribuir los ingresos en ahorro, gastos, etc. Debes tener en cuenta que el presupuesto de tu emprendimiento debe ser totalmente independiente a tu presupuesto personal.";
				PreguntaCampo.x = 120; PreguntaCampo.y = 360;
				RespuestaAcampo.x = 30; RespuestaAcampo.y = 463;
				RespuestaBcampo.x = 430; RespuestaBcampo.y = 455;
				RespuestaCcampo.x = 30; RespuestaCcampo.y = 537;
				RespuestaDcampo.x = 430; RespuestaDcampo.y = 545;
				JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 11:
				Pregunta = "Una excelente forma de emprender es mediante el 'E -Commerce' es decir, la venta de productos y servicios virtualmente. ¿Sabes cómo podrías construir un futuro financiero seguro si eres emprendedor 'E -Commerce o freelancer'?";
				RespuestaA = "Ahorrando parte de mis ganancias en pensiones voluntarias las cuales generan rendimientos.";
				RespuestaB = "Invirtiendo parte de mis ganancias en proyectos de vivienda de interés social.";
				RespuestaC = "Ahorrando parte de mis ganancias en las entidades financieras.";
				RespuestaD = "Invirtiendo parte de mis ganancias en criptomonedas.";
				Respuesta = "A";
				Justificacion = "Cuando no eres empleado y pero percibes algún tipo de ingreso ya sea por prestar algún servicio o tus conocimientos (freelancer) o empezaste a vender algún producto en internet (eCommerce) puedes ahorrar un porcentaje de tu ingreso el cual eliges tú, en un fondo de pensiones voluntarias, así inicias un ahorro pensional desde temprana edad para contar con un futuro tranquilo.";
				PreguntaCampo.x = 120; PreguntaCampo.y = 360;
				RespuestaAcampo.x = 30; RespuestaAcampo.y = 455;
				RespuestaBcampo.x = 430; RespuestaBcampo.y = 463;
				RespuestaCcampo.x = 30; RespuestaCcampo.y = 537;
				RespuestaDcampo.x = 430; RespuestaDcampo.y = 537;
				JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 12:
				Pregunta = "¿Sabes qué significa un Representante legal?";
				RespuestaA = "Persona que representa una empresa en temas legales.";
				RespuestaB = "Persona asignada los accionistas para controlar una empresa.";
				RespuestaC = "Empresa contratada por otra empresa para asesorías legales.";
				RespuestaD = "Empresa asignada por el Estado para vigilar y supervisar alguna entidad.";
				Respuesta = "A";
				Justificacion = "Un Representante Legal es una persona o entidad que representa y actúa en nombre de una persona, grupo de personas o empresa, esta persona o entidad representará formalmente a su empresa en aspectos legales y cumplirá las funciones que su su representado o socios de una empresa le hayan delegado en los estatutos de la entidad (reglas de obligatorio cumplimiento para Directivos, socios y administradores en una compañía).";
				PreguntaCampo.x = 220; PreguntaCampo.y = 380;
				RespuestaAcampo.x = 30; RespuestaAcampo.y = 463;
				RespuestaBcampo.x = 430; RespuestaBcampo.y = 463;
				RespuestaCcampo.x = 30; RespuestaCcampo.y = 537;
				RespuestaDcampo.x = 430; RespuestaDcampo.y = 537;
				JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 13:
				Pregunta = "¿Sabes qué es una matrícula mercantil?";
				RespuestaA = "Un certificado de la DIAN para pagar impuestos.";
				RespuestaB = "Un documento que aprueba la exportación de productos desde Colombia.";
				RespuestaC = "Un certificado obligatorio para comerciantes con la información de lo que va a comercializar.";
				RespuestaD = "IUn documento exigido por el Gobierno para cualquier tipo de emprendimiento.";
				Respuesta = "C";
				Justificacion = "Los certificados de Matrícula Mercantil, validan el cumplimiento de este requisito legal respecto del comerciante y de sus establecimientos de comercio e informan, el nombre y número de matrícula de los establecimientos de comercio que una persona natural o jurídica tenga registrados.";
				PreguntaCampo.x = 250; PreguntaCampo.y = 380;
				RespuestaAcampo.x = 30; RespuestaAcampo.y = 463;
				RespuestaBcampo.x = 430; RespuestaBcampo.y = 463;
				RespuestaCcampo.x = 30; RespuestaCcampo.y = 537;
				RespuestaDcampo.x = 430; RespuestaDcampo.y = 537;
				JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 14:
				Pregunta = "¿Sabes si el dueño de una empresa puede ser el mismo representante legal?";
				RespuestaA = "Sí.";
				RespuestaB = "No.";
				RespuestaC = "Sí, pero solo por un año.";
				RespuestaD = "No, deben ser personas diferentes.";
				Respuesta = "A";
				Justificacion = "El representante legal puede ser uno o varios socios de una empresa o sociedad o también puede ser un tercero. En cualquier caso, esta figura es la encargada de representar la toma de decisiones.";
				PreguntaCampo.x = 120; PreguntaCampo.y = 380;
				RespuestaAcampo.x = 30; RespuestaAcampo.y = 470;
				RespuestaBcampo.x = 430; RespuestaBcampo.y = 470;
				RespuestaCcampo.x = 30; RespuestaCcampo.y = 545;
				RespuestaDcampo.x = 430; RespuestaDcampo.y = 545;
				JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 15:
				Pregunta = "El RUT es el Registro Único Tributario y los trabajadores independientes deben tenerlo y en él definir su actividad económica, pero ¿sabes para qué sirve este registro?";
				RespuestaA = "Para registrar la empresa ante la Superintendencia de Industria y Comercio.";
				RespuestaB = "Para acceder a beneficios tributarios definidos por el Gobierno.";
				RespuestaC = "Para identificar si los trabajadores tienen obligaciones en materia de impuestos.";
				RespuestaD = "Para llevar el control de los impuestos pagados y pendientes por pagar.";
				Respuesta = "C";
				Justificacion = "El RUT es el mecanismo único (como su nombre lo indica) para identificar, ubicar y clasificar a las personas que están sujetas a obligaciones con la DIAN, o aquellos que por disposición legal deban hacerlo.";
				PreguntaCampo.x = 120; PreguntaCampo.y = 360;
				RespuestaAcampo.x = 30; RespuestaAcampo.y = 463;
				RespuestaBcampo.x = 430; RespuestaBcampo.y = 463;
				RespuestaCcampo.x = 30; RespuestaCcampo.y = 538;
				RespuestaDcampo.x = 430; RespuestaDcampo.y = 538;
				JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 16:
				Pregunta = "¿Sabes cómo se define la actividad económica de un trabajador independiente?";
				RespuestaA = "De acuerdo a sus funciones se elige una de las actividades en la lista autorizada por la DIAN.";
				RespuestaB = "De acuerdo a sus funciones se elige una de las actividades en la lista autorizada por la Superintendencia de Industria y Comercio.";
				RespuestaC = "De acuerdo a sus funciones se elige una o varias  de las actividades  en la lista autorizada por la DIAN.";
				RespuestaD = "El trabajador propone el nombre de su actividad económica y pide aprobación a la Superintendencia de Industria y Comercio.";
				Respuesta = "C";
				Justificacion = "Según las actividades autorizadas por la DIAN, para efectos de contratación, declaración y/o pago de impuestos, los trabajadores deben elegir cuál es o son las actividades comerciales a las que se dedica de acuerdo a los trabajos que realiza.";
				PreguntaCampo.x = 100; PreguntaCampo.y = 380;
				RespuestaAcampo.x = 30; RespuestaAcampo.y = 463;
				RespuestaBcampo.x = 430; RespuestaBcampo.y = 455;
				RespuestaCcampo.x = 30; RespuestaCcampo.y = 532;
				RespuestaDcampo.x = 430; RespuestaDcampo.y = 532;
				JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;

			}
		}

		if(Nivel == 2){
			switch (PreguntaAleatorio){
			case 0:
					Pregunta = "¿Sabes mediante cuál contrato, serías considerado un trabajador independiente?";
					RespuestaA = "Contrato temporal.";
					RespuestaB = "Contrato por horas de trabajo.";
					RespuestaC = "Contrato por prestación de servicios.";
					RespuestaD = "Contrato definido.";
					Respuesta = "C";
					Justificacion = "El contrato por prestación de servicios es de carácter civil y no laboral , por lo tanto no está sujeto a las leyes de trabajo y no es considerado un contrato con vínculo laboral al no haber relación directa entre empleador y trabajador, por ello, no cuenta con período de prueba y no genera para la empresa que contrata, la obligación de pagar prestaciones sociales, en este caso, deben ser asumidas por el contratado.";
					PreguntaCampo.x = 160; PreguntaCampo.y = 360;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 440; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 1: 
					Pregunta = "¿Sabes a cuántos días de vacaciones tiene derecho un trabajador independiente?";
					RespuestaA = "15 días hábiles al año.";
					RespuestaB = "16 días hábiles al año.";
					RespuestaC = "5 días hábiles cada tres meses";
					RespuestaD = "Los días de vacaciones son definidos por el trabajador independiente de acuerdo a su carga laboral.";
					Respuesta = "D";
					Justificacion = "Los trabajadores independientes son libres de administrar su tiempo y, por esta razón, son ellos quienes deciden cuántos días de vacaciones toman al año o si quieren continuar trabajando sin tomar vacaciones. Por ley no está establecido ningún número de días.";
					PreguntaCampo.x = 150; PreguntaCampo.y = 360;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 532;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 2:
					Pregunta = "¿Sabes qué documento es usado por un trabajador independiente cuando busca recibir el pago por sus productos o servicios y existe un contrato de por medio?";
					RespuestaA = "Factura electrónica.";
					RespuestaB = "Cuenta de cobro.";
					RespuestaC = "Soporte de efectivo.";
					RespuestaD = "RUT.";
					Respuesta = "B";
					Justificacion = "El documento válido para que un contratante pague el dinero pactado a un independiente que tiene contrato por prestación de servicios es una cuenta de cobro, en la que se adjunta el RUT del contratado, las actividades que realizó, el tiempo utilizado y el pago equivalente por esta actividad.";
					PreguntaCampo.x = 120; PreguntaCampo.y = 360;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 3:
					Pregunta = "¿Sabes cómo se llama el pago que recibe un trabajador independiente por el servicio prestado?";
					RespuestaA = "Honorarios.";
					RespuestaB = "Sueldo.";
					RespuestaC = "Ganancia ocasional.";
					RespuestaD = "Ganancia neta.";
					Respuesta = "A";
					Justificacion = "Cuando un trabajador es independiente, el dinero recibido a cambio de sus servicios prestados es considerado como honorarios, pues el sueldo es aplicable solo para empleados con contrato laboral.";
					PreguntaCampo.x = 110; PreguntaCampo.y = 360;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 4:
					Pregunta = "El contrato por prestación de servicios se puede hacer a:";
					RespuestaA = "Personas jurídicas.";
					RespuestaB = " Personas naturales.";
					RespuestaC = "Personas jurídicas y naturales.";
					RespuestaD = "Ninguna de las anteriores.";
					Respuesta = "C";
					Justificacion = " El contrato por prestación de servicios se puede usar para contratar personas independientes (personas naturales) o personas jurídicas.";
					PreguntaCampo.x = 170; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			
			}
		}

		if(Nivel == 3){
			switch (PreguntaAleatorio){
			case 0:
					Pregunta = "Los aportes como independiente a salud, pensión y riesgos laborales (ARL) se consideran aportes:";
					RespuestaA = "Parafiscales.";
					RespuestaB = "Sociales obligatorios.";
					RespuestaC = "Cesantías.";
					RespuestaD = "Seguridad social.";
					Respuesta = "D";
					Justificacion = "Los aportes de seguridad social son retenciones que se aplican a los ingresos laborales recibidos de los trabajadores. Si eres empleado, los porcentajes son asumidos conjuntamente con el empleador o empresa contratante; en caso de que seas independiente deberás asumir la totalidad de los aportes que son salud, pensión, y riesgos laborales (ARL).";
					PreguntaCampo.x = 110; PreguntaCampo.y = 360;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 1: 
					Pregunta = "Cuando tienes un contrato por prestación de servicios debes pagar previamente por tu cuenta los aportes a seguridad social para recibir el pago por los servicios que prestaste a la empresa que te contrató. ¿Sabes qué aportes debes realizar de forma obligatoria?";
					RespuestaA = "Salud y ARL.";
					RespuestaB = "Salud y Pensión.";
					RespuestaC = "Únicamente Pensión.";
					RespuestaD = "Únicamente Salud. ";
					Respuesta = "B";
					Justificacion = "Como trabajador independiente, solo estás obligado a hacer aportes a pensión del 16% y salud del 12.5%, sobre tu ingreso base de cotización. La afiliación a ARL (riesgos profesionales) es de carácter opcional y no debes hacer pago de parafiscales (ICBF, Sena o Caja de Compensación Familiar).";
					PreguntaCampo.x = 120; PreguntaCampo.y = 350;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 2:
					Pregunta = "El sueldo de un trabajador independiente puede variar mes a mes por múltiples factores, pero existe una opción de ahorro que genera rendimientos ya que el dinero es reinvertido por expertos financieros, ¿sabes de qué ahorro te hablamos?";
					RespuestaA = "Aportes a pensión voluntaria en administradoras de fondos de pensiones.";
					RespuestaB = "Ahorro en Fondo de empleados.";
					RespuestaC = "Aportes extras a Parafiscales.";
					RespuestaD = "Ahorro en la Comisión Nacional de Ahorro para trabajadores.";
					Respuesta = "A";
					Justificacion = "Las pensiones voluntarias son una opción de ahorro de las AFP con las que puedes complementar tu pensión obligatoria o cumplir metas específicas de ahorro. En este caso sirven como respaldo para los trabajadores independientes porque los ahorros son invertidos por expertos para que el dinero genere mayor rentabilidad.";
					PreguntaCampo.x = 120; PreguntaCampo.y = 350;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 463;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 537;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 3:
					Pregunta = "¿Sabes para qué puedes usar las cesantías?";
					RespuestaA = "Educación.";
					RespuestaB = "Compra de vivienda.";
					RespuestaC = "Desempleo.";
					RespuestaD = "Todas las anteriores.";
					Respuesta = "D";
					Justificacion = " Es clave saber que las cesantías fueron creadas con el objetivo de usarlas cuando las personas quedan cesantes, es decir desempleadas; pero también existen otras opciones en las que las puedes usar. Educación: ya sea para ti mismo, tu cónyuge o tus hijos; compra de vivienda: si tu sueño es comprar casa, esta es la opción perfecta para iniciar ese proyecto de vida; mejora, reparación o ampliación de tu vivienda: si ya cuentas con tu propia vivienda y deseas darle esos arreglos y pago de impuestos o liberación de gravámenes hipotecarios: si dejaste acumular el pago del Impuesto Predial, puedes pagarlo con tus cesantías.";
					PreguntaCampo.x = 240; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 420; JustificacionCampo.y = 170;
			break;
			case 4:
					Pregunta = "¿Qué personas tienen derecho a las cesantías?";
					RespuestaA = "Trabajadores con contrato a término fijo o indefinido.";
					RespuestaB = "Trabajadores independientes.";
					RespuestaC = "Trabajadores por horas.";
					RespuestaD = "Todas las anteriores.";
					Respuesta = "A";
					Justificacion = "Las cesantías son un derecho que hacen parte de las prestaciones legales, por lo tanto todo empleado con un contrato laboral a término fijo o indefinido las tiene. También puedes aportar a ellas de manera voluntaria si eres independiente. Asimismo, se deben pagar anualmente con fecha límite el 14 de febrero. Ten presente que en caso de que tu empleador no pague las cesantías en la fecha límite deberá asumir una sanción de un día de salario por cada día de atraso,* esto según el Artículo 99 de la Ley 50 de 1990.";
					PreguntaCampo.x = 220; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 463;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
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