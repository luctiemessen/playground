// De Light / Dark-keuze uit het menu van de blog. De playground staat op
// hetzelfde adres (luctiemessen.github.io), dus hij kan die keuze lezen.
// Laad dit in de head, vóór de stylesheet, dan flitst er niets.
try {
  const theme = localStorage.getItem('theme');
  if (theme === 'light' || theme === 'dark') document.documentElement.dataset.theme = theme;
} catch {}
