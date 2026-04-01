# Image de base : nginx:alpine (~25 Mo) — serveur web éprouvé, image minimale sans shell Bash
# ni outils système superflus, surface d'attaque très réduite.
FROM nginx:alpine

# Remplace la configuration Nginx par défaut par notre configuration personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copie la page HTML dans le répertoire servi par Nginx
COPY index.html /usr/share/nginx/html/index.html

EXPOSE 80
