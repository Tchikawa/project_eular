var sum;
var target = [];

for (var i = 999; i > 100; i--) {
  for (var j = 999; j > 100; j--) {
    sum = String(i * j);
    if (sum.slice(0, 1) === sum.slice(5, 6) &&
      sum.slice(1, 2) === sum.slice(4, 5) &&
      sum.slice(2, 3) === sum.slice(3, 4)) {
      target.push(sum);
    }
  }
}

console.log(target.reduce((a,b) => Math.max(a,b)));
