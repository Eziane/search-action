import { NavLink } from "react-router-dom";
import {
  Box,
  Typography,
  List,
  ListItem,
  Link as MuiLink,
} from "@mui/material";

const theoryLinks = [
  { path: "/overview-research", label: "Overview of Research" },
  { path: "/purpose-research", label: "Purpose of Educational Research" },
  { path: "/philosophy-research", label: "Philosophy of Research" },
  { path: "/ethics-research", label: "Ethical Considerations in Research" },
  { path: "/process-intro", label: "Introduction to the Research Process" },
  { path: "/writing-overview", label: "Overview to Writing a Research Paper" },
  { path: "/fonctions-research", label: "Functions of Research" },
];

export default function Theory() {
  return (
    <Box component="section" sx={{ maxWidth: "max-content", mx: "auto", p: 2 }}>
      <Typography variant="h1" sx={{ mb: 4 }}>
        Theoretical Resources
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        This section groups the basic concepts necessary to understand and
        practice scientific research in education. You can browse each theme
        separately.
      </Typography>

      <List>
        {theoryLinks.map((item) => (
          <ListItem key={item.path} disablePadding>
            <MuiLink
              component={NavLink}
              to={item.path}
              sx={{
                color: "primary.main",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {item.label}
            </MuiLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
