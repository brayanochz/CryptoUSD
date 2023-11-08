import { Coin } from "@/interfaces/coins";
import { FilterType } from "@/types";

/**
 * The `useFilter` hook provides a function for filtering an array of `Coin` objects based on specified filter criteria.
 * It allows you to filter coins by various properties while ignoring the "currency" filter.
 *
 * @returns {{
*   filterData: (data?: Coin[], filter?: FilterType) => Coin[]
* }} - An object containing a `filterData` function for filtering coin data.
*/
const useFilter = () => {

  /**
   * The `filterData` function filters an array of `Coin` objects based on the provided filter criteria.
   *
   * @param {Coin[]} [data] - An optional array of `Coin` objects to be filtered.
   * @param {FilterType} [filter] - An optional filter object specifying criteria for filtering.
   * @returns {Coin[]} - An array of `Coin` objects that match the filter criteria.
   */
  const filterData = (data?: Coin[], filter?: FilterType) => {
    if (!data) return []
    if (!filter) return data
    const arrayFilter = Object.keys(filter).filter((filterName) => {
      return filterName !== 'currency'
    })

    // Apply the specified filters to the data using `reduce`
    const filteredData = arrayFilter.length > 0 ? arrayFilter.reduce<Coin[]>(
      (previous, current) => {
        const currentKey = current as keyof Coin
        if (previous?.length <= 0) {
          // For the first filter, directly filter the data
          return data.filter((coin: Coin) => {
            return coin[currentKey]?.toString().toLowerCase().includes((filter[current] as string)?.toString().toLowerCase())
          })
        }
        // For subsequent filters, filter the previously filtered data
        return previous.filter((coin: Coin) => {
          if (current === undefined) return coin
          return coin[currentKey]?.toString().toLowerCase().includes((filter[current] as string)?.toString().toLowerCase())
        })
      },
      []
    ) : data

    return filteredData
  }

  return {
    filterData
  }
};

export default useFilter;