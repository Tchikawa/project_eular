var answer = 0;
var max = 4000000;
var fibonacci = [1, 2];

while (fibonacci.slice(-1)[0] <= max) {
  fibonacci.push(fibonacci.slice(-1)[0] + fibonacci.slice(-2)[0]);
}

for (var num of fibonacci) {
  if(num % 2 === 0) answer += num
}

console.log(answer);
