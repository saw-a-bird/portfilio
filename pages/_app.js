import '../styles/globals.css'  
import { appWithTranslation } from 'next-i18next'
import nextI18NextConfig from '../next-i18next.config'
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next.use(LanguageDetector).init({
  detection: nextI18NextConfig,
});

// import '../styles/globals.css'
// import App from 'next/app'

 function MyApp({ Component, pageProps }) {   
    return <Component 
        {...pageProps} 
    /> 
}   


// MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

// https://github.com/i18next/next-i18next#unserialisable-configs
export default appWithTranslation(MyApp, nextI18NextConfig )