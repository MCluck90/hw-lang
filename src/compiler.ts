import { HelloWorldOptions } from './hello-world';

export const compiler = (source: string): HelloWorldOptions => ({
  comma: source.includes('c'),
  exclamation: source.includes('e'),
  newline: source.includes('n'),
  upperH: source.includes('H'),
  upperW: source.includes('W'),
});
