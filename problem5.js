const max = 20;
var answer = 20;

while (true) {
  var isDivisible = true;
  for(i=2; i<=max -1; i++) {
    if(answer % i !== 0) {
      isDivisible = false
      break;
    }
  }
  if(isDivisible){
    break;
  }
  answer += max
}

console.log(answer);
