import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Chip,
  Button,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion, Reorder, useDragControls } from "framer-motion";
import { ReorderIcon } from "../icon/Reorder";
// import { ReorderIcon } from "../icon/Reorder";

const ProjectCard = ({
  title,
  description,
  imageUrl = "",
  githubLink = "",
  techStack,
  value,
}) => {
  const controls = useDragControls();

  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
      {/* <Reorder.Item value={value} dragListener={false} dragControls={controls}> */}
        <Card
          className="recorder-handler"
          sx={{
            maxWidth: 345,
            backgroundColor: "#040319",
            color: "#FFF",
            borderRadius: "15px",
            boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.6)",
          }}
        >
          <CardMedia
            component="img"
            alt={title}
            height="140"
            image={imageUrl}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold", color: "#00FFFF" }}
              className="project-title"
            >
              {title}
            </Typography>
            <Typography
              className="project-description"
              variant="body2"
              color="#b4c4f0"
              sx={{ mb: 2 }}
            >
              {description}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
              {techStack?.map((tech, index) => (
                <Chip
                  key={index}
                  label={tech}
                  sx={{
                    backgroundColor: "#1A1A2E",
                    color: "#FFF",
                    borderColor: "#00FFFF",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    fontWeight: "bold",
                    fontSize: "0.75rem",
                  }}
                  size="small"
                />
              ))}
            </Box>
            {githubLink && (
              <Box sx={{ mt: 2, textAlign: "center" }}>
                <IconButton
                  href={githubLink}
                  target="_blank"
                  sx={{ color: "#00FFFF" }}
                >
                  <GitHubIcon />
                </IconButton>
              </Box>
            )}
          </CardContent>
          {/* <IconButton>
            <ReorderIcon dragControls={controls}/>
          </IconButton> */}
        </Card>
      {/* </Reorder.Item> */}
    </motion.div>
  );
};

export default ProjectCard;
