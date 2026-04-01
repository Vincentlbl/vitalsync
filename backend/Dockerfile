# Multi-stage build :
# - Stage 1 (builder) : installe TOUTES les dépendances (y compris dev) et exécute les tests.
#   Si les tests échouent, le build s'arrête ici — aucune image défectueuse n'est produite.
# - Stage 2 (production) : repart d'une image alpine vierge, ne copie que le strict nécessaire.
#   Résultat : image finale sans outils de dev, sans secrets de CI, taille réduite (~50 Mo vs ~1 Go),
#   surface d'attaque minimisée.

# ── Stage 1 : build & test ──────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copier les manifestes en premier pour exploiter le cache des layers Docker
COPY package*.json ./
RUN npm ci

# Copier les sources et les tests
COPY . .

# Les tests échouent → le build échoue → pas d'image corrompue en production
RUN npm test

# ── Stage 2 : image de production ───────────────────────────────────────────
FROM node:20-alpine AS production

WORKDIR /app

# Installer uniquement les dépendances de production
COPY package*.json ./
RUN npm ci --omit=dev

# Copier uniquement le code applicatif depuis le builder (force l'exécution des tests au stage 1)
COPY --from=builder /app/server.js .

# Utilisateur non-root : limite les privilèges en cas de compromission
USER node

EXPOSE 3000

CMD ["node", "server.js"]
