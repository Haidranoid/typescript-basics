import {CsvReader} from './CsvReader'
import {MatchResult} from "./MatchResults";

let manUnitedWins = 0;
const reader = new CsvReader('resources/football.csv');
reader.read();


for (const match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(reader.data)
