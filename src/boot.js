import * as Phaser from 'phaser';

import MenuScene from './menu.js';
import GameScene from './gameScene.js';
import SplashScene from './splashScene.js';

// our game scene
// const menuScene = new MenuScene();
// const gameScene = new GameScene();
// const splashScene = new SplashScene();
// const leaderBoardScene = new LeaderBoardScene();

    var game = null;

    console.log('boot')

    var config = {
        type: Phaser.AUTO,
        scale: {
        mode: Phaser.Scale.FIT,
        parent: 'game-container',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: '80%',
        height: '100%',
        },
        backgrounColor: 0xff0000,
        scene: [SplashScene, MenuScene, GameScene],
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 },
                debug: false,
            }
        },
    };
	game = new Phaser.Game(config);


	// game.scene.add('menuScene', menuScene);
	// game.scene.add('gameScene',gameScene);
	// game.scene.add('splashScene',splashScene);

	// start title
	game.scene.start('SplashScene');

export default game;