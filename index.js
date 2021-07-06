const cantHear = "I can't hear you!";
const yesIndeed = "YES INDEED!"
const ilytoo = "I love you, too.";

function shout(string) {
  return string.toUpperCase();
} 

function whisper(string) {
  return string.toLowerCase();
} 

function logShout(string) {
  console.log(string.toUpperCase());
} 

function logWhisper(string) {
  console.log(string.toLowerCase());
} 

function sayHiToGrandma(string) {
  if (string == string.toLowerCase()) {
    return cantHear;
  } else if (string == string.toUpperCase()) {
    return yesIndeed;
  } else if (string == "I love you, Grandma.") {
    return ilytoo;
  }
} 