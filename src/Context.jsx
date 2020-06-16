import React, { useState } from "react";
const Context = React.createContext();

function ContextProvider(props) {
  const [cardNum, setCardNum] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [cardExpMonth, setCardExpMonth] = useState("MM");
  const [cardExpYear, setCardExpYear] = useState("YY");
  const [cardNumDisplay, setCardNumDisplay] = useState(
    "#### #### #### ####".split("")
  );
  const [cardFront, setCardFront] = useState(true);

  function flipCard() {
    setCardFront(!cardFront);
  }

  function getExpYears(startingYear) {
    let years = [];
    for (let i = 0; i <= 11; i++) {
      years.push(startingYear + i);
    }
    return years;
  }

  function transformCardNum(cardNum) {
    console.log(cardNum);
    const v = cardNum.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    let parts = [];
    let length = match.length;

    for (let i = 0; i < length; i += 4) {
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

    switch (name) {
      case "card-form-num":
        regex = /[0-9 ]/;
        if (regex.test(lastChar) || lastChar === undefined) {
          setCardNum(transformCardNum(userInput));
        }
        break;
      case "card-form-name":
        regex = /[a-zA-Z ]/;
        if (regex.test(lastChar) || lastChar === undefined) {
          setCardName(e.target.value.toUpperCase());
        }
        break;
      case "card-form-cvv":
        regex = /[0-9]/;
        if (regex.test(lastChar) || lastChar === undefined) {
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

  return (
    <Context.Provider
      value={{
        cardNum,
        cardName,
        cardCVV,
        cardExpMonth,
        cardExpYear,
        cardNumDisplay,
        cardFront,
        setCardNum,
        setCardName,
        setCardCVV,
        setCardExpMonth,
        setCardExpYear,
        setCardNumDisplay,
        setCardFront,
        flipCard,
        getExpYears,
        transformCardNum,
        validateUserInput,
        handleSubmit,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
