import Head from 'next/head'
import Skeleton from '../components/layout'
import MainPage, { AboutPage, MotivationsPage, ProjectsPage, ServicesPage, SkillSetPage } from '../components/sections/_sections'
import TranslateDrop from '../components/sections/_translateDrop'
import DownloadLink from '../components/sections/_downloadBtn'
import SocialLinks from '../components/sections/_socialLinks.js'
import { useTranslation, useLanguageQuery } from "next-export-i18n";

const Home = (props) => {
  const { t } = useTranslation();

  
  return (  
    <Skeleton page = "home">
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://use.typekit.net/fqp8jsw.css" />
        <title>{t("common.page_titles.home")}</title>
         <link rel="icon" href="/favicon.ico" /> {/* CHANGE THIS */}
      </Head>
       <SocialLinks/>
      <DownloadLink/>
      <TranslateDrop/>
      <MainPage t = {t}/>
       <AboutPage t = {t}/>
      <MotivationsPage t = {t}/>
      <ServicesPage t = {t}/>
      <SkillSetPage t = {t}/> 
      <ProjectsPage t = {t}/>
      {/* <CertificationsPage /> */}

    </Skeleton>
  )
}


// export async function getServerSideProps(context) {
//   const lang = context.req.cookies['NEXT_LOCALE']

//   return {
//     props: {
//       lang: lang
//     },
//   }
// }

export default Home;
