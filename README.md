# Bidipta Rana: portfolio

Plain HTML, CSS and JavaScript. No build step. Hosted free on GitHub Pages.

## Edit content
Everything (projects, experience, publications, skills, email) is in `js/data.js`.

## Add your Google Drive media
- Photos: download from Drive, save to `assets/images/<project-id>/`, list paths in that project's `images`.
- Videos: upload to YouTube as Unlisted and use `"youtube:VIDEO_ID"`, or share the Drive file as
  "Anyone with the link" and use `"drive:FILE_ID"`. Small clips (< 25 MB) can go in `assets/videos/`.
- Reports: save PDFs to `assets/reports/` and add `{ label: "Final report", url: "assets/reports/file.pdf" }`.

## Publish
1. Create a GitHub repo named `<your-username>.github.io` (public).
2. Upload all files in this folder (keep the folder structure).
3. Repo Settings > Pages > Deploy from a branch > `main` / root > Save.
4. Visit `https://<your-username>.github.io` after a minute.

## Preview locally
`python3 -m http.server 8000` then open http://localhost:8000
