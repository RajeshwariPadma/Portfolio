import { Box, Typography } from "@mui/material"
import Aboutbgimg from "../assets/Aboutbgimg.jpg";
import { Button } from "@mui/material";
import { useEffect } from "react";



export const AboutMe = () => {

    return (

        // sx={(theme) => ({
        //     [theme.breakpoints.up("md")]: {

        //     },
        //     [theme.breakpoints.down("sm")]: {

        //     }
        // })}
        <Box
            sx={(theme) => ({
                [theme.breakpoints.up("md")]: {
                    display: "flex", py: 10,
                },
                [theme.breakpoints.down("sm")]: {
                    display: "flex", py: 10,

                }
            })}>
            <Box sx={(theme) => ({
                [theme.breakpoints.up("md")]: {
                    py: 10, px: 20,
                },
                [theme.breakpoints.down("sm")]: {
                    py: 17, px: 5
                }
            })}>
                <Box component="img"
                    src={Aboutbgimg}
                    sx={(theme) => ({
                        [theme.breakpoints.up("md")]: {
                            height: 270,
                            width: 270,
                            borderRadius: 70,
                            borderWidth: 1,
                            borderColor: "yellow",
                            boxShadow: `0 0 10px #29f9f9ff,
                                    0 0 20px #51d3f4ff,
                                    0 0 30px #1de3f9ff,
                                    0 0 40px #1de3f9ff,
                                    0 0 50px #1de3f9ff,
                                    0 0 60px #1de3f9ff,
                                    0 0 70px #f38080ff ,
                                    0 0 80px #f38080ff`
                        },
                        [theme.breakpoints.down("sm")]: {
                            height: 150,
                            width: 150,
                          
                            borderRadius: 70,
                            borderWidth: 1,
                            borderColor: "yellow",
                            boxShadow: `0 0 10px #29f9f9ff,
                                    0 0 20px #51d3f4ff,
                                    0 0 30px #1de3f9ff,
                                    0 0 40px #1de3f9ff,
                                    0 0 50px #1de3f9ff,
                                    0 0 60px #1de3f9ff,
                                    0 0 70px #f38080ff ,
                                    0 0 80px #f38080ff`
                        }
                    })}></Box>

            </Box>
            <Box sx={(theme) => ({
                [theme.breakpoints.up("md")]: {
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    pl: 15,
                    pr: 10,
                    flexWrap: "nowrap",
                    width: 700
                },
                [theme.breakpoints.down("sm")]: {
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    pl: 5,
                    pr: 3,
                    flexWrap: "nowrap",
                    width: 700
                }
            })} >
                <Typography
                    sx={(theme) => ({
                        [theme.breakpoints.up("md")]: {
                            display: "flex",
                            flexDirection: "row",
                            fontWeight: "bold",
                            fontSize: 40,
                            gap: 2,
                            pb: 1
                        },
                        [theme.breakpoints.down("sm")]: {
                            display: "flex",
                            flexDirection: "row",
                            fontWeight: "bold",
                            fontSize: 35,
                            gap: 2,
                            pb: 1
                        }
                    })}>About <Typography sx={(theme) => ({
                        [theme.breakpoints.up("md")]: {
                            fontSize: 40,
                            fontWeight: "bold",
                            color: "#1de3f9ff",
                            pb: 1
                        },
                        [theme.breakpoints.down("sm")]: {
                            fontSize: 35,
                            fontWeight: "bold",
                            color: "#1de3f9ff",

                        }
                    })}> Me</Typography></Typography>
                <Typography gutterBottom sx={(theme) => ({
                    [theme.breakpoints.up("md")]: {
                        pb: 0.5,
                        fontWeight: "bold",
                        fontSize: 20,
                         color: "#e91b1bff",
                        ":hover": { color: "#2ecde6ff", cursor: "pointer" }
                    },
                    [theme.breakpoints.down("sm")]: {
                        pb: 0.5,
                        fontWeight: "bold",
                        fontSize: 19,
                        color: "#e91b1bff",
                        ":hover": { color: "#28bbecff", cursor: "pointer" }
                    }
                })} >Frontend Developer</Typography>
                <Typography sx={(theme) => ({
                    [theme.breakpoints.up("md")]: {

                    },
                    [theme.breakpoints.down("sm")]: {
                        fontSize: 12
                    }
                })}>Hi, I am Padmarajeshwari, a passionate Web Developer and Designer who loves turning ideas into interactive digital experiences. I specialize in building modern, responsive, and user-friendly websites using React.js, Material UI, and CSS.I enjoy crafting clean interfaces with smooth animations and intuitive layouts that bring both beauty and functionality together. My goal is to design and develop web applications that not only look great but also deliver an effortless user experience.I am always exploring new technologies and improving my skills to stay up to date with the latest web trends. Every project I work on is a chance to learn, innovate, and create something meaningful for users.</Typography>
                <Box sx={(theme) => ({
                    [theme.breakpoints.up("md")]: {
                        pt: 8, display: "flex", flexDirection: "column"
                    },
                    [theme.breakpoints.down("sm")]: {
                        pt: 6, display: "flex", flexDirection: "column"
                    }
                })} >
                    {/* <style>{styles} </style> */}
                    <Button sx={{
                        width: 150,
                        height: 30,
                        boxShadow: `0 0 10px #00ffff,
                                    0 0 20px #00ffff`,
                        borderRadius: 30,
                        backgroundColor: "#00ffff",
                        fontWeight: "bold",
                        color: "black",
                        p: 1,
                        // opacity : 0,
                        // animation : "slideTop 0.8s ease forwards" ,
                        // //   animation: "slideTop 0.8s ease forwards",
                        // animationDelay : "1s"
                    }}>
                        More About Me
                    </Button>
                </Box>
            </Box>

        </Box>
    )
} 