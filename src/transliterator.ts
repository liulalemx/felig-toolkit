// JavaScript implementations of Amharic to ASCII transliterator

const sera_transliteration_lookup_table: any = {
  ሀ: "he",
  ሁ: "hu",
  ሂ: "hi",
  ሃ: "ha",
  ሄ: "hE",
  ህ: "h",
  ሆ: "ho",
  ለ: "le",
  ሉ: "lu",
  ሊ: "li",
  ላ: "la",
  ሌ: "lE",
  ል: "l",
  ሎ: "lo",
  ሏ: "lWa",
  ሐ: "He",
  ሑ: "Hu",
  ሒ: "Hi",
  ሓ: "Ha",
  ሔ: "HE",
  ሕ: "H",
  ሖ: "Ho",
  ሗ: "HWa",
  መ: "me",
  ሙ: "mu",
  ሚ: "mi",
  ማ: "ma",
  ሜ: "mE",
  ም: "m",
  ሞ: "mo",
  ሟ: "mWa",
  ሠ: "Se",
  ሡ: "Su",
  ሢ: "Si",
  ሣ: "Sa",
  ሤ: "SE",
  ሥ: "S",
  ሦ: "So",
  ሧ: "SWa",
  ረ: "re",
  ሩ: "ru",
  ሪ: "ri",
  ራ: "ra",
  ሬ: "rE",
  ር: "r",
  ሮ: "ro",
  ሯ: "rWa",
  ሰ: "se",
  ሱ: "su",
  ሲ: "si",
  ሳ: "sa",
  ሴ: "sE",
  ስ: "s",
  ሶ: "so",
  ሷ: "sWa",
  ሸ: "xe",
  ሹ: "xu",
  ሺ: "xi",
  ሻ: "xa",
  ሼ: "xE",
  ሽ: "x",
  ሾ: "xo",
  ሿ: "xWa",
  ቀ: "qe",
  ቁ: "qu",
  ቂ: "qi",
  ቃ: "qa",
  ቄ: "qE",
  ቅ: "q",
  ቆ: "qo",
  ቈ: "qWe",
  ቊ: "qWi",
  ቋ: "qWa",
  ቌ: "qWE",
  ቍ: "qW",
  በ: "be",
  ቡ: "bu",
  ቢ: "bi",
  ባ: "ba",
  ቤ: "bE",
  ብ: "b",
  ቦ: "bo",
  ቧ: "bWa",
  ቨ: "ve",
  ቩ: "vu",
  ቪ: "vi",
  ቫ: "va",
  ቬ: "vE",
  ቭ: "v",
  ቮ: "vo",
  ቯ: "vWa",
  ተ: "te",
  ቱ: "tu",
  ቲ: "ti",
  ታ: "ta",
  ቴ: "tE",
  ት: "t",
  ቶ: "to",
  ቷ: "tWa",
  ቸ: "ce",
  ቹ: "cu",
  ቺ: "ci",
  ቻ: "ca",
  ቼ: "cE",
  ች: "c",
  ቾ: "co",
  ቿ: "cWa",
  ኀ: "hhe",
  ኁ: "hhu",
  ኂ: "hhi",
  ኃ: "hha",
  ኄ: "hhE",
  ኅ: "hh",
  ኆ: "hho",
  ኈ: "hWe",
  ኊ: "hWi",
  ኋ: "hWa",
  ኌ: "hWE",
  ኍ: "hW",
  ነ: "ne",
  ኑ: "nu",
  ኒ: "ni",
  ና: "na",
  ኔ: "nE",
  ን: "n",
  ኖ: "no",
  ኗ: "nWa",
  ኘ: "Ne",
  ኙ: "Nu",
  ኚ: "Ni",
  ኛ: "Na",
  ኜ: "NE",
  ኝ: "N",
  ኞ: "No",
  ኟ: "NWa",
  አ: "e",
  ኡ: "u",
  ኢ: "i",
  ኣ: "a",
  ኤ: "E",
  እ: "I",
  ኦ: "o",
  ኧ: "ea",
  ከ: "ke",
  ኩ: "ku",
  ኪ: "ki",
  ካ: "ka",
  ኬ: "kE",
  ክ: "k",
  ኮ: "ko",
  ኰ: "kWe",
  ኲ: "kWi",
  ኳ: "kWa",
  ኴ: "kWE",
  ኵ: "kW",
  ኸ: "Ke",
  ኹ: "Ku",
  ኺ: "Ki",
  ኻ: "Ka",
  ኼ: "KE",
  ኽ: "K",
  ኾ: "Ko",
  ዀ: "KWe",
  ዂ: "KWi",
  ዃ: "KWa",
  ዄ: "KWE",
  ዅ: "KW",
  ወ: "we",
  ዉ: "wu",
  ዊ: "wi",
  ዋ: "wa",
  ዌ: "wE",
  ው: "w",
  ዎ: "wo",
  ዐ: "E",
  ዑ: "U",
  ዒ: "I",
  ዓ: "A",
  ዔ: "EE",
  ዕ: "II",
  ዖ: "O",
  ዘ: "ze",
  ዙ: "zu",
  ዚ: "zi",
  ዛ: "za",
  ዜ: "zE",
  ዝ: "z",
  ዞ: "zo",
  ዟ: "zWa",
  ዠ: "Ze",
  ዡ: "Zu",
  ዢ: "Zi",
  ዣ: "Za",
  ዤ: "ZE",
  ዥ: "Z",
  ዦ: "Zo",
  ዧ: "ZWa",
  የ: "ye",
  ዩ: "yu",
  ዪ: "yi",
  ያ: "ya",
  ዬ: "yE",
  ይ: "y",
  ዮ: "yo",
  ደ: "de",
  ዱ: "du",
  ዲ: "di",
  ዳ: "da",
  ዴ: "dE",
  ድ: "d",
  ዶ: "do",
  ዷ: "dWa",
  ጀ: "je",
  ጁ: "ju",
  ጂ: "ji",
  ጃ: "ja",
  ጄ: "jE",
  ጅ: "j",
  ጆ: "jo",
  ጇ: "jWa",
  ገ: "ge",
  ጉ: "gu",
  ጊ: "gi",
  ጋ: "ga",
  ጌ: "gE",
  ግ: "g",
  ጎ: "go",
  ጐ: "gWe",
  ጒ: "gWi",
  ጓ: "gWa",
  ጔ: "gWE",
  ጕ: "gW",
  ጠ: "Te",
  ጡ: "Tu",
  ጢ: "Ti",
  ጣ: "Ta",
  ጤ: "TE",
  ጥ: "T",
  ጦ: "To",
  ጧ: "TWa",
  ጨ: "Ce",
  ጩ: "Cu",
  ጪ: "Ci",
  ጫ: "Ca",
  ጬ: "CE",
  ጭ: "C",
  ጮ: "Co",
  ጯ: "CWa",
  ጰ: "Pe",
  ጱ: "Pu",
  ጲ: "Pi",
  ጳ: "Pa",
  ጴ: "PE",
  ጵ: "P",
  ጶ: "Po",
  ጷ: "PWa",
  ጸ: "SSe",
  ጹ: "SSu",
  ጺ: "SSi",
  ጻ: "SSa",
  ጼ: "SSE",
  ጽ: "SS",
  ጾ: "SSo",
  ጿ: "SSWa",
  ፀ: "SSSe",
  ፁ: "SSSu",
  ፂ: "SSSi",
  ፃ: "SSSa",
  ፄ: "SSSE",
  ፅ: "SSS",
  ፆ: "SSSo",
  ፈ: "fe",
  ፉ: "fu",
  ፊ: "fi",
  ፋ: "fa",
  ፌ: "fE",
  ፍ: "f",
  ፎ: "fo",
  ፏ: "fWa",
  ፐ: "pe",
  ፑ: "pu",
  ፒ: "pi",
  ፓ: "pa",
  ፔ: "pE",
  ፕ: "p",
  ፖ: "po",
  ፗ: "pWa",
}
const felig_transliteration_lookup_table: any = {
  "": "X",
  ሀ: "he",
  ሁ: "hu",
  ሂ: "hi",
  ሃ: "he",
  ሄ: "hE",
  ህ: "h",
  ሆ: "ho",
  ለ: "le",
  ሉ: "lu",
  ሊ: "li",
  ላ: "la",
  ሌ: "lE",
  ል: "l",
  ሎ: "lo",
  ሏ: "lWa",
  ሐ: "he",
  ሑ: "hu",
  ሒ: "hi",
  ሓ: "he",
  ሔ: "hE",
  ሕ: "h",
  ሖ: "ho",
  ሗ: "hWa",
  መ: "me",
  ሙ: "mu",
  ሚ: "mi",
  ማ: "ma",
  ሜ: "mE",
  ም: "m",
  ሞ: "mo",
  ሟ: "mWa",
  ሠ: "se",
  ሡ: "su",
  ሢ: "si",
  ሣ: "sa",
  ሤ: "sE",
  ሥ: "s",
  ሦ: "so",
  ሧ: "sWa",
  ረ: "re",
  ሩ: "ru",
  ሪ: "ri",
  ራ: "ra",
  ሬ: "rE",
  ር: "r",
  ሮ: "ro",
  ሯ: "rWa",
  ሰ: "se",
  ሱ: "su",
  ሲ: "si",
  ሳ: "sa",
  ሴ: "sE",
  ስ: "s",
  ሶ: "so",
  ሷ: "sWa",
  ሸ: "xe",
  ሹ: "xu",
  ሺ: "xi",
  ሻ: "xa",
  ሼ: "xE",
  ሽ: "x",
  ሾ: "xo",
  ሿ: "xWa",
  ቀ: "qe",
  ቁ: "qu",
  ቂ: "qi",
  ቃ: "qa",
  ቄ: "qE",
  ቅ: "q",
  ቆ: "qo",
  ቈ: "qWe",
  ቊ: "qu",
  ቋ: "qWa",
  ቌ: "qWE",
  ቍ: "qW",
  በ: "be",
  ቡ: "bu",
  ቢ: "bi",
  ባ: "ba",
  ቤ: "bE",
  ብ: "b",
  ቦ: "bo",
  ቧ: "bWa",
  ቨ: "ve",
  ቩ: "vu",
  ቪ: "vi",
  ቫ: "va",
  ቬ: "vE",
  ቭ: "v",
  ቮ: "vo",
  ቯ: "vWa",
  ተ: "te",
  ቱ: "tu",
  ቲ: "ti",
  ታ: "ta",
  ቴ: "tE",
  ት: "t",
  ቶ: "to",
  ቷ: "tWa",
  ቸ: "ce",
  ቹ: "cu",
  ቺ: "ci",
  ቻ: "ca",
  ቼ: "cE",
  ች: "c",
  ቾ: "co",
  ቿ: "cWa",
  ኀ: "he",
  ኁ: "hu",
  ኂ: "hi",
  ኃ: "he",
  ኄ: "hE",
  ኅ: "h",
  ኆ: "ho",
  ኈ: "hWe",
  ኊ: "hWi",
  ኋ: "hWa",
  ኌ: "hWE",
  ኍ: "hW",
  ነ: "ne",
  ኑ: "nu",
  ኒ: "ni",
  ና: "na",
  ኔ: "nE",
  ን: "n",
  ኖ: "no",
  ኗ: "nWa",
  ኘ: "Ne",
  ኙ: "Nu",
  ኚ: "Ni",
  ኛ: "Na",
  ኜ: "NE",
  ኝ: "N",
  ኞ: "No",
  ኟ: "NWa",
  አ: "a",
  ኡ: "u",
  ኢ: "i",
  ኣ: "a",
  ኤ: "E",
  እ: "I",
  ኦ: "o",
  ኧ: "e",
  ከ: "ke",
  ኩ: "ku",
  ኪ: "ki",
  ካ: "ka",
  ኬ: "kE",
  ክ: "k",
  ኮ: "ko",
  ኰ: "ko",
  ኲ: "kWi",
  ኳ: "kWa",
  ኴ: "kWE",
  ኵ: "kW",
  ኸ: "Ke",
  ኹ: "hu",
  ኺ: "hi",
  ኻ: "he",
  ኼ: "hE",
  ኽ: "h",
  ኾ: "ho",
  ዀ: "KWe",
  ዂ: "KWi",
  ዃ: "KWa",
  ዄ: "KWE",
  ዅ: "KW",
  ወ: "we",
  ዉ: "wu",
  ዊ: "wi",
  ዋ: "wa",
  ዌ: "wE",
  ው: "w",
  ዎ: "wo",
  ዐ: "e",
  ዑ: "u",
  ዒ: "i",
  ዓ: "e",
  ዔ: "E",
  ዕ: "e",
  ዖ: "o",
  ዘ: "ze",
  ዙ: "zu",
  ዚ: "zi",
  ዛ: "za",
  ዜ: "zE",
  ዝ: "z",
  ዞ: "zo",
  ዟ: "zWa",
  ዠ: "Ze",
  ዡ: "Zu",
  ዢ: "Zi",
  ዣ: "Za",
  ዤ: "ZE",
  ዥ: "Z",
  ዦ: "Zo",
  ዧ: "ZWa",
  የ: "ye",
  ዩ: "yu",
  ዪ: "yi",
  ያ: "ya",
  ዬ: "yE",
  ይ: "y",
  ዮ: "yo",
  ደ: "de",
  ዱ: "du",
  ዲ: "di",
  ዳ: "da",
  ዴ: "dE",
  ድ: "d",
  ዶ: "do",
  ዷ: "dWa",
  ጀ: "je",
  ጁ: "ju",
  ጂ: "ji",
  ጃ: "ja",
  ጄ: "jE",
  ጅ: "j",
  ጆ: "jo",
  ጇ: "jWa",
  ገ: "ge",
  ጉ: "gu",
  ጊ: "gi",
  ጋ: "ga",
  ጌ: "gE",
  ግ: "g",
  ጎ: "go",
  ጐ: "go",
  ጒ: "gWi",
  ጓ: "gWa",
  ጔ: "gWE",
  ጕ: "gW",
  ጠ: "Te",
  ጡ: "Tu",
  ጢ: "Ti",
  ጣ: "Ta",
  ጤ: "TE",
  ጥ: "T",
  ጦ: "To",
  ጧ: "TWa",
  ጨ: "Ce",
  ጩ: "Cu",
  ጪ: "Ci",
  ጫ: "Ca",
  ጬ: "CE",
  ጭ: "C",
  ጮ: "Co",
  ጯ: "CWa",
  ጰ: "Pe",
  ጱ: "Pu",
  ጲ: "Pi",
  ጳ: "Pa",
  ጴ: "PE",
  ጵ: "P",
  ጶ: "Po",
  ጷ: "PWa",
  ጸ: "SSe",
  ጹ: "SSu",
  ጺ: "SSi",
  ጻ: "SSa",
  ጼ: "SSE",
  ጽ: "SS",
  ጾ: "SSo",
  ጿ: "SSWa",
  ፀ: "SSe",
  ፁ: "SSu",
  ፂ: "SSi",
  ፃ: "SSa",
  ፄ: "SSE",
  ፅ: "SS",
  ፆ: "SSo",
  ፈ: "fe",
  ፉ: "fu",
  ፊ: "fi",
  ፋ: "fa",
  ፌ: "fE",
  ፍ: "f",
  ፎ: "fo",
  ፏ: "fWa",
  ፐ: "pe",
  ፑ: "pu",
  ፒ: "pi",
  ፓ: "pa",
  ፔ: "pE",
  ፕ: "p",
  ፖ: "po",
  ፗ: "pWa",
}

/**
 *@deprecated Use {@link felig_transliterate} function instead.
 */
function sera_transliterate(word: string, lang: "am" | "en") {
  let trans_word = ""

  if (lang === "am") {
    let tokens: string[] = word.split("")
    tokens.forEach((letter) => {
      if (sera_transliteration_lookup_table[letter] !== undefined) {
        trans_word += sera_transliteration_lookup_table[letter]
      }
    })
  } else if (lang === "en") {
    let tokens: string[] | null = word.match(/.{1,2}/g)
    if (tokens) {
      tokens.forEach((letter) => {
        let en_letter = Object.keys(sera_transliteration_lookup_table).find(
          (key) => sera_transliteration_lookup_table[key] === letter
        )
        if (en_letter !== undefined) {
          trans_word += en_letter
        }
      })
    }
  }

  return trans_word
}

/**
 * Transliterates between Amharic and English
 * @param word : English or Amharic word
 * @param lang : language to transliterate form
 * @returns : a transliterated string
 *
 * @example{ transliterate Amharic word to English}
 * flig_transliterate("ወንበር","am") // returns "wenber"
 */
function felig_transliterate(word: string, lang: "am" | "en") {
  let trans_word = ""

  if (lang === "am") {
    let tokens = word.split("")
    tokens.forEach((letter) => {
      if (felig_transliteration_lookup_table[letter] !== undefined) {
        trans_word += felig_transliteration_lookup_table[letter]
      }
    })
  } else if (lang === "en") {
    let tokens = word.match(/.{1,2}/g)

    if (tokens === null) {
      return ""
    }

    tokens.forEach((letter) => {
      if (/[^aeiou][aeiou]/i.test(letter)) {
        let am_letter: string = ""

        if (/[W][a]/g.test(letter)) {
          am_letter = Object.keys(felig_transliteration_lookup_table).find(
            (key) =>
              felig_transliteration_lookup_table[key] === letter.toLowerCase()
          )!
        } else {
          am_letter = Object.keys(felig_transliteration_lookup_table).find(
            (key) => felig_transliteration_lookup_table[key] === letter
          )!
        }

        if (am_letter !== undefined) {
          trans_word += am_letter
        }
      } else {
        let ltrs = letter.split("")
        let am_letter = ""
        ltrs.forEach((ltr) => {
          am_letter += Object.keys(felig_transliteration_lookup_table).find(
            (key) => felig_transliteration_lookup_table[key] === ltr
          )
        })

        if (am_letter !== undefined && am_letter !== "ኧ") {
          trans_word += am_letter
        }
      }
    })
  }

  return trans_word
}

const transliterate = {
  sera_transliterate,
  felig_transliterate,
}

export default transliterate
