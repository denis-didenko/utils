// ES5
var Animal = (function () {
	function MyConstructor(name) {
		this.name = name;
	}

	MyConstructor.prototype.speak = function speak() {
		console.log(this.name + ' makes a noise.');
	};

	return MyConstructor;
})();

var animal = new Animal('animal');
animal.speak();

// ES6
class Animal {
	constructor(name) {
		this.name = name;
	}

	speak() {
		console.log(this.name + ' makes a noise.');
	}
}

const animal = new Animal('animal');
animal.speak();
