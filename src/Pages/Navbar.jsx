import { AppBar, Box, Toolbar, Typography } from '@mui/material';

export const Navbar = () => {
    return (

        <AppBar sx={{
             backgroundColor: "navy",
            // backgroundColor: "white",
            pt: 3, pb: 3
        }}>
            <Toolbar sx={{ display: "flex", gap: 60, }}>
                <Typography sx={{ pl: 5, fontSize: 25, }}>Portfolio</Typography>
                <Box sx={{
                    display: "flex",
                    gap: 4,
                    cursor: "pointer",
                    // color: "black",



                }}>
                   

                    {["Home", "About", "Skills", "Projects", "Contact Me"].map((text) => (
                        <Typography key={text}
                            sx={{
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
                                fontSize : 17,

                                // hover visual effects (no padding/font-weight changes)
                                "&:hover": {
                                    backgroundColor: "darkturquoise",
                                    borderColor: "rgba(255,255,255,0.9)",
                                    boxShadow: "0 6px 18px rgba(0, 180, 180, 0.28), 0 1px 3px rgba(0,0,0,0.12)",
                                    transform: "translateY(-3px)",   // visual lift only
                                    color : "black"
                                },

                            }}
                        >
                            {text}
                        </Typography>
                    ))}


                </Box>
            </Toolbar>
        </AppBar>

    )
}