import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        backgroundColor: "#040319",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false }} 
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2.5rem", md: "4rem" },
            mb: 3,
            fontWeight: 700,
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)",
          }}
        >
          Hello, I'm Shree
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "1.5rem", md: "2rem" },
            mb: 4,
            color: "#00FFFF",
            textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          A Passionate Full Stack Developer
        </Typography>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#00FFFF",
              color: "#040319",
              fontWeight: "bold",
              fontSize: "1.2rem",
              padding: "0.8rem 2rem",
              "&:hover": {
                backgroundColor: "#00e6e6",
              },
            }}
          >
            <ScrollLink to={"projects"} spy={true} smooth={true}>
              Explore My Work
            </ScrollLink>
          </Button>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Home;
