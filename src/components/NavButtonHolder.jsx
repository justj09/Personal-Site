import { useEffect, useState, useRef, Children } from "react";

function NavButtonHolder({ children }) {
    const anchorElements = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const errorMargin = 100;

    const handleScroll = () => {
        let currentActiveIndex = 0;
        anchorElements.current.forEach((element, i) => {
            if (window.scrollY > element.offsetTop - errorMargin) {
                currentActiveIndex = i;
            }
        });
        setActiveIndex(currentActiveIndex);
    };

    useEffect(() => {
        anchorElements.current = Children.map(children, (child) =>
            document.querySelector(child.props.href)
        );
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [children]);

    return (
        <div className="nav-button-holder">
            {Children.map(children, (child, i) => (
                <div className={i === activeIndex ? "active" : ""}>
                    {child}
                </div>
            ))}
        </div>
    );
}

export default NavButtonHolder;