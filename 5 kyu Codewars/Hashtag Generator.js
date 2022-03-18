function generateHashtag (str) {
    //return false for empty
    if(str.replace(/\s/g,"") == "") return false;
    var hashtag= "#";
    function capitalize (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    var wordArray = str.split(' ');
    var uppercaseWord = wordArray.map(capitalize).join('');
    if (uppercaseWord.length>139) return false;
    
    return '#'+ uppercaseWord
  }