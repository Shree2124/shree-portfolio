import { motion } from "framer-motion";
import { Typography, Box, Grid } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      id="about"
      ref={ref}
      sx={{
        minHeight: "100vh",
        bgcolor: "#1A1A2E",
        color: "#FFFFFF",
        padding: "4rem 2rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={textVariants}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h3"
          sx={{
            mb: 3,
            fontWeight: "bold",
            color: "#00FFFF",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          About Me
        </Typography>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={textVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Typography
          variant="h6"
          sx={{
            maxWidth: "800px",
            margin: "0 auto",
            mb: 4,
            lineHeight: 1.6,
          }}
        >
          I’m Shree, a passionate full-stack web developer specializing in the
          MERN stack. I enjoy building dynamic web applications that address
          real-world challenges and enhance user experience. With a blend of
          technical skills and creativity, I strive to deliver seamless digital
          experiences.
        </Typography>
      </motion.div>

      <Grid container spacing={4} sx={{ maxWidth: "1000px", mt: 4 }}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={textVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Box
              sx={{
                bgcolor: "#2A2A40",
                borderRadius: "15px",
                padding: "2rem",
                boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.6)",
                textAlign: "left",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 2,
                  color: "#00FFFF",
                }}
              >
                More About Me
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  lineHeight: 1.6,
                }}
              >
                I’m constantly learning and adapting to new technologies. My
                journey in web development is fueled by a desire to solve problems
                and create meaningful digital solutions. I value collaboration and
                enjoy contributing to projects that push boundaries and make a
                difference.
              </Typography>
              <Typography variant="body1">
                In addition to coding, I love exploring new tech trends, working
                on open-source projects, and mentoring budding developers to help
                them grow in the tech world.
              </Typography>
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={textVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Box
              sx={{
                bgcolor: "#2A2A40",
                borderRadius: "15px",
                padding: "2rem",
                boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.6)",
                textAlign: "left",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 2,
                  color: "#00FFFF",
                }}
              >
                My Approach
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  lineHeight: 1.6,
                }}
              >
                I take a user-centric approach to web development, focusing on
                creating applications that are both functional and visually
                appealing. I prioritize responsive design, accessibility, and
                seamless user experiences in all my projects.
              </Typography>
              <Typography variant="body1">
                I aim to bridge the gap between design and development, ensuring
                that my applications not only work well but also look great. I
                enjoy tackling challenges head-on and finding innovative solutions
                to complex problems.
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      </Grid>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        style={{
          marginTop: "3rem",
          padding: "1.2rem 2.5rem",
          backgroundColor: "#00FFFF",
          borderRadius: "12px",
          color: "#1A1A2E",
          cursor: "pointer",
          display: "inline-block",
          fontWeight: "bold",
          fontSize: "1.1rem",
        }}
      >
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          Let's Collaborate
        </ScrollLink>
      </motion.div>
    </Box>
  );
};

export default About;
