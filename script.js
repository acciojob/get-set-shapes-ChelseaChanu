//complete this code
class Rectangle {
	constructor(width,height){
		this.width = width;
		this.height = height;
	}

	get getWidth(){
		return this.width;
	}

	get getHeight(){
		return this.height;
	}

	getArea(){
		return this.width * this.height;
	}
}

class Square extends Rectangle {
	constructor(width){
		super(width,width);
	}
	
	getPerimeter(){
		return this.width * 4;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
