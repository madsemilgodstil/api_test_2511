const url = 'NEXT_PUBLIC_SUPABASE_URL'

const api = 'NEXT_PUBLIC_SUPABASE_ANON_KEY'

async function getSubs () {
  let headersList = {
    Accept: '*/*',
    apikey: api,
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5taXlkdGZ4ZHVwZmN3aW1ncWxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI1MzQ4MjEsImV4cCI6MjA0ODExMDgyMX0.kxXrQ2kNPWjqYOnOgvFul63nEtNXMq5eCB87yz63P0A'
  }

  let response = await fetch('url', {
    method: 'GET',
    headers: headersList
  })

  let data = await response.json()
  console.log(data)
}
