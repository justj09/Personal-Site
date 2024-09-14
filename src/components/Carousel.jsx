import { useState, useEffect, Children } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

function Carousel({ children }) {
    const [index, setIndex] = useState(0);
    const [size, setSize] = useState(0);

    useEffect(() => {
        const updateSize = () => {
            const displayedItems = parseInt(getComputedStyle(document.body).getPropertyValue("--displayed-carousel-items"));
            setSize(Children.count(children) - displayedItems);
        };
        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, [children]);

    const shiftLeft = () => setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : size));

    const shiftRight = () => setIndex((prevIndex) => (prevIndex < size ? prevIndex + 1 : 0));

    return (
        <div className="carousel">
            <div className="flex-horizontal">
                <button className="carousel-button-left" onClick={shiftLeft}>
                    <IoIosArrowDropleftCircle />
                </button>
                <div id="carousel-track">
                    {Children.map(children, (child, i) => (
                        <div key={i} className="carousel-item" style={{ transform: `translateX(${index * -100}%)` }}>
                            {child}
                        </div>
                    ))}
                </div>
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