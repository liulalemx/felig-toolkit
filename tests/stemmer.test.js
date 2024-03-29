import stem from "../dist/stemmer.js"

const amh_testWords_input = [
  "ወንበር",
  "ወንበሬ",
  "ወንበርህ",
  "ወንበርሽ",
  "ወንበሩ",
  "ወንበሯ",
  "ወንበራችን",
  "ወንበራችሁ",
  "ወንበራቸው",
  "ወንበሮች",
  "ወንበሮቼ",
  "ወንበሮችህ",
  "ወንበሮችሽ",
  "ወንበሮቹ",
  "ወንበሮቿ",
  "ወንበሮቻችን",
  "ወንበሮቻችሁ",
  "ወንበሮቻቸው",
  "ልጅ",
  "የልጅ",
  "ልጆች",
  "ልጆቻችን",
  "ልጆቻቸው",
  "ልጆቻቸውን",
  "ቤቶች",
  "ውል",
  "ጎረቤቶቻችን",
  "ፈለገ",
  "ፈለገችው",
  "ፈላለገ",
  "ሰዳደበ",
  "ቀዳደደ",
  "ሸፋፈነ",
  "ቅጠል",
  "ቅጠሎች",
  "ቅጠላቅጠል",
  "ወጣወጥ",
  "ስለማይለወጥ",
  "ተበላ",
  "ተፈላለገ",
  "ተመካከረ",
  "ትቢተኛነት",
  "ተፎካከረ",
  "ተመሳሰለ",
  "ተስተካከለ", //special case, what has T as prefix?
  "ተንከባከበ", //special case
  "መስተካከል", //special case
  "መንከባከብ",
  "ጠቢብ",
  "ጠባብ",
  "ትምህርት",
  "በኢትዮጵያ",
  "የኢትዮጵያ",
  "ዳቦዎች",
  "ዳቦ",
]
const amh_testWords_output = [
  "ወንበር",
  "ወንበር",
  "ወንበር",
  "ወንበር",
  "ወንበር",
  "ወንበር",
  "ወንበር",
  "ወንበር",
  "ወንበር",
  "ወንበር",
  "ወንበር",
  "ወንበር",
  "ወንበር",
  "ወንበር",
  "ወንበር",
  "ወንበር",
  "ወንበር",
  "ወንበር",
  "ልጅ",
  "ልጅ",
  "ልጅ",
  "ልጅ",
  "ልጅ",
  "ልጅ",
  "ቤት",
  "ውል",
  "ጎረቤት",
  "ፈለገ",
  "ፈለገ",
  "ፈለገ",
  "ሠደበ",
  "ቀደደ",
  "ሸፈነ",
  "ቅጠል",
  "ቅጠል",
  "ቅጠል",
  "ወጥ",
  "ለወጥ",
  "በላ",
  "ፈለገ",
  "መከረ",
  "ትብኢት",
  "ፎከረ",
  "መሠለ",
  "ሥሥትከለ",
  "ንከባከበ",
  "ተከል",
  "መንከባከብ",
  "ጠቢብ",
  "ጠባብ",
  "ትምህርት",
  "ኢትዮጵይአ",
  "ኢትዮጵይአ",
  "ዳቦ",
  "ዳቦ",
]

test("Takes Amharic language words and produces a stem", () => {
  for (let index = 0; index < amh_testWords_input.length; index++) {
    const amh_input = amh_testWords_input[index]
    const amh_output = amh_testWords_output[index]

    expect(stem(amh_input)).toBe(amh_output)
  }
})
