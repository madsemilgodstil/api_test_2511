const url = process.env.NEXT_PUBLIC_SUPABASE_URL

const api = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const headersList = {
  Accept: 'application/json',
  apikey: api,
  prefer: 'return=representation'
}

async function getSubs () {
  let response = await fetch('url', {
    method: 'GET',
    headers: headersList
  })

  let data = await response.json()
  console.log(data)
}
