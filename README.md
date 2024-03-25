# Booking-trip

#WanderWave
## Problématique
Garantir une expérience utilisateur fluide et intuitive tout au long du processus, de la recherche de voyages à la réservation et à la gestion du profil. Minimiser le nombre d'étapes nécessaires pour effectuer une réservation tout en assurant la précision des informations fournies par l'utilisateur. Concevoir une interface utilisateur attrayante et ergonomique pour toutes les fonctionnalités, en mettant l'accent sur la convivialité et la facilité de navigation.

# Introduction
WanderWave est une application d'agence de voyage. L'objectif de cette application est de fournir une plateforme en ligne permettant aux utilisateurs de rechercher, réserver et gérer leurs voyages. L'application doit être conviviale, intuitive et responsive.

## Fonctionnalités

Authentification et gestion des utilisateurs

Système d'inscription et de connexion sécurisé.
Profils utilisateur avec des informations personnelles et la possibilité de modifier le mot de passe.
Gestion des rôles (administrateur, utilisateur).

Catalogue de voyages

Affichage des voyages disponibles avec des détails tels que le lieu, la durée, le prix, etc.
Possibilité de trier les voyages par popularité, prix.
Pages individuelles pour chaque voyage avec des informations détaillées.
Réservation de voyages

Processus de réservation intuitif.
Récapitulatif de la réservation avant la confirmation.
Impression du billet de voyage.

Historique des voyages réservés.

Gestion du contenu

Interface d'administration sécurisée pour gérer les voyages, les utilisateurs, etc.
Ajout, modification et suppression de voyages.

## Gestion de projet:

Jira: Pour la gestion des tâches, le suivi des problèmes.
Git: Pour le contrôle de version du code.
UML: Pour la modélisation visuelle du système, la conception des classes et des relations entre elles.
Tests et qualité du code:

Tests unitaires backend (jest): Pour garantir le bon fonctionnement de chaque unité de code et de leur interaction.

## Développement front-end:

ReactJS , Redux : Pour la construction de l'interface utilisateur dynamique et interactive.

## Développement back-end:

NodeJS: Pour la création de l'API RESTful et la gestion des données de l'application.
ExpressJS: Pour la construction du framework web et la gestion des routes.
MongoDB: Pour le stockage et la manipulation des données de l'application.
JWT : pour l'authentification et l'autorisation dans les applications web.

## Intégration et déploiement continu:

CI/CD: Pour automatiser le processus de construction, d'intégration et de déploiement de l'application.
GitHub Actions: Pour automatiser les tâches de CI/CD à partir de GitHub.
Docker: Pour faciliter la création de conteneurs et le déploiement de l'application dans différents environnements.

## Installation et Configuration

Technologies Utilisées
React js
Redux pour la gestion de l'état de l'application
Jest pour les tests unitaires
Docker pour la conteneurisation de l'application
Express js

## Installation et Exécution


Clonez ce dépôt sur votre machine locale.
Accédez au répertoire du projet.
Exécutez npm install pour installer les dépendances.
Executez cd server
Exécutez "npm run dev" pour démarrer l'application .
Executez cd client
Exécutez "npm run dev" pour démarrer l'application front end.
Pour exécuter les tests, utilisez la commande npm test.
Pour dockeriser l'application, exécutez docker "docker-compose up".
