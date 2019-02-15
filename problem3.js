var originalTarget = 600851475143;
var target = originalTarget;
var i = 2;

for(var i = 2; i < target; i ++){
  while (target % i === 0) {
    target = target / i
  }
}

console.log(target);
