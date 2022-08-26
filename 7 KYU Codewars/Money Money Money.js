function calculateYears(principal, interest, tax, desired) {
    //years 0
    let years=0;
    //while desired hasnt been met, calc new principal
   while (principal < desired) {
       let yearlyInterest = principal * interest;
     let totalTax = tax * yearlyInterest;
     principal = principal + yearlyInterest - totalTax;
     years++
   }
   return years;
 }