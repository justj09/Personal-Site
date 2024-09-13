import { useEffect, useState, useRef } from "react";
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Fusce sed viverra eros. Praesent auctor 
                elit quis elit molestie ultrices sit amet 
                convallis nulla.</p>
            </div>
            <nav id="nav-group">
                <NavButtonHolder>
                    <a className="active" href="#project-section">About</a>
                    <a href="#aaa">About</a>
                    <a href="#bbb">About</a>
                    <a href="#ccc">About</a>
                </NavButtonHolder>
            </nav>
            <div id="link-group">
                <a href="" className="icon"><FaLinkedin /></a>
                <a href="" className="icon"><FaGithub /></a>
                <a href="" className="icon"><MdEmail /></a>
            </div>
        </div>
    )
}

export default Sidebar;