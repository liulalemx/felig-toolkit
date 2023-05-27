import fs from "fs"

function weigh_terms(
  indexFilePath: string,
  outputWeightedTermsPath: string,
  typeOfIndex: "doc" | "query"
) {
  const weightedTerms = {}
  const weightedTermsPath =
    outputWeightedTermsPath + `/${typeOfIndex}WeightedTermsFile.json`

  // read index file
  try {
    const jsonString = fs.readFileSync(indexFilePath, "utf8")
    try {
      const dataset = JSON.parse(jsonString)
      if (typeOfIndex === "doc") {
        let tf = 0
        let idf = 0
        let tf_idf = 0

        // calculate length normalized term  frequency and inverse document frewuency
        Object.keys(dataset.words).forEach((word) => {
          idf = Math.log2(dataset.corpus_size / dataset.words[word].length)

          dataset.words[word].forEach((filePathObj: any) => {
            let file = Object.keys(filePathObj)[0]
            let freq = Object.values(filePathObj)[0] as number

            tf = freq / dataset.corpus_word_count[file]
            tf_idf = idf * tf

            // modify weighted_terms object
            if (word in weightedTerms) {
              // @ts-ignore
              weightedTerms[word].push({ [file]: tf_idf })
            } else {
              // @ts-ignore
              weightedTerms[word] = [{ [file]: tf_idf }]
            }
          })
        })

        // output to file
        const jsonString = JSON.stringify(weightedTerms, null, 2)

        try {
          fs.writeFileSync(weightedTermsPath, jsonString)
          console.log(`Indexed terms successfully weighted`)
        } catch (error) {
          console.log("Weighted terms creation failed", error)
        }
      } else if (typeOfIndex === "query") {
        let tf = 0
        let idf = 1
        let tf_idf = 0

        // calculate length normalized term  frequency and inverse document frewuency
        Object.keys(dataset.words).forEach((word) => {
          let freq = dataset.words[word]

          tf = freq / dataset.corpus_word_count
          tf_idf = idf * tf

          // @ts-ignore
          weightedTerms[word] = tf_idf
        })

        // output to file
        const jsonString = JSON.stringify(weightedTerms, null, 2)

        try {
          fs.writeFileSync(weightedTermsPath, jsonString)
          console.log(`Indexed terms successfully weighted`)
        } catch (error) {
          console.log("Weighted terms creation failed", error)
        }
      }
    } catch (err) {
      console.log("Error parsing JSON string:", err)
    }
  } catch (error) {
    console.log(`Error reading Index file ${indexFilePath} from disk:`, error)
  }
}

export default weigh_terms
