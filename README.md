<h1 align="center">Felig Toolkit</h1>
<p align="center">
  <strong>A toolset for Amharic Language pre-processing 🔧</strong>
</p>

---

## What is felig-toolkit?

It is a toolset for Amharic Language pre-processing. It includes an Amharic Stemmer, Amharic Transliterator, Amharic Stopword remover, Amharic Lexical analyzer, Amharic Corpus indexer and Term weighter.

### Amharic Lexical Analyzer

Breaks down Amharic language corpus and returns tokens by removing any whitespace, expanding abbreviations(`አ.አ -> አዲስ አበበ`), removing numbers, breaking up hyphenated words, and removing punctuation (`፡ ። ! ? `...).

### Amharic Stopword remover

Removes commonly occuring words that have no contribution to the semantics of the corpus. Eg: `እና ፡ ስለዚህ ፡ በመሆኑም`...

### Amharic Transliterator

Changes Unicode Amharic characters to ASCII. Exmaple: `ልጆች -> ልጅኦች -> ljoc`. This tool implements two types of Amharic transliteration lookup tables.

- SERA (System for Ethiopic Representation in ASCII) - This system maps alphabets with similar sounds separately. Eg: `(ሀ፣ሐ፡ኀ)፣(ሰ፡ሠ)፡(ጸ፡ፀ)፡(ዐ፡አ)`. However, in practice, these alphabets are used interchangeably and use of SERA would greatly decrease recall. **NOT RECOMMENDED!**

- Felig - Normalizes the redundant symbols into a common symbol. **RECOMMENDED!**

### Amharic Stemmer [LIVE DEMO](https://liulalemx.github.io/felig-stemmer-demo/)

Reduces the different morphological (e.g. inflectional or
derivational) variations of Amharic word forms by taking an Amharic word and returning the stem through affix-removal with longest match.

Exmaple:
`ልጆች -> ልጅኦች -> ljoc -> lj -> ልጅ`

### Amharic Corpus Indexer

Produces an index file for the stemmed words in a corpus and relates them with the files they are found in. It also stores their frequencies per file.

### Term Weighter

Calculates the weight of words from the index file using product of their length normalized Term frequency and Inverse document frequency (`tf*idf`).

## Installation

Felig Toolkit is available as a package on NPM for use in a Node application:

```bash
# NPM
npm install felig-toolkit

```

### Example

**note: this package uses es-modules**

```javaScript
import felig_toolkit from 'felig-toolkit'

```

## What's Included

- `transliterate.felig_transliterate(word,lang)`: takes a single word and its' language (am/en) and returns felig-transliterated string

- `transliterate.sera_transliterate(word,lang)`: takes a single word and its' language (am/en) and returns SERA-transliterated string

- `rmvStopwrd(corpus)`: takes an Amharic corpus text (sentence/paragraph/multiple-paragraphs) and removes stop wprds

- `lexAnalyze(corpus)`: takes an Amharic corpus text returns a string of tokens

- `stem(word)`: takes an Amharic word string and returns the stem as a string (async)

- `indexer(filesArray, outputIndexFilePath)`: takes an array of files and produces an index (`.json`) file.

- `weigh_terms(indexFilePath, outputWeightedTermsPath)`: takes an index file and produces a file (`.json`) with weighted terms.

## Contributions

felig-toolkit is open to contributions, but it is recommend to create an issue or reply in a comment to let others know what you are working on first.

## How to run locally

### Prerequisites

- [nodejs](https://nodejs.org/en/)

1. Clone the repository
1. Run `npm install`
1. Run `node index.js` on the root directory

## Attribution

To prepare the following tools, these academic papers were used

- [Girma Neshir Alemneh. “Amharic Light Stemmer”. ResearchGate. Sep 2020. ](https://www.researchgate.net/publication/344285263_Amharic_Light_Stemmer)
- [Genet Mezemir Fikremariam. ”Automatic Stemming for Amharic text: An experiment using successor variety approach”. AAU. Jan 2009. ](http://etd.aau.edu.et/bitstream/handle/123456789/14590/Genet%20Mezemir.pdf?sequence=1&isAllowed=y)
- [Tessema Mindaye Mengistu. “Design and Implementation of Amharic Search Engine”. ResearchGate. August 2007. ](https://www.researchgate.net/publication/323384408_Design_and_Implementation_of_Amharic_Search_Engine)
- [Yitna Firdyiwek and Daniel Yaqob. “The System for Ethiopic Representation in ASCII”. ResearchGate. Jan 1997. ](https://www.researchgate.net/publication/2682324_The_System_for_Ethiopic_Representation_in_ASCII)
