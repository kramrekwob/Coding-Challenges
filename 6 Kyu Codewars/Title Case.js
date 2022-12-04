function titleCase(title, minorWords) {
  if (title == '') return '';
  //convert to lower case for ease

  title = title.toLowerCase();
  let titleArray = title.split(' ')
  titleArray[0] = title[0][0].toUpperCase() + titleArray[0].slice(1)
  console.log(titleArray)
  let wordArray = [];
  if (minorWords) wordArray = minorWords.toLowerCase().split(' ');
  //split each word, pass helper function in
    function helper(x) {
    if (wordArray.includes(x));
    else x = x[0].toUpperCase() + x.slice(1)
    return x;
  };

  return titleArray.map(x => helper(x)).join(' ');

}