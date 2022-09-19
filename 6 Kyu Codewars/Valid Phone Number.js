function validPhoneNumber(phoneNumber){
    console.log(phoneNumber)
    if (phoneNumber.length>14) return false
    let answerReg = /\(\d\d\d\)\s\d\d\d-\d\d\d\d/
    return phoneNumber.search(answerReg) == 0
  }