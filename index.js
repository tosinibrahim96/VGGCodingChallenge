function processData(input) {
  const inputArray = input.split('');
  let arrayLength = inputArray.length;
  if (arrayLength % 2 !== 0) {
    console.log(0);
  } else {
    const valueInMiddle = arrayLength / 2;
    for (i = 0; i < valueInMiddle; i++) {
      if (
        input.charCodeAt(inputArray[arrayLength]) -
          input.charCodeAt(inputArray[i]) >
        2
      ) {
        console.log(0);
        break;
      }
      arrayLength--;
    }
    console.log(1);
  }
}

process.stdin.resume();
process.stdin.setEncoding('ascii');
_input = '';
process.stdin.on('data', function(input) {
  _input += input;
});

process.stdin.on('end', function() {
  processData(_input);
});
