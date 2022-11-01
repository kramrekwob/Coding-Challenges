function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce((acc,x) => acc + x, 0)/classPoints.length < yourPoints
  }
  