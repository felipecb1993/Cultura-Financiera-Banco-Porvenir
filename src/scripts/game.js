import 'phaser'
import '@babel/polyfill'

import Victoria from './scenes/Victoria'
import Derrota from './scenes/Derrota'
import Nivel1 from './scenes/Nivel1'
import Nivel1Aux from './scenes/Nivel1Aux'
import Nivel1Inicio from './scenes/Nivel1Inicio'
import Nivel1InicioAux from './scenes/Nivel1InicioAux'
import Descripcion from './scenes/Descripcion'
import Formulario from './scenes/Formulario'
import Inicio from './scenes/Inicio'


    const config = {
        type: Phaser.AUTO,
        backgroundColor: '#000000',  
        scale: {
            parent: 'phaser-game',
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: 800,
            height: 600,
            max: {
                width: 800,
                height: 600
            }
        },
        dom: {
        createContainer: true
        },
        scene: [Inicio, Formulario, Descripcion, Nivel1Inicio, Nivel1InicioAux, Nivel1, Nivel1Aux, Derrota, Victoria],
    };

window.addEventListener('load', () => {
  const game = new Phaser.Game(config)
})