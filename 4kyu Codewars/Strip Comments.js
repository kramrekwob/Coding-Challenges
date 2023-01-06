function solution(input, markers) {
    //join array together to input as a capturing group
    let x = markers.join('')
    //making capturing group
    let regex = new RegExp(`[${x}].+`, 'g');
    //replace those
    let phase1 = input.replace(regex, '')
    console.log(phase1)
    //replace all whitepsace before linebreaks with linebreaks
    let phase2 = phase1.replace(/\s+\n/g , '\n')
    //very last space gotta go
    return phase2.replace(/\s+$/g, '')
  };