import fs from "fs";

function weigh_terms(indexFilePath, outputWeightedTermsPath) {
  const weightedTerms = {};
  const weightedTermsPath = outputWeightedTermsPath + "/weightedTermsFile.json";

  // read index file
  try {
    const jsonString = fs.readFileSync(indexFilePath, "utf8");
    const dataset = JSON.parse(jsonString);

    try {
      let tf = 0;
      let idf = 0;
      let tf_idf = 0;

      // calculate length normalized term  frequency and inverse document frewuency
      Object.keys(dataset.words).forEach((word) => {
        idf = Math.log2(dataset.corpus_size / dataset.words[word].length);

        dataset.words[word].forEach((filePathObj) => {
          let file = Object.keys(filePathObj)[0];
          let freq = Object.values(filePathObj)[0];

          tf = freq / dataset.corpus_word_count[file];
          tf_idf = idf * tf;

          // modify weighted_terms object
          if (word in weightedTerms) {
            weightedTerms[word].push({ [file]: tf_idf });
          } else {
            weightedTerms[word] = [{ [file]: tf_idf }];
          }
        });
      });

      // output to file
      const jsonString = JSON.stringify(weightedTerms, null, 2);

      try {
        fs.writeFileSync(weightedTermsPath, jsonString);
        console.log(`Indexed terms successfully weighted`);
      } catch (error) {
        console.log("Weighted terms creation failed", error);
      }
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  } catch (error) {
    console.log(`Error reading Index file ${indexFilePath} from disk:`, error);
  }
}

weigh_terms("./indexFile.json", "./");

export default weigh_terms;
