function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    if (enteredCode !== correctCode) return false;
    let today = new Date(currentDate);
    let exp = new Date(expirationDate);
    if (today > exp) return false;
    return true;
  }