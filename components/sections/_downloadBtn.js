import React, { useEffect, useState } from "react";
import downloadcss from '../../styles/download_btn.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css"
import { faFilePdf, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from "next-export-i18n";


function DownloadLink() {
  const { t } = useTranslation();
  // const [isMobile, setIsMobile] = useState(false)
  const [currentIcon, setIcon] = useState(faFilePdf);

  useEffect(() => {
    let downloadButton = document.querySelector('.'+downloadcss.button);
    if(downloadButton) {    
      downloadButton.addEventListener('click', function(event) {
        if (!downloadButton.classList.contains(downloadcss.loading)) {
          event.preventDefault();
          
          /* Start loading process. */
          downloadButton.classList.add(downloadcss.loading);
          setIcon(faSpinner);
          
          /* Set delay before switching from loading to success. */
          window.setTimeout(function() {
            var win = window.open('static/CV.pdf', '_blank', 'fullscreen=yes');
            win.document.title = "Mahdi Abdelkebir - CV"
            downloadButton.classList.remove(downloadcss.loading);
            setIcon(faFilePdf);

          }, 1500);
        }
      });
    };
  })

  // create an event listener
  // useEffect(() => {
  //   function handleResize() {
  //     return (window.innerWidth < 720);
  //   }   
    
  //   setIsMobile(handleResize())

  //   window.addEventListener("resize", () => {
  //     setIsMobile(handleResize())
  //   })
  // });

  
  return (
  <div title ={t("common.extra.downloadPdf")} className={downloadcss.container}>
    <a href="#" className={downloadcss.button}>
      <FontAwesomeIcon icon={currentIcon} color="#fff" />
    </a>
  </div>)
};

export default DownloadLink