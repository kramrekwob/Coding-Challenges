function cakes(recipe, available) {
    //array for each ingredient
    let maxPerIngredientArray= [];
    for (let keys in recipe){
      
      let individualIngredientMax = available[keys] / recipe[keys];
      maxPerIngredientArray.push(Math.floor(individualIngredientMax));
      //if none available of a specific ingredient, can't make any return 0
      if (!available[keys]) return 0;
    }
    //return the limiting ingredient passing in array with spread operator
    return Math.min(...maxPerIngredientArray);
  }