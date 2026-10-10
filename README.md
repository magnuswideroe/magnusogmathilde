# magnusogmathilde.no

Bryllupssiden til Magnus & Mathilde. Den publiseres automatisk fra denne mappen via GitHub Pages.

## Filer

| Fil | Hva den gjør |
| --- | --- |
| `index.html` | All struktur og **norsk tekst** |
| `script.js` | **Engelsk tekst** (i `T.en`), språkbytte, meny og RSVP |
| `style.css` | Farger, fonter og layout (fargene står øverst) |
| `images/` | Bildene på siden |
| `CNAME` | Kobler siden til magnusogmathilde.no. Ikke slett den. |

## Endre en tekst

1. Finn teksten i `index.html`. Elementet har en nøkkel, f.eks. `data-i18n="stay.p1"`.
2. Rediger den norske teksten der.
3. Rediger den engelske teksten med samme nøkkel i `script.js`.

## Bytte et bilde

Legg det nye bildet i `images/` med samme filnavn (`kyss.jpg`, `selfie.jpg`, `kirke.jpg`, `isnes.jpg`), eller endre `src` i `index.html`. Hold bildene under ca. 500 KB.

## Publisere

I VS Code: Source Control → skriv en melding → **Commit** → **Sync Changes**. Siden er oppdatert etter ca. ett minutt.

## Mangler

Søk etter `class="todo"` for å finne plassholdere: e-postadresse, svarfrist og toastmaster.
RSVP-skjemaet sender ingenting før `RSVP_ENDPOINT` øverst i `script.js` er fylt inn.
