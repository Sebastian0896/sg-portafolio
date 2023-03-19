import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import About from '@/components/about'
import Skills from '@/components/skills'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Layout title='Home Page'>
        <h1>Landing Page</h1>
        <About />
        <Skills />
     </Layout>
    </>
  )
}
