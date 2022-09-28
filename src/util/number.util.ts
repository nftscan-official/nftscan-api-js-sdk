export default function formatBigNumber(number: string | number, fractionDigits?: number) {
  const currentDigits = fractionDigits || 1;
  const rawNumber = Number(number);

  if (rawNumber < 1e3) {
    return rawNumber;
  }

  if (rawNumber < 1e6) {
    return `${(rawNumber / 1e3).toFixed(currentDigits)}k`;
  }

  return `${(rawNumber / 1e6).toFixed(currentDigits)}m`;
}
