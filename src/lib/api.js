const url = process.env.NEXT_PUBLIC_SUPABASE_URL

const api = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const headersList = {
  Accept: 'application/json',
  apikey: api,
  prefer: 'return=representation'
}

export async function getSubs () {
  const response = await fetch(url, {
    method: 'GET',
    headers: headersList
  })

  const data = await response.json()

  console.log(data)

  return data
}
