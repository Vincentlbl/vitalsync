# Épreuve E6 – Chaîne CI/CD conteneurisée

**Module** : Projet Intégration et Déploiement Continus  
**Date** : 01/04/2026  
**Mention** : Anonyme

---

## Sommaire

1. [Partie 1 – Git et gestion de versions](#partie-1)
   - [Exercice 1 – Initialisation et structuration du dépôt](#exercice-1)
   - [Exercice 2 – Workflow Git et résolution de conflits](#exercice-2)
2. [Partie 2 – Conteneurisation Docker](#partie-2)
   - [Exercice 3 – Dockerfile du back-end](#exercice-3)
   - [Exercice 4 – Dockerfile du front-end](#exercice-4)
   - [Exercice 5 – Docker Compose](#exercice-5)
3. [Partie 3 – Pipeline CI/CD](#partie-3)
   - [Exercice 6 – Configuration de la pipeline](#exercice-6)
   - [Exercice 7 – Gestion des secrets et déclencheurs](#exercice-7)
4. [Partie 4 – Orchestration et supervision](#partie-4)
   - [Exercice 8 – Manifestes Kubernetes](#exercice-8)
   - [Exercice 9 – Réflexion sur la supervision](#exercice-9)
5. [Partie 5 – Documentation](#partie-5)
   - [Exercice 10 – README et documentation technique](#exercice-10)

---

## Partie 1 – Git et gestion de versions {#partie-1}

### Exercice 1 – Initialisation et structuration du dépôt {#exercice-1}

#### a) Création du dépôt Git

Le dépôt GitHub public a été créé à l'adresse suivante :  
`https://github.com/Vincentlbl/vitalsync`

> **[SCREENSHOT – Page du dépôt GitHub montrant l'URL]**

Le dépôt a été initialisé localement puis poussé avec les commandes suivantes :

```bash
git init
git checkout -b main
git add .
git commit -m "chore: initial project structure with starter files"
git remote add origin https://github.com/Vincentlbl/vitalsync.git
git push -u origin main
```

**Justification du choix de GitHub :** GitHub a été choisi car il est la plateforme la plus utilisée en entreprise, offre une intégration native avec GitHub Actions pour la CI/CD, et permet une gestion simple des règles de protection de branches.

---

#### b) Stratégie de branches Gitflow

Les branches suivantes ont été créées :

| Branche                  | Rôle                                              |
|--------------------------|---------------------------------------------------|
| `main`                   | Code stable, prêt pour la production             |
| `develop`                | Branche d'intégration des fonctionnalités        |
| `feature/docker-setup`   | Développement de la conteneurisation Docker      |

```bash
git checkout -b develop
git push -u origin develop
git checkout -b feature/docker-setup
git push -u origin feature/docker-setup
```

> **[SCREENSHOT – Résultat de `git branch -a` montrant les 3 branches locales et distantes]**

---

#### c) Fichier `.gitignore`

```gitignore
# Dépendances Node.js : reconstruites via npm install, ne doivent pas être versionnées
node_modules/

# Fichier d'environnement : contient des secrets (mots de passe, tokens), jamais commité
.env

# Logs : générés à l'exécution, sans valeur dans le versionnement
*.log
npm-debug.log*

# Répertoire de build/dist : artefacts générés, pas du source
dist/
build/

# Couverture de tests Jest : rapport généré automatiquement
coverage/

# Fichiers système macOS
.DS_Store

# Fichiers système Windows
Thumbs.db
desktop.ini

# IDE
.vscode/
.idea/
```

**Justifications :**

- `node_modules/` : les dépendances sont déclarées dans `package.json` et reconstruites via `npm install` ; les versionner alourdirait inutilement le dépôt.
- `.env` : contient des variables sensibles (mots de passe, tokens d'API) qui ne doivent jamais être exposées dans un dépôt public ou privé.
- `*.log` / `npm-debug.log*` : fichiers générés à l'exécution, sans valeur historique pour le code source.
- `dist/` / `build/` : artefacts de compilation générés automatiquement, toujours reproductibles depuis le source.
- `coverage/` : rapport de couverture de tests généré par Jest, inutile à versionner.
- `.DS_Store` : métadonnée macOS créée automatiquement par le Finder, sans rapport avec le projet.
- `Thumbs.db` / `desktop.ini` : métadonnées Windows créées par l'explorateur de fichiers.
- `.vscode/` / `.idea/` : configuration personnelle d'IDE, propre à chaque développeur.

---

#### d) Règle de protection de la branche `main`

Une règle de protection a été configurée sur GitHub (Settings → Branches) avec les contraintes suivantes :

- **Interdiction du push direct** sur `main`
- **Obligation de passer par une Pull Request** avant tout merge
- **Bypass désactivé** : même les administrateurs doivent respecter la règle

> **[SCREENSHOT – Page GitHub Settings > Branches montrant la règle configurée sur `main`]**

**Justification :** Protéger `main` garantit que tout code atteignant la production a été relu et validé via une Pull Request, évitant les erreurs involontaires et imposant un processus de revue.

---

### Exercice 2 – Workflow Git et résolution de conflits {#exercice-2}

> *À compléter*

---

## Partie 2 – Conteneurisation Docker {#partie-2}

> *À compléter*

---

## Partie 3 – Pipeline CI/CD {#partie-3}

> *À compléter*

---

## Partie 4 – Orchestration et supervision {#partie-4}

> *À compléter*

---

## Partie 5 – Documentation {#partie-5}

> *À compléter*
