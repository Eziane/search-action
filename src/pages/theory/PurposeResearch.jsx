import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Link as MuiLink,
  Alert,
  AlertTitle,
  Grid,
} from "@mui/material";
import { ArrowForward, Science, CheckCircleOutline } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function PurposeResearch() {
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
        Purpose of Educational Research
      </Typography>

      <Typography paragraph>
        Every individual has their own beliefs about the best way to teach. How
        do they know that their beliefs are correct, though? Is it possible to
        support your beliefs with more valid evidence than just that you believe
        it to be true, it is true from your personal experiences, or that an
        expert said that it is true? Sometimes two people have two opposite
        beliefs, so is it possible to determine which person is right? For
        example, some individuals think that pupils should be given constant
        positive encouragement to improve academic achievement. On the other
        hand, other individuals think that positive encouragement will decrease
        academic achievement because a pupil will think that they do not need to
        keep putting forth effort. These are two opposite beliefs, so which is
        true?
      </Typography>

      <Typography paragraph>
        Educational research is the answer to all of the above questions.
        Educational research uses the scientific method to study best practices
        in teaching. An educational research study can be conducted to answer
        the question: Will students learn better or worse when they are given
        positive encouragement? To do this, the scientific method will be
        employed to compare a group of students who are given positive
        encouragement with a group of students given negative criticism and a
        control group of students given no encouragement. After receiving
        positive encouragement, negative criticism, or no encouragement,
        individuals in these groups will then be compared on important dependent
        learning variables such as their performance, effort, and motivation.
        Once this has been done, the data will provide a definitive answer about
        whether positive encouragement, negative criticism, or no encouragement
        results in the best academic performance. Educational research that uses
        the scientific method to collect scientific data can provide a definite
        answer about best practices in teaching.
      </Typography>

      <Typography paragraph>
        The purpose of educational research is to develop new knowledge about
        the teaching-learning situation to improve educational practice.
        Educational research can address the following variables:
      </Typography>

      <List>
        <ListItem>
          <ListItemText primary="Learning: How do students best learn various subjects?" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Teaching: What are the best teaching practices to foster student achievement?" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Motivation: What are the best practices for teachers to motivate their students to achieve?" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Development: How do children and adults change over time, including their cognitive, social, and emotional skills?" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Classroom management: What classroom or school practices make the classroom optimal for student learning?" />
        </ListItem>
      </List>

      <Typography paragraph>
        By collecting scientific data about these important topics in education,
        educational research can establish the best practices that teachers,
        counselors, administrators, and students should use to improve learning
        outcomes. Therefore, educational researchers - particularly researchers
        in Nigeria - should focus on practical research projects that will have
        significant implications for education.
      </Typography>

      <Paper
        elevation={2}
        sx={{ p: 3, my: 4, backgroundColor: "background.default" }}
      >
        <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
          Example: Siegler & Ramani (2009)
        </Typography>
        <Typography paragraph>
          Siegler & Ramani (2009) conducted a research study to examine best
          practices of teaching number skills to young children. Maths teachers
          typically teach number skills by asking pupils to recite the number
          string (e.g., "Say after me: 1, 2, 3..."), count objects (e.g., "How
          many beans are there?"), and name numerals (e.g., "Which number is
          written on the board?"). However, Siegler and Ramani looked at a
          theory of how young children understand number and thought that they
          could come up with a better and more engaging method of teaching
          number skills. They developed a number game...
        </Typography>
        <Typography paragraph>
          The game simply requires a piece of paper with the numbers 1 to 10
          written across it, two markers (the smiley faces - these can be bottle
          caps), and a spinner with the numbers 1 and 2. (Alternatively, the
          numbers 1 and 2 can be written on pieces of paper and put into a cup).
          To play the game, the players take turns spinning the spinner (or pick
          a number from the cup) and move their marker that many spaces, naming
          the numbers they land on. ("I am on the number four. I picked the
          number two. I move five, six."). Children at a school were randomly
          placed in either a traditional maths group or the game group. Children
          in the traditional maths group received normal maths instruction
          whereas children in the game group played this game. Both groups spent
          an equal amount of time studying mathematics. After a few weeks, all
          of the children were tested on their maths skills. These researchers
          found that on average, children in the game group performed better
          than the traditional group in maths estimation, comparing numbers, and
          arithmetic! Siegler and Ramani found a better and more engaging way of
          teaching maths, and they have scientific evidence based on the
          children's maths test scores to support that their way of teaching is
          more effective than the traditional method. They can conclude that
          teachers who use this game to teach number skills will help their
          students do better in mathematics.
        </Typography>
      </Paper>

      <Typography paragraph>
        If you are conducting an educational psychology research study, then
        your topic will be primarily focused on individuals in an educational
        context. The purpose of psychological research is to study key variables
        about a human being: how they behave, think, feel, believe, etc. As
        such, psychological research must examine individual characteristics,
        not group structures. Therefore, an educational psychology study will
        examine student performance, student motivation, student attitudes,
        student beliefs, teachers' knowledge, etc. However, an educational
        psychology study will not examine school-level variables, such as school
        facilities, government funding, etc.
      </Typography>

      <Typography paragraph>
        Whatever type of educational research you are pursuing, though, recall
        that the purpose of educational research is to improve educational
        practice. Having an understanding of educational research and conducting
        high quality educational research can have the following benefits for
        educational practice:
      </Typography>

      <List>
        <ListItem>
          <ListItemText primary="Provide instruction that maximizes students' learning." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Understand and support the developmental needs of pupils." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Develop an educational environment that supports students' motivation." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Provide solutions to educational problems." />
        </ListItem>
      </List>

      <Typography paragraph>
        Therefore, develop a research study that can have a significant impact
        on improving the teaching-learning situation. Because educational
        research can have significant implications for the teaching-learning
        situation, it is essential that educational researchers complete their
        research projects in good faith. Poorly conducted research can cause
        further harm to the educational process than no research at all.
        Consequently, under no circumstances should an educational researcher
        "cut corners" to get their project completed faster or easier.
        Educational researchers also have a responsibility to check and double
        check their work to ensure that their methods are valid, their
        calculations are correct, and their conclusions accurately reflect the
        data that has been collected. Careful, thoughtful, and trustworthy
        research can go a long way in improving education in Nigeria.
      </Typography>

      <Typography variant="h6" sx={{ mt: 4 }}>
        Reference
      </Typography>
      <Typography paragraph>
        Siegler, R. S. & Ramani, G. B. (2009). Playing linear number board games
        - but not circular ones - improves low-income preschoolers' numerical
        understanding. Journal of Educational Psychology, 101, 545-560.
      </Typography>
    </Box>
  );
}
