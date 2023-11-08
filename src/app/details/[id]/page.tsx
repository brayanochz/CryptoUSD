import useCryptoCurrency from "@/hooks/useCryptoCurrency"
import { PriceFormatter } from "@/utils/prices"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Details',
  description: 'CryptoUSD',
}

interface DetailsProps {
  params: { id: string },
}

export default async function Details({
  params: {
    id
  }
}: DetailsProps) {

  const { getCoinDetails } = useCryptoCurrency()

  const details = await getCoinDetails(id)

  const coinDetail = details[0]

  return (
    <>
      <header className="text-center p-6 text-white">
        <h1 className="text-3xl font-bold">Details of Bitcoin (BTC)</h1>
        <h3>{coinDetail.id}</h3>
      </header>

      <main className="p-4">
        <section className="max-w-4xl mx-auto bg-gray-800 shadow-md rounded p-6 my-6">
          <h2 className="text-2xl font-bold text-white mb-4">{coinDetail.name} ({coinDetail.symbol})</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Price USD:</h3>
              <p className="text-2xl font-bold">{PriceFormatter().format(parseFloat(coinDetail.price_usd))}</p>
            </div>
            <div>
              <h3 className="font-semibold">24h Change:</h3>
              <p className="text-red-600">{coinDetail.percent_change_1h}%</p>
            </div>
            <div>
              <h3 className="font-semibold">1h Change:</h3>
              <p className="text-green-600">{coinDetail.percent_change_24h}%</p>
            </div>
            <div>
              <h3 className="font-semibold">7d Change:</h3>
              <p>{coinDetail.percent_change_7d}%</p>
            </div>
            <div>
              <h3 className="font-semibold">Market Cap:</h3>
              <p>{PriceFormatter().format(parseFloat(coinDetail.market_cap_usd))}</p>
            </div>
            <div>
              <h3 className="font-semibold">Volume (24h):</h3>
              <p>{PriceFormatter().format(coinDetail.volume24)}</p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto p-6 my-6">
          <h2 className="text-2xl font-bold text-white mb-4">Markets</h2>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-2 mb-4">
              <div className="bg-gray-800 rounded shadow p-4 flex flex-col items-center">
                <h3 className="text-lg font-semibold">BitForex</h3>
                <p className="text-sm text-gray-400">BTC/USDT</p>
                <div className="my-2">
                  <span className="text-xl font-bold">$3,989.64</span>
                  <span className="text-sm text-gray-400">/ USD</span>
                </div>
                <div className="text-center py-2">
                  <div className="text-green-400">
                    <span className="font-bold">Volume:</span>
                    <span>$300M+</span>
                  </div>
                  <div className="text-gray-400 mt-1">
                    <span className="font-bold">Last Updated:</span>
                    <span>Just now</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-2 mb-4">
              <div className="bg-gray-800 rounded shadow p-4 flex flex-col items-center">
                <h3 className="text-lg font-semibold">bw</h3>
                <p className="text-sm text-gray-400">BTC/USDT</p>
                <div className="my-2">
                  <span className="text-xl font-bold">$3,991.30</span>
                  <span className="text-sm text-gray-400">/ USD</span>
                </div>
                <div className="text-center py-2">
                  <div className="text-green-400">
                    <span className="font-bold">Volume:</span>
                    <span>$235M+</span>
                  </div>
                  <div className="text-gray-400 mt-1">
                    <span className="font-bold">Last Updated:</span>
                    <span>Just now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
