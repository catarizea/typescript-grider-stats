import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

const reader = new MatchReader('soccer.csv');
reader.read();

let manUnitedWins = 0;

for (let row of reader.data) {
  if (row[1] === 'Man United' && row[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (row[2] === 'Man United' && row[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
