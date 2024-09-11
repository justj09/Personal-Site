import { useState, Children } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

function Carousel(props) {
    const [index, setIndex] = useState(0);
    const SIZE = Children.count(props.children) - 3
 
    function shiftLeft() {
        setIndex(previousState => {
            return (previousState > 0) ? previousState - 1 : SIZE;
        });
    }

    function shiftRight() {
        setIndex(previousState => {
            return (previousState < SIZE) ? previousState + 1 : 0;
        });
    }

    return (
        <div className="carousel">
            <div className="flex-horizontal">
                <button onClick={shiftLeft}><IoIosArrowDropleftCircle /></button>
                <div id="carousel-track">
                    {Children.map(props.children, child => <div className="track-item" style={{translate: index * (-100) + "%" }}>{child}</div>)}
                </div>
                <button onClick={shiftRight}><IoIosArrowDroprightCircle /></button>
            </div>
            <div className="carousel-radio-container">
                {[...Array(SIZE + 1).keys()].map((i) => <input type="radio" onClick={() => setIndex(i)} checked={i == index ? true : false}/>)}
            </div>
        </div>
    )
}

export default Carousel;