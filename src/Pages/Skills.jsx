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

    const CircularProgress = ({ percentage, size = 100, strokeWidth = 4, }) => {

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
            // sx={(theme) => ({
            //     [theme.breakpoints.up("md")]: {

            //     },
            //     [theme.breakpoints.down("sm")]: {

            //     }
            // })}
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
            <Box sx={(theme) => ({
                [theme.breakpoints.up("md")]: {
                    width: 300,
                    height: 6,
                    backgroundColor: "rgba(255,255,255,0.2)",
                    borderRadius: 2,
                    overflow: "hidden",
                    mt: 1
                },
                [theme.breakpoints.down("sm")]: {
                    width: 200,
                    height: 4,
                    backgroundColor: "rgba(255,255,255,0.2)",
                    borderRadius: 2,
                    overflow: "hidden",
                    mt: 0.6
                }
            })}>
                <Box
                    sx={(theme) => ({
                        [theme.breakpoints.up("md")]: {
                            width: animate ? `${percentage}%` : `${0}%`,
                            height: "100%",
                            backgroundColor: "rgba(41, 207, 229, 0.9)",
                            // transition: "width 1.2s ease-in-out"
                            animation: "fillAnimation 1.5s ease-in-out 2"
                        },
                        [theme.breakpoints.down("sm")]: {
                            width: animate ? `${percentage}%` : `${0}%`,
                            height: "100%",
                            backgroundColor: "rgba(41, 207, 229, 0.9)",
                            // transition: "width 1.2s ease-in-out"
                            animation: "fillAnimation 1.5s ease-in-out 2",
                           
                        }
                    })}></Box>
            </Box>
        )
    }
    return (
        // sx={(theme) => ({
        //     [theme.breakpoints.up("md")]: {

        //     },
        //     [theme.breakpoints.down("sm")]: {

        //     }
        // })}
        <Box ref={ref}
            sx={(theme) => ({
                [theme.breakpoints.up("md")]: {
                    py: 10
                },
                [theme.breakpoints.down("sm")]: {
                    py: 5,
                }
            })}>
            <Box
                sx={(theme) => ({
                    [theme.breakpoints.up("md")]: {
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                        pb: 6
                    },
                    [theme.breakpoints.down("sm")]: {
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                        pb: 3,

                    }
                })} >
                <Typography sx={(theme) => ({
                    [theme.breakpoints.up("md")]: {
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 40, display: "flex",
                        flexDirection: "row",
                        gap: 1,
                    },
                    [theme.breakpoints.down("sm")]: {
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 30, display: "flex",
                        flexDirection: "row",
                        gap: 1,
                    }
                })}>My <Typography
                    sx={(theme) => ({
                        [theme.breakpoints.up("md")]: {
                            color: "#33fcf9ff",
                            fontWeight: "bold",
                            fontSize: 40,
                        },
                        [theme.breakpoints.down("sm")]: {
                            color: "#33fcf9ff",
                            fontWeight: "bold",
                            fontSize: 30,
                        }
                    })}>Skills</Typography></Typography>
            </Box>
            <Box
                sx={(theme) => ({
                    [theme.breakpoints.up("md")]: {
                        display: "flex", flexDirection: "row", gap: 40,
                    },
                    [theme.breakpoints.down("sm")]: {
                        display: "flex", flexDirection: "row", gap: 5,
                    }
                })}>
                <Box  >
                    <Typography
                        sx={(theme) => ({
                            [theme.breakpoints.up("md")]: {
                                color: "white",
                                fontWeight: "bold",
                                fontSize: 30, pl: 20,
                                textDecorationLine: "underline",
                                textUnderlineOffset: 10,
                                pb: 5
                            },
                            [theme.breakpoints.down("sm")]: {
                                color: "white",
                                fontWeight: "bold",
                                fontSize: 20,
                                pl: 5,
                                textDecorationLine: "underline",
                                textUnderlineOffset: 10,
                                pb: 5
                            }
                        })}
                    >Technical Skills</Typography>

                    <Box
                        sx={(theme) => ({
                            [theme.breakpoints.up("md")]: {
                                display: "flex", flexDirection: "column", pl: 20, gap: 5
                            },
                            [theme.breakpoints.down("sm")]: {
                                display: "flex", flexDirection: "column", pl: 5, gap: 1.5
                            }
                        })}
                    >
                        {[{ icon: < TbBrandHtml5 color="rgba(233, 43, 43, 0.9)" size={25} />, text: "HTML", percentage: 90 },
                        { icon: <TbBrandCss3 color="rgba(17, 66, 243, 0.9)" size={25} />, text: " CSS", percentage: 80 },
                        { icon: <FaJava color="rgba(244, 32, 67, 0.9)" size={25} />, text: "Java", percentage: 85 },
                        { icon: <SiJavascript color="rgba(231, 238, 35, 0.9)" size={25} />, text: "Javascript", percentage: 75 },
                        { icon: <SiReact color="rgba(15, 145, 225, 0.9)" size={25} />, text: "React", percentage: 70 }
                        ].map((item, index) => (
                            <Typography key={index} sx={{ color: "white" }}>  {item.icon}
                                <Box sx={{ display: "flex", flexDirection: "row", }}>
                                    <Typography
                                        sx={(theme) => ({
                                            [theme.breakpoints.up("md")]: {
                                                fontSize: 15
                                            },
                                            [theme.breakpoints.down("sm")]: {
                                                fontSize: 10
                                            }
                                        })}  >{item.text}</Typography>
                                    <Typography
                                        sx={(theme) => ({
                                            [theme.breakpoints.up("md")]: {
                                                color: "white", pl: 20
                                            },
                                            [theme.breakpoints.down("sm")]: {
                                                color: "white", pl: 15, fontSize: 12
                                            }
                                        })} >{item.percentage}% </Typography>

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
                    <Typography
                        sx={(theme) => ({
                            [theme.breakpoints.up("md")]: {
                                color: "white",
                                fontWeight: "bold",
                                fontSize: 30, pl: 10,
                                textDecorationLine: "underline",
                                textUnderlineOffset: 10,
                                pb: 10
                            },
                            [theme.breakpoints.down("sm")]: {
                                color: "white",
                                fontWeight: "bold",
                                fontSize: 20,
                                pl: 5,
                                textDecorationLine: "underline",
                                textUnderlineOffset: 10,
                                pb: 10
                            }
                        })}>Professional Skills</Typography>
                    <Box
                        sx={(theme) => ({
                            [theme.breakpoints.up("md")]: {
                                display: "flex", flexDirection: "row", pl: 5
                            },
                            [theme.breakpoints.down("sm")]: {
                                display: "flex", flexDirection: "row", pl: 2 , gap : 3, 
                            }
                        })}>
                        <Box
                            sx={(theme) => ({
                                [theme.breakpoints.up("md")]: {
                                    pr: 10
                                },
                                [theme.breakpoints.down("sm")]: {
                                    pr: 1
                                }
                            })}>
                            <Box >
                                <CircularProgress percentage={animate ? 90 : 0} />
                                <Typography
                                    sx={(theme) => ({
                                        [theme.breakpoints.up("md")]: {
                                            color: "white", pb: 8, pl: 3, pt: 2
                                        },
                                        [theme.breakpoints.down("sm")]: {
                                            color: "white", pb: 5, pl: 2.5, pt: 2, fontSize: 12
                                        }
                                    })}>Creativity</Typography>
                            </Box>
                            <Box>
                                <CircularProgress percentage={animate ? 85 : 0} />
                                <Typography
                                    sx={(theme) => ({
                                        [theme.breakpoints.up("md")]: {
                                            color: "white", pb: 8, pl: 3, pt: 2
                                        },
                                        [theme.breakpoints.down("sm")]: {
                                            color: "white", pb: 8, pl: 1, pt: 2, fontSize: 12
                                        }
                                    })}>Communication</Typography>
                            </Box>
                        </Box>

                        <Box>
                            <Box>
                                <CircularProgress percentage={animate ? 75 : 0} />
                                <Typography
                                    sx={(theme) => ({
                                        [theme.breakpoints.up("md")]: {
                                            color: "white", pb: 8, pl: 3, pt: 2
                                        },
                                        [theme.breakpoints.down("sm")]: {
                                            color: "white", pb: 5, pl: 2, pt: 2, fontSize: 12
                                        }
                                    })}>Problem Solving</Typography>
                            </Box>
                            <Box>
                                <CircularProgress percentage={animate ? 85 : 0} />
                                <Typography
                                    sx={(theme) => ({
                                        [theme.breakpoints.up("md")]: {
                                            color: "white", pb: 8, pl: 3, pt: 2
                                        },
                                        [theme.breakpoints.down("sm")]: {
                                            color: "white", pb: 8, pl: 3, pt: 2, fontSize: 12
                                        }
                                    })}>TeamWork</Typography>
                            </Box>
                        </Box>


                    </Box>
                </Box>
            </Box>

        </Box>
    )
}