import navCSS from '../../styles/navigation.module.css'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import $ from "jquery"
import jumpTo from '../jump';
import { useTranslation } from "next-export-i18n";

function Navigation() {
    const boxRef = useRef();
    const { t} = useTranslation();

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


        return (
        <header className = {navCSS.header} ref={boxRef}>
            <nav id = "nav-menu" className = {navCSS.navMenu}>
                <a className={navCSS.menuLink + ' ' + navCSS.active} onClick={() => {jumpTo('#main')}}><span>{t("navigation.start")}</span></a>
                <a className={navCSS.menuLink} onClick={() => {jumpTo('#about')}}><span>{t("navigation.about")}</span></a>
                <a className={navCSS.menuLink} onClick={() => {jumpTo('#motivations')}}><span className = {navCSS.smallerTitle}>{t("navigation.motivations")}</span></a>
                <a className={navCSS.menuLink} onClick={() => {jumpTo('#services')}}><span>{t("navigation.services")}</span></a>
                <a className={navCSS.menuLink} onClick={() => {jumpTo('#skillset')}}><span>{t("navigation.skillset")}</span></a>
                {/* <a className={navCSS.menuLink} onClick={() => {jumpTo('#certifications')}}><span className = {navCSS.smallerTitle}>{t("navigation.certifications")}</span></a> */}
                <a className={navCSS.menuLink} onClick={() => {jumpTo('#projects')}}><span>{t("navigation.projects")}</span></a>
            </nav>
        </header>);
}


export default Navigation
