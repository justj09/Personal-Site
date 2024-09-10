import { useState, Children } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

function Carousel(props) {
    const [index, setIndex] = useState(0);
    const SIZE = Children.count(props.children) - 3
 
    function shiftLeft() {
        setIndex(previousState => {
            return (previousState > 0) ? previousState - 1 : previousState;
        });
    }

    function shiftRight() {
        setIndex(previousState => {
            return (previousState < SIZE) ? previousState + 1 : previousState;
        });
    }

    return (
        <div className="carousel">
            <button onClick={shiftLeft}><IoIosArrowDropleftCircle /></button>
            <div id="carousel-track">
                {Children.map(props.children, child => <div className="track-item" style={{translate: index * (-100) + "%" }}>{child}</div>)}
            </div>
            <button onClick={shiftRight}><IoIosArrowDroprightCircle /></button>
        </div>
    )
}

export default Carousel;