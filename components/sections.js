
import jumpTo from './_jump';
import Info from '../public/json/personal_info.json'
import sectionsCSS from '../styles/sections.module.css'
import { useState } from 'react';
import ReactVisibilitySensor from 'react-visibility-sensor';
import { GradientSVG } from './GradientSVG';
import { CircularProgressbar } from 'react-circular-progressbar';
import EmblaCarousel from './EmbaCarousel.js';

export const PageSection = (props) => (
      <section className="mt-[100vh] h-[100vh] flex content-center" id={ props.name.toLowerCase() } >
          <div className = {`bg-black/[.6] mx-40 h-fit my-auto p-10 w-full py-5 ${props.paddingB != null? "pb-"+props.paddingB: ""} font-mono text-white text-xl`}>
              <h2 className={ ` ${sectionsCSS.blinking} ${sectionsCSS.header} text-4xl sm:text-7xl font-extrabold mb-8 text-center `}>
                  {props.name}
              </h2>

              <div className={ props.children_classes != undefined? props.children_classes : "sm:w-5/6 md:w-4/6 lg:w-2/3 mx-auto" }>
                  {props.children}
              </div>
          </div>
      </section>
);

const MainPage = () => (
      <section id = "main" className="h-screen">
        <div className="h-full rounded-3xl bg-base-300 shadow-[0_0_5px_4px_rgba(10,10,10,0.3)] flex justify-center items-center text-center color-white p-8 cursor-pointer select-none"
        onClick={() => {jumpTo('#about')}}>
    
          <div className={`font-bold text-gradient bg-gradient-to-tl from-green-100 via-white to-gray-400 animate-gradient-x ${sectionsCSS.blinking}`}>
    
            <h1 className="text-gradient text-2xl sm:text-4xl">
              Hi! I'm Mahdi Abdelkebir. 
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gradient">
              I'm a software developer.
            </h2>
            <h3 className="font-normal text-md sm:text-xl mt-8 text-gradient hover:font-medium">
              Scroll down for more details.
            </h3>
    
          </div>
        </div>
      </section>
);
export default MainPage;


export const AboutPage = () => (
    <PageSection name="About" paddingB = "-4">
      <h3 className="font-extrabold">
      Hello,
      </h3>
      <div dangerouslySetInnerHTML={{ __html: Info.about }}></div>
    </PageSection>
);

export const ServicesPage = () => (
    <PageSection name="Services" children_classes = "w-full lg:w-3/3 mx-auto">
      <div className={sectionsCSS.servicesList + " flex flex-wrap text-white gap-10 justify-center mt-20"}>
        <div className = "border border-white rounded-xl bg-slate-800/25 p-10 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <h1> UI Design </h1>
        </div>

        <div className = "border border-white rounded-xl bg-slate-800/25 p-10 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg>
          <h1> Web Development </h1>
        </div>

        <div className = "border border-white rounded-xl bg-slate-800/25 p-10 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className  ="w-6 h-6 mr-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
          </svg>
          <h1> Desktop App Development </h1>
        </div>
        
        <div className = "border border-white rounded-xl bg-slate-800/25 p-10 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-3"> 
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg>
          <h1> Mobile App Development </h1>
        </div>
      </div>
    </PageSection>
);


export const SkillSetPage = () => {

  const PSection = () => {
    const [visibility, setVisibility] = useState(false);

    return (
      <>
      <ReactVisibilitySensor
        onChange={(isVisible) => {
          setVisibility(isVisible);
        }}  
      >
        <div className = "flex flex-wrap gap-x-8 gap-y-8 mt-8 w-full justify-center">
          {Info.toolset.personal.map(item => (
            <div key = {item.name} className = "w-1/4">
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
              <h1 className = "text-base mt-1">{item.name}</h1>
            </div>
          ))}
        </div>
      </ReactVisibilitySensor>
    </>);
  }
  
  const getValueCSS = (value) => {
    switch (value) {
      case "good":
        return sectionsCSS.valueGood
      case "normal":
        return sectionsCSS.valueNormal
      case "basic":
        return sectionsCSS.valueBasic
    } 
  }

  return (
    <PageSection name="Skillset" paddingB="0" children_classes = "w-full lg:w-3/3 mx-auto flex justify-between pt-1">
      <div className="w-1/2  mr-5">
        <h3 className = "text-1xl text-center">Personal Skills</h3>
        {Object.entries(Info.toolset.technologies).map(([k,v]) => (
          <div key = {k} className = "mt-5">
            <h5>{k}:</h5>
            <div className = {sectionsCSS.talents+" flex flex-wrap mt-2 gap-2 [&>div]:border [&>div]:border-white [&>div]:rounded-xl [&>div]:px-2"}>
              {v.map(item => (
                  <div key = {item.name} className = {getValueCSS(item.value)}>{item.name}</div>
                ))}   
            </div>
          </div>
        ))}
        <div className={`${sectionsCSS.legendScale} flex flex-row gap-3 mt-8`}>
          <span><span className={`${sectionsCSS.box} ${sectionsCSS.valueGood}`}></span> <span className = {sectionsCSS.scale}>Good</span></span>
          <span><span className={`${sectionsCSS.box} ${sectionsCSS.valueNormal}`}></span> <span className = {sectionsCSS.scale}>Normal</span></span>
          <span><span className={`${sectionsCSS.box} ${sectionsCSS.valueBasic}`}></span> <span className = {sectionsCSS.scale}>Basic</span></span>
        </div>
      </div>
      
      <div className="text-center w-1/2 ml-5 pl-5">
        <h3 className = "text-1xl">Professional Skills</h3>
        <GradientSVG/>
        <PSection />
      </div>
    </PageSection>);
}


export const ProjectsPage = () => (
    <PageSection name="Projects" children_classes = "w-full lg:w-3/3 mt-5">
        <EmblaCarousel length = {Info.projects.length}>
          {Info.projects.map(item => (
            <div className="text-center p-10 flex justify-between flex-col" key={item.title}>
                <h1 className = "text-2xl font-bold mb-5">{item.title}</h1>
                <span className = "my-5">{item.description}</span>
                  <p className = {sectionsCSS.c_item_link + " mt-5"}><a href = {item.link}> View Project</a></p>
            </div>
          ))}
        </EmblaCarousel>
    </PageSection>
);