const mySqrt = function(x) {
    let result = 1;
    while (result*result <= x) result++;
    return result - 1;
};
// O sqrt(N) complexity