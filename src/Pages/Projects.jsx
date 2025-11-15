import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Food_Website from "../assets/Food_Website.jpg";
import Shopping_App from "../assets/Shopping_App.jpg";
import Food_Deliver_App from "../assets/Food_Deliver_App.jpg";


export const LatestProjects = () => {
    const project = [
        {
            id: 1,
            title: "Food Recipe Website",
            text: "A beautifully designed food recipe website where users can explore different recipes with images, ingredients, and preparation steps. The website includes a smart search bar with suggestions, category sorting, and a clean UI built with React and MUI. It helps users quickly find and learn cooking recipes in an easy and enjoyable way.",
            image: Food_Website,
        },
        {
            id: 2,
            title: "Shopping App",
            text: "A user-friendly online shopping application where users can browse products, view details, add items to the cart, and complete their orders. The project includes features like search, product filters, a cart page, and localStorage persistence. It is built using React and Material UI to provide a smooth and responsive shopping experience.",
            image: Shopping_App
        },
        {
            id: 3,
            title: "Food Delivery App",
            text: "A simple food delivery application that allows users to browse restaurants or food items, add meals to their cart, and place orders. The app includes features like real-time cart updates, order summary, and smooth navigation using React and Material UI. It provides an intuitive interface similar to Zomato/Swiggy for a seamless ordering experience.",
            image: Food_Deliver_App
        }
    ]
    return (

        // sx={(theme) => ({
        //     [theme.breakpoints.up("md")]: {

        //     },
        //     [theme.breakpoints.down("sm")]: {

        //     }
        // })}
        <Box>
            <Box >
                <Typography
                    sx={(theme) => ({
                        [theme.breakpoints.up("md")]: {
                            color: "white",
                            fontSize: 40,
                            fontWeight: " bold",
                            display: "flex",
                            flexDirection: "row",
                            gap: 1,
                            justifyContent: "center",
                            alignContent: "center",
                            pb: 10
                        },
                        [theme.breakpoints.down("sm")]: {
                            color: "white",
                            fontSize: 30,
                            fontWeight: " bold",
                            display: "flex",
                            flexDirection: "row",
                            gap: 1,
                            justifyContent: "center",
                            alignContent: "center",
                            pb: 10
                        }
                    })}>Latest <Typography
                        sx={(theme) => ({
                            [theme.breakpoints.up("md")]: {
                                color: " #00ffff",
                                fontSize: 40,
                                fontWeight: " bold",
                                display: "flex", flexDirection: "row"
                            },
                            [theme.breakpoints.down("sm")]: {
                                color: " #00ffff",
                                fontSize: 30,
                                fontWeight: " bold",
                                display: "flex", flexDirection: "row"
                            }
                        })}>Projects</Typography></Typography>
            </Box>
            <Box
                sx={(theme) => ({
                    [theme.breakpoints.up("md")]: {
                        display: "flex",
                        flexDirection: "row",
                        gap: 10,
                        pb: 10,
                        justifyContent: "center",
                        alignContent: "center",
                        cursor: "pointer",
                        counterIncrement: 50
                    },
                    [theme.breakpoints.down("sm")]: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                        pb: 10,
                        justifyContent: "center",
                        alignContent: "center",
                        cursor: "pointer",
                        counterIncrement: 50,
                        pl: 15
                    }
                })}>

                {project.map((item, index) => (
                    <Card elevation={3} key={index}
                        sx={(theme) => ({
                            [theme.breakpoints.up("md")]: {
                                borderRadius: 10,
                                position: "relative",
                                overflow: "hidden",

                                ":hover .contentBox": {
                                    transform: "translateY(0%)",
                                    opacity: 1
                                },
                                ":hover": {
                                    boxShadow: `0 0 10px  #00ffff,
                                    0 0 30px  #29e8e8ff,
                                    0 0 50px  #4ddfefff`
                                },
                            },
                            [theme.breakpoints.down("sm")]: {
                                borderRadius: 10,
                                position: "relative",
                                overflow: "hidden",
                                width : 300 ,
                                height : 300 ,
                               
                                ":hover .contentBox": {
                                    transform: "translateY(0%)",
                                    opacity: 1
                                },
                                ":hover": {
                                    boxShadow: `0 0 10px  #00ffff,
                                    0 0 30px  #29e8e8ff,
                                    0 0 50px  #4ddfefff`
                                },
                            }
                        })}>
                        <CardMedia component="img"
                            image={item.image}
                            alt={item.title}
                            //    height = {90}
                            //    width = {90}
                            sx={(theme) => ({
                                [theme.breakpoints.up("md")]: {
                                    width: 300,
                                    height: 300,
                                },
                                [theme.breakpoints.down("sm")]: {
                                    width: 300,
                                    height: 300,
                                }
                            })} />
                        <CardContent
                            className="contentBox"
                            sx={{
                                color: "white",
                                display: "flex",
                                flexWrap: "nowrap",
                                width: 280,
                                justifyContent: "center",
                                alignContent: "center",
                                flexDirection: "column",
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                background: "rgba(195, 195, 202, 0.6)",
                                backdropFilter: "blur(4px)",
                                p: 2,
                                transform: "translateY(100%)",
                                opacity: 0,
                                transition: "all 0.4s ease-in-out",
                                textAlign: "center",
                            }}><CardContent sx={{
                                color: "rgba(184, 72, 8, 0.6)",
                                fontWeight: "bold",
                                fontSize: 30,
                                display: "flex",
                                justifyContent: "center",
                                alignContent: "center"
                            }}>{item.title} </CardContent> {item.text} </CardContent>

                    </Card>
                ))}

            </Box>

        </Box>

    )
}