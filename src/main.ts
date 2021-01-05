#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { compiler } from './compiler';
import { helloWorld } from './hello-world';

let contents = '';
if (process.argv.length > 2) {
  const filename = process.argv[2];
  contents = fs.readFileSync(path.join(process.cwd(), filename), 'utf-8');
} else {
  try {
    contents = fs.readFileSync(process.stdin.fd, 'utf-8');
  } catch {
    console.error('Must provide a file or over stdin');
    process.exit(1);
  }
}

const options = compiler(contents);

process.stdout.write(helloWorld(options));
