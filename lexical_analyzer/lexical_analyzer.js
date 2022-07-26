// Separates words, expands abbreviations, removes numbers, breaks up hyphenated words, and removes punctuation

const smpl_corpus =
  "የገንዘብ፤ሚኒስቴር፤ከሃያ፤ዓመታት፤በፊት፤ያወጣውን፤የተጨማሪ፤እሴት፤ታክስ(ቫት)፤አዋጅን፤የሚተካ፤ረቂቅ፤ተዘጋጀ። ረቂቅ  አዋጁ! መንግሥት ? ከቫት ታክስ የሚሰበስብበትን 'መሠረት ፩ የሚያሰፋ ስለሚሆን' ለውይይት ቀርቧል። ትምህት-ብት አና መስሪያ-ብት?";

function analyze(corpus) {
  corpus = corpus
    .replace(/[.\?"',/#!$%^&*;:፤።{}=\-_`~()]/g, " ")
    .replace(/[.፩፪፫፬፭፮፮፰፱፲፳፴፵፵፷፸፹፺፻]/g, " ")
    .replace(/\s{2,}/g, " ");
  return corpus;
}

console.log(smpl_corpus);
console.log(analyze(smpl_corpus));
// add abbreviation expander
