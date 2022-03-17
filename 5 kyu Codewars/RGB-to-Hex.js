function rgb(r, g, b){
    //weird test case for negative numbers
  if (r < 0)
  r="00";
  if (g < 0)
  g="00";
  if (b < 0)
  b="00";
  //weird test case above 255
  if (r>255)
  r=255;
  if (b>255)
  b=255;
  if (g>255)
  g=255;
    //convert from digits to hexadecimal
   r= r.toString(16);
  g= g.toString(16);
    b= b.toString(16);
    //need to add 0's due to the rules
    if (r.length==1)
      r= "0"+r;
    if (g.length==1)
      g="0"+g;
    if (b.length==1)
      b="0"+b;
  r=r.toUpperCase();
  g=g.toUpperCase();
  b=b.toUpperCase();
  return r+g+b;
  }