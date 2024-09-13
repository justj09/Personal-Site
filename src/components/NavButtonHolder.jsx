import { useEffect, useState, useRef, Children } from "react";


function NavButtonHolder({ children }) {
    const anchorElements = useRef();
    const [activeChildren, setActiveChildren] = useState([]);

    useEffect(() => {
        function handleScroll() { 
            setActiveChildren(Array.from(anchorElements.current.map((element) => window.scrollY > element.offsetTop)));
        }

        anchorElements.current = Array.from(children.map((child) => document.querySelector(child.props.href)));
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => { window.removeEventListener('scroll', handleScroll) };
    }, []);

    return (
        <div className="nav-button-holder">
            {Children.map(children, (child, i) => <div className={activeChildren[i] ? "active" : ""}>{child}</div>)}
        </div>
    );
}

export default NavButtonHolder;