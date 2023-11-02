import { CryptocurrencyClient } from "@/services/CryptocurrencyClient"

export async function GET() {
  const cryptocurrencyClient = new CryptocurrencyClient()
 
  const data = await cryptocurrencyClient.getCoins('1')
 
  return Response.json(data)
}