import Image from 'next/image'
import Subs from '@/components/getSub/GetSub'
import Newsletter from '@/components/newsletter/Newsletter'
// import Form from '@/components/form/Form'

async function Home () {
  return (
    <>
      {/* <Form /> */}
      <Newsletter />
      <Subs />
    </>
  )
}

export default Home
