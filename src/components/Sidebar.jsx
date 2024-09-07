import avatar from '../assets/avatar.jpg'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

function Sidebar() {
  return (
    <>
      <div className="side-bar">
        <div className="info-group">
          <img src={avatar} />
          <h3>Justin Ni</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Fusce sed viverra eros. Praesent auctor 
            elit quis elit molestie ultrices sit amet 
            convallis nulla.</p>
        </div>
        <nav className="nav-group">
          <ul>
            <li><a href="">About</a></li>
            <li><a href="">About</a></li>
            <li><a href="">About</a></li>
            <li><a href="">About</a></li>
          </ul>
        </nav>
        <ul className="link-group">
          <li><a href=""><FaLinkedin /></a></li>
          <li><a href=""><FaGithub /></a></li>
          <li><a href=""><MdAttachEmail /></a></li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar