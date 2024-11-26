import Image from 'next/image'
import Subs from '@/components/getSub/GetSub'
import Newsletter from '@/components/newsletter/Newsletter'

async function Home () {
  return (
    <>
      <Newsletter />
      <Subs />
    </>
  )
}

export default Home
