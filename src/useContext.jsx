import { useState } from "react";

export default function useContext() {
  const [cardNum, setCardNum] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardCVV, setCardCVV] = useState("####");
  const [cardExpMonth, setCardExpMonth] = useState("MM");
  const [cardExpYear, setCardExpYear] = useState("YY");

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

  function validateUserInput(e) {
    const name = e.target.name;
    const userInput = e.target.value;
    const lastChar = userInput[userInput.length - 1];
    let regex;
    let maxLength;

    switch (name) {
      case "card-num":
        regex = /[0-9 ]/;
        maxLength = 16 + 3; // 3 spaces for CC format
        if (regex.test(lastChar) && userInput.length <= maxLength) {
          setCardNum(e.target.value);
        }
        break;
      case "card-name":
        regex = /[a-zA-Z ]/;
        maxLength = 22;
        if (regex.test(lastChar) && userInput.length <= maxLength) {
          setCardName(e.target.value.toUpperCase());
        }
        break;
      case "card-cvv":
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
