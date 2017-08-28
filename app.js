
var express = require('express');
var app = express();

app.get('/piglatin/:text', function (request, response){
  var sentence = request.params["text"];
  sentence = sentence.split("+")

  for (var i = 0; i < sentence.length; i++){
    let vowelWord = new RegExp('^[aeiou]', 'i');
    let consonantWord = new RegExp ('^[b-df-hj-np-tv-z]', 'i');
    let quWord = new RegExp('q$' && '^u', 'i');

  if(vowelWord.test(sentence[i])) {
    sentence[i] = sentence[i] + "way";
  }
  else if(consonantWord.test(sentence[i])) {
    while(consonantWord.test(sentence[i])){
      sentence[i] = sentence[i].substring(1) + sentence[i].substring(0, 1);
    }
    if(quWord.test(sentence[i])){
      sentence[i] = sentence[i].substring(1) + sentence[i].substring(0,1);
    }
    sentence[i] = sentence[i] + "ay";
  }
}
  response.send('Pig Latin: '+ sentence.join(" "));
});

app.get('/add', function (request, response){
  var number1 = parseInt(request.query.a);
  var number2 = parseInt(request.query.b);

  var number3 = number1 + number2

  response.send('your answer is: '+ number3);
});

app.get('/hello/reverse/:text', function (request, response){
  var text = request.params["text"];

  text2 = text.split("").reverse().join("")

  response.send("Hello " + text2 + ".  Welcome!");
});

app.get('/', function (request, response) {
  response.send('Hello World!');

});

app.listen(process.argv[2], function() {
    console.log('Example app ' + process.argv[2] + ' listening!');
});
