// Question 1
var name = "Jamal";

// Question 2
var person = {
	name: Zekiye,
	age: 29,
};

// Question 3
var outOfStock = true;

if (outOfStock === true) {
	console.log("Out of stock");
} else {
	console.log("In stock");
}

// Question 4
var numbers = [1, 2, 3, 4, 5];

for (var i = 1; i <= numbers.length; i++) {
	console.log(i);
}

// Question 5
for (var i = 15; i <= 25; i++) {
	console.log(i);
}

// Question 6
for (var i = 15; i <= 25; i++) {
	if (i === 20) {
		console.log(i);
	}
}

// Question 7
var dog = [
	{
		breed: "Austrailan Cobberdog",
		age: 3,
		isAPuppy: false,
	},
	{
		breed: "Labrador",
		age: 1,
		isAPuppy: true,
	},
];

for (var i = 0; i < dog.length; i++) {
	console.log(dog[i].age);
	console.log(dog[i].isAPuppy);
}

// Question 8
function whatIDontLike(foodType) {
	console.log("I don't like " + foodType);
}

whatIDontLike("pizza");

// Question 9
function subtractNumbers(number1, number2) {
	var sum = number1 - number2;
	console.log(sum);
}

subtractNumbers(10, 3);

// Question 10
var dogArray = [];

function animals(dog1) {
	dogArray.push(dog1);
	console.log(dog1);
}
animals("Bulldog");
