import { AboutMain } from '@/components/AboutMain'
import { ContactSection } from '@/components/ContactSection'
import { Feedback } from '@/components/Feedback'
import { Flags } from '@/components/Flags'
import { HeroMain } from '@/components/HeroMain'
import { HowTo } from '@/components/HowTo'
import { Why } from '@/components/Why'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <HeroMain />
      <AboutMain />
      <HowTo />
      <Why />
      <Flags />
      {/* <Feedback /> */}
      <ContactSection />
    </main>
  )
}