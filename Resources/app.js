var win = Ti.UI.createWindow({
	backgroundColor : 'white',
	modal	: true
});

var button = Ti.UI.createButton({
	title	: 'Open New Window',
	width	: 300,
	height	: 45
});

win.add(button);

win.addEventListener('click', _openNewWindow);

win.open({
	modalTransitionStyle : Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL	//Flip horizontal animation
	
});


function _openNewWindow(event){
	var Window = require('ui/handheld/ApplicationWindow');
	var musicWin = new Window();
	musicWin.open({
		modalTransitionStyle : Ti.UI.iPhone.MODAL_TRANSITION_STYLE_PARTIAL_CURL //Half cover flip animation
	});
}
