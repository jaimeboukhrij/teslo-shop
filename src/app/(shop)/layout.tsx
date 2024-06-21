import { Sidebar, TopMenu } from '@/components'
import { Footer } from '@/components/ui/footer/Footer'

export default function ShopLayout ({ children }: {
 children: React.ReactNode;
}) {
  return (
    <main className=' min-h-screen pb-6'>
      <TopMenu />
      <Sidebar />
      <section className='px-0 md:px-7'>
        {children}
      </section>
      <Footer />
    </main>
  )
}
