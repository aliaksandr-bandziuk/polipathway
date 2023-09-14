import { AboutMain } from '@/components/AboutMain'
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
    </main>
  )
}