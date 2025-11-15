import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';


export const Navbar = ({ exploreAboutRef, exploreContactRef, exploreSkillsRef, exploreProjectsRef }) => {

    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);

    //menu icon opening
    const open = Boolean(anchorEl);
    const handleOpen = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = (e) => {
        setAnchorEl(null);
    };



    const handleContactMeClick = () => {
        navigate("/");
        setTimeout(() => {
            if (exploreContactRef?.current) {
                exploreContactRef.current.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };

    const handleClickAbout = () => {
        navigate("/");
        setTimeout(() => {
            if (exploreAboutRef?.current) {
                exploreAboutRef.current.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };

    const handleSkillsClick = () => {
        navigate("/");
        setTimeout(() => {
            if (exploreSkillsRef?.current) {
                exploreSkillsRef.current.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    }

    const handleProjectsClick = () => {
        navigate("/");
        setTimeout(() => {
            if (exploreProjectsRef?.current) {
                exploreProjectsRef.current.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    }
    return (
        
        <AppBar sx={{
            backgroundColor: "#020241ff",
            pt: 3, pb: 3,
        }}>
            <Toolbar
                sx={(theme) => ({
                    [theme.breakpoints.up("md")]: {
                        display: "flex", gap: 60,
                    },
                    [theme.breakpoints.down("sm")]: {
                        display: "flex", gap: 10,
                    }
                })}>
                <Typography
                    sx={(theme) => ({
                        [theme.breakpoints.up("md")]: {
                            pl: 5, fontSize: 25,
                        },
                        [theme.breakpoints.down("sm")]: {
                            pl: 1, fontSize: 20,
                        }
                    })}>Portfolio</Typography>
                <Box
                    sx={(theme) => ({
                        [theme.breakpoints.up("md")]: {
                            display: "flex",
                            gap: 5,
                            cursor: "pointer",
                            // color: "black",
                        },
                        [theme.breakpoints.down("sm")]: {
                            display: "flex",
                            gap: 0.3,

                            cursor: "pointer",
                            // color: "black",
                        }
                    })}>


                    {["Home", "About", "Skills", "Projects", "ContactMe"].map((text) => (
                        <Typography key={text}

                            onClick={() => {
                                if (text === "About") handleClickAbout();
                                if (text === "Skills") handleSkillsClick();
                                if (text === "Projects") handleProjectsClick();
                                if (text === "ContactMe") handleContactMeClick();
                                if (text === "Home") navigate("/");
                            }}
                            sx={(theme) => ({
                                [theme.breakpoints.up("md")]: {
                                    // keep the same padding & border always to avoid jumps
                                    px: 2.25,            // horizontal padding (constant)
                                    py: 0.8,             // vertical padding (constant)
                                    borderRadius: "24px",
                                    border: "2px solid transparent", // reserve border space
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    transition: "transform 220ms ease, box-shadow 220ms ease, background-color 220ms ease, border-color 220ms ease",
                                    cursor: "pointer",
                                    fontSize: 17,

                                    // hover visual effects (no padding/font-weight changes)
                                    "&:hover": {
                                        backgroundColor: "darkturquoise",
                                        borderColor: "rgba(255,255,255,0.9)",
                                        boxShadow: "0 6px 18px rgba(0, 180, 180, 0.28), 0 1px 3px rgba(0,0,0,0.12)",
                                        transform: "translateY(-3px)",   // visual lift only
                                        color: "black"
                                    },
                                },
                                [theme.breakpoints.down("sm")]: {
                                    // keep the same padding & border always to avoid jumps
                                    px: 1.5,            // horizontal padding (constant)
                                    py: 0.8,             // vertical padding (constant)
                                    borderRadius: "24px",
                                    border: "1px solid transparent", // reserve border space
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    transition: "transform 120ms ease, box-shadow 220ms ease, background-color 220ms ease, border-color 220ms ease",
                                    cursor: "pointer",
                                    fontSize: 12,

                                    // hover visual effects (no padding/font-weight changes)
                                    "&:hover": {
                                        backgroundColor: "darkturquoise",
                                        borderColor: "rgba(255,255,255,0.9)",
                                        boxShadow: "0 6px 18px rgba(0, 180, 180, 0.28), 0 1px 3px rgba(0,0,0,0.12)",
                                        transform: "translateY(-3px)",   // visual lift only
                                        color: "black"
                                    },
                                }
                            })}>
                            {text}

                        </Typography>
                    ))}


                </Box>

            </Toolbar>
        </AppBar>

    )
}