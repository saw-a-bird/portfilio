import Head from 'next/head'
import { withTranslation } from 'react-i18next'
import Skeleton from '../components/layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
// import MainPage, { AboutPage, CertificationsPage, MotivationsPage, ProjectsPage, ServicesPage, SkillSetPage } from '../components/sections/_sections'
import DownloadLink from '../components/sections/_downloadBtn'
import SocialLinks from '../components/sections/_socialLinks.js'
import MainPage, { AboutPage, MotivationsPage, ProjectsPage, ServicesPage, SkillSetPage } from '../components/sections/_sections'
import TranslateDrop from '../components/sections/_translateDrop'
import { useRouter } from "next/router";
import { i18n } from '../next-i18next.config'


const Home = ({t}) => {
  
  return (  
    <Skeleton page = "home">
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://use.typekit.net/fqp8jsw.css" />
        <title>{t("home")}</title>
         <link rel="icon" href="/favicon.ico" /> {/* CHANGE THIS */}
      </Head>
       <SocialLinks/>
      <DownloadLink/>
      <TranslateDrop/>
      <MainPage />
       <AboutPage />
      <MotivationsPage />
      <ServicesPage />
      <SkillSetPage /> 
      <ProjectsPage />
      {/* <CertificationsPage /> */}

    </Skeleton>
  )
}

export async function getServerSideProps(context) {
  const lang = context.req.cookies['NEXT_LOCALE'] 
  console.log(lang)

  return {
    props: {
      ...await serverSideTranslations(lang? lang : i18n.defaultLocale, ['common', 'navigation', 'personal_info'])
    },
  }
}

export default withTranslation("common", { keyPrefix: 'page_titles' , useSuspense: true})(Home)
