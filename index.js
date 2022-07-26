import stem from "./stemmer/stemmer.js";
import transliterate from "./transliterator/transliterator.js";

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
  "ቅጠላቅጠል",
  "ወጣወጥ",
  "ስለማይለወጥ",
  "ተበላ",
  "ተፈላለገ",
  "ተመካከረ",
  "ትቢተኛነት", //special case, what has T as prefix?
  "ተስተካከለ", //special case
  "ተንከባከበ", //special case
  "መስተካከል", //special case
  "መንከባከብ", //special case
];

function testStemmer() {
  testWords.every(async function (word) {
    let stem_word = await stem(word);
    console.log("Input: " + word);
    console.log("Output: " + stem_word);
    return true;
  });
}

testStemmer();

//lexical analizer
//Stopword remover
// fe lale ge
// se dade be
// ke dade de
// Se fafe ne
