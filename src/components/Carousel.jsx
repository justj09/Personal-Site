import { useState, useEffect, Children } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

function Carousel({ children }) {
    const [index, setIndex] = useState(0);
    const [size, setSize ] = useState(0);

    useEffect(() => {
        const handleResize = () => { setSize(Children.count(children) - parseInt(getComputedStyle(document.body).getPropertyValue("--displayed-carousel-items")))};
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => { window.removeEventListener('resize', handleResize) };
    }, []);
 
    function shiftLeft() {
        setIndex(previousState => {
            return (previousState > 0) ? previousState - 1 : size;
        });
    }

    function shiftRight() {
        setIndex(previousState => {
            return (previousState < size) ? previousState + 1 : 0;
        });
    }

    return (
        <div className="carousel">
            <div className="flex-horizontal">
                <button className="carousel-button-left" onClick={shiftLeft}><IoIosArrowDropleftCircle /></button>
                <div id="carousel-track">
                    {Children.map(children, child => <div className="carousel-item" style={{translate: index * (-100) + "%" }}>{child}</div>)}
                </div>
                <button className="carousel-button-right" onClick={shiftRight}><IoIosArrowDroprightCircle /></button>
            </div>
            <div className="carousel-indicator-container">
                {[...Array(size + 1).keys()].map((i) => <div className={"carousel-indicator" + (i == index ? " active" : "")} onClick={() => setIndex(i)}/>)}
            </div>
        </div>
    )
}

export default Carousel;