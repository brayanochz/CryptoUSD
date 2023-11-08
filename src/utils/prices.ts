export const PriceFormatter = (locale = 'en-US') => {
  return Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 10,
    minimumFractionDigits: 2,
    maximumFractionDigits: 6
  });
}