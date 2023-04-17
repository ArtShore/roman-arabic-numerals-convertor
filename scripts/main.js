// This function converts arabic to roman
function convertToRoman(num) {
    // This object is used to convert arabic to roman
  const romanNums = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  }
  const decValues = Object.keys(romanNums);
  
    let romanized = "";
  
    function romanize(decimal) {
  
      for (let i = 12; i >= 0; i--) {
  
        let keyParsed = parseInt(decValues[i], 10);
  
        if (decimal / keyParsed >= 1) {
  
          let tmpNum = Math.floor(decimal / keyParsed);
  
          for (let j = 1; j <= tmpNum; j++) {
  
            romanized = romanized + romanNums[decValues[i]];
          }
  
          return romanize(decimal % keyParsed);
        }
      }
  
      return romanized;
    }
    return romanize(num);
  }
  
  // This function converts roman to arabic
  
  function convertToArabic(num) {
    // This object is used to convert roman to arabic
  const arabicNums = {
    "I": 1,
    "IV": 4,
    "V": 5,
    "IX": 9,
    "X": 10,
    "XL": 40,
    "L": 50,
    "XC": 90,
    "C": 100,
    "CD": 400,
    "D": 500,
    "CM": 900,
    "M": 1000,
  }
  const romValues = Object.keys(arabicNums);
  
    num = num.toUpperCase();
    let decNum = 0;
    let tmp = "";
    for (let i = 0; i < num.length; i++) {
      if (arabicNums[num[i]] < arabicNums[num[i + 1]] ) {
        tmp = num[i] + num[i + 1];
        decNum += arabicNums[tmp];
        i++
      } else {
        tmp = num[i];
        decNum += arabicNums[tmp];
      }
    }
    return (decNum);
  }
    


// These two are to print the answer in dom
  function putRomanInHTML() {
    let arabicNum = document.getElementById("arabic-num");
    let answerField = document.getElementById("roman-answer");
    if (arabicNum.value == "") {
      alert("Please put in a number");
    } else {
      answerField.innerHTML = convertToRoman(arabicNum.value);
    }
  }
  function putArabicInHTML() {
    let romanNum = document.getElementById("roman-num");
    let answerField = document.getElementById("arabic-answer");
    if (romanNum.value == "") {
      alert("Please put in a number");
    } else {
      answerField.innerHTML = convertToArabic(romanNum.value);
    }
  }

  let copyRoman = document.getElementById("roman-answer");
  let copyArabic = document.getElementById("arabic-answer");


//   And this makes the copy btn interactive
  function copyText(copy) {
     // Copy the text inside the element
    navigator.clipboard.writeText(copy.innerHTML);
  
    // Alert the copied text
    alert("Copied the text: " + copy.innerHTML);
  }