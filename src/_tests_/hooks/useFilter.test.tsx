import { cryptoMock } from "@/mock/crypto";
import { Coin } from "@/interfaces/coins";
import useFilter from "@/hooks/useFilter";

describe('useFilter', () => {

    // Returns filtered data when given valid data and filter
    it('should return filtered data when given valid data and filter', () => {
      const { filterData } = useFilter();

      const filter = { symbol: 'BTC' };

      const result = filterData(cryptoMock, filter);

      expect(result).toEqual([{
        "id": "1",
        "symbol": "BTC",
        "name": "Bitcoin",
        "nameid": "bitcoin",
        "rank": 1,
        "price_usd": "6456.52",
        "percent_change_24h": "-1.47",
        "percent_change_1h": "0.05",
        "percent_change_7d": "-1.07",
        "price_btc": "1.00",
        "market_cap_usd": "111586042785.56",
        "volume24": 3997655362.9586277,
        "volume24a": 3657294860.710187,
        "csupply": "17282687.00",
        "tsupply": "17282687",
        "msupply": "21000000"
      }]);
    });

    // Returns unfiltered data when given valid data and empty filter
    it('should return unfiltered data when given valid data and empty filter', () => {
      const { filterData } = useFilter();

      const filter = {};

      const result = filterData(cryptoMock, filter);

      expect(result).toEqual(cryptoMock);
    });

    // Returns empty array when given empty data and empty filter
    it('should return empty array when given empty data and empty filter', () => {
      const { filterData } = useFilter();
      const data: Coin[] = [];
      const filter = {};

      const result = filterData(data, filter);

      expect(result).toEqual([]);
    });

    // Returns empty array when given undefined data and empty filter
    it('should return empty array when given undefined data and empty filter', () => {
      const { filterData } = useFilter();
      const data: Coin[] | undefined = undefined;
      const filter = {};

      const result = filterData(data, filter);

      expect(result).toEqual([]);
    });
});
