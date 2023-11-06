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
      <h2>Crypto List page {page} </h2>
      <CoinList page={page} filter={searchParams} />
    </main>
  )
}
