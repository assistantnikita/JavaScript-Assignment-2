function find2ndsmallest(X,Y,Z)
{
   if(X>Y)
   {
    if(X>Z)
    {
        return Y > Z? Y:Z;
    }
    else
    {
        return X;
    }
   }
   else{
    if(Y>Z)
    {
        return X>Z?X:Z;
    }
    else{
        return Y;
    }
   }
}
console.log(find2ndsmallest(2,9,23));