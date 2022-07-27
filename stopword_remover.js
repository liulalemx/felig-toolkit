// Removes stop words

const stop_word_list = ["ስለሚሆን", "አና"];

function removeStopwords(corpus) {
  stop_word_list.forEach((word) => {
    let regex = new RegExp(`${word}`);
    corpus = corpus.replace(regex, "");
  });

  return corpus;
}

export default removeStopwords;
