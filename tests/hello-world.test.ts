import { helloWorld } from '../src/hello-world';

test('defaults to "hello world"', () => {
  expect(helloWorld()).toBe('hello world');
});

test('`upperH` produces an uppercase H', () => {
  expect(helloWorld({ upperH: true })).toBe('Hello world');
});

test('`upperW` produces an uppercase W', () => {
  expect(helloWorld({ upperW: true })).toBe('hello World');
});

test('can combine uppercase options', () => {
  expect(helloWorld({ upperH: true, upperW: true })).toBe('Hello World');
});

test('`comma` puts a comma between the words', () => {
  expect(helloWorld({ comma: true })).toBe('hello, world');
});

test('`exclamation` puts an exclamation point on the end', () => {
  expect(helloWorld({ exclamation: true })).toBe('hello world!');
});

test('`newline` adds a newline to the end', () => {
  expect(helloWorld({ newline: true })).toBe('hello world\n');
});

test('can combine all options', () => {
  expect(
    helloWorld({
      upperH: true,
      upperW: true,
      comma: true,
      exclamation: true,
      newline: true,
    })
  ).toBe('Hello, World!\n');
});
