import lexAnalyze from "../dist/lexical_analyzer.js"

const smpl_corpus_input =
  "የገንዘብ፤ሚኒስቴር፤ም/ቤት፤ከሃያ፤ዓመታት፤በፊት፤ያወጣውን፤የተጨማሪ፤እሴት፤ታክስ(ቫት)፤አዋጅን፤የሚተካ፤ረቂቅ፤ተዘጋጀ። ረቂቅ  አዋጁ! መንግሥት ? ከቫት ታክስ የሚሰበስብበትን 'መሠረት ፩ የሚያሰፋ ስለሚሆን' ለውይይት ቀርቧል። ትምህት-ብት አና መስሪያ-ብት?"
const smpl_corpus_output =
  "የገንዘብ ሚኒስቴር ምክር ቤተ ከሃያ ዓመታት በፊት ያወጣውን የተጨማሪ እሴት ታክስ ቫት አዋጅን የሚተካ ረቂቅ ተዘጋጀ ረቂቅ አዋጁ መንግሥት ከቫት ታክስ የሚሰበስብበትን መሠረት የሚያሰፋ ስለሚሆን ለውይይት ቀርቧል ትምህት ብት አና መስሪያ ብት "

test("Separates words, expands abbreviations, removes numbers, breaks up hyphenated words, and removes punctuation from Amharic corpus", () => {
  expect(lexAnalyze(smpl_corpus_input)).toBe(smpl_corpus_output)
})
