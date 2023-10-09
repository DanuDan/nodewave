import SectionCanBeMade from '@/components/Section/CanBeMade'
import SectionHero from '@/components/Section/Hero'
import SectionHowWeWork from '@/components/Section/HowWeWork'
import SectionOurWork from '@/components/Section/OurWork'
import SectionProduct from '@/components/Section/Product'
import SectionStart from '@/components/Section/Start'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='min-h-screen w-full bg-black'>
      <SectionHero />
      <SectionProduct />
      <SectionOurWork />
      <SectionHowWeWork />
      <SectionCanBeMade />
      <SectionStart />
    </main>
  )
}
