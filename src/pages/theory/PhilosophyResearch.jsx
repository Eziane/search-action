import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Grid,
  Alert,
  AlertTitle,
  Link as MuiLink,
} from "@mui/material";
import {
  CheckCircle,
  Cancel,
  Gavel,
  Group,
  Public,
  TrendingUp,
  ArrowForward,
  Psychology,
  FactCheck,
  VerifiedUser,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function PhilosophyResearch() {
  return (
    <Box component="section" sx={{ maxWidth: "800px", mx: "auto", p: 3 }}>
      <Typography
        variant="h4"
        component="h1"
        sx={{ mb: 1, fontWeight: "bold" }}
      >
        Conducting Educational Research
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        sx={{ mb: 3, color: "text.secondary" }}
      >
        Philosophy of Research
      </Typography>

      <Typography paragraph>
        Scientific research studies require evidence to support the conclusions
        that are made. Below are four types of evidence and an example of each.
        Think about each type of evidence and decide which qualify as a
        legitimate source of evidence for science.
      </Typography>

      <List>
        <ListItem>
          <ListItemText primary="Authority. According to Prof Akpan, children learn better in schools that have lots of educational materials." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Tradition. Massaging babies helps them grow faster." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Common Sense. Beating children helps them behave better." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Observation. 69% of math teachers in Yobe State use beating as a form of punishment." />
        </ListItem>
      </List>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Answers
      </Typography>

      <List>
        <ListItem>
          <ListItemText primary="Authority. No. Not all authorities are created equal. Some authorities are right, other authorities are wrong. Therefore, authority is not a source of evidence for a scientific research study unless they support their statements with valid observations based on scientific research. This is important to remember when developing a questionnaire. In most cases, authorities cannot report on the behavior of another person or the effectiveness of a program." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Tradition. No. Some traditions are good and effective, other traditions are either bad (e.g., killing twins) or ineffective (e.g., rain dances). Traditions can be the object of a scientific study. For example, a researcher might conduct a scientific study to determine whether massaging babies really does help them to grow faster. But traditions cannot be used as a source of evidence for scientific research." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Common Sense. No. Like traditions, some common sense behaviors are effective and others are ineffective. Common sense beliefs can also be the object of a scientific study. Researchers need to conduct research in Nigeria to determine whether beating students really is effective in the long-term." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Observation. Yes. Observation is the only valid source of evidence for scientific research. The purpose of the Methods section of a research study is to identify research instruments and procedures that will be used to collect observations that are valid and useful for answering a research question or hypothesis." />
        </ListItem>
      </List>

      <Typography paragraph>
        There are three key principles that determine whether a research
        question qualifies as scientific research.
      </Typography>

      <List>
        <ListItem>
          <ListItemText primary="1. Empirical. Scientific questions are answered through systematic observation. This means that the question must be answered by data that is experienced directly or indirectly through the five senses. Direct observation is something that the scientist can clearly see, such as height. However, not everything can be seen directly, such as a person's intelligence. This requires indirect observation, such as a score on an intelligence test." />
        </ListItem>
        <ListItem>
          <ListItemText primary="2. Verifiable. Observations must be collected under specific conditions that can be confirmed by all normal individuals. Replication of scientific observations is a foundational principle in science: data is not valid unless it can be duplicated by other researchers. This means that researchers need to clearly articulate the exact research design, sample and sampling procedures, instruments, data collection procedures, and data analyses that were used so any other researcher can exactly replicate the results to verify their authenticity." />
        </ListItem>
        <ListItem>
          <ListItemText primary="3. Control. Scientific observations must be collected using methods that attempt to control the conditions of the study in the following ways:" />
        </ListItem>
      </List>

      <List sx={{ pl: 4 }}>
        <ListItem>
          <ListItemText primary="Eliminate sources of bias. Research can be biased in the sample chosen so it is not representative of the population, biased in the way that items are worded on the instrument, or biased in the procedures for data collection. More on each of these sources of bias will be discussed in their appropriate chapters." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Reduce error that may distort the results. Error can be introduced into a study because the questionnaire is poorly designed, the questionnaire was administered in undesirable conditions, or the questionnaire was poorly scored and analyzed." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Rule out all other alternate explanations of the findings. There can be multiple ways to explain research results. For example, a researcher might conclude that a computerized instruction was effective because students in the treatment group performed better on a test than students in the control group. However, an alternate explanation might be that different teachers were used in the two groups, and students in the treatment had a better teacher. To control for this alternative explanation, the researcher must thoughtfully plan the study's methods to control for all other explanations, perhaps by using the same teacher for both groups." />
        </ListItem>
      </List>

      <Typography paragraph>
        Conducting scientific research requires considerable thought and
        planning in advance of collecting observations (subsequently called
        data). Thus, it must be emphatically noted that a researcher,
        particularly a beginning researcher, MUST plan the study's methods well
        in advance of collecting data. Planning a study will take weeks and
        months of planning the methods and developing the instrument. However,
        the outcome of a well-planned and well-conducted research study is both
        informative and useful for developing excellent educational practices.
        Educational research is an exciting endeavor that has the potential to
        greatly improve society.
      </Typography>
    </Box>
  );
}
