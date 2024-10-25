import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

const skillsData = {
  tools: ["Git", "Postman", "VS Code"],
  languages: ["JavaScript", "Python", "HTML", "CSS"],
  frameworks: ["Express", "Node.js"],
  libraries: ["React", "Redux", "MUI", "Framer Motion", "Tailwind CSS"],
  database: ["MongoDB", "SQL"],
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const MySkills = () => {
  return (
    <Box
      id="skills"
      sx={{
        minHeight: "100vh",
        backgroundColor: "#040319",
        color: "#FFF",
        padding: "4rem 2rem",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{ mb: 4, color: "#00FFFF", fontWeight: "bold" }}
      >
        My Skills
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {Object.entries(skillsData).map(([category, items]) => (
          <Grid item xs={12} md={3} key={category}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: false }} // Change this to false
            >
              <Typography variant="h5" sx={{ mb: 2, color: "#00FFFF" }}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Typography>
              <Box>
                {items.map((item, index) => (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    key={index}
                    style={{
                      backgroundColor: "#1A1A2E",
                      margin: "0.5rem 0",
                      padding: "1rem",
                      borderRadius: "8px",
                      cursor: "pointer",
                      color: "#FFF",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    {item}
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MySkills;
