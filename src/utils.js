export function getExpYears(startingYear) {
  let years = [];
  for (let i = 0; i <= 11; i++) {
    years.push(startingYear + i);
  }
  return years;
}

export function addHashes(str, cardLogo) {
  const parts = str.split(" ");
  const lastPart = parts[parts.length - 1];

  if (cardLogo === "amex") {
    switch (parts.length) {
      case 1:
        for (let i = lastPart.length; i < 4; i++) {
          parts[0] += "#";
        }
        parts.push("######");
        parts.push("#####");
        break;
      case 2:
        for (let i = lastPart.length; i < 6; i++) {
          parts[1] += "#";
        }
        parts.push("#####");
        break;
      default:
        for (let i = lastPart.length; i < 5; i++) {
          parts[2] += "#";
        }
        break;
    }
  } else {
    for (let i = lastPart.length; i < 4; i++) {
      parts[parts.length - 1] += "#";
    }
    for (let i = parts.length; i < 4; i++) {
      parts.push("####");
    }
  }

  return parts.join(" ");
}

// export function transformCardNum(cardNum, cardLogo) {
//   // https://stackoverflow.com/questions/36833366/format-credit-card-number
//   console.log(cardNum);
//   const v = cardNum.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
//   const matches = v.match(/\d{4,16}/g);
//   const match = (matches && matches[0]) || "";
//   let parts = [];
//   let length = match.length;
//   console.log(parts);

//   for (let i = 0; i < length; i += 4) {
//     parts.push(match.substring(i, i + 4));
//     console.log(parts);
//   }

//   if (parts.length) {
//     return parts.join(" ");
//   }
//   return cardNum;
// }

export function transformCardNum(cardNum, cardLogo) {
  const cleaned = cardNum
    .split("")
    .filter((i) => i !== " ")
    .join("");
  let parts = [];

  if (cardLogo === "amex") {
    if (cleaned.length > 4 && cleaned.length <= 10) {
      parts.push(cleaned.slice(0, 4));
      parts.push(cleaned.slice(4, cleaned.length));
    }
    if (cleaned.length > 10 && cleaned.length <= 15) {
      parts.push(cleaned.slice(0, 4));
      parts.push(cleaned.slice(4, 10));
      parts.push(cleaned.slice(10, cleaned.length));
    }
  } else {
    if (cleaned.length > 4 && cleaned.length <= 8) {
      parts.push(cleaned.slice(0, 4));
      parts.push(cleaned.slice(4, cleaned.length));
    }
    if (cleaned.length > 8 && cleaned.length <= 12) {
      parts.push(cleaned.slice(0, 4));
      parts.push(cleaned.slice(4, 8));
      parts.push(cleaned.slice(8, cleaned.length));
    }
    if (cleaned.length > 12 && cleaned.length <= 16) {
      parts.push(cleaned.slice(0, 4));
      parts.push(cleaned.slice(4, 8));
      parts.push(cleaned.slice(8, 12));
      parts.push(cleaned.slice(12, cleaned.length));
    }
  }

  if (parts.length) {
    return parts.join(" ");
  }
  return cardNum;
}
