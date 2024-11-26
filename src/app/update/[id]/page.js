import { getSubsById } from '@/app/lib/supabase'

async function page ({ params }) {
  const { id } = await params

  const entry = await getSubsById

  return <di></di>
}
export default page
