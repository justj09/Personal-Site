import Sidebar from "./components/Sidebar.jsx";
import Carousel from "./components/Carousel.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import SkillCard from "./components/SkillCard.jsx";
import EmailForm from "./components/EmailForm.jsx";
import banner from './assets/banner.jpeg';

import pythonIcon from './assets/python.svg';
import javaIcon from './assets/java.svg';
import reactIcon from './assets/react.svg';
import firebaseIcon from './assets/firebase.svg';

import { FaLinkedin, FaGithub, FaPhone} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function App() {
    return (
        <div className="flex-horizontal">
        <Sidebar />
        <div className="flex-vertical flex-fill">
            <div id="about-me" />
            <img className="banner" src={banner} />
            <div id="main-content">
                <div id="about-section" className="section">
                    <h2 className="underscore-header">About Me</h2>
                    <p>I am a motivated computer science student at the University of Toronto, with a broad interest in various areas of the field, including software development and web design. Through my studies and self-driven projects, I have acquired hands-on experience in programming languages, databases, and the development lifecycle. Moreover, I am eager to apply my skills and explore new technologies in a professional environment. </p>
                </div>
                <div className="divider"/>
                <div id="my-skills" />
                <div id="skill-section" className="section">
                    <h2 className="underscore-header">My Skills</h2>
                    <ul className="skill-container">
                        <li><SkillCard img={pythonIcon} name="Python" /></li>
                        <li><SkillCard img={javaIcon} name="Python" /></li>
                        <li><SkillCard img={reactIcon} name="Python" /></li>
                        <li><SkillCard img={firebaseIcon} name="Python" /></li>
                    </ul>
                </div>
                <div className="divider"/>
                <div id="my-work" />
                <div id="project-section" className="section">
                    <h2 className="underscore-header">My Work</h2>
                    <Carousel>
                        <ProjectCard 
                            name="Personal Site" 
                            link="https://github.com/justj09/Personal-Site" 
                            description="The personal portfolio you are currently viewing. A Fully responsive website developed from scratch in React, with publically available source code on GitHub."
                        />
                        <ProjectCard 
                            name="TAAM CMS Android Application" 
                            link="https://github.com/jonathan-imanu/TAAM-Collection-Management-System" 
                            description="An Android app written in Java, designed to manage the collection of the Toronto Asian Art Museum. The storage of the collection data, as well as user authentication, is handled using Firebase services."/>
                        <ProjectCard 
                            name="ChessGPT" 
                            link="https://github.com/justj09/ChessGPT" 
                            description="The work-in-progress backend of a chess application that makes API requests to GPT 3.5 Turbo for invalid chess moves with confident explanations, which is then interperated by the Python Chess library."
                        />
                        <ProjectCard 
                            name="Employee Management System" 
                            link="https://github.com/justj09/EmployeeManagementSystem" 
                            description="A concept employee management system made in Java as an exercise. Allows for the addition, changing, removal, and filtering of full-time or part-time employees along with their corresponding attributes."
                        />
                        <ProjectCard 
                            name="Naive Pokemon Battle Simulator" 
                            link="https://replit.com/@justj09/Naive-Pokemon-Battle-Simulator" 
                            description="A recreation of Pokemon battle mechanics made while learning software development basics. Dedication was put into delivering a product that aligned with client expectations in-spite of limitations.
"
                        />
                    </Carousel>
                </div>
                <div className="divider"/>
                <div id="contact-me" />
                <div id="contact-section" className="section">
                    <h2 className="underscore-header">Contact Me</h2>
                    <div className="contact-container">
                        <div className="information-container">
                            <h4>Contact Info</h4>
                            <div>
                                <div><MdEmail /> just.ni@mail.utoronto.ca </div>
                                <div><MdEmail /> justin_ni@outlook.com </div>
                                <div><FaPhone /> (647)-668-3709 </div>
                            </div>
                            <div className="link-container"><a href="" target="_blank" className="icon"><FaLinkedin /></a>  <a href="" target="_blank" className="icon"><FaGithub /></a></div>
                        </div>
                        <EmailForm />
                    </div>
                </div>
            </div>

            <div className="footer">
                <p>Copyright © 2024 Justin Ni</p>
            </div>
        </div>
        </div>
    )
}

export default App;