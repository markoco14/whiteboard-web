

<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js"></script>
<script>

//format the display buttons

			function displayButton(col, x, y) {
				fill(col);
				ellipseMode(CENTER);
				ellipse(x, y, 40, 40);
				if (dist(x, y, mouseX, mouseY) < 40/2 && mouseIsPressed) {
					selectedColor = col;
				}
			}
			// set up our canvas on the page

			function setup() {
				createCanvas(800, 400);
				background(255, 255, 255);
			}
			// define our variables
			let colors = ['red', 'green', 'blue', 'black', 'white'];
			let selectedColor = 'red';
			// define our draw function
			function draw() {
				// make grey side bar
				fill(150,150,150);
				rect(0,0, 50, 400);
				// make mousePressed painting function
				if (mouseIsPressed) {
				noStroke();
				fill(selectedColor);
				ellipse(mouseX,mouseY,20,20);	
				}
				// draw out the paint color selectors
				for (var i = 0 ; i < colors.length ; i++){
					var color = colors[i];
					displayButton(color, 25, 100+i*50);

				}
			}

			
		</script>