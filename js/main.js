var testOne = "What kind of variable am I?";
// testone is an object

var testTwo = 256;
// testTwo is a number with a value of 256

var testThree = false;
// testThree is a boolean with a value of 0

var testFour = 'true';
// testFour is a string with a single quote

var testFive = '128';
// testFive is a string with a value of 128

var testSix = "";
// testSix is a string with a value of ""



var testOne = "hello" + "there";
// testOne is a string with a value of "hellothere"

var testTwo = "100" + 28;
// testTwo is a string with a value of 10028

var testThree = true + 3;
// testThree is a boolean and a number which adds up to 4

var testFour = 'false' + 5;
// testFour is a single quote string and a number which adds up to "false5"

var testFive = '128' - 3;
// testFive is a string with a value of 125

var testSix = "" * 9;
// testSix consists of a string with a value of "" and a number with a value of 9 which equates to 0

var testSeven = "zero" - 1;
// testSeven consists of a string with no value and number with a value of 1 which equates to NaN (Not-a-Number)

var testEight = 'five'.length;
// testEight consists of a string with a value of "five" and a length property which equates to 4

var testNine = 'five'[0] + 'ever';
// testnine contains two strings with the first one at a value of 0 = f and the next one a value of 'ever' which gives "fever"

var testTen = 'a' > 'b';
// testTen contains two booleans 'a' and 'b' and they are both objects thus can't be compared so it brings back false

var testEleven = 'number'.length < 7;
// testEleven is a boolean that contains a string of 'number' with a length element and a number 7 and this equates to true

var testTwelve = '12' == 12;
// testTwelve is a boolean that contains a string with a value of 12 and a number with a value of 12 and the boolean is true because they have the same value

var testThirteen = 'twelve' == 12;
// testThirteen is a boolean that contains a string with no value and number with a value of 12 and the boolean is false because they both don't have the same value

var testFourteen = '14' === 14;
// testFourteen is a boolean that contains a string with a value of 14 and number with a value of 14 but the boolean is false because they have the same value but the different data types

var testFifteen = 'Hi there'[0] + 'open sesame'[2] + 'alohamora'[1] + 'eulalia'[4] + 'harkonnen'[4] + 'BATMAN!'[6];
// testFifteen contains 6 strings that return a new string with the string methods and the new string is "Hello!" 

var string1 = "Hello, "; // expect it to be string1 = "Hello" + "," + " "

var string2 = "my name is "; // string2 = "my" + " " + "name" + " " + "is" + " "

var string3 = "Kingsley pappagiorgio."; // string3 = "Kingsley" + " " + "pappagiorgio" + "."

var combinedStrings = string1 + string2 + string3; // var Strings = ["string1", "string2", "string3"]

console.log(combinedStrings); // var combinedStrings = string1 + string2 + string3

var num1 = 8; // 8

var num2 = 52; // 52

var num3 = 60; // 60

var combinedNumbers = num1 + num2 + num3; // 120

console.log(combinedNumbers); // 120

var mixedNum1 = 10; // 10

var mixedString1 = "ten"; // "ten"

var mixedNum2 = "10"; // "10"

var mixedConcatenation = mixedNum1 + mixedNum2 + mixedString1; // "1010ten"

console.log(mixedConcatenation); // 1010ten

var num4 = 5; // 5

var num5 = 0; // 0

if(num4 > 1) {
	console.log("Num4 is greater than 1");
} // Num4 is greater than 1

else {
	console.log("Num4 is NOT greater than 1");
} // Num4 is not greater than 1

var num4 = 5; // 5

var num5 = 0; // 0

if(num4 < num5 || num4 === num5) {
	console.log("If statement ran!");
} else if (num5 === "0" || true) {
	console.log("Else if statement ran");
} else {
	console.log("Else statement ran");
}; // Else if statement ran

var num4 = 5;
var num5 = 0;
if(num4 > num5 && num4 === num5) {
	console.log("If statement ran!");
} else if (num5 === "0" || true) {
	console.log("Else if statement ran");
} else {
	console.log("Else statement ran!");
}; // else if statement ran

var string1 = "this is a string";
for(var i = 0; i < string1.length; i = i + 1) {
	console.log(i, string1[i]);
}; // "t" "h" "i" "s" " " "i" "s" " " "a" " " "s" "t" "r" "i" "n" "g"

var string2 = "coding";
var total = 0;
for(var i = 0; i < string2.length; i++) {
	total = total + i;
};
console.log(total);

var string3 = "onomatopoeia";
for(var i = 0; i < string3.length; i++) {
	if(string3[i] == "o") {
		console.log(i, string3[i]);
	};
};

var string4 = "You're gonna need a bigger boat.";
for(var i = 0; i < string4.length; i++) {
	if(string4[i] == "a" || string4[i] == "e" || string4[i] == "i" || string4[i] == "o" || string4[i] == "u") {
		console.log(string4[i]);
	};
};

function testStuff(a,b) {
	if(a > 25 && b < 100) {
		console.log(a + " is greater than 25 and " + b + " is less than 100");
	} else {
		console.log(a + " is NOT greater than 25 or " + b + " is NOT less than 100");
	};
};
testStuff(10, 101);
testStuff(26, 99);
testStuff(100, 25);

function testStuff(c, d) {
	if(c == 25) {
		return c + " is equal to 25";
	} else if (d <= 100) {
		return d + " is less than or equal to 100";
	} else {
		return "Neither if nor else if statement ran";
	};
};
testStuff(26, 101);
testStuff(25, 99);
testStuff(102, 24);

function countVowels(someString) {
	var vowels = 0;
	for(var i = 0; i < someString.length; i++) {
		if(someString[i] == "a" || someString[i] == "e" || someString[i] == "i" || someString[i] == "o" || someString[i] == "u") {
			
			vowels ++:
		};
	};

	return vowels;
};
countVowels("I am the very model of a modern major general");
countVowels("Exeunt pursued by a bear");
countVowels("o1234567891o");

