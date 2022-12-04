function dup(s) {
    function eliminateDups(string) {
      return string.split('').filter((letter, index) => letter !== string[index-1]).join('')
    }
    return s.map(eliminateDups)
  };