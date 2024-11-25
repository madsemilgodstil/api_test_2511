import Image from 'next/image'
import Subs from '@/components/getSub/GetSub'
import Form from '@/components/form/Form'

async function Home () {
  return (
    <>
      <Form />
      <Subs />
    </>
  )
}

export default Home
