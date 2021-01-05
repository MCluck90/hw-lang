export interface HelloWorldOptions {
  comma?: boolean;
  exclamation?: boolean;
  newline?: boolean;
  upperH?: boolean;
  upperW?: boolean;
}

export const helloWorld = ({
  comma,
  exclamation,
  newline,
  upperH,
  upperW,
}: HelloWorldOptions = {}): string => {
  let output = '';
  if (upperH) {
    output = 'Hello';
  } else {
    output = 'hello';
  }

  if (comma) {
    output += ', ';
  } else {
    output += ' ';
  }

  if (upperW) {
    output += 'World';
  } else {
    output += 'world';
  }

  if (exclamation) {
    output += '!';
  }

  if (newline) {
    output += '\n';
  }

  return output;
};
