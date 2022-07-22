
import "./about.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench, faCheck } from '@fortawesome/free-solid-svg-icons';
import {faWordpress, faSearchengin} from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div className="about-container">
        <div className="about-me">
            <div className="intro">
                <div className="title">Hi, I'm Sadiq. Nice to meet you.</div>
                <div className="desc">I'm a full stack web developer with 4 years of experience. I have an extensive knowledge in building WordPress websites as well as building websites from scratch using different tech stacks. My business background enables me to build customer centeric websites that are easy to use and maintain.</div>
            </div>
        </div>
        <div className="knowhow-container">
            <div className="knowhow">
                <div className="item wordpress">
                    <FontAwesomeIcon className="icon" icon={faWordpress} size="3x" />
                    <div className="title">WordPress</div>
                    <div className="desc">Highly proficient in building themes and plugins for WordPress.</div>
                </div>
                <div className="item fullstack">
                    <FontAwesomeIcon className="icon" icon={faScrewdriverWrench} size="3x" />
                    <div className="title">Full stack</div>
                    <div className="desc">I like to code things from scratch. I enjoy bringing ideas to life.</div>
                </div>
                <div className="item seo">
                    <FontAwesomeIcon className="icon" icon={faSearchengin} size="3x" />
                    <div className="title">SEO</div>
                    <div className="desc">Having established my own company, I know a thing or two about SEO.</div>
                </div>
            </div>
            <div className="stack-heading">Tech stacks</div>
            <ul className="tech-stack">
                <li>PHP <FontAwesomeIcon className="icon" icon={faCheck} /></li>
                <li>JavaScript <FontAwesomeIcon className="icon" icon={faCheck} /></li>
                <li>Node JS <FontAwesomeIcon className="icon" icon={faCheck} /></li>
                <li>React JS <FontAwesomeIcon className="icon" icon={faCheck} /></li>
                <li>JQuery <FontAwesomeIcon className="icon" icon={faCheck} /></li>
                <li>MongoDB <FontAwesomeIcon className="icon" icon={faCheck} /></li>
                <li>MySQL <FontAwesomeIcon className="icon" icon={faCheck} /></li>
                <li>HTML <FontAwesomeIcon className="icon" icon={faCheck} /></li>
                <li>CSS <FontAwesomeIcon className="icon" icon={faCheck} /></li>
            </ul>
            <div className="stack-heading">Tools</div>
            <ul className="tech-stack">
                <li>Git  <FontAwesomeIcon className="icon" icon={faCheck} /></li>
                <li>GitHub <FontAwesomeIcon className="icon" icon={faCheck} /></li>
            </ul>
        </div>
    </div>
  )
}

export default About
/*
import "./about.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import {faWordpress, faSearchengin} from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div className="about-container">
        <div className="about-me">
            <div className="intro">
                <div className="title">Hi, I'm Sadiq. Nice to meet you.</div>
                <div className="desc">I'm a fullstack web developer with 4 years of experience. I have an extensive knowledge in building WordPress websites as well as building websites from scratch using different tech stack. My business background enables me to build customer centeric websites that are easy to use and maintain.</div>
            </div>
        </div>
        <div className="knowhow-container">
            <div className="knowhow">
                <div className="item wordpress">
                    <FontAwesomeIcon className="icon" icon={faWordpress} size="3x" />
                    <div className="title">WordPress</div>
                    <div className="desc">Highly proficient in building themes and plugins for WordPress.</div>
                    <div className="knowledge">Knowhow</div>
                    <ul>
                        <li>PHP</li>
                        <li>JavaScript</li>
                        <li>JQuery</li>
                        <li>MySQL</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div className="item fullstack">
                    <FontAwesomeIcon className="icon" icon={faScrewdriverWrench} size="3x" />
                    <div className="title">Fullstack</div>
                    <div className="desc">I like to code things from scratch. I enjoy bringing ideas to life.</div>
                    <div className="knowledge">Knowhow</div>
                    <ul>
                        <li>React JS</li>
                        <li>Node JS</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className="item seo">
                    <FontAwesomeIcon className="icon" icon={faSearchengin} size="3x" />
                    <div className="title">SEO</div>
                    <div className="desc">Having established my own company, I know a thing or two about SEO.</div>
                    <div className="knowledge">Knowhow</div>
                    <ul>
                        <li>Linkbuilding</li>
                        <li>Content writing</li>
                    </ul>
                </div>
            </div>
            <div className="other-tools">Tools:</div>
            <div className="tools-list">Git, GitHub, Linux</div>
        </div>
    </div>
  )
}

export default About
*/