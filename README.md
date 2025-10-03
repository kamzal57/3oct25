# Bloc-notes Tauri + React + Rust

Application de notes locale multiplateforme.

## Stack
- Tauri (backend Rust + shell)
- React + TypeScript + Vite
- Rust (gestion des fichiers, recherche, future synchro)
- Gestionnaire de paquets: npm
- Version Node recommandée: Node 20 (voir .nvmrc)

## Commandes Rust exposées
- list_notes
- read_note
- write_note
- delete_note
- rename_note
- search_notes

## Démarrage
```bash
npm install
npm run tauri dev
```

## Raccourcis Clavier
| Action | Windows / Linux | macOS |
|--------|------------------|-------|
| Nouvelle note | Ctrl+N | ⌘N |
| Sauvegarder note | Ctrl+S | ⌘S |
| Rechercher | Ctrl+F | ⌘F |

## Structure des notes
Chaque note = fichier `<id>.md` + métadonnées `<id>.json` dans `app_local_data_dir/notes/`.

## Auto-save
Déclenche après 600ms d'inactivité (debounce) sur les modifications contenu/titre.

## Validation
- Slug alphanum + tirets, limite longueur
- Tri par `updated_at` décroissant

## CI
Workflow GitHub Actions (Linux, Windows, macOS) qui build et publie les artefacts.

## Roadmap
- Raccourcis supplémentaires (Ctrl+Shift+P palette?)
- Tags & recherche avancée
- Chiffrement local optionnel
- Synchronisation (WebDAV / Git / autres)
- Historique versions

## Licence
MIT

---
Contributions bienvenues.