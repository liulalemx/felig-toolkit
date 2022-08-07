import stem from "./stemmer.js";
import transliterate from "./transliterator.js";
import lexAnalyze from "./lexical_analyzer.js";
import rmvStopwrd from "./stopword_remover.js";

const testWords = [
  "ልጅ",
  "የልጅ",
  "ልጆች",
  "ልጆቻችን",
  "ልጆቻቸው",
  "ልጆቻቸውን",
  "ቤቶች",
  "ውል",
  "ጎረቤቶቻችን",
  "ፈለገ",
  "ፈለገችው",
  "ፈላለገ",
  "ሰዳደበ",
  "ቀዳደደ",
  "ሸፋፈነ",
  "ቅጠል",
  "ቅጠሎች",
  "ቅጠላቅጠል",
  "ወጣወጥ",
  "ስለማይለወጥ",
  "ተበላ",
  "ተፈላለገ",
  "ተመካከረ",
  "ትቢተኛነት",
  "ተፎካከረ",
  "ተመሳሰለ",
  "ተስተካከለ", //special case, what has T as prefix?
  "ተንከባከበ", //special case
  "መስተካከል", //special case
  "መንከባከብ",
  "ጠቢብ",
  "ጠባብ",
  "ትምህርት",
  "በኢትዮጵያ",
  "የኢትዮጵያ",
];

const testWordsForOneStem = [
  "ወንበር",
  "ወንበሬ",
  "ወንበርህ ",
  "ወንበርሽ ",
  "ወንበሩ ",
  "ወንበሯ",
  "ወንበራችን ",
  "ወንበራችሁ",
  "ወንበራቸው ",
  "ወንበሮች",
  "ወንበሮቼ",
  "ወንበሮችህ",
  "ወንበሮችሽ",
  "ወንበሮቹ",
  "ወንበሮቿ",
  "ወንበሮቻችን ",
  "ወንበሮቻችሁ",
  "ወንበሮቻቸው ",
];

const smpl_corpus =
  "የገንዘብ፤ሚኒስቴር፤ም/ቤት፤ከሃያ፤ዓመታት፤በፊት፤ያወጣውን፤የተጨማሪ፤እሴት፤ታክስ(ቫት)፤አዋጅን፤የሚተካ፤ረቂቅ፤ተዘጋጀ። ረቂቅ  አዋጁ! መንግሥት ? ከቫት ታክስ የሚሰበስብበትን 'መሠረት ፩ የሚያሰፋ ስለሚሆን' ለውይይት ቀርቧል። ትምህት-ብት አና መስሪያ-ብት?";

function testTransliterator() {
  testWords.every(function (word) {
    let trans_word = transliterate.felig_transliterate(word, "am");
    console.log("Input: " + word);
    console.log("Output: " + trans_word);
    return true;
  });
}

function testStemmer() {
  testWords.every(async function (word) {
    let stem_word = await stem(word);
    console.log("Input: " + word);
    console.log("Output: " + stem_word);
    return true;
  });
}

function testLexicalAnalyzer() {
  let tokens = lexAnalyze(smpl_corpus);
  console.log("Input: " + smpl_corpus);
  console.log("Output: " + tokens);
}

function testStopwordRemover() {
  let tokens = lexAnalyze(smpl_corpus);
  let cleanCorpus = rmvStopwrd(tokens);
  console.log("Input: " + smpl_corpus);
  console.log("Output: " + cleanCorpus);
}

testStemmer();
// testTransliterator();
// testLexicalAnalyzer();
// testStopwordRemover();

const felig_toolkit = {
  stem,
  transliterate,
  lexAnalyze,
  rmvStopwrd,
};

// console.log(transliterate.felig_transliterate("ጓ", "en"));

export default felig_toolkit;
