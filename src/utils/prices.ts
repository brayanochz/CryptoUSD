/**
 * The `PriceFormatter` function creates an International Number Format instance for formatting prices in a specified locale.
 * It formats numbers as currency values in USD, with a maximum of 6 decimal places and a minimum of 2 decimal places.
 *
 * @param {string} [locale='en-US'] - The locale for formatting the price. Defaults to 'en-US'.
 * @returns {Intl.NumberFormat} - An International Number Format instance for formatting prices.
 */
export const PriceFormatter = (locale: string = 'en-US'): Intl.NumberFormat => {
  return Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 10,
    minimumFractionDigits: 2,
    maximumFractionDigits: 6
  });
}

/**
 * The `PriceFormatterCompact` function creates an International Number Format instance for formatting compact prices in a specified locale.
 * It formats numbers as compact currency values in USD, with a maximum of 6 decimal places and a minimum of 2 decimal places.
 *
 * @param {string} [locale='en-US'] - The locale for formatting the compact price. Defaults to 'en-US'.
 * @returns {Intl.NumberFormat} - An International Number Format instance for formatting compact prices.
 */
export const PriceFormatterCompact = (locale: string = 'en-US'): Intl.NumberFormat => {
  return Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 10,
    minimumFractionDigits: 2,
    maximumFractionDigits: 6,
    compactDisplay: 'short',
    notation: "compact"
  });
}