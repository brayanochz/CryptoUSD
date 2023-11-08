import CoinList from "@/components/templates/CoinList";

interface HomeProps {
  params: { page: string },
  searchParams: { [key: string]: string | string[] | undefined },
}

export default async function Home({
  params: { page },
  searchParams
}: HomeProps) {
  return (
    <main className="w-full h-screen p-6">
      <header className="text-center p-6 text-white">
        <h1 className="text-3xl font-bold">CryptoUSD</h1>
      </header>
      <CoinList page={page} filter={searchParams} />
    </main>
  )
}
