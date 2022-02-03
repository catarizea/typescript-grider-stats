import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

const csvReader = new CsvFileReader('soccer.csv');
const matchReader = new MatchReader(csvReader);
matchReader.load();

let manUnitedWins = 0;

for (let row of matchReader.matches) {
  if (row[1] === 'Man United' && row[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (row[2] === 'Man United' && row[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
