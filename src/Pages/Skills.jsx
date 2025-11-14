import { Box, prerelease, Typography } from "@mui/material"
import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandCss3 } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { useEffect, useRef, useState } from "react";

export const Skills = () => {

    const [animate, setAnimate] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setAnimate(true);
                observer.disconnect();
            }
        },
            { threshold: 0.3 });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const CircularProgress = ({ percentage, size = 120, strokeWidth = 6, }) => {

        const radius = (size - strokeWidth) / 2;
        const circumference = 2 * Math.PI * radius; // C = 2 × π × r

        const [offset, setOffset] = useState(circumference);

        useEffect(() => {
            if (animate) {
                const progressOffset = circumference - (percentage / 100) * circumference;//Tells SVG how much of the circle should be invisible.
                setTimeout(() => {
                    setOffset(progressOffset);
                }, 100)
            }
            else {
                setOffset(circumference);
            }


        }, [animate, circumference]);


        return (
            <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                style={{ overflow: "visible" }}>
                {/* Background circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="black"
                    strokeWidth={strokeWidth}
                    fill="none"
                ></circle>
                {/* Animated Progress Circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="#0cf5f1ff"
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference} //strokeDasharray = full circumference of the circle
                    strokeDashoffset={animate ? offset : circumference} //strokeDashoffset = how much of that dash you want to hide
                    strokeLinecap="round"

                    style={{
                        transition: "stroke-dashoffset 1.5s ease-in-out ",
                        //  animation : "stroke-dashoffset 1.5s ease-in-out 2"
                    }}></circle>

                {/* Percentage Text */}
                <text x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontSize="20"
                    fill="white"

                >{percentage}% </text>
            </svg>
        )
    }

    const TechnicalSkills = ({ percentage }) => {
        const styles = `
        @keyframes fillAnimation {
        from {width : 0%}
        to {width : 100%} 
        }`

        const styleSheet = document.createElement("style");
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
        return (
            <Box sx={{
                width: 300,
                height: 6,
                backgroundColor: "rgba(255,255,255,0.2)",
                borderRadius: 2,
                overflow: "hidden",
                mt: 1
            }}>
                <Box sx={{
                    width: animate ? `${percentage}%` : `${0}%`,
                    height: "100%",
                    backgroundColor: "rgba(41, 207, 229, 0.9)",
                    // transition: "width 1.2s ease-in-out"
                    animation: "fillAnimation 1.5s ease-in-out 2"
                }}></Box>
            </Box>
        )
    }
    return (
        <Box ref={ref} sx={{ py: 10 }}>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                pb: 6
            }}>
                <Typography sx={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 40, display: "flex",
                    flexDirection: "row",
                    gap: 1,

                }}>My <Typography
                    sx={{
                        color: "#33fcf9ff",
                        fontWeight: "bold",
                        fontSize: 40,
                    }}>Skills</Typography></Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 40, }}>
                <Box  >
                    <Typography sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 30, pl: 20,
                        textDecorationLine: "underline",
                        textUnderlineOffset: 10,
                        pb: 5
                    }}>Technical Skills</Typography>

                    <Box sx={{ display: "flex", flexDirection: "column", pl: 20, gap: 5 }}>
                        {[{ icon: < TbBrandHtml5 color="rgba(233, 43, 43, 0.9)" size={30} />, text: "HTML", percentage: 90 },
                        { icon: <TbBrandCss3 color="rgba(17, 66, 243, 0.9)" size={30} />, text: " CSS", percentage: 80 },
                        { icon: <FaJava color="rgba(244, 32, 67, 0.9)" size={30} />, text: "Java", percentage: 85 },
                        { icon: <SiJavascript color="rgba(231, 238, 35, 0.9)" size={30} />, text: "Javascript", percentage: 75 },
                        { icon: <SiReact color="rgba(15, 145, 225, 0.9)" size={30} />, text: "React", percentage: 70 }
                        ].map((item, index) => (
                            <Typography key={index} sx={{ color: "white" }}>  {item.icon}
                                <Box sx={{ display: "flex", flexDirection: "row", }}>
                                    <Typography sx={{ fontSize: 15 }} >{item.text}</Typography>
                                    <Typography sx={{ color: "white", pl: 20 }}>{item.percentage}% </Typography>

                                </Box>
                                <TechnicalSkills percentage={item.percentage} />
                                {/* <Box sx={{
                                    width: "100%",
                                    height: 5,
                                    backgroundColor: "rgba(41, 207, 229, 0.9)"
                                }}><span></span></Box> */}
                            </Typography>
                        ))}
                    </Box>
                </Box>
                <Box>
                    <Typography sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 30, pl: 10,
                        textDecorationLine: "underline",
                        textUnderlineOffset: 10,
                        pb: 10
                    }}>Professional Skills</Typography>
                    <Box sx={{ display: "flex", flexDirection: "row", pl: 5 }}>
                        <Box sx={{ pr: 10 }}>
                            <Box >
                                <CircularProgress percentage={animate ? 90 : 0} />
                                <Typography sx={{ color: "white", pb: 8, pl: 3, pt: 2 }}>Creativity</Typography>
                            </Box>
                            <Box>
                                <CircularProgress percentage={animate ? 85 : 0} />
                                <Typography sx={{ color: "white", pb: 8, pl: 3, pt: 2 }}>Communication</Typography>
                            </Box>
                        </Box>

                        <Box>
                            <Box>
                                <CircularProgress percentage={animate ? 75 : 0} />
                                <Typography sx={{ color: "white", pb: 8, pl: 3, pt: 2 }}>Problem Solving</Typography>
                            </Box>
                            <Box>
                                <CircularProgress percentage={animate ? 85 : 0} />
                                <Typography sx={{ color: "white", pb: 8, pl: 3, pt: 2 }}>TeamWork</Typography>
                            </Box>
                        </Box>


                    </Box>
                </Box>
            </Box>

        </Box>
    )
}