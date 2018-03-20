//Initial setup
function setup(){
	PaintCanvas('');	
	CreateButton('test');
}

//used to draw animations
function draw(){}

//paints the canvas when specified a color
function PaintCanvas(MyColor) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	if (MyColor == '') {
		MyColor = 'green';
	}
	ctx.fillStyle = MyColor;
	ctx.fillRect(10, 10, 100, 100);
}

//creates a random number
function random(number) {
  return Math.floor(Math.random()*(number+1));
}

//Paints canvas when button is pressed
function ButtonPainter() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  PaintCanvas(rndCol);
}

function CreateButton(Name){
	if (Name == '') {Name = 'Default';}
	
	//create the button
	var button = document.createElement("button");
	var t = document.createTextNode("Change Color JS");
	button.appendChild(t);
	
	//append to the HTML page
	//var MyElement = document.body;
	var MyElement = document.getElementById('JSbutton');
	MyElement.appendChild(button);
	
	//Add an event
	button.addEventListener ("click", function() {
		ButtonPainter();
	});
	
}