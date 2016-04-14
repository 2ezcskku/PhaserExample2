var myGame = {};

var sprite1;
var sprite2;
var sprite3;
var sprite4;

myGame.Boot = function(game) {};

myGame.Boot.prototype = {

	preload:function(){

		this.game.load.image('ball', 'images/ball.png');

	},
	create:function(){

		this.game.stage.backgroundColor = '#2d2d2d';

    	this.game.physics.startSystem(Phaser.Physics.ARCADE);

    //  Set the world (global) gravity
    	this.game.physics.arcade.gravity.y = 100;

    //  Sprite 1 will use the World (global) gravity
    	sprite1 = this.game.add.sprite(100, 96, 'ball');

    //  Sprite 2 is set to ignore the global gravity and use its own value
    	sprite2 = this.game.add.sprite(300, 96, 'ball');

    //  Sprite 3 will use both the world gravity and its own gravityScale modifier
    	sprite3 = this.game.add.sprite(500, 96, 'ball');

    //  Sprite 4 will ignore all gravity
    	sprite4 = this.game.add.sprite(700, 96, 'ball');

    // Enable physics on those sprites
    	this.game.physics.enable( [ sprite1, sprite2, sprite3, sprite4 ], Phaser.Physics.ARCADE);

    	sprite1.body.collideWorldBounds = true;
    	sprite1.body.bounce.y = 0.8;
    
    	sprite2.body.collideWorldBounds = true;
    	sprite2.body.bounce.y = 0.8;
    	sprite2.body.gravity.y = 200;
    
    	sprite3.body.collideWorldBounds = true;
    	sprite3.body.bounce.y = 0.8;
    	sprite3.body.gravity.y = 50;

    sprite4.body.allowGravity = false;

	},
	update:function() {


	},

	render:function (){

		this.game.debug.text('world gravity', sprite1.x - 32, 64);
    	this.game.debug.text('local gravity', sprite2.x - 32, 64);
    	this.game.debug.text('local / 2', sprite3.x - 32, 64);
    	this.game.debug.text('no gravity', sprite4.x - 32, 64);

	},


}