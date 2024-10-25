import { useEffect, useState } from "react";

function Practice(){

const [mouseMoving,setMouseMoving] = useState({X:0,Y:0});

const [keyPressing,setKeyPressing] = useState("");

const [screenSize,setScreenSize] = useState({width:window.innerWidth, height:window.innerHeight});

const [mouseHovering,setMouseHovering] = useState(false);

const [timeOut,setTimeOut] = useState("setTimeout");

const [timeIntervals,setTimeIntervals] = useState(0);

const [buttonClick, setButtonClick] = useState(0);

const mouseMove = (event) =>{
    setMouseMoving({X:event.clientX,Y:event.clientY});
        }

        const screen = () => {
            setScreenSize({width:window.innerWidth, height:window.innerHeight});
        }

        const keyPress = (event) => {
            setKeyPressing(event.key);
        }

useEffect(() => {
 

    window.addEventListener("mousemove", mouseMove);

    window.addEventListener("keydown", keyPress);

    window.addEventListener("resize", screen);

    setTimeout(() => {
        setTimeOut("Vineetha");
    },2000);

    const interval = setInterval(() => {
        setTimeIntervals(timeIntervals => timeIntervals+1);
    },8000);

    return(() => {
        window.removeEventListener("mousemove", mouseMove);

        window.removeEventListener("keydown", keyPress);

        window.removeEventListener("resize", screen);

        clearInterval(interval);
    })
},[])

    return(
        <>
        <h1>Mouse Moving</h1>
        <p>X:{mouseMoving.X}, Y:{mouseMoving.Y}</p>
        <h1>Key Pressing</h1>
        <p>{keyPressing}</p>
        <h1>Screen Sizing</h1>
        <p>Width:{screenSize.width}, Height:{screenSize.height}</p>
        <h1 style={{color : mouseHovering ? 'green' : 'red'}}
        onMouseEnter={() => setMouseHovering(true)}
        onMouseLeave={() => setMouseHovering(false)}
        >Vineetha Kondepudi</h1>
        <h1>setTimeout:{timeOut}</h1>
        <h1>setInterval:{timeIntervals}</h1>
        <button onClick={() => setButtonClick(buttonClick+1)}>Button Click:</button>
        <p>{buttonClick}</p>
        </>
    )
}

export default Practice;