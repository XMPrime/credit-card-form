import { useState } from "react";

export default function useContext() {
  const [cardNum, setCardNum] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardCVV, setCardCVV] = useState("####");
  const [cardExpMonth, setCardExpMonth] = useState("MM");
  const [cardExpYear, setCardExpYear] = useState("YY");
  const [cardNumArr, setCardNumArr] = useState("#### #### #### ####".split(""));

  function getExpYears(startingYear) {
    let years = [];
    for (let i = 0; i <= 11; i++) {
      years.push(startingYear + i);
    }
    return years;
  }

  function transformCardNum(cardNum) {
    const v = cardNum.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    let parts = [];
    let len = match.length;

    for (let i = 0; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    }
    return cardNum;
  }

  function cardNumDisplay(str) {
    const display = "#### #### #### ####";
    const length = str.length;
    if (str !== "") {
      return str + display.slice(length);
    }
    return display;
  }

  function validateUserInput(e) {
    const name = e.target.name;
    const userInput = e.target.value;
    const lastChar = userInput[userInput.length - 1];

    let regex;
    let maxLength;

    switch (name) {
      case "card-form-num":
        regex = /[0-9 ]/;
        maxLength = 16 + 3; // 3 spaces for CC format
        setCardNum(e.target.value);
        setCardNumArr(cardNumDisplay(transformCardNum(userInput)).split(""));
        // console.log(cardNumArr);
        break;
      case "card-form-name":
        regex = /[a-zA-Z ]/;
        maxLength = 22;
        if (regex.test(lastChar) && userInput.length <= maxLength) {
          setCardName(e.target.value.toUpperCase());
        }
        break;
      case "card-form-cvv":
        regex = /[0-9]/;
        maxLength = 4;
        if (regex.test(lastChar) && userInput.length <= maxLength) {
          setCardCVV(e.target.value);
        }
        break;
      default:
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return {
    cardNum,
    cardNumArr,
    cardName,
    cardCVV,
    cardExpMonth,
    cardExpYear,
    setCardNum,
    setCardName,
    setCardCVV,
    setCardExpMonth,
    setCardExpYear,
    getExpYears,
    transformCardNum,
    validateUserInput,
    handleSubmit,
  };
}
