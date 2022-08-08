// Takes Amharic language words and produces a stem
// ልጆች -> ልጅኦች -> ljoc -> lj -> ልጅ
import transliterate from "./transliterator.js";

const suffix_list =
  "ኦችኣችኧውንንኣ|ኦችኣችህኡ|ኦችኣችኧውን|ኣችኧውንንኣ|ኦችኣችኧው|ኢዕኧልኧሽ|ኦችኣችን|ኣውኢው|ኣችኧውኣል|ችኣት|ችኣችህኡ|ችኣችኧው|ኣልኧህኡ|ኣውኦች|ኣልኧህ|ኣልኧሽ|ኣልችህኡ|ኣልኣልኧች|ብኣችኧውስ|ብኣችኧው|ኣችኧውን|ኣልኧች|ኣልኧን|ኣልኣችህኡ|ኣችህኡን|ኣችህኡ|ኣችህኡት|ውኦችንንኣ|ውኦችን|ኣችኧው|ውኦችኡን|ውኦችኡ|ውንኣ|ኦችኡን|ኦውኦች|ኝኣንኧትም|ኝኣንኣ|ኝኣንኧት|ኝኣን|ኝኣውም|ኝኣው|ኣውኣ|ብኧትን|ኣችህኡም|ችኣችን|ኦችህ|ኦችሽ|ኦችኡ|ኦችኤ|ኦውኣ|ኦቿ|ችው|ችኡ|ኤችኡ|ንኧው|ንኧት|ኣልኡ|ኣችን|ክኡም|ክኡት|ክኧው|ችን|ችም|ችህ|ችሽ|ችን|ችው|ይኡሽን|ይኡሽ|ውኢ|ኦችንንኣ|ኣውኢ|ብኧት|ኦች|ኦችኡ|ውኦን|ኝኣ|ኝኣውን|ኝኣው|ኦችን|ኣል|ም|ሽው|ክም|ኧው|ትም|ውኦ|ውም|ውን|ንም|ሽን|ኣች|ኡት|ኢት|ክኡ|ኤ|ህ|ሽ|ኡ|ሽ|ክ|ች|ኡን|ን|ም|ንኣ|";
const prefix_list =
  "ስልኧምኣይ|ይኧምኣት|ዕንድኧ|ይኧትኧ|ብኧምኣ|ብኧትኧ|ዕኧል|ስልኧ|ምኧስ|ዕይኧ|ይኣል|ስኣት|ስኣን|ስኣይ|ስኣል|ይኣስ|ይኧ|ልኧ|ብኧ|ክኧ|እን|አል|አስ|ትኧ|አት|አን|አይ|ይ|አ|እ";
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
  sfx_arr.every(function (sfx, index) {
    if (cv_string.endsWith(sfx)) {
      let regex = new RegExp(`${sfx}$`, `i`);
      cv_string = cv_string.replace(regex, "");
      return false;
    } else return true;
  });

  // Remove prefixes
  pfx_arr.every(function (pfx, index) {
    if (cv_string.startsWith(pfx)) {
      let regex = new RegExp(`^${pfx}`);
      cv_string = cv_string.replace(regex, "");
      return false;
    } else return true;
  });

  // Remove infixes
  if (/.+([^aeiou])[aeiou]\1[aeiou].?/i.test(cv_string)) {
    cv_string = cv_string.replace(
      /\S\S[^aeiou][aeiou]/i,
      cv_string[0] + cv_string[1]
    );
  } else if (/^(.+)a\1$/i.test(cv_string)) {
    cv_string = cv_string.replace(/a.+/i, "");
  }

  return transliterate.felig_transliterate(cv_string, "en");
}

export default stem;
