import { auth } from '@/auth.config'
import { redirect } from 'next/navigation'

export default async function ProfilePage () {
  const session = await auth()
  if (!session) redirect('/')

  return (
    <div>
      <pre>
        {JSON.stringify(session, null, 2)}
      </pre>
      <h3>
        {session.user.role}
      </h3>
    </div>
  )
}
