import { Inter } from 'next/font/google'
import Layout from '@/app/layout'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <About />
        <Skills />
        <Projects />
    </>
  )
}
