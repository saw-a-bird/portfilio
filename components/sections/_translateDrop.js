


import { Link } from "@material-ui/core";
import { i18n } from "next-i18next";
import React from "react";
import { useTranslation } from 'react-i18next';;
import css from '../../styles/change_lng.module.css'

const Languages = {
    "en": "English",
    "fr": "French"
}

function TranslateDrop() {
    const { t } = useTranslation('common', { keyPrefix: 'extra.language' });
    
    function triggerDropDown() {
        if (document.getElementById("dropdownTop").classList.contains("hidden"))
            document.getElementById("dropdownTop").classList.remove("hidden");
        else
            document.getElementById("dropdownTop").classList.add("hidden");
    }

    function changeLng(lng) {
        if (i18n.language != lng) {

        document.cookie = `NEXT_LOCALE=${lng};`
         window.location.reload();
        //  i18n.changeLanguage(lng);
        }
        // console.log("clicked???")
    };

  	return (<div className={`${css.container}`}> 	
        <div id="dropdownTop" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownTopButton">
                {Object.entries(Languages).map(([k,v]) => ( 
                    <li key = {k} onClick={() => changeLng(k)} className="cursor-pointer">
                        <a className={`block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${  (i18n.language == k)? "font-bold" : "" }`}>{v}</a>
                    </li>
                ))}
            </ul>
        </div>
        <button id="dropdownTopButton" data-dropdown-toggle="dropdownTop" data-dropdown-placement="top" className="mr-3 mb-3 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={triggerDropDown} >{t("key")}: { Languages[i18n.language]}   <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd"></path></svg></button>
  </div>);
}


export default TranslateDrop