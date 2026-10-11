# Lavande & Co : site web

Site vitrine statique (HTML, CSS, JavaScript), sans framework et sans étape de build.

## Structure

```
index.html          page unique (accueil, box, contenu, commande, contact)
assets/style.css    styles (couleurs en variables CSS, mode clair et sombre)
assets/main.js      menu mobile et formulaire de commande vers WhatsApp
assets/favicon.svg  icône du site
```

## Modifier le contenu

- **Prix** : cherche `[prix à définir]` dans `index.html` (3 endroits, un par box).
- **Numéro WhatsApp** : change `21658049848` dans `assets/main.js` (variable `WA`) et dans les liens `wa.me` et `tel:` de `index.html`. Format : indicatif du pays sans le `+`.
- **Réseaux sociaux** : liens `instagram.com/mylavandebox` et `tiktok.com/@mylavandebox` dans la section Contact.
- **Couleurs** : variables au début de `assets/style.css`.

## Tester en local

Ouvre `index.html` dans ton navigateur, ou lance un petit serveur :

```
python3 -m http.server 8000
```

puis va sur http://localhost:8000

## Mettre en ligne avec GitHub Pages (gratuit)

1. Crée un dépôt vide sur GitHub, par exemple `lavande-co`.
2. Dans ce dossier :

```
git init
git add .
git commit -m "Premier site Lavande & Co"
git branch -M main
git remote add origin https://github.com/TON-COMPTE/lavande-co.git
git push -u origin main
```

3. Sur GitHub : **Settings > Pages > Build and deployment**. Choisis **Deploy from a branch**, la branche **main** et le dossier **/ (root)**, puis enregistre.
4. Après une ou deux minutes, le site est disponible sur `https://TON-COMPTE.github.io/lavande-co/`.

Chaque `git push` met le site à jour.

## Avoir sa propre adresse (nom de domaine)

1. Achète un nom de domaine (par exemple `lavandeandco.tn` ou `mylavandebox.com`).
2. Crée un fichier `CNAME` à la racine, avec une seule ligne : ton domaine (exemple : `www.mylavandebox.com`).
3. Chez ton registrar, ajoute un enregistrement DNS `CNAME` qui pointe `www` vers `TON-COMPTE.github.io`.
4. Dans **Settings > Pages**, renseigne le domaine et coche **Enforce HTTPS**.

## Autres hébergeurs

Le site est statique : il fonctionne aussi tel quel sur Netlify, Vercel, Cloudflare Pages ou GitLab Pages. Il suffit de connecter le dépôt Git, sans commande de build, avec la racine du projet comme dossier publié.
