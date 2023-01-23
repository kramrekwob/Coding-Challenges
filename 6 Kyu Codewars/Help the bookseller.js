function stockList(listOfArt, listOfCat) {
  let answer = [];
  if (listOfArt == '') return '';
  for (let i = 0; i < listOfCat.length; i++) {
    let total = 0;
    for (let j = 0; j < listOfArt.length; j++) {

      if (listOfArt[j].charAt(0) == listOfCat[i]) total += +(listOfArt[j].split(' ')[1])
    }
    answer.push(`(${listOfCat[i]} : ${total})`)
  }
  return answer.join(' - ');
}