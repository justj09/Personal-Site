import { useEffect, useState, useRef, Children } from "react";

function NavButtonHolder({ children }) {
    const anchorElements = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        let currentActiveIndex = 0;
        anchorElements.current.forEach((element, i) => {
            if (window.scrollY + window.innerHeight / 2 > element.offsetTop) {
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
        <ul className="nav-button-holder">
            {Children.map(children, (child, i) => (
                <li className={i === activeIndex ? "active" : ""}>
                    {child}
                </li>
            ))}
        </ul>
    );
}

export default NavButtonHolder;