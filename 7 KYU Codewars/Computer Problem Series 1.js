function save(sizes, hd) {
    let total = 0
    for (i=0; i<sizes.length; i++){
      total= total + sizes[i];
       if (total > hd) break;}
    
    return i;
  }