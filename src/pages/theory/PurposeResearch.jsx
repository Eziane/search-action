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
        Faire une Recherche Éducative
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        sx={{ mb: 3, color: "text.secondary" }}
      >
        But de la Recherche Éducative
      </Typography>

      <Typography paragraph>
        Chacun pense avoir sa meilleure façon d'enseigner. Mais comment
        savez-vous que votre façon est meilleure? Peut-on supporter vos créances
        avec des preuves scientifiques? Supposons que deux personnes ont des
        idées opposées. Qui a raison? Par exemple, certains pensent que les
        élèves doivent recevoir des encouragements positifs constants. D'autres
        pensent que les encouragements positifs réduisent l'effort car l'élève
        pense qu'il ne doit pas travailler dur. Ces deux idées sont opposées.
        Laquelle est vraie?
      </Typography>

      <Typography paragraph>
        La recherche éducative répond à toutes ces questions. Elle utilise la
        méthode scientifique pour étudier les meilleures pratiques
        d'enseignement. Une étude peut comparer un groupe d'enfants avec
        encouragements positifs, un groupe avec critiques négatives, et un
        groupe sans rien. Après cela, on compare les groupes sur des variables
        comme la performance, l'effort et la motivation. On peut alors avoir une
        réponse définitive sur ce qui fonctionne mieux.
      </Typography>

      <Typography paragraph>
        Le but de la recherche éducative est de développer des connaissances sur
        l'enseignement pour améliorer la pratique éducative. Elle peut étudier:
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
          Exemple: Siegler et Ramani (2009)
        </Typography>
        <Typography paragraph>
          Siegler et Ramani (2009) ont mené une étude pour examiner les
          meilleures pratiques pédagogiques pour enseigner les nombres aux
          jeunes enfants. Les enseignants utilisent généralement la répétition
          numérique, le comptage d'objets et l'identification de numéros écrits.
          Mais Siegler et Ramani ont imaginé une meilleure méthode plus
          engageante. Ils ont développé un jeu...
        </Typography>
        <Typography paragraph>
          Le jeu utilise un papier avec les numéros 1 à 10 et un spinner avec 1
          et 2. Les joueurs alternent pour tourner le spinner et déplacer leurs
          marqueurs en nommant les numéros. Les enfants d'une école ont été
          divisés aléatoirement: un groupe traditionnel et un groupe jeu. Après
          quelques semaines, tous ont été testés. Le groupe jeu a mieux
          performé! Siegler et Ramani ont découvert une meilleure façon
          d'enseigner les nombres avec des preuves scientifiques.
        </Typography>
      </Paper>

      <Typography paragraph>
        Si vous faites une recherche en psychologie éducative, votre sujet se
        focalisera sur les individus dans un contexte éducatif. Le but de la
        recherche psych ologique est d'étudier les variables clés: comment les
        gens se comportent, pensent, ressentent, croient, etc. La recherche en
        psychologie éducative examinera la performance des étudiants, leur
        motivation, leurs attitudes, leurs croyances et les connaissances des
        enseignants.
      </Typography>

      <Typography paragraph>
        Peu importe le type de recherche que vous menez, rappelez-vous que le
        but est d'améliorer la pratique éducative. Voici les bénéfices de la
        recherche éducative:
      </Typography>

      <List>
        <ListItem>
          <ListItemText primary="Fournir l'enseignement qui maximise l'apprentissage." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Comprendre et soutenir les besoins des élèves." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Développer un environnement qui soutient la motivation." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Fournir des solutions aux problèmes éducatifs." />
        </ListItem>
      </List>

      <Typography paragraph>
        Développez une étude qui aura un impact significatif sur la situation
        d'enseignement-apprentissage. Puisque la recherche éducative peut avoir
        des implications importantes, il est essentiel que les chercheurs
        complètent leurs projets honêpêtement. La recherche mal conduite cause
        plus de mal qu'aucune recherche! Les chercheurs éducatifs ne doivent
        jamais "couper les coins". Ils ont une responsabilité de vérifier que
        leurs méthodes sont valides, leurs calculs corrects et leurs conclusions
        exacts.
      </Typography>

      <Typography variant="h6" sx={{ mt: 4 }}>
        Référence
      </Typography>
      <Typography paragraph>
        Siegler, R. S. & Ramani, G. B. (2009). La jouer des jeux de nombres
        linéaires - mais pas les circulaires - améliore la compréhension
        numérique des enfants d'écoles pauvres. Journal of Educational
        Psychology, 101, 545-560.
      </Typography>
    </Box>
  );
}
