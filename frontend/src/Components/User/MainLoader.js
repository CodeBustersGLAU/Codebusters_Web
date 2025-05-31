import React, { useEffect, useState, useRef } from "react";
import { Navigate } from "react-router-dom";
import gsap from "gsap";
import CB from "./../../Assets/Logo/nobgCB.png";
import backgroundImg from "./../../Assets/highlight_photos/11.jpg"
import BarLoader from "react-spinners/BarLoader";

const MainLoader = () => {
    const movingImageRef = useRef(null);
    const [redirect, setRedirect] = useState(false); 

    useEffect(() => {
        const tl = gsap.timeline();

        tl.to(movingImageRef.current, {
            y: 40,
            repeat: -1,
            yoyo: true,
            duration: 1,
            ease: "power1.inOut",
        });

        const timer = setTimeout(() => {
            setRedirect(true); 
        }, 2000);
        return () => clearTimeout(timer); 

    }, []);

    if (redirect) {
        return <Navigate to="/home" />; 
    }

    return (
        <div
            className="h-screen w-full flex flex-col text-white items-center"
            style={{
                background: "#060516",
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.92)",
                }}
            ></div>
            <div 
                className=" text-white text-center pt-4"
                style={{ zIndex: 20 }}
            >
                <h5 className="text-slate-400 text-center">Codebusters Club</h5>
                <h5 className="text-slate-400 text-center">&copy; 2025</h5>
            </div>

            <div className="w-1/2 absolute top-40 md:top-40 flex items-center mt-4 md:mt-0 lg:mt-0 pb-10 justify-center">
                <img
                    src={CB}
                    alt="Coding Logo"
                    className="moving-image absolute mt-20 md:pb-32 w-[200px] h-[200px] md:w-[250px] md:h-[300px] lg:w-[250px] lg:h-[300px] shadow-lg object-cover"
                    ref={movingImageRef}
                />
                <h1 className="text-gray-400 text-xl text-center pt-20 mt-72">
                    <span className="px-1"><i>Launching</i></span>
                    <span className="px-1"><i>Codebusters</i></span>
                    <span className="pl-1"><i>Site</i></span>
                    <span><i>!</i></span>
                </h1>
                <div className="mt-60 pt-60 absolute flex items-center justify-center text-center">
                    <BarLoader
                        color="#a59cd8"
                        width={100}
                    />
                </div>
            </div>
            <div> 
            </div>
        </div>
    );
};

export default MainLoader;
