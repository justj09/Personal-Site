import NavButtonHolder from "./NavButtonHolder";
import avatar from "../assets/avatar.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Sidebar() {
    return (
        <div id="sidebar">
            <div id="info-group">
                <img src={avatar} />
                <h1>Justin Ni</h1>
                <p>Aspiring Software Developer Writing Functioning Code</p>
            </div>
            <nav id="nav-group">
                <NavButtonHolder>
                    <a className="active" href="#about-me">About Me</a>
                    <a href="#my-skills">My Skills</a>
                    <a href="#my-work">My Work</a>
                    <a href="#contact-me">Contact Me</a>
                </NavButtonHolder>
            </nav>
            <ul id="link-group">
                <li><a href="https://www.linkedin.com/in/just-ni/" target="_blank" className="icon"><FaLinkedin /></a></li>
                <li><a href="https://github.com/justj09" target="_blank" className="icon"><FaGithub /></a></li>
                <li><a href="#contact-me" className="icon"><MdEmail /></a></li>
            </ul>
        </div>
    )
}

export default Sidebar;