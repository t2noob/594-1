function rand() {
  return Math.floor(Math.random() * 1000);
}

function f1() {
  console.log('f1 starts');
  setTimeout(function() {
    console.log('f1 ends');
  }, rand());
}

function f2() {
  console.log('f2 starts');
  setTimeout(function() {
    console.log('f2 ends');
  }, rand());
}

function f3() {
  console.log('f3 starts');
  setTimeout(function() {
    console.log('f3 ends');
  }, rand());
}

function onEnd() {
  console.log('f1, f2 and f3 have ended.');
}

/* 
  PROBLEM:
  
  Figure out a way to run f1, f2 and f3 to completion before
  running onEnd.  Do this without modifying f1, f2, f3, and onEnd.
  
  Replace the following code with something that works.
  Do not modify anything above this comment.
*/

f1();
f2();
f3();
onEnd();
