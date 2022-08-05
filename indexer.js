import fs from "fs";
import stem from "./stemmer.js";
import lexAnalyze from "./lexical_analyzer.js";
import rmvStopwrd from "./stopword_remover.js";

const indexPath = "./indexFile.json";
const indexData = {};

function indexTerms(filesArray) {
  filesArray.forEach((filePath) => {
    try {
      // read files
      const fileContents = fs.readFileSync(filePath, "utf8");

      // preprocess
      const unStemmedWords = rmvStopwrd(lexAnalyze(fileContents)).split(" ");
      const stemmedWords = unStemmedWords.map((word) => stem(word));
      const result = stemmedWords
        .filter((e) => e)
        .filter((e) => {
          return e.length > 1;
        });

      // index
      result.forEach((word) => {
        if (word in indexData) {
          if (!indexData[word].includes(filePath)) {
            indexData[word].push(filePath);
          }
        } else {
          indexData[word] = [filePath];
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

indexTerms(files);
