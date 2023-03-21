import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import About from '@/components/about'
import Skills from '@/components/skills'
import Projects from '@/components/projects'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Layout title='Home Page'>
        <About />
        <Skills />
        <Projects />
     </Layout>
    </>
  )
}
