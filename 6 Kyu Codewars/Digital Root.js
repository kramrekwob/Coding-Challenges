function digital_root(n) {
    //refactored for shortcut with root
          let root = 0;
     
          while (n > 0 || root > 9)
          {
              if (n == 0) {
                  n = root
                  root=0;
              }
                 
              root += n % 10;
              n = parseInt(n / 10, 10);
          }
          return root;
      }