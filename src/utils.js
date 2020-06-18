export function getExpYears(startingYear) {
  let years = [];
  for (let i = 0; i <= 11; i++) {
    years.push(startingYear + i);
  }
  return years;
}

export function transformCardNum(cardNum, cardLogo) {
  // https://stackoverflow.com/questions/36833366/format-credit-card-number
  const v = cardNum.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const matches = v.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || "";
  let parts = [];
  let length = match.length;

  for (let i = 0; i < length; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (cardLogo === "amex") {
    if (parts[3]) {
      console.log("A");
      parts[2] = parts[2] + parts[3].substring(0, 1);
      parts[3] = parts[3].slice(2) + (parts[4] && parts[4]);
      console.log("B");
      if (parts[3].length === 5) parts.pop();
    }
  }
  if (parts.length) {
    return parts.join(" ");
  }
  return cardNum;
}
