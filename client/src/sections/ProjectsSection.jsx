import { Box, Grid, Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import playtube from "../assets/playtube.png";
import chat from "../assets/chat.png";
import blog from "../assets/blog.png";
import learnify from "../assets/ScrollHack.png";

const projects = [
  {
    title: "PlayTube",
    description: "(RUNNING) A feature-rich YouTube clone built using the MERN stack, enabling video upload, playback, and user interaction. It replicates the core functionalities of YouTube, providing a seamless video streaming experience with a custom-built backend to handle media storage and retrieval.",
    imageUrl: playtube,
    githubLink: "https://github.com/Shree2124/Youtube-Clone",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "Chat App",
    description: "(RUNNING) A real-time chat application developed using the MERN stack and Socket.io, allowing users to communicate instantly. It includes features such as live messaging, user authentication, and chat room creation, providing a robust platform for social interaction and team collaboration.",
    imageUrl: chat,
    githubLink: "https://github.com/Shree2124/ChatterHub-Frontend",
    techStack: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
  },
  {
    title: "LearnifY",
    description: "(HACKATHON) An innovative solution developed during a hackathon, utilizing modern web technologies to address real-world challenges efficiently and creatively.",
    imageUrl: learnify,
    githubLink: "https://github.com/Shree2124/ScrollHack",
    techStack: ["MongoDB", "Express", "React", "Node.js","Tailwind css", "MUI"],
  },
  {
    title: "Blog App",
    description: "A dynamic blog platform built with React for the frontend and Appwrite as the backend service. It allows users to create, edit, and delete blog posts with a user-friendly interface, making content management seamless. The project also includes basic user authentication and data storage capabilities.",
    imageUrl: blog,
    githubLink: "https://github.com/Shree2124/Blogify",
    techStack: ["React", "Appwrite"],
  },
];

const Projects = () => {
  return (
    <Box id="projects" sx={{ minHeight: "100vh", bgcolor: "#1A1A2E", color: "#FFF", padding: "2rem" }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 4, fontWeight: "bold", color: "#00FFFF" }}>
          My Projects
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }} 
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
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default Projects;
