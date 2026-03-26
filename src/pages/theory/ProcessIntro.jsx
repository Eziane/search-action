import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Grid,
  Link as MuiLink,
  Alert,
  AlertTitle,
  Divider,
} from "@mui/material";
import {
  ArrowForward,
  QuestionAnswer,
  Rule,
  Science,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function ProcessIntro() {
  return (
    <Box component="section" sx={{ maxWidth: "800px", mx: "auto", p: 3 }}>
      <Typography
        variant="h4"
        component="h1"
        sx={{ mb: 1, fontWeight: "bold" }}
      >
        Faire une Recherche Éducative
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        sx={{ mb: 3, color: "text.secondary" }}
      >
        Introduction au Processus de Recherche
      </Typography>
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Adapted from Singleton & Straits (2010)
      </Typography>

      <Typography paragraph>
        Educational research starts by asking a question about an educational
        phenomenon, addressing such variables as student learning, motivation,
        and behaviors or teachers' motivation and practices. Then the researcher
        needs to carefully plan the research design, including measurement (how
        will observations be made) and sampling (how will participants be
        selected to participate in the study). After thorough and thoughtful
        planning, then data is collected, processed (perhaps by entering it into
        the computer), and then analyzed and interpreted.
      </Typography>

      <Typography paragraph>
        Each step in this research process requires much thought and planning.
        Therefore, a researcher, particularly a beginning researcher, should not
        expect to be able to conduct a study in a short period of time. Instead,
        a beginning researcher should plan on spending a few weeks to many
        months at each of these stages of research.
      </Typography>
    </Box>
  );
}
