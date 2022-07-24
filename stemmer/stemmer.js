// Takes Amharic language nouns and produces a stem
// Amharic noun ->
// ልጆች -> ልጅኦች -> ljoc -> lj -> ልጅ
import { transliterate } from "../sera_transliterator/sera_transliterator.js";

// const suffix_list =

function stem(word) {
  const cv_string = transliterate(word); // consonant-vowel string
  return cv_string;
}

export default stem;
