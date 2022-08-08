import stem from "./stemmer.js";
import transliterate from "./transliterator.js";
import lexAnalyze from "./lexical_analyzer.js";
import rmvStopwrd from "./stopword_remover.js";

const felig_toolkit = {
  stem,
  transliterate,
  lexAnalyze,
  rmvStopwrd,
};

export default felig_toolkit;
