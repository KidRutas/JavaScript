var a = ['a', 'b', 'c', 'd', 'e'];
var b = ' ';
for (let i = 0;i < a;i++) {
   b = a.shift;
   alert(a + ': ' + b);
}
