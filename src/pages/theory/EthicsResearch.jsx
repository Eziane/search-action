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
        Faire une Recherche Éducative
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        sx={{ mb: 3, color: "text.secondary" }}
      >
        Considérations Éthiques dans la Recherche
      </Typography>

      <Typography paragraph>
        Les chercheurs éducatifs doivent considérer les principes éthiques du
        bien et du mal. L'APA (American Psychological Association) et d'autres
        organisations ont développé des standards éthiques pour la recherche.
      </Typography>

      <Typography paragraph>
        Il y a trois domaines que les chercheurs doivent considérer en matière
        d'éthique:
      </Typography>

      <List>
        <ListItem>
          <ListItemText primary="Collecte et analyse des données" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Traitement des participants" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Responsabilité envers la société" />
        </ListItem>
      </List>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Collecte et Analyse des Données
      </Typography>
      <Typography paragraph>
        Chaque chercheur a une responsabilité fondamentale d'assurer que ses
        données sont fiables. L'intégrité intellectuelle est le fondement de la
        science. Les chercheurs doivent être honnêtes et directs dans leurs
        rapports et analyses.
      </Typography>

      <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>
        Données Fabriquées
      </Typography>
      <Typography paragraph>
        Fabriquer des données signifie inventer des données. C'est complètement
        non éthique et fondamentalement mauvais.
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
        Fausseté de Données
      </Typography>
      <Typography paragraph>
        C'est aussi non éthique de manipuler les données pour que les résultats
        ne représentent pas véritablement les conclusions. Par exemple,
        rapporter que 200 éléves ont répondu quand seulement 197 ont répondu est
        non éthique.
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
        Plagia t
      </Typography>
      <Typography paragraph>
        Le plagiat signifie utiliser les idées ou les mots d'une autre personne
        sans donner le crédit. C'est ilégal et non éthique.
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
        Négligence
      </Typography>
      <Typography paragraph>
        La simple négligence est non éthique. Un chercheur doit être vigilant
        pour prévenir les erreurs et poser des questions quand il ne comprend
        pas quelque chose.
      </Typography>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Traitement des Participants
      </Typography>
      <Typography paragraph>
        Parce que la recherche éducative est conduite sur des êtres humains, les
        chercheurs doivent être conscients comment leur recherche peut impacter
        les droits humains des participants.
      </Typography>

      <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>
        Participation Volontaire
      </Typography>
      <Typography paragraph>
        Les individus ne doivent pas être forcés de participer. Les participants
        doivent être libres de refuser ou de se retirer à tout moment.
      </Typography>
      <Typography paragraph>
        Les participants doivent savoir qu'ils sont libres de limiter ou de
        retirer leur participation à tout moment. Si un élément du questionnaire
        les met mal à l'aise, ils peuvent l'ignorer.
      </Typography>

      <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>
        Confidentialité
      </Typography>
      <Typography paragraph>
        Les participants ont le droit de confidentialité. Les données doivent
        être protégées et personn%es d'autres que les chercheurs ne doivent y
        avoir accès.
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
        Consentement Informé
      </Typography>
      <Typography paragraph>
        Les participants doivent être fully informés sur les procédures et les
        risques potentiels. Ils doivent donner leur consentement informé pour
        participer.
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
        Responsabilité envers la Société
      </Typography>
      <Typography paragraph>
        La société a droit à une recherche conduite aussi neutralement que
        possible. Parfois, les chercheurs ont un conflit d'intérêt. Ils doivent
        être conscients de leurs biais.
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
