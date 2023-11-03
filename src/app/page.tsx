import CoinList from "@/components/templates/CoinList";

interface HomeProps {
  params: { page: string }
}

export default function Home({
  params: { page }
}: HomeProps) {
  return (
    <main className="w-full h-screen p-6">

      <h2>Crypto List page {page} </h2>
      <CoinList page="1" />
    </main>
  )
}
