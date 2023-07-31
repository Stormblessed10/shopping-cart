import { useMemo, useRef, useState } from "react";
import styles from "./Carousel.module.css";

const WIDTH = 800;

export default function Carousel({images}) {
    const baseVal = (images.length + 1) * -WIDTH + WIDTH;
    
    const [transform, setTransform] = useState(baseVal);
    const [currentDot, setCurrentDot] = useState(0);
    const slide = useRef(null);
    
    const object = useMemo(() => {
        return {totalDistance: 0, oldCursor: null, current: baseVal, isMouseDown: false, transition: false};
    }, [baseVal]);

    const style = {
        transform: `translateX(${transform}px)`,
        transition: object.transition ? "all 0.4s" : "all 0s" 
    }
  
    function switchImg(direction) {
        object.transition = true;

        switch(direction) {
            case "prev":
                object.current += WIDTH;
                setCurrentDot(slide => slide - 1);
                if (currentDot === 0) setCurrentDot(images.length - 1);
                break;
            case "next":
                object.current -= WIDTH;
                setCurrentDot(slide => slide + 1);
                if (currentDot === images.length - 1) setCurrentDot(0);
                break;
            default:
                object.transition = false;
                object.current = baseVal;
                setCurrentDot(0);
        }
        
        setTransform(object.current);
    }

    function handleGrab() {
        object.isMouseDown = true;
        object.transition = false;
        if (object.current === baseVal * 2 || object.current === 0) switchImg();        
    }

    function handleGrabbing(e) {
        if (!object.isMouseDown) return;
        if (object.oldCursor) {
            object.totalDistance += object.oldCursor - e.clientX;
            setTransform(object.current - object.totalDistance);
        }
        
        object.oldCursor = e.clientX;
    }
 
    function handleEndDragging() {
        if (object.totalDistance < -WIDTH / 2) switchImg("prev");
        else if (object.totalDistance > WIDTH / 2) switchImg("next");
        else setTransform(object.current);

        object.totalDistance = 0;
        object.oldCursor = 0;
        object.transition = true;
        object.isMouseDown = false;
    }

    function handleButtonClick(direction) {
        if (object.current === baseVal * 2 || object.current === 0) switchImg();
        setTimeout(() => switchImg(direction), 50);
    }

    function handleDotClick(dot) {
        object.current = baseVal - dot * WIDTH;
        setTransform(object.current);
        setCurrentDot(dot);
    }

    return <div className={styles["carousel-wrapper"]}>
            <div>
            <button onClick={() => handleButtonClick("prev")} className={styles["button-left"]}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"></path>
                </svg>
            </button>
            <div onMouseLeave={handleEndDragging} onMouseUp={handleEndDragging} onMouseMove={(e) => handleGrabbing(e)} onMouseDown={handleGrab} ref={slide} className={styles.carousel}>

                {images.map(screenshot => <img key={screenshot.id}  style={style} src={screenshot.image} alt={screenshot.id} />)}
                {images.map(screenshot => <img key={screenshot.id}  style={style} src={screenshot.image} alt={screenshot.id} />)}
                {images.map(screenshot => <img key={screenshot.id}  style={style} src={screenshot.image} alt={screenshot.id} />)}

            </div>
            <button onClick={() => handleButtonClick("next")} className={styles["button-right"]}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"></path>
                </svg>
            </button>
        </div>
        <div className={styles.dots}>
            {images.map((img, i) => <div onClick={() => handleDotClick(i)} key={img.id} className={i !==currentDot ? styles.dot : styles.current}></div> )}
        </div>
    </div>
}