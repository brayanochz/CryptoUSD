import CoinList from "@/components/templates/CoinList";

interface HomeProps {
  params: { page: string }
}

export default async function Home({
  params: { page }
}: HomeProps) {
  return (
    <main className="w-full h-screen p-6">

      <h2>Crypto List page {page} </h2>
      <CoinList page={page} />
    </main>
  )
}
