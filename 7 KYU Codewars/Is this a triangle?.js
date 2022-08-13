function isTriangle(a,b,c)
{if (a+b<=c) return false;
 if (b+c<=a) return false;
 if (a+c<=b) return false;
else return true;
}