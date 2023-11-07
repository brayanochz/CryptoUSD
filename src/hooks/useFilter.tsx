import { Coin } from "@/interfaces/coins";
import { FilterType } from "@/types";

const useFilter = () => {

  const filterData = (data: Coin[], filter: FilterType) => {
    const arrayFilter = Object.keys(filter).filter((filterName) => {
      return filterName !== 'currency'
    })

    const filteredData = arrayFilter.length > 0 ? arrayFilter.reduce<Coin[]>(
      (previous, current) => {
        const currentKey = current as keyof Coin
        if (previous?.length <= 0) {
          return data.filter((coin: Coin) => {
            return coin[currentKey]?.toString().toLowerCase().includes((filter[current] as string)?.toString().toLowerCase())
          })
        }
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