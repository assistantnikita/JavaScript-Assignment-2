function Max_out_of_three(A, B, C) {
    if (A === B && B === C) {
        return -1;
    } else {
        return Math.max(A, B, C);
    }
}
var num1 = 2;
var num2 = 5;
var num3 = 4;
var maxNumber = Max_out_of_three(num1, num2, num3);
console.log(maxNumber);
