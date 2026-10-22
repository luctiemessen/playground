# playground

Playground... just because we can.

Losse experimenten, los van de Astro-blog. Alles hier staat zonder build online op
[luctiemessen.github.io/playground/](https://luctiemessen.github.io/playground/).

## Een experiment toevoegen

1. Kopieer `_template/` naar een nieuwe map, bijvoorbeeld `geo-quiz/`.
2. Zet je HTML, CSS en JavaScript in die map. Gebruik relatieve links (`style.css`,
   `../assets/...`): een link die met `/` begint, wijst naar de blog.
3. Zet een regel in de lijst in `index.html`:
   `<li><a href="geo-quiz/">Geo quiz</a><span>Eén zin erover.</span></li>`
4. Commit en push. Na een halve minuut staat het online.

## Wat er al is

- `assets/playground.css`: de kleuren, letters en basisopmaak van de blog,
  inclusief donkere modus.
- `assets/theme.js`: volgt de Light / Dark-keuze uit het menu van de blog.
- `assets/fonts/`: Newsreader en Cabin (SIL Open Font License, zie de licenties).
- `.nojekyll`: GitHub zet de bestanden neer zoals ze zijn, zonder Jekyll.
