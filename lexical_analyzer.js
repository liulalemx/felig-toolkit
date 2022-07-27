// Separates words, expands abbreviations, removes numbers, breaks up hyphenated words, and removes punctuation

const smpl_corpus =
  "የገንዘብ፤ሚኒስቴር፤ም/ቤት፤ከሃያ፤ዓመታት፤በፊት፤ያወጣውን፤የተጨማሪ፤እሴት፤ታክስ(ቫት)፤አዋጅን፤የሚተካ፤ረቂቅ፤ተዘጋጀ። ረቂቅ  አዋጁ! መንግሥት ? ከቫት ታክስ የሚሰበስብበትን 'መሠረት ፩ የሚያሰፋ ስለሚሆን' ለውይይት ቀርቧል። ትምህት-ብት አና መስሪያ-ብት?";
const common_amh_abbreveations = {
  "ት/ቤት": "ትምህርት ቤት",
  "ት/ርት": "ትምህርት",
  "ት/ክፍል": "ትምህርት ክፍል",
  "ሃ/አለቃ": "ሃምሳ አለቃ",
  "ሃ/ስላሴ": "ሃይለ ስላሴ",
  "ደ/ዘይት": "ደብረ ዘይት",
  "ደ/ታቦር": "ደብረ ታቦር",
  "መ/ር": "መምህር",
  "መ/ቤት": "መስሪያ ቤት",
  "መ/አለቃ": "መቶ አለቃ",
  "ክ/ከተማ": "ክፍለ ከተማ",
  "ክ/ሀገር": "ክፍለ ሀገር",
  "ወ/ር": "",
  "ወ/ሮ": "ወይዘሮ",
  "ወ/ሪት": "ወይዘሪት",
  "ወ/ስላሴ": "ወልደ ስላሴ",
  "ፍ/ስላሴ": "ፍቅረ ስላሴ",
  "ፍ/ቤት": "ፍርድ ቤት",
  "ጽ/ቤት": "ጽህፈት ቤት",
  "ሲ/ር": "",
  "ፕ/ር": "ፕሮፌሰር",
  "ጠ/ሚንስትር": "ጠቅላይ ሚኒስተር",
  "ዶ/ር": "ዶክተር",
  "ገ/ገዮርጊስ": "",
  "ቤ/ክርስትያን": "ቤተ ክርስትያን",
  "ም/ስራ": "",
  "ም/ቤት": "ምክር ቤተ",
  "ተ/ሃይማኖት": "ተክለ ሃይማኖት",
  "ሚ/ር": "ሚኒስትር",
  "ኮ/ል": "ኮሎኔል",
  "ሜ/ጀነራል": "ሜጀር ጀነራል",
  "ብ/ጀነራል": "ብርጋደር ጀነራል",
  "ሌ/ኮለኔል": "ሌተናንት ኮለኔል",
  "ሊ/መንበር": "ሊቀ መንበር",
  "አ/አ": "ኣዲስ ኣበባ",
  "ር/መምህር": "ርዕሰ መምህር",
  "ፕ/ት": "",
  ዓም: "ዓመተ ምህረት",
  "ዓ.ዓ": "ዓመተ ዓለም",
};

function analyze(corpus) {
  // Remove abbreviations
  for (const key in common_amh_abbreveations) {
    let regex = new RegExp(`${key}`);
    corpus = corpus.replace(regex, `${common_amh_abbreveations[key]}`);
  }

  corpus = corpus
    .replace(/[.\?"',/#!$%^&*;:፤።{}=\-_`~()]/g, " ")
    .replace(/[.፩፪፫፬፭፮፮፰፱፲፳፴፵፵፷፸፹፺፻]/g, " ")
    .replace(/\s{2,}/g, " ");

  return corpus;
}

console.log(smpl_corpus);
console.log(analyze(smpl_corpus));
// add abbreviation expander
