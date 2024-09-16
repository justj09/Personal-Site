import { useState, useEffect, Children } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

function Carousel({ children }) {
    const [index, setIndex] = useState(0);
    const [size, setSize] = useState(0);

    const handleResize = () => {
        const displayedItems = parseInt(getComputedStyle(document.body).getPropertyValue("--displayed-carousel-items"));
        setSize(Children.count(children) - displayedItems);
        setIndex((previousState) => { return Math.min(previousState, size); });
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const shiftLeft = () => setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : size));

    const shiftRight = () => setIndex((prevIndex) => (prevIndex < size ? prevIndex + 1 : 0));

    return (
        <div className="carousel">
            <div className="flex-horizontal">
                <button className="carousel-button-left" onClick={shiftLeft}>
                    <IoIosArrowDropleftCircle />
                </button>
                <ul id="carousel-track">
                    {Children.map(children, (child, i) => (
                        <li key={i} className="carousel-item" style={{ transform: `translateX(${index * -100}%)` }}>
                            {child}
                        </li>
                    ))}
                </ul>
                <button className="carousel-button-right" onClick={shiftRight}>
                    <IoIosArrowDroprightCircle />
                </button>
            </div>
            <div className="carousel-indicator-container">
                {[...Array(size + 1).keys()].map((i) => (
                    <div key={i} className={`carousel-indicator${i === index ? " active" : ""}`} onClick={() => setIndex(i)}/>
                ))}
            </div>
        </div>
    );
}

export default Carousel;