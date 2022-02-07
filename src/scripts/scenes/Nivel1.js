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
var PreguntasOrdenadasNivel1 = [0, 1, 2, 3, 4, 5, 6, 7];
var PreguntasOrdenadasNivel2 = [0, 1, 2, 3, 4];
var PreguntasOrdenadasNivel3 = [0, 1, 2, 3, 4, 5];
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
export default class Nivel1 extends Phaser.Scene {

	constructor(){

		super({key: 'Nivel1'});

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

		Progreso = this.add.sprite(130, 40, 'FondoProgreso').setScale(0.45);
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

		PreguntaCampo = this.add.text(200, 380, '', EstiloPregunta);
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
		
		timer = 60;
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
		this.scene.start('Derrota', {nombre: nombre, puntaje: Puntaje, escena: "empleado"});
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
		this.scene.start('Derrota', {nombre: nombre, puntaje: Puntaje, escena: "empleado"});
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
					Pregunta = "Si en una entrevista de trabajo te dicen 'háblame de ti…' ¿cómo responderías?";
					RespuestaA = "Hablaría de mi infancia, mis planes actuales y mis deseos a futuro.";
					RespuestaB = "Diría lo que pienso acerca de mis comportamientos.";
					RespuestaC = "Hablaría acerca de mi perfil laboral, logros y mis mayores fortalezas como persona y como trabajador.";
					RespuestaD = "Haría un breve resumen de toda mi vida.";
					Respuesta = "C";
					Justificacion = "En estas preguntas los reclutadores te dan la oportunidad de dar una respuesta libre, sin embargo, cada respuesta tiene una medición y en este caso medirán tu capacidad de presentar la información de manera coherente y clara. Aunque es una pregunta abierta, es recomendable no extenderse sobre temas personales y profundizar en expectativas y logros laborales o académicos. ";
					PreguntaCampo.x = 120; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 463;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 463;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 532;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 1: 
					Pregunta = "¿Qué información consultarías de una empresa antes de una entrevista de trabajo?";
					RespuestaA = "Misión y visión.";
					RespuestaB = "Principios y Valores.";
					RespuestaC = "Principales productos y/o servicios.";
					RespuestaD = "Todas las anteriores.";
					Respuesta = "D";
					Justificacion = "Uno de los factores que se tienen en cuenta en la contratación es la motivación del aspirante por el cargo a ocupar y saber acerca de la compañía  demostrará que te identificas y estás seguro del lugar en el que quieres trabajar.";
					PreguntaCampo.x = 120; PreguntaCampo.y = 360;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 2:
					Pregunta = "En el trabajo no solo se valora lo que tienes por ofrecer a nivel conceptual y práctico, sino también lo que ofreces como persona. ¿Sabes cuáles son las habilidades laborales que debes definir y tener en cuenta en tu búsqueda de empleo?";
					RespuestaA = "Habilidades conceptuales y prácticas.";
					RespuestaB = "Habilidades personales, profesionales y sociales.";
					RespuestaC = "Habilidades administrativas, financieras y digitales.";
					RespuestaD = "Habilidades innovadoras y creativas.";
					Respuesta = "B";
					Justificacion = "Hoy en día los procesos de reclutamiento no se limitan a evaluar la experiencia laboral y los estudios realizados, ahora se buscan personas íntegras. Las habilidades personales y sociales de los candidatos se consideran tan importantes como la experiencia y el conocimiento técnico, por eso ten claras cuáles son las habilidades que tienes para ofrecer. ";
					PreguntaCampo.x = 120; PreguntaCampo.y = 350;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 463;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 537;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 3:
					Pregunta = "De las siguientes, ¿cuál habilidad social crees que se debe tener en cuenta  al entrar a trabajar?";
					RespuestaA = "Capacidad de expresar opiniones asertivamente.";
					RespuestaB = "Inteligencia emocional.";
					RespuestaC = "Empatía.";
					RespuestaD = "Todas las anteriores.";
					Respuesta = "D";
					Justificacion = "Las habilidades sociales son un conjunto de capacidades y destrezas interpersonales que nos permiten relacionarnos con otras personas de forma adecuada, siendo capaces de expresar nuestros sentimientos, opiniones, deseos o necesidades en diferentes contextos o situaciones. Algunos ejemplos son: la empatía, la comunicación asertiva, inteligencia emocional, capacidad de comunicar sentimientos y opiniones, entre otras.";
					PreguntaCampo.x = 120; PreguntaCampo.y = 360;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 463;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 4:
					Pregunta = "Selecciona las habilidades laborales que crees son las más buscadas por los reclutadores de selección:";
					RespuestaA = "Trabajo en equipo, capacidad de adaptación y aprendizaje continuo.";
					RespuestaB = "Comunicación oral y escrita.";
					RespuestaC = "Relaciones interpersonales, actitud y motivación.";
					RespuestaD = "Respeto, responsabilidad y tolerancia.";
					Respuesta = "A";
					Justificacion = "Cada trabajo puede requerir diferentes habilidades, sin embargo, estas son las más buscadas por las áreas de selección: trabajo en equipo, capacidad de adaptación, capacidad de ejecución, organización, aprendizaje continuo, creatividad y comunicación asertiva. ";
					PreguntaCampo.x = 120; PreguntaCampo.y = 360;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 463;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 537;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 5:
					Pregunta = "El assessment es un término muy usado en el mundo laboral y en los procesos de selección. ¿Sabes a qué se refiere?";
					RespuestaA = "Es una entrevista virtual en donde se realizan en vivo pruebas psicológicas.";
					RespuestaB = "Es una entrevista grupal en la que por medio de casos reales o dinámicas se miden habilidades específicas de los candidatos. ";
					RespuestaC = "Es un servicio de asesoría personalizado sobre temas relacionados con los procesos de selección.";
					RespuestaD = "Es la entrevista final con el jefe inmediato.";
					Respuesta = "B";
					Justificacion = "Un assessment es un método de selección de personal que simula situaciones reales con el fin de evaluar conductas concretas que permitan identificar y evaluar competencias y habilidades de los candidatos.";
					PreguntaCampo.x = 100; PreguntaCampo.y = 360;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 463;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 455;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 531;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 6:
					Pregunta = "¿Sabes cuál de las siguientes redes sociales es la mejor opción en Colombia para encontrar un empleo?";
					RespuestaA = "Facejob.";
					RespuestaB = "Telegram.";
					RespuestaC = "LinkedIn.";
					RespuestaD = "Instagram.";
					Respuesta = "C";
					Justificacion = "Aunque en instagram puedes buscar perfiles para conseguir trabajo como “job tips”, LinkedIn es la red social laboral más importante y en ella puedes encontrar ofertas de trabajo de acuerdo a tu perfil e intereses. Otras páginas web que te serán de gran ayuda si estás buscando empleo son: Computrabajo, Zonajobs, trabajando colombia, Elempleo, Opcionempleo y el Portal de empleo del gobierno de Colombia.";
					PreguntaCampo.x = 110; PreguntaCampo.y = 360;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 7:
					Pregunta = "¿Cuál crees que es el orden de los datos que debe tener tu hoja de vida?";
					RespuestaA = "Estudios de colegio, estudios superiores, anexos y referencias personales.";
					RespuestaB = "Datos personales, perfil profesional y personal, experiencia laboral, estudios y referencias personales.";
					RespuestaC = "Datos personales, referencias personales, estudios de colegio y estudios superiores.";
					RespuestaD = "Experiencia laboral si aplica, estudios realizados, referencias personales y gustos o actividades adicionales. ";
					Respuesta = "B";
					Justificacion = "En una hoja de vida debes iniciar con tus datos personales y de contacto, un breve resumen de tu perfil y de lo que tienes para ofrecer como profesional y como persona. Luego se debe clasificar la información de la más reciente a la más antigua tanto en tu experiencia laboral si tienes, como en tus estudios. Basta con incluir una o dos referencias personales y tu foto si así lo deseas. Entre más concreta tu hoja de vida, mejor. También puedes usar plantillas de internet con diseños creativos, y no usar el formato anticuado de word.";
					PreguntaCampo.x = 120; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 463;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 455;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 538;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 532;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;

			}
		}

		if(Nivel == 2){
			switch (PreguntaAleatorio){
			case 0:
					Pregunta = "Cuando eres independiente no recibes pago de cesantías. ¿Qué harías para contar con dinero en caso de que dejes de recibir tus ingresos mensuales?";
					RespuestaA = "Solicitaría dinero prestado a mis familiares o amigos.";
					RespuestaB = "Solicitaría dinero prestado a un Banco.";
					RespuestaC = "Ahorraría en un fondo de cesantías de forma voluntaria las cuales me generan rendimientos.";
					RespuestaD = "Ahorraría una parte de mis ingresos desde el primer mes en una alcancía en mi casa.";
					Respuesta = "C";
					Justificacion = "Un trabajador independiente, al no percibir pagos de cesantías (dinero para el momento de quedar “cesante” es decir sin trabajo) puede ahorrar voluntariamente en un Fondo de Cesantías como Porvenir, para tener un colchón financiero en caso de dificultad laboral. La persona puede ahorrar  la doceava parte de sus ingresos anuales recibidos en el año anterior. Es decir, el equivalente a un mes de salario.";
					PreguntaCampo.x = 120; PreguntaCampo.y = 360;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 463;
					RespuestaBcampo.x = 440; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 538;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 538;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 1: 
					Pregunta = "¿Si eres empleado, sabes qué porcentaje es descontado mensualmente de tu sueldo para aportes obligatorios de pensión?";
					RespuestaA = "4%";
					RespuestaB = "8%";
					RespuestaC = "12%";
					RespuestaD = "No me descuentan, el pago lo asume mi empleador o empresa contratante.";
					Respuesta = "A";
					Justificacion = "El aporte obligatorio de pensión equivale al 16% sobre el sueldo del trabajador y lo asume tanto el empleador (o empresa contratante) con el pago del 12% como el empleado con el 4% restante.";
					PreguntaCampo.x = 110; PreguntaCampo.y = 360;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 538;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 2:
					Pregunta = "Las cajas de compensación familiar fueron creadas como instituciones que brindan bienestar a los trabajadores y sus familias. ¿Sabes qué porcentaje te descuentan de tu sueldo como empleado para el pago de la caja de compensación?";
					RespuestaA = "0,5%";
					RespuestaB = "0,8%";
					RespuestaC = "0,9%";
					RespuestaD = "No me descuentan, el pago lo asume mi empleador o empresa contratante.";
					Respuesta = "D";
					Justificacion = "El pago a caja de compensación familiar es asumido por el empleador o empresa contratante y corresponde al 4% del sueldo del empleado. Éste es uno de los 3 aportes llamados parafiscales. Los dos restantes corresponden a 2% al SENA y 3% al ICBF. ";
					PreguntaCampo.x = 110; PreguntaCampo.y = 350;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 538;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 3:
					Pregunta = "¿Sabes en qué casos puedes hacer uso de las cesantías además del momento de quedar “cesante” o desempleado?";
					RespuestaA = "En caso de fallecimiento de familiares hasta segundo grado de consanguinidad.";
					RespuestaB = "Estudios universitarios y en caso de compra o remodelación de vivienda.";
					RespuestaC = "En caso de ser reportado ante centrales de riesgo por falta de pago de cuotas crediticias.";
					RespuestaD = "Todas las anteriores.";
					Respuesta = "B";
					Justificacion = "De acuerdo al Ministerio de Trabajo las cesantías pueden ser retiradas en su totalidad en caso de desempleo, pero también se pueden retirar parcialmente en caso de compra de vivienda, terrenos o remodelaciones; también para casos de estudios de educación superior personal o para hijos y dependientes; para pago de impuesto predial y en caso de fallecimiento del cotizante. ";
					PreguntaCampo.x = 110; PreguntaCampo.y = 360;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 463;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 463;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 538;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 4:
					Pregunta = "La empresa que te va a contratar está obligada a pagar tu seguridad social siempre y cuando te hayas vinculado mediante un contrato de trabajo, uno de ellos es el contrato a término indefinido. ¿Sabes qué características tiene?";
					RespuestaA = "No tiene definida una fecha de terminación, acceso a beneficios especiales de la compañía, es el contrato que brinda mayor estabilidad.";
					RespuestaB = "Tiene definido el tiempo el cual vas a trabajar, acceso a beneficios de la compañía, es el contrato con mayor estabilidad. ";
					RespuestaC = "En este contrato el empleado puede definir la fecha hasta cuando va a trabajar, es inestable y no tiene acceso a pago de salud y pensión. ";
					RespuestaD = "Es un contrato temporal, se especifican las funciones y el tiempo que tiene para cumplirlas.  ";
					Respuesta = "A";
					Justificacion = "El contrato de trabajo indefinido se celebra sin establecer límite de tiempo en la prestación de los servicios. Este tipo de contrato ofrece por lo general estabilidad, compromiso y buenas condiciones laborales a los trabajadores, como acceso a fondo de empleados, beneficios especiales y pago de seguridad social (salud, pensión, cesantías, Seguro de accidentes laborales y caja de compensación familiar. ";
					PreguntaCampo.x = 100; PreguntaCampo.y = 360;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 455;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 455;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 531;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 538;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			
			}
		}

		if(Nivel == 3){
			switch (PreguntaAleatorio){
			case 0:
					Pregunta = "¿Sabes qué empleados tienen derecho a recibir dotación y auxilio de transporte?";
					RespuestaA = "Los que ganen menos de dos salarios mínimos mensuales vigentes.";
					RespuestaB = "Todos los empleados tienen derecho a dotación y auxilio de transporte.";
					RespuestaC = "Los vinculados mediante contrato por obra o labor.";
					RespuestaD = "Los que ganen más de dos salarios mínimos mensuales vigentes.";
					Respuesta = "A";
					Justificacion = "De acuerdo con lo establecido por el Ministerio del Trabajo, el subsidio de transporte y dotación solo se paga a los trabajadores que ganen hasta dos salarios mínimos mensuales.";
					PreguntaCampo.x = 140; PreguntaCampo.y = 360;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 463;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 463;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 537;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 537;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 1: 
					Pregunta = "¿Sabes a cuántos días de vacaciones tiene derecho un empleado?";
					RespuestaA = "20 días hábiles al año.";
					RespuestaB = "15 días hábiles cada 6 meses.";
					RespuestaC = "15 días hábiles cada año.";
					RespuestaD = "Son acordados con el empleador o empresa contratante.";
					Respuesta = "C";
					Justificacion = "De acuerdo con el Ministerio de Trabajo, un empleado puede disfrutar de 15 días de vacaciones continuos o interrumpidos luego de haber cumplido un año de contratación. Además de ser un beneficio, es obligatorio tomarlas, pues no se pueden acumular al paso de 2 años más. ";
					PreguntaCampo.x = 140; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 538;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 2:
					Pregunta = "¿Si trabajaste más de 8 horas al día, sabes si puedes solicitar un pago por las horas extras que trabajaste?";
					RespuestaA = "Sí, siempre y cuando las horas extras hayan sido pactadas con mi empleador y tengan su aprobación.";
					RespuestaB = "Sí, siempre y cuando no excedan más de dos horas extras diarias.";
					RespuestaC = "No, el pago de horas extras no está aprobado por el Ministerio de Trabajo.";
					RespuestaD = "No, es posible extenderse en la jornada laboral por funciones especiales y este costo lo asume el empleado.";
					Respuesta = "A";
					Justificacion = "Las horas extras son pactadas entre el empleado y el empleador o empresa contratante y deben ser pagadas siempre y cuando haya un acuerdo. El empleador no tiene la obligación de pagar horas extras a los empleados que por voluntad propia decidan extender su jornada de trabajo. El pago de cada hora, se realiza junto con el pago del salario y corresponde al 25% del valor de una hora ordinaria si las horas extras fueron en el día y el 35% si fueron en la noche. ";
					PreguntaCampo.x = 110; PreguntaCampo.y = 360;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 455;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 463;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 538;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 532;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 3:
					Pregunta = "¿Cuál de los siguientes crees que no es un contrato de trabajo?";
					RespuestaA = "Contrato a término fijo.";
					RespuestaB = "Contrato a término indefinido.";
					RespuestaC = "Contrato por obra o labor.";
					RespuestaD = "Contrato por prestación de servicios.";
					Respuesta = "D";
					Justificacion = "Al no haber una relación directa entre empleador y trabajador, el contrato por prestación de servicios es de carácter civil y no laboral, por lo tanto no está sujeto a la legislación de trabajo ya que no es considerado un contrato con vínculo laboral.";
					PreguntaCampo.x = 160; PreguntaCampo.y = 380;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 4:
					Pregunta = "¿Sabes de qué concepto estamos hablando con la siguiente definición?: “Pago adicional al empleado voluntariamente por parte de la empresa que lo contrata generalmente de forma anual”.";
					RespuestaA = "Cesantías.";
					RespuestaB = "Pensiones.";
					RespuestaC = "Prima extralegal.";
					RespuestaD = "Seguro laboral.";
					Respuesta = "C";
					Justificacion = "La prima extralegal es una prestación social que pueden disfrutar algunos o todos los empleados de una empresa dependiendo de las condiciones en las que se pacte; constituye un beneficio económico que se adiciona al pago del trabajador sin que signifique un  factor salarial.";
					PreguntaCampo.x = 110; PreguntaCampo.y = 360;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 470;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 470;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 545;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 545;
					JustificacionCampo.x = 420; JustificacionCampo.y = 200;
			break;
			case 5:
					Pregunta = "Los créditos de libranza tienen tasas de interés preferenciales y son exclusivos para empleados, ¿sabes por qué?";
					RespuestaA = "Porque el número de cuotas y el monto de cada una se acuerdan libremente.";
					RespuestaB = "Porque las cuotas son descontadas de tu cuenta de ahorros automáticamente cuando llega el pago de tu sueldo.";
					RespuestaC = "Porque el dinero es prestado directamente por el empleador o la empresa contratante.";
					RespuestaD = "Porque es un beneficio que decreta el Ministerio del Trabajo.";
					Respuesta = "B";
					Justificacion = "El crédito de libranza es un crédito dirigido a empleados y pensionados, el cual se descuenta mensualmente de tu nómina o mesada pensional según corresponda. Puedes utilizar un crédito de libranza para financiar cualquier tipo de proyecto.";
					PreguntaCampo.x = 100; PreguntaCampo.y = 360;
					RespuestaAcampo.x = 30; RespuestaAcampo.y = 463;
					RespuestaBcampo.x = 430; RespuestaBcampo.y = 455;
					RespuestaCcampo.x = 30; RespuestaCcampo.y = 538;
					RespuestaDcampo.x = 430; RespuestaDcampo.y = 538;
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