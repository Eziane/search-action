import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";

export default function Step1BrainstormIdeas() {
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
        Step 1: Brainstorm Research Ideas
      </Typography>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Brainstorming
      </Typography>
      <Typography paragraph>
        The purpose of educational research is to improve educational practice.
        As such, try to think of a research topic that will make a practical
        impact on improving your own teaching; your students' learning; or
        education in general within your school. To start thinking of possible
        research projects, complete the following brainstorming exercise. The
        purpose of brainstorming is to create a large list of ideas, so do not
        cancel any ideas at this stage. Record any idea, regardless of how
        silly, impractical, or unrealistic it may be.
      </Typography>

      <List>
        <ListItem>
          <ListItemText primary="1. List three to five problems that you see with education." />
        </ListItem>
        <ListItem>
          <ListItemText primary="2. For each problem listed in Step 1, think of two things. First, what needs to be understood about the problem? Second, how do you think the problem can be solved?" />
        </ListItem>
        <ListItem>
          <ListItemText primary="3. List one or two practical ways that you think education can be improved by teachers, administrators, supervisors, or counselors. (As an educator, you have no control over the government so do not think of things the government can do to improve education. On the other hand, teachers, administrators, and supervisors have considerable control over what is done in the classroom.)" />
        </ListItem>
        <ListItem>
          <ListItemText primary="4. What do you want to better understand about students, teaching, or learning?" />
        </ListItem>
        <ListItem>
          <ListItemText primary="5. How do you think that student learning can be improved, either in general or in a specific domain (e.g., Social Studies)?" />
        </ListItem>
      </List>

      <Typography paragraph>Here is an example of my list:</Typography>

      <List>
        <ListItem>
          <ListItemText primary="1. Problems. Examination Malpractice, Low levels of literacy, Violence in the classroom" />
        </ListItem>
        <ListItem>
          <ListItemText primary="2. Understanding and solving the problems. Examination Malpractice: Students' beliefs about whether examination malpractice is morally acceptable needs to be better understood. I also think examination malpractice might be reduced if lecturers made students sign an academic honesty pledge." />
        </ListItem>
        <ListItem>
          <ListItemText primary="3. Improving Education. Literacy skills could be improved if nursery teachers would frequently tell young children stories to improve their vocabulary." />
        </ListItem>
        <ListItem>
          <ListItemText primary="4. Better understanding of education. I want to better understand primary school teachers' knowledge of literacy development." />
        </ListItem>
        <ListItem>
          <ListItemText primary="5. Improving Learning. I think students would learn better if teachers would create a positive classroom environment instead of using beating as punishment." />
        </ListItem>
      </List>

      <Typography paragraph>
        Spend a few days or a few weeks pondering this list of five questions
        until you have a large list of ideas about potential research topics.
      </Typography>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Narrowing Down Your List
      </Typography>
      <Typography paragraph>
        Once you have a large list of potential ideas, then you can start
        narrowing down the ideas. When narrowing down your ideas, think about
        three key questions:
      </Typography>

      <List>
        <ListItem>
          <ListItemText primary='" Using the time and resources available to me, is it possible for me to conduct this research study? There are many good ideas for research studies. However, many research studies may present difficulties in collecting meaningful scientific data because of practical limitations. For example, a research study that examines the advantages of computerized instruction will require considerable cost for purchasing computers.' />
        </ListItem>
        <ListItem>
          <ListItemText primary="Will this research study meaningfully contribute to educational practice? There are two criteria that determine whether a study will meaningfully contribute to educational practice:" />
        </ListItem>
      </List>

      <List sx={{ pl: 4 }}>
        <ListItem>
          <ListItemText primary="The study should suggest a practical way of improving education. When the study is finished, the researcher should be able to make practical recommendations for teachers, parents, students, and/or administrators to improve education. These recommendations must be directly related to the research that was conducted." />
        </ListItem>
        <ListItem>
          <ListItemText primary="The answer to the study should not be obvious. Sometimes I have students suggest a research topic such as The effect of instructional materials on academic achievement. Clearly, the better the quality and quantity of educational materials, the better students should learn. If the answer to the topic is obvious, then it is not a good research study." />
        </ListItem>
      </List>

      <List>
        <ListItem>
          <ListItemText primary="Has this research question been answered in previous studies? A lot of educational research has already been conducted, so it is possible that the research study has already been conducted. Make an effort to develop a unique research topic." />
        </ListItem>
      </List>

      <Typography paragraph>
        Once you have identified three researchable topics, search through the
        research literature to find other similar research studies that have
        been conducted. This will help you get a better understanding of what
        other research has been done in this area, as well as identify research
        methods and instruments that have already been developed to measure your
        key variables. Identifying related research studies will help you plan
        your methods and write your literature review. Click here to jump ahead
        to tips about finding related research studies or click NEXT to start
        planning your research study.
      </Typography>
    </Box>
  );
}
