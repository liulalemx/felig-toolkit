import fs from "fs";
import stem from "./stemmer.js";
import lexAnalyze from "./lexical_analyzer.js";
import rmvStopwrd from "./stopword_remover.js";

const indexData = {};

function indexTerms(filesArray, outputIndexFilePath) {
  indexData["corpus_size"] = filesArray.length;
  indexData["corpus_word_count"] = {};
  indexData["words"] = {};

  const indexPath = outputIndexFilePath + "/indexFile.json";

  filesArray.forEach((filePath) => {
    try {
      // read files
      const fileContents = fs.readFileSync(filePath, "utf8");

      indexData["corpus_word_count"][filePath] = fileContents.length;

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
}

const files = [
  "C:\\Users\\user\\Desktop\\information_retrieval_system\\felig-toolkit\\corpus\\ከድሉ ባሻገር በኢትዮጵያ ቀጣይ ዕጣ ፈንታ ላይ ትኩረቱን ያደረገው የአትሌቶች አቀባበል.txt",
  "C:\\Users\\user\\Desktop\\information_retrieval_system\\felig-toolkit\\corpus\\የአፍሪካ ዋንጫ ማጣሪያ ቀሪ የምድብ ጨዋታ ተራዘመ.txt",
  "C:\\Users\\user\\Desktop\\information_retrieval_system\\felig-toolkit\\corpus\\የኢትዮጵያ አትሌቲክስ ቡድን ዛሬ አዲስ አበባ ይገባል.txt",
  "C:\\Users\\user\\Desktop\\information_retrieval_system\\felig-toolkit\\corpus\\የፕሪሚየር ሊጉ የቀጣይ ዓመት ጨዋታ መርሐ ግብር ይፋ ተደረገ.txt",
];

indexTerms(
  files,
  "C:\\Users\\user\\Desktop\\information_retrieval_system\\felig-toolkit"
);

export default indexTerms;