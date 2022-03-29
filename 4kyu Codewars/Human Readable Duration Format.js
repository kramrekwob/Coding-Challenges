function formatDuration (seconds) {
    //annoying test case
    if (seconds===0) return "now";
    //initialize variables
    let sec, minute, hour, day, year =0;
    //seconds is purely a remainder
    sec = (seconds %60);
    //minute is seconds/60, round down to ignore the last 60s
    minute = Math.floor(seconds/60);
    //hour is minutes/60, round down to ignore last 60m
    hour =  Math.floor(minute/60);
    //change minute to display just the remainder
    minute = minute % 60;
    //day is hours/24, round down to ignore hours
    day= Math.floor(hour/24);
    //change hour to display just the remainder
    hour= hour %24;
      //year is days/365 no remainder
    year= Math.floor(day/365);
    day= day%365;
    //array of numbers needed to insert,
    let answerArray = [year, day, hour, minute, sec];
    //array of the phrases to join
    let strArray= [];
    let typeArray= ["year", "day", "hour", "minute", "second"];
    //this for loop will fill strArray with pluralized words
    for (let i=0; i<answerArray.length; i++) {
      if (answerArray[i]===1) {
      strArray.push('1 '+typeArray[i]);
        }
      else if (answerArray[i] >=2) {
        strArray.push(answerArray[i] + ' ' + typeArray[i] + 's')
        }
      }
    //this for loop will concatenate the strArray with commas and the word 'and'
    let answer = ''
    for(let j=0; j<strArray.length; j++) {
      if (j===strArray.length-2){
      answer += strArray[j] + ' and ' + strArray[j+1];
        break;
      }
     if (j !== strArray.length-1){
      answer += strArray[j] + ', ';
      }
      else 
      answer += strArray[0];
      
    
    }
    return answer;
    }
      