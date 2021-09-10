let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
//remove the last string of the array
const remove = secretMessage.pop();
//checking the length of  the array
console.log(secretMessage.length);
// add the words to and Program
secretMessage.push('to', 'Program');
//Change the word easily to the word right
secretMessage[7]= 'right';
// remove the first string of the array
secretMessage.shift();
// add the string Programming to the beginning
secretMessage.unshift('Programming');
//remove the strings get, right, the, first, time,
secretMessage.splice(6, 10, 'know');
//using join to combine and print on console
console.log(secretMessage.join(' '));




