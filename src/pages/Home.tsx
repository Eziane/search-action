import { NavLink } from "react-router-dom";
import { Container, Typography, Box, Link, List, ListItem, ListItemText } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header principal */}
      <Box component="header" sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          Conducting Educational Research
        </Typography>
        <Typography variant="h5" component="h2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
          Steps in Conducting a Research Study
        </Typography>
      </Box>

      {/* Introduction générale */}
      <Box component="section" sx={{ mb: 4 }}>
        <Typography paragraph>
          Conducting an educational research study is an intensive but intensely rewarding process. The following tutorial provides step-by-step guidance for conducting an educational research study according to the University of Jos guidelines. These guidelines can be slightly modified for other educational research studies. Other social science researchers can also use these guidelines by adapting the general principles of research methods to their own domain of study.
        </Typography>
        <Typography paragraph>
          I highly recommend that each researcher starts by reading the Overview of Scientific Research so you are clear on the general principles of educational research. If you have already started your project and need advice about a particular step, you can then click on that step. If you are just starting a research study, click{" "}
          <Link component={NavLink} to="/philosophy-research" sx={{ textDecoration: 'underline' }}>
            NEXT
          </Link>{" "}
          to review the entire research process before you begin.
        </Typography>
        <Typography>
          If you have any questions, comments, corrections, or errors, please email me at katrina.korb@gmail.com
        </Typography>
      </Box>

      {/* Overview of Scientific Research */}
      <Box component="section" sx={{ mb: 5 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ borderBottom: 1, borderColor: 'divider', pb: 1 }}>
          Overview of Scientific Research
        </Typography>
        <List>
          <ListItem>
            <ListItemText 
              primary={<Link component={NavLink} to="/purpose-research">Purpose of educational research</Link>}
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary={<Link component={NavLink} to="/philosophy-research">Philosophy of research</Link>}
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary={<Link component={NavLink} to="/ethics-research">Ethical considerations of conducting research</Link>}
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary={<Link component={NavLink} to="/process-intro">Introduction to the Research Process</Link>}
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary={<Link component={NavLink} to="/writing-overview">Overview of writing a research study</Link>}
            />
          </ListItem>
        </List>
      </Box>

      {/* Steps in Conducting Scientific Research */}
      <Box component="section" sx={{ mb: 5 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ borderBottom: 1, borderColor: 'divider', pb: 1 }}>
          Steps in Conducting Scientific Research
        </Typography>
        <List>
          <ListItem>
            <ListItemText 
              primary={<Link component={NavLink} to="/conceptuelle/brainstorm">1. Brainstorm research ideas</Link>}
              secondary="Interesting Educational Variables to Consider"
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary={<Link component={NavLink} to="/conceptuelle/formulate-problem">2. Identify key variables and research design</Link>}
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary={<Link component={NavLink} to="/conceptuelle/literature-review">3. Write Purposes, Research Questions, and Hypotheses based on key variables and research design</Link>}
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary={<Link component={NavLink} to="/conceptuelle/variables-design">4. Write the Research Design section to describe the selected design</Link>}
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary={<Link component={NavLink} to="/methodologique/type-etude">5. Consider the population that is in line with your purposes</Link>}
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary={<Link component={NavLink} to="/methodologique/population-echantillon">6. Based on logistical considerations, select the sampling procedure</Link>}
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="7. Write the Population, Sample, and Sampling Technique sections"
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="8. Search the literature to find other studies about your key variables"
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="9. Choose an appropriate instrument for each key variable"
              secondary="Adopting or adapting pre-existing instruments, Writing Questionnaire Items, Developing the Instrument Format, Evaluating the Reliability of the Instrument, Evaluating the Validity of the Instrument"
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="10. Write Instruments section to describe the instruments"
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="11. For experimental and quasi-experimental studies, develop a treatment that should influence the dependent variables"
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="12. Write the Method of Data Collection section to describe the treatment and how the instruments will be administered"
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="13. Write the Method of Data Analysis section to describe the appropriate statistics based on the research questions and hypotheses"
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="14. Write the rest of Chapter 1, Introduction, focusing on the key variables in the purposes"
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="15. Write Chapter 2, Review of Relevant Literature, focusing on the key variables in the purposes"
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="16. Collect data, strictly following the procedures described in Chapter 3, Methods"
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="17. Analyze data according to the procedures described in Method of Data Analysis"
              secondary="Code data from the instrument, Calculate descriptive statistics, Conduct statistics to analyze Research Questions and Research Hypotheses, Create tables and figures"
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="18. Write Chapter 4, Results"
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="19. Write Chapter 5, Conclusion"
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="20. Create Supplementary Materials"
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="21. Implement the lessons learned from the research study in education"
            />
          </ListItem>
        </List>
      </Box>

      {/* Resources */}
      <Box component="section" sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ borderBottom: 1, borderColor: 'divider', pb: 1 }}>
          Resources
        </Typography>
        <Typography paragraph>
          The following resources were used in developing this website.
        </Typography>
        <List>
          <ListItem>
            <ListItemText 
              primary="American Psychological Association. (2001). Publication manual of the American Psychological Association (5th ed.). Washington, DC: Author."
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Cohen, R. J., & Swerdlik, M. E. (1999). Psychological testing and assessment: An introduction to tests and measurement (4th ed.). Mountain View, CA: Mayfield."
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Gall, M. D., Gall, J. P., & Borg, W. R. (2003). Educational Research: An Introduction (7th ed.). Boston: Allyn and Bacon."
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Reeve. (n.d.) How to write a journal article. Unpublished manuscript."
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Singleton, R. A. Jr., & Straits, B. C. (2010). Approaches to social research (5th ed.). New York: Oxford University Press."
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Trochim, W. M. (2006). The Research Methods Knowledge Base (2nd ed.). Retrieved online from http://www.socialresearchmethods.net/kb/"
            />
          </ListItem>
        </List>
      </Box>

      {/* Next Link */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Link component={NavLink} to="/philosophy-research" sx={{ textDecoration: 'underline' }}>
          NEXT
        </Link>
      </Box>
    </Container>
  );
}
