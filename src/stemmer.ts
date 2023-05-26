// Takes Amharic language words and produces a stem
// ልጆች -> ልጅኦች -> ljoc -> lj -> ልጅ
import transliterate from "./transliterator.js"

const suffix_list =
  "ኦችኣችኧውንንኣ|ኦችኣችህኡ|ኦችኣችኧውን|ኣችኧውንንኣ|ኦችኣችኧው|ኢዕኧልኧሽ|ኦችኣችን|ኣውኢው|ኣችኧውኣል|ችኣት|ችኣችህኡ|ችኣችኧው|ኣልኧህኡ|ኣውኦች|ኣልኧህ|ኣልኧሽ|ኣልችህኡ|ኣልኣልኧች|ብኣችኧውስ|ብኣችኧው|ኣችኧውን|ኣልኧች|ኣልኧን|ኣልኣችህኡ|ኣችህኡን|ኣችህኡ|ኣችህኡት|ውኦችንንኣ|ውኦችን|ኣችኧው|ውኦችኡን|ውኦችኡ|ውንኣ|ኦችኡን|ውኦች|ኝኣንኧትም|ኝኣንኣ|ኝኣንኧት|ኝኣን|ኝኣውም|ኝኣው|ኣውኣ|ብኧትን|ኣችህኡም|ችኣችን|ኦችህ|ኦችሽ|ኦችኡ|ኦችኤ|ኦውኣ|ኦቿ|ችው|ችኡ|ኤችኡ|ንኧው|ንኧት|ኣልኡ|ኣችን|ክኡም|ክኡት|ክኧው|ችን|ችም|ችህ|ችሽ|ችን|ችው|ይኡሽን|ይኡሽ|ውኢ|ኦችንንኣ|ኣውኢ|ብኧት|ኦች|ኦችኡ|ውኦን|ኝኣ|ኝኣውን|ኝኣው|ኦችን|ኣል|ም|ሽው|ክም|ኧው|ውኣ|ትም|ውኦ|ውም|ውን|ንም|ሽን|ኣች|ኡት|ኢት|ክኡ|ኤ|ህ|ሽ|ኡ|ሽ|ክ|ች|ኡን|ን|ም|ንኣ"
const prefix_list =
  "ስልኧምኣይ|ይኧምኣት|ዕንድኧ|ይኧትኧ|ብኧምኣ|ብኧትኧ|ዕኧል|ስልኧ|ምኧስ|ዕይኧ|ይኣል|ስኣት|ስኣን|ስኣይ|ስኣል|ይኣስ|ይኧ|ልኧ|ብኧ|ክኧ|እን|አል|አስ|ትኧ|አት|አን|አይ|ይ|አ|እ"
const sfx_arr: string[] = []
const pfx_arr: string[] = []

/**
 * Takes an Amharic word and returns the stem through affix-removal with longest match.
 * @param word : word possibly containing one or more affix
 * @returns : the stem of the word passed
 *
 * @example {stem word with affix}
 * stem("ልጆቻቸውን") // returns "ልጅ"
 */

function stem(word: string) {
  let cv_string = transliterate.felig_transliterate(word, "am") // consonant-vowel string

  // Prepare suffix array
  const sarr = suffix_list.split("|")
  sarr.forEach((suffix) => {
    sfx_arr.push(transliterate.felig_transliterate(suffix, "am"))
  })

  sfx_arr.push("Wa") // Special case for ሯ

  // Prepare prefix array
  const parr = prefix_list.split("|")
  parr.forEach((prefix) => {
    pfx_arr.push(transliterate.felig_transliterate(prefix, "am"))
  })

  // Remove suffixes
  sfx_arr.every(function (sfx, index) {
    if (cv_string.endsWith(sfx)) {
      let regex = new RegExp(`${sfx}$`, `i`)
      cv_string = cv_string.replace(regex, "")
      return false
    } else return true
  })

  // Remove prefixes
  pfx_arr.every(function (pfx, index) {
    if (cv_string.startsWith(pfx)) {
      let regex = new RegExp(`^${pfx}`)
      cv_string = cv_string.replace(regex, "")
      return false
    } else return true
  })

  // Remove infixes
  if (/.+([^aeiou])[aeiou]\1[aeiou].?/i.test(cv_string)) {
    cv_string = cv_string.replace(
      /\S\S[^aeiou][aeiou]/i,
      cv_string[0] + cv_string[1]
    )
  } else if (/^(.+)a\1$/i.test(cv_string)) {
    cv_string = cv_string.replace(/a.+/i, "")
  }

  if (/[bcdfghjklmnpqrstvwxyz]{2}e/i.test(cv_string)) {
    let ccv = cv_string.match(/[bcdfghjklmnpqrstvwxyz]{2}e/i)!

    cv_string = cv_string.replace(
      /[bcdfghjklmnpqrstvwxyz]{2}e/i,
      ccv[0].substring(0, 1) + "X" + ccv[0].substring(1)
    )
  }

  return transliterate.felig_transliterate(cv_string, "en")
}

export default stem
