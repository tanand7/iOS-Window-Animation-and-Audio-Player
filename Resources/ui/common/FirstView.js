//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView({
		layout  : 'vertical'
	});
	var player = Ti.Media.createSound({url:"Sounds/Music.mp3"});
	
	var playButton = Ti.UI.createButton({
		title : 'Play Music',
		width	: 200,
		height  : 45,
		top		: '25%'
	});
	
	self.add(playButton);
	
	playButton.addEventListener('click', _playMusic);

	var stopButton = Ti.UI.createButton({
		title : 'Stop Music',
		width	: 200,
		height  : 45,
		top		: '10%'
	});
	
	self.add(stopButton);
	
	stopButton.addEventListener('click', _stopMusic);
	
	return self;
	
	function _playMusic (event) {
	  	if(player.playing){
			player.pause();
			playButton.title = 'Play Music';
		} else {
			player.play();
			playButton.title = 'Pause Music';
		}
	}
	
	function _stopMusic(event){
		if(player.playing){
			player.stop();
			playButton.title = 'Play Music';
		} else {
			alert("No music playing");
		}
		
	}
}

module.exports = FirstView;
