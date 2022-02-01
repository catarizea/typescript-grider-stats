import { readFileSync } from 'fs';
import path from 'path';

export abstract class CsvFileReader<CsvData> {
  data: CsvData[] = [];
  constructor(public filename: string) { }

  abstract mapRow(row: string[]): CsvData;

  read(): void {
    this.data = readFileSync(path.join(__dirname, this.filename), {
      encoding: 'utf-8'
    })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow);
  }
}
