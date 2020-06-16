export function getExpYears(startingYear) {
  let years = [];
  for (let i = 0; i <= 11; i++) {
    years.push(startingYear + i);
  }
  return years;
}

export function transformCardNum(cardNum) {
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
