function isIsogram(text){
    return new Set(text.toLowerCase()).size === text.length;
}