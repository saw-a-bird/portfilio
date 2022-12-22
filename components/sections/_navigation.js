import navCSS from '../../styles/navigation.module.css'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import $ from "jquery"
import jumpTo from '../jump';
import { useTranslation } from 'react-i18next';


function Navigation() {
    const boxRef = useRef();
    const { t , i18n, ready} = useTranslation('navigation', { useSuspense: false });

    useEffect(() => {
        var tl = gsap.timeline();
        // tl.to(navCSS.logo, {y: 0, duration: 1});
        tl.to("nav a", {y: 0, x:0, duration: 0.4, stagger:0.3});
        // tl.to(navCSS.sideIcons, {y:0, duration: 1});

        $(window).on("scroll", function() {
            var scrollPos = $(window).scrollTop();
            $('.'+ navCSS.active).removeClass(navCSS.active);
            $('section').each(function (i) {
                var topPos = $(this).offset().top;
                if ((topPos - scrollPos) <=  window.innerHeight) {
                    $('.'+ navCSS.active).removeClass(navCSS.active);
                    $('#nav-menu a').eq(i).addClass(navCSS.active);
                    // alert(scrollPos)
                }
            })
        });
    });


    if (ready)
        return (
        <header className = {navCSS.header} ref={boxRef}>
            <nav id = "nav-menu" className = {navCSS.navMenu}>
                <a className={navCSS.menuLink + ' ' + navCSS.active} onClick={() => {jumpTo('#main')}}><span>{t("start")}</span></a>
                <a className={navCSS.menuLink} onClick={() => {jumpTo('#about')}}><span>{t("about")}</span></a>
                <a className={navCSS.menuLink} onClick={() => {jumpTo('#motivations')}}><span className = {navCSS.smallerTitle}>{t("motivations")}</span></a>
                <a className={navCSS.menuLink} onClick={() => {jumpTo('#services')}}><span>{t("services")}</span></a>
                <a className={navCSS.menuLink} onClick={() => {jumpTo('#skillset')}}><span>{t("skillset")}</span></a>
                {/* <a className={navCSS.menuLink} onClick={() => {jumpTo('#certifications')}}><span className = {navCSS.smallerTitle}>{t("certifications")}</span></a> */}
                <a className={navCSS.menuLink} onClick={() => {jumpTo('#projects')}}><span>{t("projects")}</span></a>
            </nav>
        </header>);
    else
    return(<></>)
}


export default Navigation
