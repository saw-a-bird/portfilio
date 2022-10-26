import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function Home() {
  return (  
    <Layout test>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://use.typekit.net/fqp8jsw.css" />
        <title>{siteTitle}</title>
         <link rel="icon" href="/favicon.ico" /> {/* CHANGE THIS */}
      </Head>
      <p> test </p>
    </Layout>
  )
}