// Question 1

for (var i = 15; i <= 25; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}

// Question 2
function sentence() {
	console.log("I am a function");
}

var innerFunction = sentence;

function outerFunction(argument) {
	argument();
}

outerFunction(innerFunction);
