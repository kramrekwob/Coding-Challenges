//Blaws October String challenges
// original string -  "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"
//day1
/*
'0' <-> 'O'      '5' <-> 'S'
'1' <-> 'I'      '6' <-> 'G'
'2' <-> 'Z'      '7' <-> 'L'
'3' <-> 'E'      '8' <-> 'B'
'4' <-> 'h'      '9' <-> 'q'

1st answer- wrong! it undoes itself. must use a cipher like day7
function swapNumbersAndLetters(string){
    return string.replace(/0/g,'O')
    .replace(/O/g,'0')
    .replace(/1/g,'I')
    .replace(/I/g,'1')
    .replace(/2/g,'Z')
    .replace(/Z/g,'2')
    .replace(/3/g,'E')
    .replace(/E/g,'3')
    .replace(/4/g,'h')
    .replace(/h/g,'4')
    .replace(/5/g,'S')
    .replace(/S/g,'5')
    .replace(/6/g,'G')
    .replace(/G/g,'6')
    .replace(/7/g,'L')
    .replace(/L/g,'7')
    .replace(/8/g,'B')
    .replace(/B/g,'8')
    .replace(/9/g,'q')
    .replace(/q/g,'9');
}
*/
function swapNumbersAndLetters(str){
    let originalLetters = "0O1I2Z3E4h5S6G7L8B9q";
    let answerLetters= "O0I1Z2E3h4S5G6L7B8q9";
return str.replace(/[0O1I2Z3E4h5S6G7L8B9q]/g, letter => answerLetters[originalLetters.indexOf(letter)]);
}
//day2 "e!!1gv)t5llt8cvbdeDH3dVw!00t1#Aa.2MDu7WYpP^VVjDc4150iv#yl4gmQfs"
       'e!!1gv)tSllt8cvbdeDHEdVw!00t1#Aa.2MDuLWYpP^VVjDch1SOiv#yl4gmQfs'
function fixTheString(string){
    let catIndex = string.indexOf('c');
    return string.slice(catIndex+1);}
function removeEek(string) { return string.replace(/Eek!/g, '')};
function reverse(string) { return string.split('').reverse().join('');}
//called  on the final string; "Split this string up on *lowercase* 'V'. The first character in each substring besides this first one is what you need to remember for tomorrow's task. vS.A-#IYbSEkiQS5Sn@tq!CcG;+:^myl%CJcWzUZ;vpZQP*nH1KA*GRFI+B/xHR:><%&4.zf*2+Ey0x-#Kci LGcoOz3XKA)SAZ/j>T3sT=~kVs !6=B_Yei~@5~Gn)Q?Q7zI4yqfgXeTsdi9ga43?w^oC~KMqw8i02WHHm%-0QdTBJEum%@R_?,dJk 2t5QmgZRN8xW$fQ@Ge>tub)Ep1YjX()dpD3ru1(Q<8m?vaotN<SqFz-7z8fDWj7s|=UR*E:/CYLzj*?K:uCUmhkASg8;H^/%<HU%>=hhPpLPdb|fBAMvcA=)#4HH=Q^4nVHx^w,!T<11M~RQ.iI7Xk?lbtc d35csP&k1Xk2zk87NF^w691a4_xuveA=)#4HH=Q^4nVHx^w,!T<11M~RQ.iI7Xk?lbtc d35csP&k1Xk2zk87NF^w691a4_xu"
function splitV(string) {return string.split('v')}

//"Split this string up on *lowercase* 'V'. The first…s what you need to remember for tomorrow's task. ", 'S.A-#IYbSEkiQS5Sn@tq!CcG;+:^myl%CJcWzUZ;', 'pZQP*nH1KA*GRFI+B/xHR:><%&4.zf*2+Ey0x-#Kci LGcoOz3…,dJk 2t5QmgZRN8xW$fQ@Ge>tub)Ep1YjX()dpD3ru1(Q<8m?', 'aotN<SqFz-7z8fDWj7s|=UR*E:/CYLzj*?K:uCUmhkASg8;H^/%<HU%>=hhPpLPdb|fBAM', 'cA=)#4HH=Q^4nVHx^w,!T<11M~RQ.iI7Xk?lbtc d35csP&k1Xk2zk87NF^w691a4_xu', 'eA=)#4HH=Q^4nVHx^w,!T<11M~RQ.iI7Xk?lbtc d35csP&k1Xk2zk87NF^w691a4_xu']
// S p a c e is the result
//day3
function replaceCharacters(string) { return string.replace(/[Space]/g, ' ');}
//day4  
        ' !!1gv)t llt8 vbd DHEdVw!00t1#A .2MDuLWY P^VVjD h1 Oiv#yl4gmQfs'
function reverse(string) { return string.split('').reverse().join('');}
//day5 'sfQmg4ly#vi0514 DjVV^P YW7uDM2. A#1t00!wVd3HD dbv 8tll5t)vg1!! '
//      sfQmg4ly#viO 1h DjVV^P YWLuDM2. A#1t00!wVdEHD dbv 8tll t)vg1!! 
        ' !!1gv)t llt8 vbd DHEdVw!00t1#A .2MDuLWY P^VVjD h1 Oiv#yl4gmQfs'
['The Pawshank Redemption', 'Caturday Night Live', 'Only Meworders in the Building', 'I Love Mewcy', ' Mewsummer Meowders', 'The Golden Purrs', ' Purrlandia ', 'Meowpardy', ' Meowstery Science Theater: Purrthousand', ' Amewican Idol', 'Dog City', 'Doctor Mew ', ' The Meowing Fed', 'Mew Peter', 'The Vicar of Dogley', ' Kittens', 'Meownton Abbey', 'Pets and the Kitty', 'Dogis and Bonehead', 'Pawlty Meowers ', 'The Meowpet Show', 'Barkos', 'The Catbert Purrport', 'The Pawffice', 'The Dogford Files', ' Battlestar Catlactica', 'Catlumbo', 'SpongeDog Squarepants', 'NYPD Mew ', 'Fluffy the Meowpire Purrer', 'The Inbemewners', 'Meowder She Wrote', 'Paw & Order', '30 Dog', ' Pawvatar: The Last Meowbender', 'The Pawnight Show', 'Arrested Dogvelopment', 'Furiends', 'Mewie', 'Curb Your Dogthusiasm', 'Teenage Mewtant Ninja Turtles', 'Phineas and Purrb', 'Paw Trek', ' Paw Trek: The Next Mewination', ' Twin Mewks', ' *C*A*T*S*', 'DogTales', ' Game of Bones', ' House of the Meowgon', 'The Purrlight Zone', 'Breaking Bone', 'The Meowre', 'The Dogpranos', 'The Rings of Meower', ' The KIT Crowd', 'Strangepaw Things ', 'Catman: The Animeowted Series', 'Meowter Call Saul', 'Mewgerton ', 'Obark', 'Mewphoria', 'La Casa de Pawpel', 'Rick & Meowty', 'Amewican Purror Story', ' Mewcifer', 'PawndaVision', 'Dogxter', 'The Meowndalorian', ' Dog Lasso', 'Bark', 'Meowdern Pawmily ', ' Meowtlander', 'Bone Mirror', 'Barks and Recreation', 'How to Get Away with Meowder', 'Boneland ', 'Meowther Ted', 'Mewtopia', 'Mewey', 'The Mewkie Meowse Doghouse', "Mewster Rogers' Neighborhood"]
function eliminatePuns(array) {
    let answerArray = [];
    let trimArray = [];
    let dogArray = [];
    let fiveArray = [];
    let codeAtArray = [];
    let middleArray = [];
    let lowerArray = [];
    let upperArray = [];
    let sArray = [];

    let dogRegEx = /(dog|bark|bone)/gi;

    for (let i = 0; i < array.length; i++) {
        let middleCharacterIndex = Math.ceil(array[i].length / 2);
        let lowerCaseCount = 0;
        let upperCaseCount = 0;
        let currentWord = array[i];
        //get counts of upper and lowercase for later evaluation
        for (let j = 0; j < array[i].length; j++) {
            if (currentWord[j].toLowerCase() == currentWord[j] && currentWord[j] !== currentWord[j].toUpperCase()) lowerCaseCount++;

            else if (currentWord[j].toUpperCase() == currentWord[j] &&
            currentWord[j] !== currentWord[j].toLowerCase()) upperCaseCount++;
        };
        if (currentWord.trim().length !== currentWord.length) {
            trimArray.push(currentWord);
        }
        else if (dogRegEx.test(currentWord)) {
            dogArray.push(currentWord);
        }
        else if ((currentWord.length) % 5 == 0) {
            fiveArray.push(currentWord);
        }
        else if ((currentWord.charCodeAt(0) + currentWord.charCodeAt(currentWord.length-1)) % 2 == 0) {
            codeAtArray.push(currentWord);
        }
        else if (currentWord.charAt(middleCharacterIndex) == 'e') {
            middleArray.push(currentWord);
        }
        else if (lowerCaseCount % 2 == 1) {
            lowerArray.push(currentWord);
        }
        else if (upperCaseCount < 2) {
            upperArray.push(currentWord);
        }

        else if (currentWord.includes("S")) {
            sArray.push(currentWord);
        }

        else answerArray.push(currentWord);


    }
    return [answerArray, trimArray, dogArray, fiveArray, codeAtArray, middleArray, lowerArray, upperArray, sArray];
}
//Teenage Mewtant Ninja Turtles', 'Rick & Meowty', "Mewster Rogers' Neighborhood
// final answer is 3
//day 6 
function replaceEveryLetter(string, number) {
    let stringArray = string.split('');
    let answerArray =[];
    for (let i=0; i<stringArray.length; i++){
        if ( (i+1) % number ==0 ) continue;
        else answerArray.push(stringArray[i])
    }
    return answerArray.join('');
};

//day7 'sfmglyvi 1 DVVP WLDM. #100wVEH dv tl tvg!!'
function inverseAlphabet(str) {
        let alphabet="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let ciphered= "ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba"
      return str.replace(/[a-z]/gi, letter=>ciphered[alphabet.indexOf(letter)] )
}

//'HUNTOBER 1 week down. #100Devs WE GO GET!!' final answer!!

