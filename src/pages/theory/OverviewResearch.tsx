import { Typography, Paper, List, ListItem, ListItemText, Box } from '@mui/material';

export default function OverviewResearch() {
  return (
    <Box component="section" sx={{ maxWidth: "800px", mx: "auto", p: 3 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 1, fontWeight: "bold" }}>
        Conducting Educational Research
      </Typography>
      <Typography variant="h5" component="h2" sx={{ mb: 3, color: "text.secondary" }}>
        Overview to Writing a Research Paper
      </Typography>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Conceptualize the Research Study First
      </Typography>
      <Typography paragraph>
        Just like the bible is rarely read from the beginning to the end, so too is a research study rarely written from beginning to end. Determining the research methods before writing the rest of the paper will help the entire paper to be more focused. It would be a shame to spend hours creating well written Chapters 1 and 2 only to realize that there is no way to actually conduct the research study! Furthermore, when you know your research methods, then you can build a stronger argument for the rationale of the study that is necessary in Chapters 1 and 2. Therefore, begin writing your research project by writing the Purpose and Research Questions/Hypotheses from Chapter 1. Then write the entire Methods Section, Chapter 3. Once these three or four sections are well developed, then it is easier and more efficient to write the rest of Chapter 1 and Chapter 2. The guidelines in the Steps in Conducting Scientific Research will help you accomplish this.
      </Typography>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Revise, Revise, Revise
      </Typography>
      <Typography paragraph>
        Writing is not a one-way process. You must reread and revise your paper many times before it will become a high-quality work. As a general rule, each chapter should be revised at least two times before submitting it to your supervisor. I oftentimes feel like I revise my students' work more than they do! When completing my thesis, I would revise each chapter at least five times before resubmitting it to my supervisor. In addition to revising your own work, partner with at least one other student and make suggestions on each other's work. This helps you get additional perspectives on what you have written.
      </Typography>
      <Typography paragraph>
        Each chapter will be returned by your supervisor multiple times with suggestions. This is a natural part of the writing process. Only the sections with feedback noted by your supervisor have to be completely changed. The sections that the supervisor does not comment on do not need major changes. Continue rereading the sections with no comments for minor wording changes, but you do not need to make substantial changes to these sections. Instead, focus your energy on changing the sections that have comments by your supervisor.
      </Typography>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Avoid Plagiarism
      </Typography>
      <Typography paragraph>
        Plagiarism is a serious, dishonest offense that is not only unethical, but can result in expulsion from the university. Plagiarism is any attempt to present another person's ideas or words as your own. According to plagiarism.org, the following behaviors are considered plagiarism:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Turning in someone else's work as your own." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Copying words or ideas from another work without giving credit. Any idea that does not come directly from your mind must be referenced. For example, the statement 'Piaget proposed four stages of cognitive development' must be referenced because this was not your original idea." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Giving incorrect information about the source of a quotation. If you did not read the original work, then reference the original work 'as cited in' and include the paper you read in the references section." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Failing to put a direct quote in quotation marks. All words in a paper must be your own. Any direct quotes must be put in quotation marks!" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Changing the words but copying the sentence structure of another work without giving credit. To avoid this, do not take notes word-for word when reading a paper. Instead, summarize the key points in your notes." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Copying so many words or ideas from another work that it makes the majority of your paper, regardless of whether you give credit or not. This can be avoided by outlining the literature review before finding literature to be reviewed." />
        </ListItem>
      </List>
      <Typography paragraph>
        When using other sources, you must paraphrase what is written in your own words and then reference the point by putting the author's name and date in brackets, for example: (Korb, 2008) and then put the complete reference in the References section. Avoid using direct quotes unless they are absolutely necessary for making the point. If you include a portion of a work word for word, "You must put the words in quotation marks and then reference the quote by including the page number" (Korb, 2008, p. 3). If you have any questions about whether something is considered plagiarism, please ask your supervisor. Visit Purdue's Online Writing Laboratory for more information on paraphrasing.
      </Typography>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Drafts should be Neat
      </Typography>
      <Typography paragraph>
        Some supervisors require all drafts to be typed, others allow handwritten drafts. If you are submitting a typed draft or final work, it is your responsibility, not the typist's, to correct typographical errors. Blaming a poorly typed paper on the typist is a lazy excuse for carelessness. It is your responsibility to read through the draft to correct typographical errors. Every typist will make typographical errors, so this is a necessary step in submitting every draft. If you are working with a tight deadline, be sure to allow enough time for making these necessary corrections with the typist.
      </Typography>
      <Typography paragraph>
        If you can submit a handwritten draft, be sure to write neatly. If you do not write your draft neatly, your supervisor will have great difficulty making suggestions. Sloppily written papers also frustrate supervisors and frustrated supervisors are not as easy to work with.
      </Typography>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Avoid using Pronouns
      </Typography>
      <Typography paragraph>
        Pronouns such as it, they, their, her, those, etc. are very difficult for the reader to understand. Since pronouns are vague descriptors, readers oftentimes do not know what is being referred to. To be as specific as possible, do not use pronouns. For example, instead of writing "It increases students' achievement," write "Lessons on study skills increase students' achievement." After writing a draft, read the draft through once with the specific intention of trying to find every pronoun. Then change every pronoun to the noun that is being referred to.
      </Typography>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Avoid using Numbered Lists or Bulleted Points
      </Typography>
      <Typography paragraph>
        Research papers are strictly scientific reports and therefore should avoid numbered lists and bulleted points. Both lists and bullets are valid writing styles for textbooks. However, scientific reports generally must be written in paragraph form throughout the entire paper. Therefore, convert all numbered lists and bulleted points to a complete paragraph. The only exception to this rule is a list of research questions or hypotheses, which may be written as either numbered lists or bulleted points. Refer to the following example taken from Woolfolk (2007, p. 395).
      </Typography>
      <Typography paragraph>
        Motivation to learn is encouraged when students are motivated by the following six elements:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="1. Intrinsic motivation, influenced by personal factors such as needs and curiosity." />
        </ListItem>
        <ListItem>
          <ListItemText primary="2. Students choose moderately difficult goals." />
        </ListItem>
        <ListItem>
          <ListItemText primary="3. Task involvement where the student wants to master a task." />
        </ListItem>
        <ListItem>
          <ListItemText primary="4. Motivation to achieve." />
        </ListItem>
        <ListItem>
          <ListItemText primary="5. Attributes successes and failures to controllable effort." />
        </ListItem>
        <ListItem>
          <ListItemText primary="6. Belief that ability can be improved through hard work." />
        </ListItem>
      </List>
      <Typography paragraph>
        This numbered list should be re-written in the following paragraph.
      </Typography>
      <Typography paragraph>
        Motivation to learn is encouraged when six elements are met in the classroom. First, students must have intrinsic motivation, which is influenced by personal factors such as needs and curiosity. Students should also choose moderately difficult goals. Task involvement, where the student wants to master a task, is also important to motivation to learn. Students should also have a motivation to achieve and attribute their successes and failures to controllable effort. Finally, students have the best motivation when they believe that their ability can be improved through hard work.
      </Typography>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Use Acronyms with Caution
      </Typography>
      <Typography paragraph>
        Acronyms (such as APA for American Psychological Association) can be useful because they save space. However, acronyms can also be confusing when used too frequently or too carelessly. Many people are familiar with the APA acronym and understand exactly what it means. However, I have read articles where acronyms are frequently used, and it is confusing for the reader, particularly somebody who is not familiar with the acronym or topic of study. For example, read the following paragraph:
      </Typography>
      <Typography paragraph>
        To develop literacy among young children, teachers need to develop the following skills in their pupils: phonics (PO), phonemic awareness (PA), vocabulary (VA), comprehension (CO), and reading fluency (RF). PA is the understanding that spoken words are made up of individual sounds whereas PO is understanding that those sounds within a word correspond to written letters. RF is how fluently a child reads what is written. The higher the VA of a child, the better they learn how to read. CO is important because it helps a child understand what they are reading, and RF is important because it allows a child to focus on CO instead of sounding out letters (aka PO).
      </Typography>
      <Typography paragraph>
        Note how confusing that paragraph is, particularly to somebody who is unaware of the five literacy skills. Whenever a new reader comes to an acronym (PO), they most likely will have to look back to the original sentence to find out what the acronym stood for. This paragraph would be much more understandable if the acronyms were canceled, and the complete phrases were used instead. For example: "...Phonemic awareness is the understanding that spoken words are made up of individual sounds whereas phonics is understanding that those sounds within a word correspond to written letters. Reading fluency is how fluently a child reads what is written..." When determining whether to use an acronym, consider the following guidelines:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Acronyms that are well known by virtually everybody in your field are always appropriate to use (aka APA)." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Do not give an acronym if it is only used once. For example, if you write 'Intrinsic motivation (IM) is related to academic achievement' but then never use IM again, cancel the acronym." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Do not use more than two or three acronyms that you made up in the paper. Creating any additional new acronyms will only confuse the reader." />
        </ListItem>
      </List>
      <Typography paragraph>
        For more details on using acronyms appropriately, go to APA Acronyms.
      </Typography>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Ask Questions
      </Typography>
      <Typography paragraph>
        If you do not understand a comment by your supervisor, ask for clarification. Supervisors become extremely frustrated when students' work does not improve because they do not make the suggested changes. Most reasonable supervisors would much prefer spending the few extra minutes making a point clearer than to read another draft of the paper that makes the exact same mistake that was pointed out in a previous draft.
      </Typography>
    </Box>
  );
}
