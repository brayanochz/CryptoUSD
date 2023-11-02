export async function GET(request: Request) {
  console.log(process.env.CRYPTOCURRENCY_API)
  const apiUrl = `${process.env.CRYPTOCURRENCY_API}${process.env.CRYPTOCURRENCY_COIN_ENDPOINT}`
  const res = await fetch(apiUrl || '', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()
 
  return Response.json(data)
}