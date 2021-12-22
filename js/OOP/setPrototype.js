Rabbit.prototype.__proto__ = Animal.prototype;
// or like this:
Rabbit.prototype = Object.create(Animal.prototype);
