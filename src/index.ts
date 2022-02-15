import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { Summary } from "./Summary";

const csvReader = new CsvFileReader('soccer.csv');
const matchReader = new MatchReader(csvReader);
matchReader.load();

const summary1 = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
summary1.buildAndPrintReport(matchReader.matches);

const summary2 = Summary.winsAnalysisWithHtmlReport('Liverpool');
summary2.buildAndPrintReport(matchReader.matches);
