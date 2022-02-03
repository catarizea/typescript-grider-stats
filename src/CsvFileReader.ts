import { readFileSync } from 'fs';
import path from 'path';
import { DataReader } from './DataReader';

export class CsvFileReader implements DataReader {
  data: string[][] = [];
  constructor(public filename: string) { }

  read(): void {
    this.data = readFileSync(path.join(__dirname, this.filename), {
      encoding: 'utf-8'
    })
      .split('\n')
      .map((row: string): string[] => row.split(','));
  }
}
