//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = ( source ) => {

  const colors = [ 'black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white' ];

  let first = colors.indexOf( source[ 0 ] );
  let second = colors.indexOf( source[ 1 ] );
  let result = '' + first + second;

  return +result;

};