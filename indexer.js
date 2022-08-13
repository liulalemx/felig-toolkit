import fs from "fs";
import stem from "./stemmer.js";
import lexAnalyze from "./lexical_analyzer.js";
import rmvStopwrd from "./stopword_remover.js";

const indexData = {};

function indexTerms(corpus, outputIndexFilePath, type) {
  if (type === "doc") {
    // Documnets
    const filesArray = corpus;
    indexData["corpus_size"] = filesArray.length;
    indexData["corpus_word_count"] = {};
    indexData["words"] = {};

    const indexPath = outputIndexFilePath + "/docIndexFile.json";

    filesArray.forEach((filePath) => {
      try {
        // read files
        const fileContents = fs.readFileSync(filePath, "utf8");

        indexData["corpus_word_count"][filePath] =
          fileContents.split(" ").length;

        // preprocess
        const unStemmedWords = rmvStopwrd(lexAnalyze(fileContents)).split(" ");
        const stemmedWords = unStemmedWords.map((word) => stem(word));
        const result = stemmedWords
          .filter((e) => e)
          .filter((e) => {
            return e.length > 1;
          });

        // index
        let wordFlag = 0;
        result.forEach((word) => {
          if (word in indexData["words"]) {
            indexData.words[word].forEach((pathObj) => {
              if (filePath in pathObj) {
                pathObj[filePath]++;
                wordFlag = 1;
              }
            });
            if (wordFlag === 0) {
              indexData.words[word].push({ [filePath]: 1 });
            } else {
              wordFlag = 0;
            }
          } else {
            indexData.words[word] = [{ [filePath]: 1 }];
          }
        });

        const jsonString = JSON.stringify(indexData, null, 2);

        try {
          fs.writeFileSync(indexPath, jsonString);
          console.log(`Contents of ${filePath} successfully added to index`);
        } catch (error) {
          console.log("Index creation failed", error);
        }
      } catch (error) {
        console.log(`Error reading ${filePath} file from disk:`, error);
      }
    });
  } else if (type === "query") {
    // Query
    indexData["corpus_size"] = 1;
    indexData["corpus_word_count"] = corpus.split(" ").length;
    indexData["words"] = {};

    const indexPath = outputIndexFilePath + "/queryIndexFile.json";

    // preprocess
    const unStemmedWords = rmvStopwrd(lexAnalyze(corpus)).split(" ");
    const stemmedWords = unStemmedWords.map((word) => stem(word));
    const result = stemmedWords
      .filter((e) => e)
      .filter((e) => {
        return e.length > 1;
      });

    // index
    result.forEach((word) => {
      if (word in indexData["words"]) {
        indexData.words[word]++;
      } else {
        indexData.words[word] = 1;
      }
    });

    const jsonString = JSON.stringify(indexData, null, 2);

    try {
      fs.writeFileSync(indexPath, jsonString);
      console.log(`Contents of Query successfully added to index`);
    } catch (error) {
      console.log("Index creation failed", error);
    }
  }
}

export default indexTerms;
