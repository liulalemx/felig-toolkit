// Takes Amharic language nouns and produces a stem
// Amharic noun ->
// ልጆች -> ልጅኦች -> ljoc -> lj -> ልጅ
import transliterate from "../transliterator/transliterator.js";

const suffix_list =
  "ኢዕኧልኧሽ|ኣውኢው|ኣችኧውኣል|ኧችኣት|ኧችኣችህኡ|ኧችኣችኧው|ኣልኧህኡ|ኣውኦች|ኣልኧህ|ኣልኧሽ|ኣልችህኡ|ኣልኣልኧች|ብኣችኧውስ|ብኣችኧው|ኣችኧውን|ኣልኧች|ኣልኧን|ኣልኣችህኡ|ኣችህኡን|ኣችህኡ||ኣችህኡት|ውኦችንንኣ|ውኦችን|ኣችኧው|ውኦችኡን|ውኦችኡ|ኧውንኣ|ኦችኡን|ኦውኦች|ኧኝኣንኧትም|ኧኝኣንኣ|ኧኝኣንኧት|ኧኝኣን|ኧኝኣውም|ኧኝኣው|ኝኣውኣ|ብኧትን|ኣችህኡም|ኦውኣ|ኧችው|ኧችኡ|ኤችኡ|ንኧው|ንኧት|ኣልኡ|ኣችን|ክኡም|ክኡት|ክኧው|ኧችን|ኧችም|ኧችህ|ኧችሽ|ኧችን|ኧችው|ይኡሽን|ይኡሽ|ኧውኢ|ኦችንንኣ|ኣውኢ|ብኧት|ኦች|ኦችኡ|ውኦን|ኧኝኣ|ኝኣውን|ኝኣው|ኦችን|ኣል|ኧም|ሽው|ክም|ኧው|ትም|ውኦ|ውም|ውን|ንም|ሽን|ኣች|ኡት|ኢት|ክኡ|ኤ|ህ|ሽ|ኡ|ሽ|ክ|ኧ|ኧች|ኡን|ን|ም|ንኣ|ው";
const prefix_list =
  "ስልኧምኣይ|ይኧምኣት|ዕንድኧ|ይኧትኧ|ብኧምኣ|ብኧትኧ|ዕኧል|ስልኧ|ምኧስ|ዕይኧ|ዕኧስ|ዕኧት|ዕኧን|ዕኧይ|ይኣል|ስኣት|ስኣን|ስኣይ|ስ ኣል|ይኣስ|ይኧ|ልኧ|ክኧ|እን|ዕን|ዐል|ይ|ት|አ|እ";
const sfx_arr = [];
const pfx_arr = [];

function stem(word) {
  let cv_string = transliterate.felig_transliterate(word, "am"); // consonant-vowel string

  // Prepare suffix array
  const sarr = suffix_list.split("|");
  sarr.forEach((suffix) => {
    sfx_arr.push(transliterate.felig_transliterate(suffix, "am"));
  });

  // Prepare prefix array
  const parr = prefix_list.split("|");
  parr.forEach((prefix) => {
    pfx_arr.push(transliterate.felig_transliterate(prefix, "am"));
  });

  // Remove suffixes
  sfx_arr.forEach((sfx) => {
    cv_string = cv_string.replace(sfx, "");
  });

  // Remove prefixes
  sfx_arr.forEach((sfx) => {
    cv_string = cv_string.replace(sfx, "");
  });

  return cv_string;
}

export default stem;
