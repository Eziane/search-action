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
        Faire une Recherche Éducative
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        sx={{ mb: 3, color: "text.secondary" }}
      >
        Philosophie de la Recherche
      </Typography>

      <Typography paragraph>
        La recherche scientifique nécessite des preuves pour soutenir les
        conclusions. Ci-dessous sont quatre types de preuves. Pensez à chacun et
        décidez lequel est une source de preuve légitime.
      </Typography>

      <List>
        <ListItem>
          <ListItemText primary="Autorité. Selon le Prof Akpan, les enfants apprennent mieux dans les écoles ayant beaucoup de matériel éducatif." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Tradition. Masser les bébés aide leur croissance." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Sens Commun. Frapper les enfants les aide à se comporter mieux." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Observation. 69% des enseignants de math au Yobe utilisent les coups comme punition." />
        </ListItem>
      </List>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Réponses
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
        Il y a trois principes clés pour déterminer si une question est une
        recherche scientifique.
      </Typography>

      <List>
        <ListItem>
          <ListItemText primary="1. Empirique. Les questions scientifiques sont répondues par l'observation systématique. La question doit être répondue par des données expérimentées par les cinq sens." />
        </ListItem>
        <ListItem>
          <ListItemText primary="2. Vérifiable. Les observations doivent être collectes dans des conditions spécifiques que tout le monde peut confirmer. La réplication est un principe fondamental: les données ne sont valides que si d'autres chercheurs peuvent reproduire les résultats." />
        </ListItem>
        <ListItem>
          <ListItemText primary="3. Contrôle. Les observations scientifiques doivent être collectes avec des méthodes qui contrôlent les conditions de l'étude." />
        </ListItem>
      </List>

      <List sx={{ pl: 4 }}>
        <ListItem>
          <ListItemText primary="Éliminer les sources de biais. La recherche peut être biaisée dans l'échantillon choisi, la façon que les éléments sont formulés, ou les procédures de collecte." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Réduire l'erreur qui peut déformer les résultats. L'erreur peut être introduite par un mauvais questionnaire, de mauvaises conditions ou une mauvaise analyse." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Exclure toutes les explications alternatives. Il peut y avoir plusieurs façons d'expliquer les résultats. Un chercheur doit planifier les méthodes pour contrôler toutes les autres explications possibles." />
        </ListItem>
      </List>

      <Typography paragraph>
        La recherche scientifique nécessite une planification considérable et
        avancée. Un chercheur, particulièrement un débutant, DOIT planifier les
        méthodes bien avant de collecter les données. La planification prend des
        semaines et des mois. Mais le résultat d'une recherche bien planifiée
        est informatif et utile pour développer d'excellentes pratiques
        éducatives.
      </Typography>
    </Box>
  );
}
