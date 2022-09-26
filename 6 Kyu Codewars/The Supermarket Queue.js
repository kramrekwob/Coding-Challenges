function queueTime(customers, n) {
    //initial array of 0 wait-time tills
    let arrayOfTills= new Array(n).fill(0);
    // loop through each customers wait time, add to tills based on minimum wait
    for (let waitTime of customers){
      //index of minimum wait till
      let minimumTill = arrayOfTills.indexOf(Math.min(...arrayOfTills))
      // add this wait time to that till
      arrayOfTills[minimumTill] += waitTime;
    }
    return Math.max(...arrayOfTills)
    }