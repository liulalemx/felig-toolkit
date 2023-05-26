import stem from "./stemmer.js"
import transliterate from "./transliterator.js"
import lexAnalyze from "./lexical_analyzer.js"
import rmvStopwrd from "./stopword_remover.js"
import indexer from "./indexer.js"
import weigh_terms from "./term_weighter.js"

const felig_toolkit = {
  stem,
  transliterate,
  lexAnalyze,
  rmvStopwrd,
  indexer,
  weigh_terms,
}

export default felig_toolkit
