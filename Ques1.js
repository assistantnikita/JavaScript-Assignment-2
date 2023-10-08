function findGrades(M)
{
 switch(true)
 {
    case(M<=10):
    return "E";
    case(11>=M<=20):
     return 'D';
    case(21>=M<=30):
    return 'C';
    case(31>=M<=40):
    return 'B';
    case(41>=M<=50):
    return 'A';
}
}
console.log(findGrades(1));