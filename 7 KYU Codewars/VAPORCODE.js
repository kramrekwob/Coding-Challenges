function vaporcode(string) {
    return string.toUpperCase().replace(/\s/g, "").split("").join("  ");
  ///uppercase everythiing, replace all spaces globally with nothing, split each character into an array,
    //and  finally join in between each part of each space of the array with two spaces so that the end doesnt have any
  }