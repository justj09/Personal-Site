import { useEffect, useState, useRef, Children } from "react";


function NavButtonHolder({ children }) {
    const anchorElements = useRef();
    const [activeChildren, setActiveChildren] = useState([]);
    const [handleScrollEnabled, setHandleScrollEnabled] = useState(true);

    useEffect(() => {
        function handleScroll() { 
            if (!handleScrollEnabled) return;
            let activeIndex = 0;
            let activeArray = [];
            anchorElements.current.forEach((element, i) => { 
                activeArray[i] = 0;
                if (window.scrollY > element.offsetTop) {
                    activeIndex = i;
                }
            });
            activeArray[activeIndex] = 1;
            setActiveChildren(activeArray);
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