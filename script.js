import { question } from 'readline-sync'
// 3.1
// let answer = question('Who are you?')
// console.log(answer)

// let answer2 = question('Where are you from?')
// console.log(answer2)

// 3.2

// let number = Number(question('Please enter a number?'))
// console.log(number)

// let secondNumber = Number(question('Another one'))
// console.log(secondNumber)

// let answer3 = number + secondNumber
// console.log(answer3)

//3.3

// let password = question('skriv in lösenordet')

// let repeat = question('skriv in lösenordet igen')

// if(repeat == password){
// console.log('correct')}

// else{
// console.log('incorrect')
// }

//3.4

// let number = question('skriv ett nummer')
// if (number=='100') {
// 	console.log('100 even')
// }
// else if (number<100) {
// 	console.log('less than 100')
// }
// else{

//     console.log('greater than 100')

// }

//3.5 a

// let secret = Math.floor(Math.random() * 100) + 1

// let guess = Number(question('Guess '));

//     if(guess == secret){
//         console.log('congratulations ' + secret + ' is correct')
//     }
//     else if(guess < secret){
//         console.log('Your guess is too low')
//     }
//     else{
//         console.log('Your guess is too high')
//     }
// console.log('Secret is: ' + secret)

//b

// let secret = Math.floor(Math.random() *100) + 1

// for(let i = 0; i < 10; i++){
//     let guess = Number(question('Guess '));

//     if(guess == secret){
//         console.log('congratulation ' + secret + ' is correct')
//     }
//     else if(guess < secret){
//         console.log('Your guess is too low')
//     }
//     else{
//         console.log('Your guess is too high')
//     }
// }
// console.log('Secret is: ' + secret)

//c

// let secret = Math.floor(Math.random() *100) + 1

// for( let i = 0; i < 10; i++){
// 	let guess = Number(question('Guess '));

// 	if(guess == secret){
// 		console.log('congratulations ' + secret + 'is correct you guessed in ' + [i]+ ' tries')
// 		break;
// 	}
// 	else if(guess < secret){
// 		console.log( 'Your guess is too low')
// 	}
// 	else{
// 		console.log('your guess is to high')
// 	}
// }
// console.log('Secret is: ' +secret)


//4.2

// let x, y, z

// z = 5;
// z++;
// z--;
// z +=15;
// x = 8; y = 16;  z = y - x;
// x = 10;  z = x++;
// x = 2;  y = 5;  x = x + y;  y = x + y;  z = y;


// console.log( x, y, z)


//5.1 a
// for( let count = 1; count <= 16; count = count + 1 ) {
// 	console.log (count)
// }

// let num = question( "Vilket tal ska vi sluta på?" )
// for( let count = 1; count <= num; count = count + 1 ) {
// 	console.log (count)
// }

//5.1 b


//5.2 FizzBuzz

// for( let count = 1; count <= 20; count = count + 1 ) {
// 	if ( count % 3 == 0 && count % 5 == 0 ) console.log ("FizzBuzz")
// 	else if (count % 3 == 0) {
// 		console.log ("Fizz")
// 	}
// 	else if (count % 5 == 0) {
// 		console.log ("Buzz")
// 	}
// 	else console.log (count)
// }

//5.3

// let ord = "";
// while (true) {
// 	let input = question("skriv ett ord:");
// 	if (input === "" || input ===".") {
// 		break;
// 	} else {
// 		ord +=` ${input}`;
// 	}
// }
// console.log (ord)

//5.4
// for( let count = 20; count >= 2; count = count - 2 )
// console.log(count)

// for( let count = 20; count >= 2; count = count - 1 )
// if (count % 2 === 0) {
// 	console.log(count)

// }

//5.5

// let number = question( "skriv ett tal")
// while (number >2) {
// 	if (number % 2 === 0) {
// 		number = number / 2;

// 	} else {number = (number * 3) + 1;

// 	}
// 	console.log(number)
// }

//5.6 a

// let text = ''
// for( let y=0; y<6; y++ ) {
//     for( let x=0; x<8; x++ ) {
//         if( (y + x) % 2 === 0)
//             text += '#'
//         else
//             text += '.'
//     }
//     text += '\n';
// }
// console.log(text);

// b

// let text = ''
// for( let y=0; y<6; y++ ) {
//     for( let x=0; x<8; x++ ) {
//         if(x == 0)
//             text += '#'
//         else
//             text += '.'
//     }
//     text += '\n';
// }
// console.log(text);
//

// c

// let text = ''
// for( let y=0; y<6; y++ ) {
//     for( let x=0; x<8; x++ ) {
//         if (y === x)
//             text += '#'
//         else
//             text += '.'
//     }
//     text += '\n';
// }
// console.log(text);

// d

// let text = ''
// for( let y=0; y<6; y++ ) {
//     for( let x=0; x<8; x++ ) {
//         if (x >1 && x<5 )
//             text += '#'
//         else
//             text += '.'
//     }
//     text += '\n';
// }
// console.log(text);

//e

// let text = ''
// for( let y=0; y<6; y++ ) {
//     for( let x=0; x<8; x++ ) {
//         if (y === 2 || x === 2)
//             text += '#'
//         else
//             text += '.'
//     }
//     text += '\n';
// }
// console.log(text);

//f

// let text = ''
// for( let y=0; y<6; y++ ) {
//     for( let x=0; x<8; x++ ) {
//         if (x === 4 || x + y === 5)
//             text += '#'
//         else
//             text += '.'
//     }
//     text += '\n';
// }
// console.log(text);

// g

// let text = ''
// for( let y=0; y<6; y++ ) {
//     for( let x=0; x<8; x++ ) {
//         if (y === x || x + y === 5)
//             text += '#'
//         else
//             text += '.'
//     }
//     text += '\n';
// }
// console.log(text);

// h

// let text = ''
// for( let y=0; y<6; y++ ) {
//     for( let x=0; x<8; x++ ) {
//         if (x % 2 === 0 )
//             text += '#'
//         else
//             text += '.'
//     }
//     text += '\n';
// }
// console.log(text);

// i

// let text = ''
// for( let y=0; y<6; y++ ) {
//     for( let x=0; x<8; x++ ) {
//         if ((y===1 || y===4 ) && x > 0 && x < 7)
//             text += '#'
// 			else if (( x===1 || x===6 ) && y > 0 && y < 5) {
// 			text += '#'
// 			}
//         else
//             text += '.'
//     }
//     text += '\n';
// }
// console.log(text);

// j??

// let text = ''
// for( let y=0; y<6; y++ ) {
//     for( let x=0; x<8; x++ ) {
//         if (x % 2 === 0 )
//             text += '#'
// 		else if (x % 3 === 0 )
//             text += '0'
//         else
//             text += '.'
//     }
//     text += '\n';
// }
// console.log(text);

// k??

// let text = ''
// for( let y=0; y<6; y++ ) {
//     for( let x=0; x<8; x++ ) {
//         if ( (x===2 || x === 5) && y < 3  )
//             text += '#'
// 		else if (y===4 && x % 2 === 0) {
// 			text += '#'
// 		}
// 		else if (y===5 && x % 2 === 0) {
// 			text += '#'
// 		}
//         else
//             text += '.'
//     }
//     text += '\n';
// }
// console.log(text);

// 6.1

// function f(x) {
//     return x * 2 + 1
// }
// function g(x, y) {
//     console.log(x + ', ' + y)
// }
// 1.5 Skriv om funktionerna som:
//1.5a Anonyma funktioner
// let f = function (x) {
//     return x * 2 + 1
// }
// let g = function (x, y) {
//     console.log(x + ', ' + y)
// }
//1.5b Arrow functions
// let f = x => x * 2 + 1;
// let g = (x, y) => console.log(x + ', ' + y);

// 6.2a + 2b*
// Skriv en funktion som tar tre parametrar: name, city och favoriteColor.  Den ska skriva ut informationen till konsolen i en fullständig mening. Exempel "Välkommen Namn från Göteborg med favvofärg blått". Skriv kod som anropar funktionen med lämpliga värden.

// let name = question('Vad är ditt namn?')
// let city = question('Vart bor du?')
// let favoriteColor = question('Vilken är din favoritfärg?')

// console.log("Valkommen " + name + " från " + city + " med favvofärg " + favoriteColor + "." )

// 6.3
// a Skriv en funktion med namnet add som lägger ihop två tal och returnerar resultatet.
// let sum = add(x, y)
// return (x, y)

// console.log('summan av 2 + 3 är' +  add(5, 4))

// b Skriv en funktion med namnet multi som multiplicerar tre tal och returnerar resultatet. Vad händer om man anropar funktionen med färre än tre parametrar?


//c Skriv en funktion som tar fyra tal som parametrar. Den ska multiplicera de tre första och lägga ihop resultatet med den fjärde. Använd funktionerna add och multi.

// 6.4 Skriv en funktion som tar en parameter, som ska vara en sträng, och returnerar ett tal. Om det inte går att göra om parametern till ett tal ska funktionen returnera strängen oförändrad.
// Varning! Alla jämförelser med NaN blir false. Man måste använda funktionen isNaN för att kontrollera ett värde. isNaN(NaN) === true
// Tips: Number() och NaN.

// 6.5 Skriv en funktion som tar två parametrar och talar om ifall de är samma datatyp.
// Tips: använd typeof.
// Exempel: sameDataType('test', 'topp') == true  men  sameDataType(5, '5') == false.

// 6* Skriv en funktion som avrundar ett tal till två decimaler, med hjälp av Math.round. (Dokumentation på MDN.) Den bästa lösningen använder inga andra funktioner.
// Tips: x * 100 / 100 === x.

// 7a Skriv en funktion med namnet paragraph, som tar en parameter. Den ska returnera en sträng enligt det här exemplet: paragraph('hej') == '<p>hej</p>'

// 7b Skriv en funktion med namnet tag, som tar två parametrar. Den ska returnera en sträng som ser ut som en HTML-tag. Exempel: tag('banan', 'content') === '<banan>content</banan>

// 9a Skriv en funktion som returnerar de tre första tecknen i en sträng. Använd funktionen substring(startindex, endindex), som plockar ut en del av en sträng. Exempel:
// 'programmering'.substring(0,3) === 'pro'
// 'programmering'.substring(3,7) === 'gram'

// function firstThree(str){
// 	return str.substring(0,3)
// }
// console.log(firstThree('abcdefg'))

// 9b Skriv en funktion som du kallar year som plockar ut året från en sträng i datumformat. Funktionen ska ta en parameter, som ska vara en sträng. Strängen ska alltid ha 10 tecken och följa mönstret 'YYYY-MM-DD'. Man ska kunna skriva year('2016-11-02') och få talet 2016 som resultat.

// function year(date){
// return date.substring(0,4)
// }
// const now = '2023-01-23'
// console.log('året är ' + year(now))
// 9c Skriv två funktioner med namnen month och day, som plockar ut månad respektive dag ur en datumsträng. Skriv med hjälp av dem en funktion med namnet daysBetween som räknar ut hur många dagar det är mellan två datum. Du kan förenkla funktionen genom att låtsas att alla månader har 30 dagar.
// Exempel: daysBetween('2017-08-30', '2017-09-02') == 4

// 10

// 11

// 12

// 13

// 14

// 7 Rekursion

// 1

// 2

// 3

// 4

// 8 Objekt

// 1a Skapa ett objekt som innehåller information om en stad. Det ska innehålla till exempel stadens namn, antal invånare, latitud och longitud, vilket land den finns i.

let city = {
name: 'Kristinehamn',
"numberOfCitizens": 24048,
latitude: '59°18′23″N',
longitude: '14°4′38″Ö',
country: 'Sweden',

print() {
        console.log(this.name, this.numberOfCitizens, this.latitude, this.longitude, this.country)
    }

}
console.log(city)

//1b Gör en funktion som heter move. När den anropas med objektet, ska den simulera att en person flyttar till en annna stad. Dvs antal invånare ska minskas med en.

function move(city) {

}

