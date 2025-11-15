import { Box } from "@mui/material"
import { Header } from "./Header"
import { AboutMe } from "./About"
import { Skills } from "./Skills"
import { LatestProjects } from "./Projects"
import { ContactMe } from "./ContactMe"

export const Home = ({ exploreAboutRef , exploreContactRef , exploreSkillsRef,exploreProjectsRef  }) => {
    return (
        <Box sx={{ backgroundColor: "#11112cff", }}>
            <Header />
            <Box ref={ exploreAboutRef}>
                <AboutMe />
            </Box>

            <Box ref={ exploreSkillsRef}>
                <Skills />
            </Box>

            <Box ref={exploreProjectsRef }>
                <LatestProjects />
            </Box>

            <Box ref={ exploreContactRef}>
                <ContactMe/>
            </Box>

        </Box>
    )
}