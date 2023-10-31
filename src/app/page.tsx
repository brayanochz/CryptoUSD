
export default function Home() {
  return (
    <main className="w-full h-screen p-6">

      <h2>Crypto List</h2>
      <section className="relative overflow-x-auto w-full">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase  dark:text-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-100/10 dark:bg-gray-700/10 rounded-l-lg">Id</th>
              <th scope="col" className="px-6 py-3 bg-gray-100/10 dark:bg-gray-700/10">Name</th>
              <th scope="col" className="px-6 py-3 bg-gray-100/10 dark:bg-gray-700/10">Symbol</th>
              <th scope="col" className="px-6 py-3 bg-gray-100/10 dark:bg-gray-700/10 rounded-r-lg">Price</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
          <tfoot>
            <tr>
              <td>
                <button>Load More</button>
              </td>
              <td>
                Footer
              </td>
            </tr>
          </tfoot>
        </table>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 rounded-l-lg">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3 rounded-r-lg">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:bg-gray-800">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple MacBook Pro 17&quot;
              </th>
              <td className="px-6 py-4">
                1
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">
                1
              </td>
              <td className="px-6 py-4">
                $1999
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">
                1
              </td>
              <td className="px-6 py-4">
                $99
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="font-semibold text-gray-900 dark:text-white">
              <th scope="row" className="px-6 py-3 text-base">Total</th>
              <td className="px-6 py-3">3</td>
              <td className="px-6 py-3">21,000</td>
            </tr>
          </tfoot>
        </table>
      </section>
    </main>
  )
}
