function domainName(url){
    //your code here
  let answer= url;
  answer= answer.replace("http://www.", "");
  answer =answer.replace("http://", "");
  answer =answer.replace("www.", "");
  answer =answer.replace("https://", "");
  answer = answer.substring(0, answer.indexOf("."));
    return answer;
  }