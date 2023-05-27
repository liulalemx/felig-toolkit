import rmvStopwrd from "../dist/stopword_remover.js"

const smpl_corpus_input =
  "የገንዘብ ሚኒስቴር ምክር ቤተ ከሃያ ዓመታት በፊት ያወጣውን የተጨማሪ እሴት ታክስ ቫት አዋጅን የሚተካ ረቂቅ ተዘጋጀ ረቂቅ አዋጁ መንግሥት ከቫት ታክስ የሚሰበስብበትን መሠረት የሚያሰፋ ስለሚሆን ለውይይት ቀርቧል ትምህት ቤት እና መስሪያ ቤት "
const smpl_corpus_output =
  "የገንዘብ ሚኒስቴር ምክር ቤተ ከሃያ ዓመታት በፊት ያወጣውን የ እሴት ታክስ ቫት አዋጅን የሚተካ ረቂቅ ተዘጋጀ ረቂቅ አዋጁ መንግሥት ከቫት ታክስ የሚሰበስብበትን መሠረት የሚያሰፋ  ለውይይት ቀርቧል ትምህት ቤት  መስሪያ ቤት "

test("Removes stop words", () => {
  expect(rmvStopwrd(smpl_corpus_input)).toBe(smpl_corpus_output)
})
