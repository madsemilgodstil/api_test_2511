'use client'
import { useEffect, useState } from 'react'

export default function Home () {
  // State to store subscriber data
  const [subscribers, setSubscribers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData () {
      const endpoint =
        process.env.NEXT_PUBLIC_SUPABASE_URL + '/rest/v1/subscriptions?select=*'
      const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

      try {
        // Fetch data from Supabase
        const response = await fetch(endpoint, {
          headers: {
            apikey: key,
            Authorization: `Bearer ${key}` // Authentication
          }
        })

        if (!response.ok) {
          throw new Error('Failed to fetch data from Supabase')
        }

        const data = await response.json()
        setSubscribers(data) // Update state with fetched data
      } catch (error) {
        console.error('Error fetching subscribers:', error)
      } finally {
        setLoading(false) // Stop loading indicator
      }
    }

    fetchData()
  }, [])

  if (loading) return <div>Loading...</div> // Show loading message while fetching

  return (
    <div>
      <h1>Subscribers</h1>
      {/* Render list of subscribers */}
      <ul>
        {subscribers.length > 0 ? (
          subscribers.map(subscriber => (
            <li key={subscriber.id}>
              <strong>{subscriber.name}</strong> - {subscriber.email}
            </li>
          ))
        ) : (
          <li>No subscribers found.</li>
        )}
      </ul>
    </div>
  )
}
