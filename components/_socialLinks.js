import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Info from '../public/json/personal_info.json';
// import {  faContao, faFacebookF , faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import barCSS from '../styles/bar_social.module.css'
// import socialCSS from '../styles/floating_social.module.css'
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@material-ui/lab";
import { ContactMail, Facebook, GitHub, LinkedIn } from "@material-ui/icons";

  
const actions = [
  { id: barCSS.fb, label: "Facebook", icon: <Facebook />, link: Info.links.fb , width: 'w-5', color: "#4267B2"},
  { id: barCSS.linkedin, label: "LinkedIn",icon: <LinkedIn />, link: Info.links.linkedin , width: 'w-6', color: "#2867B2"},
  { id: barCSS.git, label: "Github",icon: <GitHub />, link: Info.links.github, width: 'w-7', color: "#333"}
];



const SocialLinks = () => {
  const [isMobile, setIsMobile] = useState(false)


  // create an event listener
  useEffect(() => {
    function handleResize() {
      return (window.innerWidth < 720);
    }   
    setIsMobile(handleResize())

    window.addEventListener("resize", () => {
      setIsMobile(handleResize())
    })
  });

  if (isMobile) {
    return <Floating />;
  } else {
    return <SideBar />;
  }
};

const Floating = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (

      <SpeedDial
      onOpen={handleOpen}
        onClose={handleClose}
        className = {barCSS.floatingBtn}
      ariaLabel="Contact"
      open={open}
      direction="up"
      icon={<SpeedDialIcon openIcon={<ContactMail />} />}
    >
      {actions.map((action) => {
        // let icon = (
        //   <span style={{
        //     color: action.color
        //   }}>{action.icon}</span>
        // );
        return <SpeedDialAction
          key={action.label}
          icon={action.icon}
          tooltipTitle={action.label}
          onClick={() => {
            window.location.href = action.link;
          }}
        />
      })}
    </SpeedDial>
  // </div>
  );
};


const SideBar = ()  => (
  <nav className = {`${barCSS.nav} lg:hidden block`}>
      <ul>
        {actions.map((action) => (
          <li id = {action.id} key = {action.label}>
              <a href={action.link}>
                  {/* <span style={{fontSize: "2em"}}> */}
                    {action.icon}
                    {/* </span> */}
                  {/* <FontAwesomeIcon icon={action.icon} className = {`${action.width} ${barCSS.icon}`}/> */}
                  <span>{action.label}</span>
              </a>
          </li>
        ))}
      </ul>
  </nav>
);

export default SocialLinks;