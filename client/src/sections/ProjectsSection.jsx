import { Box, Grid, Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import { AnimatePresence, motion, Reorder } from "framer-motion";
import playtube from "../assets/playtube.png";
import learnify from "../assets/ScrollHack.png";
import blog from "../assets/blog.png";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "PlayTube",
    description:
      "(RUNNING) A feature-rich YouTube clone built using the MERN stack, enabling video upload, playback, and user interaction. It replicates the core functionalities of YouTube, providing a seamless video streaming experience with a custom-built backend to handle media storage and retrieval.",
    imageUrl: playtube,
    githubLink: "https://github.com/Shree2124/Youtube-Clone",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    id: 2,
    title: "LearnifY",
    description:
      "(HACKATHON) An innovative solution developed during a hackathon, utilizing modern web technologies to address real-world challenges efficiently and creatively.",
    imageUrl: learnify,
    githubLink: "https://github.com/Shree2124/ScrollHack",
    techStack: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Tailwind css",
      "MUI",
    ],
  },
  {
    id: 3,
    title: "Blog App",
    description:
      "A dynamic blog platform built with React for the frontend and Appwrite as the backend service. It allows users to create, edit, and delete blog posts with a user-friendly interface, making content management seamless. The project also includes basic user authentication and data storage capabilities.",
    imageUrl: blog,
    githubLink: "https://github.com/Shree2124/Blogify",
    techStack: ["React", "Appwrite"],
  },
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [item, setItem] = useState(projects);

  return (
    <Box
      id="projects"
      sx={{
        minHeight: "100vh",
        bgcolor: "#1A1A2E",
        color: "#FFF",
        padding: "2rem",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mb: 4,
            fontWeight: "bold",
            color: "#00FFFF",
          }}
        >
          My Projects
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <>
              <AnimatePresence>
                {/* <Reorder.Group axis="x" onReorder={setItem} values={item}> */}
                  <Grid item key={index}>
                    <motion.div
                      // layoutId={project.id}
                      // onClick={() => setSelectedId(project.id)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      // initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: false }}
                    >
                      <ProjectCard
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        githubLink={project.githubLink}
                        techStack={project.techStack}
                      />
                    </motion.div>
                  </Grid>
                {/* </Reorder.Group> */}
              </AnimatePresence>
              {/* <AnimatePresence>
                {selectedId && project.id === selectedId && (
                  <motion.div
                    layoutId={selectedId}
                    style={{
                      position: "absolute",
                      width: "100%",
                    }}
                  >
                    <motion.div onClick={() => setSelectedId(null)}>
                      <ProjectCard
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        githubLink={project.githubLink}
                        techStack={project.techStack}
                      />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence> */}
            </>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default Projects;
