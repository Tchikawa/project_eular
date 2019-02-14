var number = 1000;
var answer = 0;

for (var i = 1; i < number; i++) {
  if (i % 3 === 0 || i % 5 === 0) answer += i;
}

console.log(answer);
