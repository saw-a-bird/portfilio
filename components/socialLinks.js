import social from '../styles/social.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import Info from '../public/json/personal_info.json'

const SocialMediaLinks = ()  => (
    <nav className = {`${social.nav} lg:hidden block`}>
        <ul>
            <li id = {social.fb}>
                <a href={Info.links.fb}>
                    <FontAwesomeIcon icon={faFacebookF} className = {`w-5 ${social.icon}`}/>
                    <span>Facebook</span>
                </a>
            </li>

            <li id = {social.linkedin}>
                <a href={Info.links.linkedin}>
                    <FontAwesomeIcon icon={faLinkedin} className = {`w-6 ${social.icon}`}/>
                    <span>Linkedin</span>
                </a>
            </li>

            <li id = {social.git}>
                <a href={Info.links.github}>
                    <FontAwesomeIcon icon={faGithub} className = {`w-7 ${social.icon}`}/>
                    <span>Github</span>
                </a>
            </li>

        </ul>
    </nav>
);

export default SocialMediaLinks;