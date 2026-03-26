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
  Divider,
} from "@mui/material";
import {
  Gavel,
  Group,
  Public,
  ArrowForward,
  Warning,
  CheckCircle,
  VerifiedUser,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function EthicsResearch() {
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
        Ethical Considerations in Research
      </Typography>

      <Typography paragraph>
        Educational researchers, as well as researchers from all other domains,
        must consider the ethical principles of right and wrong in relation to
        their research study. The American Psychological Association (APA), as
        well as other research bodies, have developed ethical standards in
        conducting research. APA's code of ethics can be read here.
      </Typography>

      <Typography paragraph>
        There are three areas that researchers must consider in terms of ethics:
      </Typography>

      <List>
        <ListItem>
          <ListItemText primary="Data Collection and Analysis" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Treatment of Participants" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Responsibility to Society" />
        </ListItem>
      </List>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Data Collection and Analysis
      </Typography>
      <Typography paragraph>
        Each researcher has a fundamental responsibility to ensure that their
        data are reliable and trustworthy. Educational research studies can and
        should have a significant impact on educational practices, so it is of
        paramount importance that data collection and analysis be conducted in a
        fashion that is both honest and proficient. Intellectual integrity is
        the foundational principle upon which science stands. To this end,
        researchers must have an attitude that puts pursuit of knowledge above
        personal gain and be willing to admit error. Furthermore, researchers
        must be completely honest and forthright in their reporting and analysis
        of data. Below are some unethical practices as related to data
        collection and analysis.
      </Typography>

      <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>
        Data Fabrication
      </Typography>
      <Typography paragraph>
        Data fabrication simply means making up data. Making up data is
        completely unethical. I have supervised students who obviously completed
        every questionnaire themselves. Not only is this lazy, but this is
        absolutely, fundamentally wrong in every possible sense. Nothing
        justifies data fabrication, ever, in any circumstance. If left
        unchecked, this student would have drawn conclusions and made
        recommendations in their final report that were unfounded.
      </Typography>
      <Typography paragraph>
        Research projects are a permanent record that can influence subsequent
        research studies and educational practice. Let's say this student made
        up data that arrived at the conclusion that students learn best when
        they drink a Maltina before studying. Any subsequent student who reads
        this work will presume this conclusion is correct, and may develop a
        research study based off of it. Perhaps another student may develop a
        research study to determine whether the Maltina should be taken
        immediately before studying or an hour before studying. This second
        research study is sure to fail, because it really isn't known whether
        Maltina is an effective study drink! Furthermore, after reading the
        study, a principal might give a large contract ordering one Maltina per
        student per day for the four weeks before the WAEC, hoping to improve
        scores. While Maltina Corporation would surely love the contract, this
        money would be better spent elsewhere because it is not truly known
        whether drinking Maltina is an effective study method.
      </Typography>
      <Typography paragraph>
        Although this story is a bit foolish, data fabrication can have serious
        consequences on education. Perhaps a researcher "finds" that a certain
        counseling program is effective in improving student behavior at school.
        Principals and guidance counselors should then spend considerable effort
        implementing this program in their schools to improve their students'
        behavior. However, if the researcher made up the data, then this finding
        is not true and principals and guidance counselors will waste much
        effort and resources that could otherwise be dedicated to other, more
        effective methods of improving student behavior.
      </Typography>
      <Typography paragraph>
        While fabricating entire questionnaire responses is clearly wrong, there
        are more subtle ways that data can be fabricated that are not quite so
        blatantly unethical. Sometimes participants skip items on a
        questionnaire, and a researcher might be tempted to pick an answer for
        them. This is also unethical as it essentially makes up a response for
        the participant. There are scientifically accepted practices for
        handling missing data, as will be described in the Coding Data page.
        Researchers must be very careful not to make up data at any point in the
        research process.
      </Typography>

      <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>
        Data Falsification
      </Typography>
      <Typography paragraph>
        It is also unethical to manipulate data in such a way that the results
        do not accurately represent actual findings. For example, I have seen
        some students report that 200 students completed the questionnaire when
        only 197 questionnaires were returned. Misrepresenting the number of
        completed questionnaires is data falsification and is also unethical.
        Here, the researcher should report that 200 questionnaires were
        distributed, but only 197 were returned. The accepted rate for
        questionnaire response rate is about 60%, so this is still a very good
        response rate! You must accurately state how many questionnaires were
        completed.
      </Typography>
      <Typography paragraph>
        Other times, a researcher might be tempted to exclude participants whose
        reports are contrary to the hoped-for conclusion. For example, a
        researcher might find that one participant in the Maltina-drinking group
        failed the exam miserably, so he decided to throw out their data. This
        is data falsification and is unethical.
      </Typography>
      <Typography paragraph>
        There are times when it is ethical for a researcher to discard data.
        Perhaps a participant in the Maltina-drinking group never drank more
        than a sip or two of the Maltina. Since the participant did not complete
        the treatment (i.e., drink the Maltina), it would be perfectly
        acceptable to remove her from the analysis. However, the researcher must
        report how many people were excluded from the analysis, and for what
        reasons.
      </Typography>
      <Typography paragraph>
        Using inappropriate statistics is also the same as data falsification.
        Perhaps the researcher knows that if they run a t-test, then the results
        will not be significant. Instead, she simply reports the mean scores of
        the Maltina drinking and non-Maltina drinking groups and concludes that
        drinking the Maltina results in better academic performance. This is
        falsifying the conclusions of the study, and is unethical.
      </Typography>

      <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>
        Plagiarism
      </Typography>
      <Typography paragraph>
        Plagiarism means using another person's ideas, results, or words without
        proper credit. Plagiarism is a serious problem in Nigeria, and I believe
        that it is largely a problem of misunderstanding what constitutes
        acceptable writing practices. "The expression of original ideas is
        considered intellectual property and is protected by copyright laws"
        (plagiarism.org). This means that in academic work, every sentence in
        your paper - except those in quotation marks - is expected to be your
        original words. Copying words from another source without quoting, as
        well as copying ideas from another source without citing is ILLEGAL,
        UNETHICAL, and UNACCEPTABLE.
      </Typography>
      <Typography paragraph>
        According to plagiarism.org, the following behaviors are considered
        plagiarism:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Turning in someone else's work as your own. Submitting somebody else's paper for your assignment is clearly wrong. There are no situations that can justify this blatant form of plagiarism." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Copying words or ideas from another work without giving credit. Any idea that does not come directly from your mind must be cited." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Giving incorrect information about the source of a quotation. If you did not read the original work, then reference the original work 'as cited in' and include the paper you read in the references section." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Failing to put a direct quote in quotation marks. All words in a paper must be your own. Any direct quotes must be put in quotation marks!" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Changing the words but copying the sentence structure of another work without giving credit." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Copying so many words or ideas from another work that it makes the majority of your paper, regardless of whether you give credit or not." />
        </ListItem>
      </List>
      <Typography paragraph>
        There are two primary strategies to avoid plagiarism. (For more
        information on this topic, click on the Purdue Online Writing
        Laboratory.)
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Paraphrase. Paraphrasing consists of rephrasing a passage from a source into your own words. Paraphrases are usually shorter by slightly condensing the information (OWL, 2010)." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Summarize. Writing only the main ideas in your own words. Summaries are considerably shorter with only a broad overview of the source (OWL, 2010)." />
        </ListItem>
      </List>

      <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>
        Carelessness
      </Typography>
      <Typography paragraph>
        Finally, simple carelessness is unethical in scientific research. This
        may be the result of sloppy errors in data collection, careless when
        entering data into the computer, or maybe accidentally typing the wrong
        number when reporting the statistics in the report. A careless error is
        unethical regardless of whether it was done due to of lack of attention,
        ignorance, or on purpose. To conduct research with the highest standards
        of ethics, a researcher must be continually vigilant to prevent errors,
        must ask questions of experts when they do not understand something, and
        must make a continual effort to keep their research free from dishonest
        practices.
      </Typography>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Treatment of Participants
      </Typography>
      <Typography paragraph>
        Because educational research is conducted on human beings, educational
        researchers must be aware of how their research may impact the
        fundamental human rights of the participants in the study. The following
        are accepted practices that must be met when conducting research with
        human participants.
      </Typography>

      <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>
        Voluntary Participation
      </Typography>
      <Typography paragraph>
        Individuals must not be forced to participate in a research study. In
        Nazi Germany, Jews and other prisoners of concentration camps were
        forced to participate in harmful research studies. This clearly violated
        these individuals' human rights. Along the same lines, forcing a child
        to complete a counseling treatment, or even complete a questionnaire,
        violates their right of choice. Therefore, participants must be allowed
        to choose whether to participate in the study or not. Some individuals
        will indeed choose not to participate, so a researcher must honor that
        decision.
      </Typography>
      <Typography paragraph>
        Participants must be aware that they are free to limit their
        participation in the research study, or withdraw their participation
        altogether at any time. If there is an item on a questionnaire that the
        participant does not want to answer because it makes them feel
        uncomfortable, they are free to skip it. If there is an aspect of the
        treatment that they do not feel comfortable with, they are free to sit
        out. Furthermore, if the research study is making them uncomfortable,
        they are free to quit the study. Researchers may make a gentle attempt
        to persuade them to continue their participation by convincing them of
        the importance of the study, but they must honor the participant's
        wishes to withdraw if they persist. The researcher needs to make a note
        that the participant withdrew and the reason, if possible, to report in
        the Sample section of the study.
      </Typography>

      <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>
        Privacy
      </Typography>
      <Typography paragraph>
        Participants also have the fundamental right of privacy. This means that
        participants get to decide when, where, to whom, and to what extent
        their attitudes, beliefs, and behaviors will be shared. Unless a
        participant explicitly agrees in writing that their name and responses
        can be publicly shared, then a researcher has an ethical responsibility
        to protect the privacy of their participants. In social science
        research, privacy typically takes the form of either anonymity or
        confidentiality.
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Anonymity. Anonymity means that a participant's name is never linked to their responses. This is the strictest form of privacy, but it can only be achieved in certain types of studies. Anonymity occurs in research studies where a participant can complete a questionnaire without writing their name on the questionnaire. In this instance, not even the researcher knows whose attitudes, beliefs, or behaviors are indicated on the questionnaire as soon as it has been submitted. In situation such as these, anonymity is the best way to protect a participant's privacy." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Confidentiality. Confidentiality means that participants' responses will only be seen by researchers who are directly involved in the study. For interviews, the researcher will change the name of the participant to a different name, called a pseudonym. If audio-recording of the interview is used (and participants must give explicit permission for an interview to be audio-recorded), then the tapes are secured in a location where nobody can access them besides relevant researchers. In studies where multiple sources of information need to be linked, the researcher will immediately change the name to a code number as soon as the appropriate linking has been accomplished. Researchers also must also never share what they learn about a specific person to people outside of the study." />
        </ListItem>
      </List>

      <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>
        Informed Consent
      </Typography>
      <Typography paragraph>
        Participants must also be fully informed about procedures and potential
        risks of the research and must give their informed consent to
        participate. Not only must people participate in the study voluntarily,
        but they also must understand enough of the purposes of the study to
        make an informed decision about whether they would like to participate.
        To make an informed consent (agreement), participants should be informed
        of four primary parts of the research:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Purpose of the research. Participants should understand why the research is being conducted. However, researchers can, and most likely should, keep the entire purpose of the study vague. If a researcher informs participants that they are conducting a study to examine how teacher dedication to their job is related to their work attendance, then teachers might be slightly biased toward their responses; they will not want to appear undedicated to their job. Instead, the researcher might inform participants that they are examining teachers' beliefs about the teaching profession. This is accurately describing the purpose of the questionnaire that the teacher is completing, but it does not bias teachers in their responses. To summarize, researchers need to inform participants of the general purpose of the study in a fashion that will not bias responses." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Requirements of participation. Participants also need to be aware of what their participation in the study requires. Will they complete a questionnaire? Have an interview? Complete an achievement test? Go through counseling? How long will the counseling last, and what will it require? Researchers need to give a brief description of what participants will do, how long it will take, and if any other follow-ups will be required." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Who is sponsoring the research. In most cases, students and academics will be completing the research as part of an academic project. Sometimes this research is being sponsored by a granting agency: Carnegie, UNICEF, WHO, etc. Participants have a right to know what agency is sponsoring the research. Imagine that the Maltina Corporation was sponsoring the research study to examine the effects of Maltina on academic achievement. This is a potential conflict of interest that might bias the results of the study. Before agreeing to participate, participants need to be informed of whoever is sponsoring the research: the university or other institution that the research is being conducted through as well as any agency that might be funding the research." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Participation is voluntary. Participants need to be aware that they do not have to be part of the research study and that they may skip any part of the study that they do not feel comfortable with." />
        </ListItem>
      </List>
      <Typography paragraph>
        There are two ways that informed consent can be solicited.
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Questionnaire Only Studies. If a research study only requires participants to complete a questionnaire and nothing else, scientists have agreed that informed consent consists of the act of completing the questionnaire. As will be explained in Developing a Questionnaire, each questionnaire must begin with an introductory paragraph. That introductory paragraph should include all of the informed consent information as stated above, as well as statements assuring anonymity or confidentiality." />
        </ListItem>
        <ListItem>
          <ListItemText primary="More than Questionnaire Studies. However, few research studies will rely on questionnaires only, particularly for researchers who are pursing advanced degrees. In these cases, participants should sign an informed consent document that outlines what the participant must do in the study in greater detail." />
        </ListItem>
      </List>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Responsibility to Society
      </Typography>
      <Typography paragraph>
        Society at large has the right to research that is conducted as
        neutrally as possible. Sometimes researchers have a conflict of interest
        in the research they are conducting. Perhaps they have spent hours upon
        hours developing a counseling program and want to provide evidence that
        the counseling program is effective and their work has not been in vain.
        Maybe a researcher has developed a new textbook and will financially
        benefit if the textbook is found to greatly improve learning outcomes.
        These biases can have a significant impact on how a research study is
        designed, the participants selected, the instruments used, how data is
        analyzed, and the final conclusions that are drawn. However, society has
        a right for research to be as "value-free" as possible and not hampered
        by the biases of researchers. As a researcher, you need to be aware of
        the biases you may have - perhaps biases as explicit as financial gain,
        but also biases as implicit as simply wanting to provide evidence that
        your way of thinking is correct. Before embarking on a research study,
        spend time thinking about what biases you may have, and make those
        biases explicit in your report.
      </Typography>
      <Typography paragraph>
        Also, researchers need to be aware of how their research may be used
        within society, for good or for ill. Returning to the Maltina study, if
        it is found that Maltina does improve academic achievement, then it is
        possible that teachers will use this as an excuse to only provide
        Maltina to their students and quit providing instruction in the
        classroom. Researchers need to consider any negative side-effects of
        their study and humbly reframe their topic if the research may be used
        for negative purposes within society. Indeed, I believe that the best
        research studies are designed to find positive solutions to practical
        problems within society.
      </Typography>
      <Typography paragraph>
        Finally, researchers need to provide direction on how their research
        findings can be used to improve society. Imagine that a researcher finds
        a new way of teaching addition to young children that results in much
        better academic performance. This researcher now has a responsibility to
        find ways of promoting this new teaching strategy. Research is not
        intended to be conducted and then collect dust as a project sits through
        harmattan after harmattan on a bookshelf. Research should be used to
        improve society whenever and where possible. Share positive findings
        with key stakeholders to try to improve society.
      </Typography>
    </Box>
  );
}
