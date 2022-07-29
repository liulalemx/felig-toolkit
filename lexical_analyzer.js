// Separates words, expands abbreviations, removes numbers, breaks up hyphenated words, and removes punctuation

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

function lexAnalyze(corpus) {
  // Remove abbreviations
  for (const key in common_amh_abbreveations) {
    let regex = new RegExp(`${key}`);
    corpus = corpus.replace(regex, `${common_amh_abbreveations[key]}`);
  }

  corpus = corpus
    .replace(/[.\?"',/#!$%^&*;:፤።{}=\-_`~()]/g, " ")
    .replace(/[.፩፪፫፬፭፮፮፰፱፲፳፴፵፵፷፸፹፺፻0123456789]/g, " ")
    .replace(/\s{2,}/g, " ");

  return corpus;
}

export default lexAnalyze;

// console.log(smpl_corpus);
// console.log(analyze(smpl_corpus));
