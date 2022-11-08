function bouncingBall(h,  bounce,  window) {
    if (h<0 || bounce < 0 || bounce >= 1 || window >= h) return -1;
    let sights= 0;
    
    while (window < h) {
      sights ++;
      h = bounce * h;
      if (h > window) sights++;
    }
    return sights;
      
  }