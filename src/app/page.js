import Image from 'next/image'

export function data () {
  const endpoint = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  async function fetchData () {
    const response = await fetch(endpoint, {
      headers: {
        apikey: key
      }
    })
    const data = await response.json()
    return data
  }
}

export default function Home () {
  const subscriber = 'data.navn'

  return (
    <div>
      <h1>{subscriber}</h1>
    </div>
  )
}
