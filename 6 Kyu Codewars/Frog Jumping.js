function isValidChess960 (pieces) {
	let array = pieces.split('');
  let bishop1 = array.indexOf('B')
  let bishop2 = array.lastIndexOf('B')
  //bishop on same color
  if (bishop1%2 == bishop2%2) { console.log('bishop') ; return false};
  //rook on same side of king
  let king= array.indexOf('K')
  let rook1= array.indexOf('R')
  let rook2= array.lastIndexOf('R')
  if (king - rook1 > 0 && king - rook2 > 0) {console.log('rook'); return false}
  if (king - rook1 < 0 && king - rook2 < 0){console.log('rook2');return false}
  return true
}