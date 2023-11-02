export const PriceFormatter = (locale = 'en-US') => {
  return Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 10,
  });
}