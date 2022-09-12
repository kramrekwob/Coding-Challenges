var greet = function(name) {
    let lowerName= name.toLowerCase();
    let properName= lowerName[0].toUpperCase() + lowerName.slice(1);
    return 'Hello ' + properName + "!"
    };
// simple one-line would be return `Hello ${name.slice(0,1).toUpperCase()}${name.slice(1).toLowerCase()}!`;
//