export const currencyFormatter = (number: number, currency: string): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    maximumSignificantDigits: 1,
    currency,
  });

  return formatter.format(number);
};
