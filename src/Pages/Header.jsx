import { Box, Typography } from "@mui/material"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import backgroundphoto from "../assets/backgroundphoto.jpg";
import { Button } from "@mui/material";

export const Header = () => {

    return (

        // sx={(theme) => ({
        //     [theme.breakpoints.up("md")]: {

        //     },
        //     [theme.breakpoints.down("sm")]: {

        //     }
        // })}
        <Box sx={(theme) => ({
            [theme.breakpoints.up("md")]: {
                pt: 20,
                color: "white",
                // backgroundColor: "#11112cff",
                display: "flex",
            },
            [theme.breakpoints.down("sm")]: {
                pt: 15,
                color: "white",
                // backgroundColor: "#11112cff",
                display: "flex",

            }
        })}>
            <Box
                sx={(theme) => ({
                    [theme.breakpoints.up("md")]: {
                        display: "flex", flexDirection: "column", px: 15, py: 15
                    },
                    [theme.breakpoints.down("sm")]: {
                        display: "flex", flexDirection: "column", px: 4, py: 5
                    }
                })} >
                <Typography
                    sx={(theme) => ({
                        [theme.breakpoints.up("md")]: {
                            fontWeight: "bold", fontSize: 30
                        },
                        [theme.breakpoints.down("sm")]: {
                            fontWeight: "bold", fontSize: 20
                        }
                    })}>Hello , It's Me</Typography>
                <Typography
                    sx={(theme) => ({
                        [theme.breakpoints.up("md")]: {
                            fontWeight: "bold", fontSize: 50
                        },
                        [theme.breakpoints.down("sm")]: {
                            fontWeight: "bold", fontSize: 30
                        }
                    })} >Rajeshwari Padma</Typography>
                <Typography gutterBottom
                    sx={(theme) => ({
                        [theme.breakpoints.up("md")]: {
                            fontWeight: "bold", fontSize: 30, display: "flex"
                        },
                        [theme.breakpoints.down("sm")]: {
                            fontWeight: "bold", fontSize: 18, display: "flex"
                        }
                    })} >And I'm a <Typography gutterBottom sx={(theme) => ({
                        [theme.breakpoints.up("md")]: {
                            fontWeight: "bold", fontSize: 30, pl: 2, color: " rgba(4, 231, 231, 0.93)"
                        },
                        [theme.breakpoints.down("sm")]: {
                            fontWeight: "bold", fontSize: 18, pl: 1, color: " rgba(4, 231, 231, 0.93)"
                        }
                    })}> Software Developer </Typography> </Typography>
                <Typography sx={(theme) => ({
                    [theme.breakpoints.up("md")]: {
                        display: "flex",
                        flexWrap: "nowrap",
                        width: 350,
                        
                    },
                    [theme.breakpoints.down("sm")]: {
                        fontSize: 13, pr: 1
                    }
                })}>I'm a Software Developer with extensive experience for over 1.5 years.
                    Expertise is to create and website design , Frontend design and
                    many more....</Typography>
                <Box 
                sx={{display: "flex",
                            flexDirection: "row",
                            gap: 2,
                            color: " rgba(245, 252, 252, 0.93)",
                            pt: 3,
                            width: 40, height: 25}}
                   >
                    {[<WhatsAppIcon sx={{ ":hover": { color: " rgba(32, 242, 63, 0.93)", }}} 
                      />, <FacebookIcon sx={{ ":hover": { color: " rgba(65, 168, 247, 0.93)", } }} />, <TwitterIcon sx={{ ":hover": { color: " rgba(25, 112, 178, 0.93)", } }} />, <InstagramIcon sx={{ ":hover": { color: " rgba(245, 120, 54, 0.93)", } }} />].map((icon) => (
                        <Box sx={{ transition: "transform 220ms ease , box-shadow 220ms ease , border-color 220ms ease",

                                    ":hover": {
                                        border: 1.2,
                                        borderColor: " rgba(4, 231, 231, 0.93)",
                                        // color: " rgba(4, 231, 231, 0.93)",
                                        p: 0.5,
                                        borderRadius: 30,
                                        borderWidth: 3,
                                        flexShrink: "none",
                                        width: 40, height: 25,
                                        transform: "translateY(-3px)",
                                        boxShadow: `0 0 10px #00ffff,
                                            0 0 20px #00ffff,
                                            0 0 40px #00ffff,
                                            0 0 80px #00ffff`,


                                    }}}
                            >
                            {icon}
                        </Box>
                    ))}

                </Box>
                <Box sx= {{ pt: 8}}>
                    {/* <style>{styles}</style> */}
                    <Button sx={{width: 150,
                            height: 30,
                            boxShadow: `0 0 10px #00ffff,
                                    0 0 20px #00ffff`,
                            borderRadius: 30,
                            backgroundColor: "#00ffff",
                            fontWeight: "bold",
                            color: "black",
                            p: 1,
                            // opacity: 0,
                            // animation: "slideTop 0.8s ease forwards",
                            // animationDelay: "1s"
                            }}>
                        More About Me
                    </Button>
                </Box>
            </Box>
            <Box
                sx={(theme) => ({
                    [theme.breakpoints.up("md")]: {
                        py: 17, px: 15
                    },
                    [theme.breakpoints.down("sm")]: {
                        py: 15, px: 3
                    }
                })} >
                <Box component="img"
                    src={backgroundphoto}

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
                            height: 170,
                            width: 170,
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
                    })} ></Box>
            </Box>
        </Box>
    )
}

