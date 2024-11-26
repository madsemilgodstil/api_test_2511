import { getSubById, patchSub, deleteSub } from '@/lib/supabase'
import { redirect } from 'next/navigation'

export default async function updateSubscriber ({ params }) {
  const { id } = await params
  const [subscriber] = await getSubById(id)

  async function update (formData) {
    'use server'

    const dataToUpdate = {
      navn: formData.get('name'),
      email: formData.get('email')
    }

    await patchSub(id, dataToUpdate)
    redirect('/')
  }

  async function handleDelete () {
    'use server'
    await deleteSub(id)
    redirect('/')
  }

  return (
    <div className='max-w-3xl mx-auto p-6 flex flex-col gap-8'>
      <h1 className='text-3xl font-bold text-gray-800 mb-6'>
        Rediger Subscriber
      </h1>

      <form
        action={update}
        className='w-full bg-white p-8 rounded-lg shadow-lg'
      >
        <div className='mb-6'>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-700 mb-2'
          >
            Navn
          </label>
          <input
            type='text'
            id='name'
            name='name'
            defaultValue={subscriber.navn}
            className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700 mb-2'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            defaultValue={subscriber.email}
            className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
          />
        </div>
        <button
          type='submit'
          className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1'
        >
          Gem
        </button>
      </form>

      <button
        onClick={handleDelete}
        className='w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 mt-4'
      >
        Slet
      </button>
    </div>
  )
}
