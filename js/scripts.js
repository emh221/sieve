var possiblePrimes = [];
var primeMultiples = [];
var primes = [];
var newArray = [];



var primes = [];
var primeMultiples = [];
var newArray = [];
 function sieve() {

   var maxNumber = (possiblePrimes.length + 1);

   for (var prime = 2; prime <= maxNumber; prime ++) {
      primes.push(prime);
    }

    for (var multiple = 2; (multiple * 2)  <=  maxNumber; multiple ++) {
      primeMultiples.push(multiple * 2);
    }

    primeMultiples.forEach(function(primeMultiple) {
      var newArray = possiblePrimes.slice(primeMultiple - 2, 1)
			console.log(newArray)
    });


 }



$(document).ready(function() {
  $("form#prime").submit(function(event){

    event.preventDefault();

    var number =  parseInt($("input#numberinput").val());

    listNumbers(number);

    sieve();

    console.log(possiblePrimes);

    console.log(primes);

    console.log(primeMultiples);
  });
});
