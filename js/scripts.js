// scripts.js

//looks stupid but they ask for two so one more to go
/* a block comment for entire script
var name = prompt('Enter your name');
// as instructed puttiun comment it alert line-     alert('Hello, ' + name);
// and final one finally-           console.log('Hello, ' + name);
*/

//script for task 8.5
/* block excluded for finishing 8.6
alert("Welcome to my page that will calculate area covered by a triangle of your choice just type in values and clap your hands while this 'state of the art' computer will perform this super complex operation...")
var	a = prompt ('type in base length'),
	h = prompt ('type in height'),
	triangleArea = a*h/2;
alert(triangleArea);
console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
*/
var a = prompt ('Type in value of a'),
	b = prompt ('Type in value of b'),
	value = (a * a) - (2 * a * b) + (b * b);

alert(value);

if (value > 0) {
    console.log('Positive');
} else if (value < 0) {
    console.log('Negative');
} else if (value == 0) {
    console.log('Looks like 0');
} else { console.log('That is no Math');
}



/*
if (value >= 0) {
    console.log(p);
} else if (value < 0) {
    console.log(n);
} else {
    console.log('no Math');
} 
*/