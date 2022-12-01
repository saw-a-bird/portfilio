import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import MainPage, { AboutPage, MotivationsPage, ProjectsPage, ServicesPage, SkillSetPage } from '../components/sections'
import SocialLinks from '../components/_socialLinks.js'

export default function Home() {
  return (  
    <Layout home>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://use.typekit.net/fqp8jsw.css" />
        <title>{siteTitle}</title>
         <link rel="icon" href="/favicon.ico" /> {/* CHANGE THIS */}
      </Head>
      <SocialLinks/>
      <MainPage />
      <AboutPage />
      <MotivationsPage />
      <ServicesPage />
      <SkillSetPage />
      <ProjectsPage />
    </Layout>
  )
}