import startButtonImg from './assets/start.png';
import selectAudio from './assets/select.ogg';


class MenuScene extends Phaser.Scene {
	constructor() {
		super({key : 'MenuScene', active:false})
		this.menuSceneBackgroundImage = null;
		this.textStyle = {font:'35px Arial', fill: '#555555', align:'center'};
		this.fontHeadMobile = '30px Arial'
		this.fontBodyMobile = '15px Arial'
		this.screenHeight = null;
		this.screenWidth = null;
	}

	init(data) {
		this.cameras.main.setBackgroundColor('#cccccc')
	}

	preload() {
        var progress = this.add.graphics();
        this.load.setPath('sprites');
        this.load.on('progress', function (value) {

            progress.clear();
            progress.fillStyle(0xffffff, 1);
            progress.fillRect(0, window.screen.height/2, window.screen.width * value, 60);

        });

        this.load.on('complete', function () {

            progress.destroy();

        });
		console.log("MenuScene");
		this.load.image('startButton', startButtonImg)
		this.load.audio('selectSound',selectAudio)
	}

	create(data) {
	    this.screenWidth = this.scale.displaySize.width;
	    this.screenHeight = this.scale.displaySize.height;

		const startButton = this.add.sprite(0,0, 'startButton');
		// this.startButton = this.add.sprite(0,0, 'startButton');
		startButton.x = this.scale.displaySize.width/2;
		startButton.y = this.scale.displaySize.height/2;
		startButton.setScale(this.scale.displaySize.width/(1000));
		console.log(startButton);

		startButton.setInteractive({useHandCursor:true});
		startButton.on('pointerdown', () => this.clickButton())
		this.textStyle.wordWrap = {width : 0.9*this.screenWidth}
	    // if the screen is a mobile phone screen in potrait mode
	    if(this.screenWidth/this.screenHeight <= 0.6) {
	    	this.textStyle.font = this.fontHeadMobile
	    }
		const wellMessage = this.add.text(0,0,"Welcome\nTo The Wrecking Balls",this.textStyle)
		wellMessage.x = this.scale.displaySize.width/2 - wellMessage.width/2;
		wellMessage.y = startButton.y - wellMessage.height - 100;
        wellMessage.setStroke('#de77ae', 7);
        wellMessage.setShadow(2, 2, '#333333', 2, true, true);

        const howTitle = this.add.text(0,0,"How To Play :",this.textStyle)
		howTitle.x = 10;
		howTitle.y = this.screenHeight/1.5 - wellMessage.height/2;
		let howContent = [
			'- Click the Left Mouse Button To Shoot The Ball',
			'- Move the mouse left and right to move the pan',
			'- Press Space Bar to pause the game',
			'- Enjoy !!!'
		]
		this.textStyle.font = '20px Arial'
	    // if the screen is a mobile phone screen in potrait mode
	    if(this.screenWidth/this.screenHeight <= 0.6) {
	    	this.textStyle.font = this.fontBodyMobile
	    	howContent = [
				'- Tap on the screen To Shoot The Ball',
				'- Control the pan with your touch, left and right',
				'- Enjoy !!!'
	    	]
	    }
		this.textStyle.align = 'left'
		const howContentText = this.add.text(0,0,howContent,this.textStyle)
		howContentText.x = 10;
		howContentText.y = howTitle.y + howTitle.height + 10;
	}

	update(time, delta) {

	}
	clickButton() {
		console.log("Start Menu");
		this.sound.play('selectSound');
		this.scene.switch('GameScene');
	}

}

export default MenuScene;