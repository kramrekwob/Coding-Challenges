function orderWeight(strng){
    //helper function to break down a single number into its weight
    const sum = (str) => str.split('').reduce((sum, el) => (sum + (+el)), 0);
    //helper function to compare two numbers
    function compare (a,b) {
        let sumA= sum(a);
        let sumB= sum(b);
        //in the case their sums are equal must compare alphabetically using localecompare
        return sumA===sumB ? a.localecompare(b): sumA- sumB;
    }
    return strng.split(' ').sort(comp).join(' ');
}