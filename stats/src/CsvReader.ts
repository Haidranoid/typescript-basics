import fs from 'fs';
import {dateStringToDate} from "./utils";
import {MatchResult} from "./MatchResults";

type MatchData = [Date, string, string, number, number, MatchResult, string]

export class CsvReader {
    data: MatchData[] = [];
    filename: string;

    constructor(filename: string) {
        this.filename = filename;
        this.data = [];
    }

    read() {
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map(row => row.split(','))
            .map((row): MatchData => {
                return [
                    dateStringToDate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4]),
                    row[5] as MatchResult, // 'H', 'A', 'D'
                    row[6]
                ]
            })
    }
}