import { Sidebar, TopMenu } from '@/components'

export default function ShopLayout ({ children }: {
 children: React.ReactNode;
}) {
  return (
    <main className=' min-h-screen'>
      <TopMenu />
      <Sidebar />
      <section className='px-0 sm:px-7'>
        {children}
      </section>
    </main>
  )
}
