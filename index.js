const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  return tutorials.map((tutorial) => {
      title = title.split(' ');
      
      title.forEach(function (word, i, title) {
        title[i] = word[0].toUpperCase() + word.slice(1);
      });
      
      // for (let word of tutorial) { 
      //   word = word[0].toUpperCase() + word.slice(1);
      // }
      
      return title.join(' ');
    });
}

numbers.forEach(myFunction)

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}
