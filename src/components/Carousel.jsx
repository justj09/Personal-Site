import { useRef, useEffect, useState, Children } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

function Carousel({ children }) {
    const [index, setIndex] = useState(0);
    const size = Children.count(children) - parseInt(getComputedStyle(document.body).getPropertyValue("--displayed-carousel-items"));
 
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
                <button onClick={shiftLeft}><IoIosArrowDropleftCircle /></button>
                <div id="carousel-track">
                    {Children.map(children, child => <div className="carousel-item" style={{translate: index * (-100) + "%" }}>{child}</div>)}
                </div>
                <button onClick={shiftRight}><IoIosArrowDroprightCircle /></button>
            </div>
            <div className="carousel-radio-container">
                {[...Array(size + 1).keys()].map((i) => <input type="radio" onClick={() => setIndex(i)} checked={i == index ? true : false}/>)}
            </div>
        </div>
    )
}

export default Carousel;