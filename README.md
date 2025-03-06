# Catmash

Votez pour votre chat préféré sur [beni-catmash.netlify.app](https://beni-catmash.netlify.app)

## Aperçu de l'application

![Capture d'écran 1](<WhatsApp Image 2025-03-05 à 19.00.23_6ebc857e.jpg>)  
![Capture d'écran 2](<WhatsApp Image 2025-03-06 à 00.39.31_aca4f6fc.jpg>)

## Objectif

L'objectif de cette application est de proposer deux pages :
- Une page permettant de voter pour son chat préféré.
- Une page affichant le classement des chats selon les votes.

L'interface est simple et propre. Le développement a pris environ **6 heures** réparties comme suit :
- **Mardi 04/03** : 2h
- **Mercredi** : 3h
- **Jeudi** : 1h

## Fonctionnalités

- Stockage des votes en **local storage** afin d'éviter le développement d'une API.

## Axes d'amélioration

### Architecture
- Revoir la structure globale en utilisant un **monorepo**.
- Créer plusieurs projets distincts :
  - **Front** : application principale.
  - **Design System** : répertoriant les composants réutilisables (boutons, couleurs, icônes, typographies), intégrés via **Storybook** ([exemple](https://design-system-storybook.netlify.app/?path=/docs/formulaires-button--color)).
  - **Tools** : utilitaires partagés (actuellement situés dans `shared`).

### Qualité et maintenabilité
- Implémenter des **tests unitaires** et **end-to-end**.
- Organiser une structure **SASS** pour mieux partager les styles :
  - Couleurs
  - Typographies
  - Espacements
  - Ombres
  - Utilitaires communs
- Améliorer le **nommage des classes CSS** pour plus de clarté et de cohérence.

### Expérience utilisateur
- Ajouter des **animations** interactives :
  - Effets sur les boutons et les éléments interactifs.
  - Animation de victoire/défaite lors des votes.

### Configuration
- Introduire un fichier **.env** pour centraliser les variables d'environnement (ex : URLs d'API).

---

Cette application a été conçue comme un prototype rapide, mais elle pourrait être enrichie et structurée pour une meilleure scalabilité ! 🚀
