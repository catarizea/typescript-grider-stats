import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { Summary } from "./Summary";

const csvReader = new CsvFileReader('soccer.csv');
const matchReader = new MatchReader(csvReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
