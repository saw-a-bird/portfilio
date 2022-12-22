import { useEffect, useState } from 'react';
import ReactVisibilitySensor from 'react-visibility-sensor';
import { CircularProgressbar } from 'react-circular-progressbar';
import sectionsCSS from '../../styles/sections.module.css'
import skillsetCSS from '../../styles/skillset.module.css'
import jumpTo from '../jump';
import EmblaCarousel from '../embaCarousel';
import { GradientSVG } from '../gradientSVG';
import { withTranslation } from "../../next-i18next.config.js"
import Details from '../../public/json/details.json'
import { useTranslation } from 'react-i18next';
// certifications + achievements + professional experiences + blog + email professionel + lettre de motivation

export const PageSection = (props) => {
    const { t } = useTranslation('navigation');

    return(<section className="mt-[100vh] h-[100vh] flex content-center" id={ props.name } >
        <div className = {`bg-black/[.6] h-fit my-auto ${sectionsCSS.page_section} w-full py-5 ${props.paddingB != null? "pb-"+props.paddingB: ""} font-mono text-white text-xl`}>
            <h2 className={ ` ${sectionsCSS.blinking} ${sectionsCSS.header} text-6xl md:text-4xl font-extrabold mb-8 text-center `}>
                {t(props.name)}
            </h2>

            <div className={ props.children_classes != undefined? props.children_classes : "w-2/3 sm:w-5/6 mx-auto" }>
                {props.children}
            </div>
        </div>
    </section>)
};

const MainPage = () => { 
    const { t } = useTranslation('personal_info', { keyPrefix: 'main' });

    return( <section id = "main" className="h-screen">
        <div className="h-full rounded-3xl bg-base-300 shadow-[0_0_5px_4px_rgba(10,10,10,0.3)] flex justify-center items-center text-center color-white p-8 cursor-pointer select-none"
        onClick={() => {jumpTo('#about')}}>
    
          <div className={`font-bold text-gradient bg-gradient-to-tl from-green-100 via-white to-gray-400 animate-gradient-x ${sectionsCSS.blinking}`}>
    
            <h1 className="text-gradient md:text-2xl text-4xl ">
              {t("introduction")}
            </h1>
            <h2 className="text-gradient md:text-xl text-2xl ">
              {t("description")}
            </h2>
            <h3 className="font-normal text-gradient hover:font-medium md:text-md text-xl mt-8" >
              {t("scroll")}
            </h3>
          </div>
        </div>
      </section>);
}

export default MainPage;

export const AboutPage = () => {
  const { t, i18n, ready  } = useTranslation('personal_info', { keyPrefix: 'about', useSuspense: false });

  if (ready) {
    return (<PageSection name="about" paddingB = "-4">
      <div className= {sectionsCSS.aboutSection}>
        <h3 className='font-extrabold'>{t("hello")}, </h3>
        <div className = "md:text-[14px]" dangerouslySetInnerHTML={{ __html: t("content") }}></div>
      </div>
    </PageSection>)
  } else {
  return (<PageSection name="about" paddingB = "-4">
      <div className= {sectionsCSS.aboutSection}>
        <h3 className='font-extrabold'>Loading... </h3>
      </div>
    </PageSection>);
  }
  
}

export const MotivationsPage = () => {
  const { t, i18n, ready  } = useTranslation('personal_info', { useSuspense: false });
  
  if (ready) {
    return (<PageSection name="motivations" paddingB = "-4">
    <div className= {sectionsCSS.aboutSection}>
      <h3 className="font-extrabold"> </h3>
      <div className = "md:text-[14px]" dangerouslySetInnerHTML={{ __html: t("motivations") }}></div>
    </div>
  </PageSection>);
  } else {
  return (<PageSection name="motivations" paddingB = "-4">
      <div className= {sectionsCSS.aboutSection}>
        <h3 className='font-extrabold'>Loading... </h3>
      </div>
    </PageSection>);
  }
};


export const ServicesPage = () => {
  const { t, i18n, ready  } = useTranslation('personal_info', { useSuspense: false });
  
  if (ready)
    return (<PageSection name="services" children_classes = "w-full lg:w-3/3 mx-auto">
      <div className={sectionsCSS.servicesList + " flex flex-wrap text-white gap-10 justify-center sm:mt-14 mt-20"}>
      {t("services", { returnObjects: true }).map((item, i) => (
        <div key = {i} className = "border border-white rounded-xl bg-slate-800/25 sm:p-5 p-10 flex items-center">
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6 mr-3' dangerouslySetInnerHTML={{ __html: Details.services_icons[i] }}></svg>
          <h1 className = "text-[15px]" > {item} </h1>
        </div>
      ))}
      </div>
  </PageSection>) 
  else 
    return (<PageSection name="services" children_classes = "w-full lg:w-3/3 mx-auto">
        <h3 className='font-extrabold'>Loading... </h3>
    </PageSection>);
}


export const SkillSetPage = () => {
  const { t, i18n, ready  } = useTranslation(['personal_info', "common"], { useSuspense: false });

  function PersonalSkills() {
    var scales ={
      excellent: t("common.extra.technologies.scales.excellent"),
      good: t("common.extra.technologies.scales.good"),
      basic: t("common.extra.technologies.scales.basic")
    }

    const getValueCSS = (value) => {
      switch (value) {
        case "excellent":
          return skillsetCSS.valueGood
        case "good":
          return skillsetCSS.valueNormal
        case "basic":
          return skillsetCSS.valueBasic
      } 
    }

    return (
      <div className="w-1/2 sm:mr-0 mr-5">
        <h3 className = "text-2xl md:text-base text-center">{t("common.extra.technologies.titles.PersonalSkills")}</h3>

            {/* Skills */}
            {Object.entries(Details.toolset.technologies).map(([k,v]) => (
              <div key = {k} className = "mt-5">
                <h5 className = {skillsetCSS.skillTitle}>{t("common.extra.technologies.titles."+k)}:</h5> 
                <div className = {skillsetCSS.talents+" flex flex-wrap mt-2 gap-2 [&>div]:border [&>div]:border-white [&>div]:rounded-xl [&>div]:px-2"}>
                  {v.map(item => (
                      <div key = {item.name} className = {`${skillsetCSS.valueBox} ${getValueCSS(item.value)}`}>{item.name}</div>
                    ))}   
                </div>
              </div>
            ))}

            {/* Legend */}
            <div className={`${skillsetCSS.legendScale} flex flex-row gap-3 mt-8`}>
              <span><span className={`${skillsetCSS.box} ${skillsetCSS.valueGood}`}></span> <span className = {skillsetCSS.scale}>{scales.excellent}</span></span>
              <span><span className={`${skillsetCSS.box} ${skillsetCSS.valueNormal}`}></span> <span className = {skillsetCSS.scale}>{scales.good}</span></span>
              <span><span className={`${skillsetCSS.box} ${skillsetCSS.valueBasic}`}></span> <span className = {skillsetCSS.scale}>{scales.basic}</span></span>
            </div>
        </div>);
  }

  function ProfessionalSkills() {
    const [visibility, setVisibility] = useState(false);

    return (
      <div className="text-center w-1/2 ml-5 pl-5 sm:ml-0 sm:pl-0 sm:mr-1">
        <h3 className = "text-2xl md:text-base">{t("common.extra.technologies.titles.ProfessionalSkills")}</h3>
        <GradientSVG/>
        <ReactVisibilitySensor
          onChange={(isVisible) => {
            setVisibility(isVisible);
          }}  
        >
          <div className = "flex flex-wrap gap-y-8 sm:gap-x-5 gap-x-8 mt-8 w-full justify-center">
            {Details.toolset.personal.map(item => (
              <div key = {item.name} className = {skillsetCSS.progressBox}>
                {/* <ChangingProgressProvider values={[0, visibility == true? item.value : 0]}>
                  {percentage => ( */}
                      <CircularProgressbar
                        strokeWidth={6}
                        value={visibility == true? item.value : 0}
                        text={visibility == true? item.value+"%" : 0}
                        styles={{
                          // Customize the text
                          text: {
                            // Text color
                            fill: 'rgb(171 171 171)',
                            // Text size
                            fontSize: '14px',
                          },
                          path: { stroke: `url(#hello)` },
                          trail: {
                            stroke: "#1e1e1e"
                          }
                        }}
                      />
                  {/* )}
                </ChangingProgressProvider> */}
                <h1 className = {`mt-1 ${skillsetCSS.circleTitle}`}>{t("personal_info.qualities."+item.name)}</h1>
              </div>
            ))}
          </div>
        </ReactVisibilitySensor>
      </div>);
  }

  if (ready)
    return (
      <PageSection name="skillset" paddingB="0" children_classes = "w-full lg:w-3/3 mx-auto flex justify-between pt-1">
          <PersonalSkills />
          <ProfessionalSkills />
      </PageSection>);
  else 
  return (
    <PageSection name="skillset" paddingB="0" children_classes = "w-full lg:w-3/3 mx-auto flex justify-between pt-1">
      <h3 className='font-extrabold'>Loading... </h3>
    </PageSection>);
};

export const CertificationsPage = () => (
  <PageSection name="certifications" children_classes = "w-full lg:w-3/3 mt-5">
  <div className= {sectionsCSS.projectsSection}>
    <EmblaCarousel length = {Info.certifications.length}>
      {Info.certifications.map(item => (
        <div className="text-center p-10 flex justify-between flex-col" key={item.title}>
            <h1 className = "md:text-xl text-2xl font-bold">{item.title}</h1>
            <span className = "md:text-base md:my-10 my-5">{item.description}</span>
            <div className = {sectionsCSS.c_bottom_div}>
              <div className = {sectionsCSS.c_item_btns_box}>
                { item.proof != undefined && <p className = {sectionsCSS.c_item_link + " mt-5"}><a href = {item.proof}> Proof</a></p>}
              </div>
            </div>

        </div>
      ))}
    </EmblaCarousel>
  </div>
</PageSection>
);

export const ProjectsPage = () => {
    const { t, i18n, ready  } = useTranslation(['personal_info', 'common'], { useSuspense: false });

    if (ready) {
      var projects  = t('personal_info.projects', { returnObjects: true });
      return(<PageSection name="projects" children_classes = "w-full lg:w-3/3 mt-5">
        <div className= {sectionsCSS.projectsSection}>
          <EmblaCarousel length = {projects.length}>
            {projects.map(item => (
              <div className="text-center p-10 flex justify-between flex-col" key={item.title}>
                  <h1 className = "md:text-xl text-2xl font-bold">{item.title}</h1>
                  <span className = "md:text-base md:my-10 my-5">{item.description}</span>
                  <div className = {sectionsCSS.c_bottom_div}>
                    <div className = {sectionsCSS.c_tech+" "+skillsetCSS.talents+" flex flex-wrap gap-2 [&>div]:border [&>div]:border-white [&>div]:rounded-xl [&>div]:px-2"}>
                      {Object.entries(item.technologies).map(([k, item]) => (
                            <div key = {k} className = {skillsetCSS.valueBox}>{item}</div>
                      ))}
                    </div>
                    <div className = {sectionsCSS.c_item_btns_box}>
                      { item.website != undefined && <p className = {sectionsCSS.c_item_link + " mt-5"}><a href = {item.website}> {t("common.extra.website")}</a></p>}
                      <p className = {(item.source == false? sectionsCSS.c_item_disabled_link : sectionsCSS.c_item_link) + " " + "mt-5"}><a href = {item.source == false ? "#": item.source}> {t("common.extra.source")}</a></p>
                    </div>
                  </div>

              </div>
            ))}
          </EmblaCarousel>
        </div>
      </PageSection>);
    } else 
    return (
      <PageSection name="projects" children_classes = "w-full lg:w-3/3 mt-5">
        <h3 className='font-extrabold'>Loading... </h3>
      </PageSection>);
};