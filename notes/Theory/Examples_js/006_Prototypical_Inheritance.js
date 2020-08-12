// Class properties are bound using 'this'
// Class methods are bound(связанный) using 'prototype' object
// To inherit properties, use 'call' function passing 'this' object
// To inherit methods, use 'Object.create' to link prototypes of parent and child, e.g. Dog.prototype = Object.create(Animal.prototype);
// Always set child class constructor to itself for getting the right identity of its objects

var animalGroups = {
    MAMMAL: 1,
    REPTILE: 2,
    AMPHIBIAN: 3,
    INVERTEBRATE: 4
};
function Animal(name, type) {
    this.name = name;
    this.type = type;
}
var dog = new Animal('dog', animalGroups.MAMMAL);
var crocodile = new Animal('crocodile', animalGroups.REPTILE);

// add methods for a given class(function) like this
Animal.prototype.shout = function() {
    console.log(this.name + 'is ' + this.sound + 'ing...');
    // !!! There is no sound property in the class.
    // That is intended to be passed by the child classes who inherit above class.
};
// In JavaScript, inheritance is achieved like this.
function Dog(name, type) {
    Animal.call(this, name, type);
    this.sound = 'bow';
}
// instantiate
// var pet = new Dog('germanShepard', animalGroups.MAMMAL);
// console.log('pet', pet); // returns Dog {name: "germanShepard", type: 1, sound: "bow"}
// pet.shout(); // Throws error, To fix see below:

// inherit the parent class methods (to make 'shout' method available)
Dog.prototype = Object.create(Animal.prototype);
var pet = new Dog('germanShepard', animalGroups.MAMMAL);

pet.shout();
