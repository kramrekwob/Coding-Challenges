

Solution
F
1
function getGrade (s1, s2, s3) {
2
  let average = (s1+s2+s3)/3;
3
if (average>=90) return 'A'
4
else if (average>=80) return 'B'
5
else if (average>=70) return 'C'
6
else if (average>=60) return 'D'
7
else return 'F'
8
}