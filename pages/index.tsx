import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-scroll z-0'>
      <Head>
        <title>Dominik&apos;s portfolio</title>
      </Head>
      {/* testing the initial tailwind config */}
      {/* <h1 className='p-10 text-red-500'>Lets build  an AWESOME portfolio</h1> */}

      {/* Header */}
      <Header/>

      {/* Hero */}
      <section id="hero" className='snap-center'>
      <Hero/>
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}

    </div>
  )
}

export default Home
