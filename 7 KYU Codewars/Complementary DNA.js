//establish empty return variable, case by case return complements 
function DNAStrand(dna){
    let result = '';
      for (i=0; i<dna.length; i++) {
        switch (dna[i]) {
          case 'A': 
          result = result + 'T';
          break;
          case 'T':
          result = result + "A";
          break;
          case 'C':
          result = result + 'G';
          break;
          case 'G':
          result= result + 'C';
          break;
        }
           
      } 
         return result;
    }