import stem from "./stemmer/stemmer.js";
import transliterate from "./transliterator/transliterator.js";

// const word = "ልጅ"; // An Amharic noun
// const word = "የልጅ";
// const word = "ልጆች";
// const word = "ልጆቻችን";
// const word = "ልጆቻቸው";
// const word = "ልጆቻቸውን";
// const word = "ቤቶች";
// const word = "ውል";
// const word = "ጎረቤቶቻችን";
// const word = "ፈለገ";
// const word = "ፈለገችው";
// const word = "አስፈለገችው";
// const word = "ፈላለገ";
// const word = "ሰዳደበ";
// const word = "ቀዳደደ";
// const word = "ሸፋፈነ";
// const word = "ቅጠላቅጠል";
// const word = "ወጣወጥ";
// const word = "ትቢተኛነት"; ?special case, what has T as prefix?
const word = "ስለማይለወጥ";

let stem_word = stem(word);

console.log("Input: " + word);
console.log("Output: " + stem_word);

// add infix
// min length?
// update sera transliterator
// make async
// optimize
//lexical analizer
//Stopword remover
// fe lale ge
// se dade be
// ke dade de
// Se fafe ne
