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

