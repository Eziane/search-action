import { Typography, Paper, List, ListItem, ListItemText, Box } from '@mui/material';

export default function OverviewResearch() {
  return (
    <Box component="section" sx={{ maxWidth: "800px", mx: "auto", p: 3 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 1, fontWeight: "bold" }}>
        Faire une Recherche Éducative
      </Typography>
      <Typography variant="h5" component="h2" sx={{ mb: 3, color: "text.secondary" }}>
        Guide pour Écrire un Travail de Recherche
      </Typography>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Commencez par Concevoir votre Étude
      </Typography>
      <Typography paragraph>
        Comme la Bible, une recherche ne se lit pas toujours du début à la fin. Il est important de planifier les méthodes d'abord. Cela aide à rendre tout le travail plus cohérent. Il serait dommage d'écrire les chapitres 1 et 2 sans savoir comment faire l'étude! D'abord, écrivez vos objectifs de recherche et vos questions. Puis écrivez les méthodes. Ensuite, écrivez le reste de votre travail. Les étapes de la recherche scientifique vous aideront à faire cela.
      </Typography>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Corrigez, Corrigez, Corrigez
      </Typography>
      <Typography paragraph>
        L'écriture n'est pas un processus unique. Vous devez relire et corriger votre travail plusieurs fois pour le rendre de bonne qualité. En général, chaque chapitre doit être corrigé au moins deux fois avant de le remettre à votre professeur. Quand je rédige, je corrige chaque chapitre au moins cinq fois! Demandez aussi à un ami de relire votre travail. Cela vous aide à voir vos erreurs.
      </Typography>
      <Typography paragraph>
        Votre professeur vous renverra votre travail plusieurs fois avec des conseils. C'est normal. Seules les sections avec des commentaires doivent être vraiment changées. Les sections sans commentaires n'ont besoin que de petits changements. Focalisez-vous sur les sections avec des remarques.
      </Typography>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Évitez le Plagiat
      </Typography>
      <Typography paragraph>
        Le plagiat est une tricherie grave. C'est quand vous présentez les idées d'une autre personne comme les vôtres. Voici ce qui est considéré comme du plagiat:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Remettre le travail de quelqu'un d'autre comme le vôtre." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Copier des mots ou des idées d'un autre travail sans donner le crédit. Toute idée qui ne vient pas de votre esprit doit être référencée." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Donner une mauvaise information sur la source d'une citation. Si vous n'avez pas lu l'original, référencez 'tel que cité dans'." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Ne pas mettre une citation directe entre guillemets. Tous les mots doivent être les vôtres!" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Changer les mots mais copier la structure de la phrase d'un autre travail sans donner le crédit." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Copier autant de mots ou d'idées que la majorité de votre travail soit du plagiat." />
        </ListItem>
      </List>
      <Typography paragraph>
        Quand vous utilisez d'autres sources, vous devez paraphraser avec vos propres mots et donner le crédit. Évitez les citations directes sauf si c'est absolument nécessaire.
      </Typography>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Les Brouillons Doivent être Soignés
      </Typography>
      <Typography paragraph>
        Si vous écrivez à la main, écrivez clairement. Si votre écriture est mauvaise, votre professeur aura du mal à lire et sera frustré.
      </Typography>
      <Typography paragraph>
        Un travail mal écrit frustrera votre professeur.
      </Typography>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Évitez les Pronoms
      </Typography>
      <Typography paragraph>
        "Il" ou "cela" sont vagues. Le lecteur ne sait pas de quoi vous parlez. Utilisez plutôt les noms. Par exemple, écrivez "Les leçons sur les techniques d'étude améliorent les résultats" au lieu de "Cela améliore les résultats".
      </Typography>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Évitez les Listes Numérotées
      </Typography>
      <Typography paragraph>
        Écrivez en paragraphes, pas en listes. Les listes sont pour les livres de classe, pas pour les recherches scientifiques. Transformez toutes les listes en paragraphes.
      </Typography>
      <Typography paragraph>
        La motivation pour apprendre est encouragée par six éléments:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="1. La motivation intrinsèque, influencée par les besoins personnels et la curiosité." />
        </ListItem>
        <ListItem>
          <ListItemText primary="2. Les étudiants choisissent des objectifs modérément difficiles." />
        </ListItem>
        <ListItem>
          <ListItemText primary="3. L'engagement envers la tâche où l'étudiant veut maîtrise une tâche." />
        </ListItem>
        <ListItem>
          <ListItemText primary="4. La motivation pour réussir." />
        </ListItem>
        <ListItem>
          <ListItemText primary="5. Attribuer les succès et les échecs à l'effort contrôlable." />
        </ListItem>
        <ListItem>
          <ListItemText primary="6. La croyance que l'habileté peut s'améliorer par le travail assidu." />
        </ListItem>
      </List>
      <Typography paragraph>
        Cette liste doit être réécrite en paragraphe ainsi: La motivation pour apprendre est encouragée par six éléments. D'abord, les étudiants doivent avoir une motivation intrinsèque. Ensuite, les étudiants doivent choisir des objectifs modérément difficiles. L'engagement envers la tâche est aussi important. Les étudiants doivent aussi avoir une motivation pour réussir. Finalement, les étudiants réussissent mieux quand ils croient que l'habileté peut s'améliorer par le travail assidu.
      </Typography>
      <Typography paragraph>
        La motivation pour apprendre est encouragée quand six éléments sont respectés. D'abord, les étudiants doivent avoir une motivation intrinsèque, influencée par des besoins personnels comme la curiosité. Deuxiémement, les étudiants doivent choisir des objectifs modérément difficiles. L'engagement envers la tâche, visant la maîtrise, est important. Les étudiants doivent aussi avoir une motivation pour réussir et attribuer leurs succès aux efforts qu'ils font. Finalement, les étudiants réussissent mieux quand ils croient que l'habileté peut s'améliorer par le travail assidu.
      </Typography>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Utilisez les Acronymes avec Prudence
      </Typography>
      <Typography paragraph>
        Les acronymes peuvent être utiles mais peuvent aussi confondre le lecteur. Utilisez-les seulement pour les acronymes bien connus.
      </Typography>
      <Typography paragraph>
        Pour développer la littératie chez les jeunes enfants, les enseignants doivent développer les compétences suivantes: phonétique, conscience phonémique, vocabulaire, compréhension et fluidité. La conscience phonémique est la capacité à comprendre que les mots parlés sont faits de sons individuels. La phonétique est la capacité de comprendre que ces sons correspondent aux lettres écrites.
      </Typography>
      <Typography paragraph>
        Remarquez combien ce paragraphe est confus avec tous les acronymes. Utilisez plutôt les termes complets. Quand décider d'utiliser un acronyme, considérez ces directives:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Les acronymes bien connus dans votre domaine conviennent toujours." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Ne créez pas un acronyme s'il est utilisé qu'une seule fois." />
        </ListItem>
        <ListItem>
          <ListItemText primary="N'utilisez pas plus de deux ou trois acronymes que vous créez dans le travail." />
        </ListItem>
      </List>
      <Typography paragraph>
        Pour plus de détails, consultez un guide de rédaction scientifique.
      </Typography>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Posez des Questions
      </Typography>
      <Typography paragraph>
        Si vous ne comprenez pas le commentaire de votre professeur, posez une question. Les professeurs ne sont pas contents quand les étudiants ne font pas les changements demandés. Un bon professeur préfère passer quelques minutes à clarifier son message que de relire le même travail avec les mêmes erreurs.
      </Typography>
    </Box>
  );
}
