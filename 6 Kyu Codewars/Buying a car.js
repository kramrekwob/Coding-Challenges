function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    let months = 0;
    let savings = 0;
    let equity = startPriceOld;
    let totalMoney = startPriceOld;
    let neededMoney = startPriceNew;
    let loss = percentLossByMonth;
    //until there is enough money to buy the car, update the variables per moneth
    while (totalMoney < neededMoney){
      //equity is worth less 
      equity *= (1-loss/100);
      //needed money is less
      neededMoney *= (1-loss/100)
      //rate of depreciation increases by .5 every two months
      if (months%2===0)loss += 0.5;
      //savings goes up by 1000
      savings += savingperMonth;
      //reassign totalMoney to equity plus savings
      totalMoney = equity + savings;
      //months increases
      months++
      console.log(equity, neededMoney, loss, savings, totalMoney, months)
    }
    let remainder = Math.round(totalMoney - neededMoney);
    return [months, remainder]
  }