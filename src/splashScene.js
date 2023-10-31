
class SplashScene extends Phaser.Scene {
	constructor() {
		super({key : 'SplashScene', active:false})
		this.splashTextStyle = {font:'40px Arial', fill: '#555555', align:'center'};
		this.splashText = null;
		this.centerX = null;
		this.centerY = null;
		//for checking time for switching the scene
		this.totalTime = 0
		this.screenHeight = null;
		this.screenWidth = null;
	}

	init(data) {
		this.cameras.main.setBackgroundColor('#efefef');
	}

	preload() {
		console.log("SplashScene");
		// this.load.image('splashSceneBackground', './assets/splashSceneImage.png');
	}

	create(data) {
	    // Get the center position of the game screen
	    this.centerX = this.cameras.main.width / 2;
	    this.centerY = this.cameras.main.height / 2;
	    this.screenWidth = this.scale.displaySize.width;
	    this.screenHeight = this.scale.displaySize.height;
	    // if the screen is a mobile phone screen in potrait mode
	    if(this.screenWidth/this.screenHeight <= 0.6) {
	    	this.splashTextStyle.font = '30px Arial'
	    }
		this.splashText = this.add.text(0,0,'Wrecking Balls', this.splashTextStyle);
		this.splashText.setPosition(this.centerX - this.splashText.width/2, this.centerY - this.splashText.height/2);
        this.splashText.setStroke('#de77ae', 7);

        //  Apply the shadow to the Stroke only
        this.splashText.setShadow(2, 2, '#333333', 2, true, true);
	}

	update(time, delta) {

		// window.setTimeout(() => this.scene.start('MenuScene'), 2000);
		this.totalTime = this.totalTime + delta

		if(this.totalTime > 1000) {
			this.totalTime = 0
			this.scene.switch('MenuScene');
		}
		
	}

}

export default SplashScene;