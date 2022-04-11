function telephoneCheck(str) {
//MUST reject ex. 1 (800 555 5555 or 1 800) 555 5555 so use OR |
    let regex= /^1?[\s-]?(\d{3}|\(\d{3}\))[\s-]?(\d{3})[\s-]?(\d{4})$/
    
      return regex.test(str);
    }

    telephoneCheck("555-555-5555");
    