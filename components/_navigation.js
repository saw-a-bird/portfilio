import navCSS from '../styles/navigation.module.css'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import $ from "jquery"
import jumpTo from './__jump';

export default function Navigation() {
    const boxRef = useRef();

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
            <a className={navCSS.menuLink + ' ' + navCSS.active} onClick={() => {jumpTo('#main')}}><span>START</span></a>
            <a className={navCSS.menuLink} onClick={() => {jumpTo('#about')}}><span>ABOUT</span></a>
            <a className={navCSS.menuLink} onClick={() => {jumpTo('#motivations')}}><span style = {{fontSize: '14px'}}>MOTIVATIONS</span></a>
            <a className={navCSS.menuLink} onClick={() => {jumpTo('#services')}}><span>SERVICES</span></a>
            <a className={navCSS.menuLink} onClick={() => {jumpTo('#skillset')}}><span>SKILLSET</span></a>
            <a className={navCSS.menuLink} onClick={() => {jumpTo('#projects')}}><span>PROJECTS</span></a>
        </nav>
    </header>);
}