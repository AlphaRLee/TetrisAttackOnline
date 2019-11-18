/*
	The main sketch of the program
	Following the tutorial written on react-p5-wrapper
	https://www.npmjs.com/package/react-p5-wrapper

	Transitioning from Processing to P5:
	https://github.com/processing/p5.js/wiki/Processing-transition
*/
export default function sketch(p) {
	p.setup = function() {
		p.createCanvas(600, 800); // createCanvas replaces the Java size() function
		// p.createCanvas(800, 800, p.WEBGL); // Enabling WebGL changes coordinate (0, 0) to center of sketch

		p.textSize(30);
	};

	p.draw = function() {
		p.background(0);

		p.fill(128);
		p.text(p.mouseX.toString() + ", " + p.mouseY.toString(), 100, 100);
	};
}
