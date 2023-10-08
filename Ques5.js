function Triangle_check(A, B, C) {
    if (A <= 90 && B <= 90 && C <= 90)
        return 'acute';
    else if (A > 90 || B > 90 || C > 90)
        return 'obtuse';
    else
        return 'invalid';
}
console.log(Triangle_check(60, 100, 20));