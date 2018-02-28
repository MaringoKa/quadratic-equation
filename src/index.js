module.exports = function solveEquation(equation) {
  // your implementation
    str = equation.replace(/[,.!?:;"\(\)]/g," ");
    str = equation.replace(/\s\-\s/g," ");
    str = equation.replace(/\s+/g," ");
    //console.log(str);

    var arr = equation.split(' ');
    var a = parseInt(arr[0]);

    var b1 = parseInt(arr[4]);
    var b2 = parseInt(arr[3]+1);
    var b = b1*b2;

    var c1 = parseInt(arr[8]);
    var c2 = parseInt(arr[7]+1);
    var c = c1*c2;

    var d = (b*b)-(4*a*c);

    var x1 = (-b+Math.sqrt(d))/(2*a);
    var x2 = (-b-Math.sqrt(d))/(2*a);

    x1=Math.round(x1);
    x2=Math.round(x2);

    var arr2 = [];
    arr2.push(x1,x2);

//console.log(arr);

    return arr2.sort((a,b) => a-b);
}
