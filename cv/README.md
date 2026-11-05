# CV source

`resume.tex` is the canonical CV source, imported from the supplied TGK_Resume_art.zip. `resume.cls` retains the original template's attribution and permission notice. Only files used by Taegyun Kwon's CV are included; the unrelated alternate resume and unused images from the archive are omitted.

## Build and publish the PDF

Install [Tectonic](https://tectonic-typesetting.github.io/) (tested with 0.17.0), then run from the repository root:

```sh
npm run cv:build
```

The first build downloads LaTeX packages and fonts. The build runs without shell escape, writes intermediate files to ignored `cv/build/`, and copies the successful PDF to `public/pdf/TGK_Resume.pdf`. Commit that PDF alongside source changes so both existing CV download links serve the updated document.

## Update publications

Edit `data/publications.json`, the shared source for the website and CV. Entries are ordered newest first and keep the author's published order. Categories distinguish journal/conference papers, abstracts/workshops/demos, and domestic publications.

```sh
npm run cv:sync   # regenerate cv/publications.tex
npm run cv:check  # fail if the generated file is out of date
npm run cv:build  # regenerate and compile the downloadable PDF
```

Do not edit `publications.tex` directly. Other CV sections remain hand-edited in `resume.tex`. SORI CEO responsibilities and the KAIST departure year (2025) were supplied by the CV owner on 2026-11-05. SORI is listed as Current because its start date has not been specified. Project end dates and reviewer years remain as supplied in the original CV.

## Publication provenance

Reconciled on 2026-11-05 with the supplied CV and [MACLab's publication list](https://mac.kaist.ac.kr/pubs.html). Newly added entries carry a `source` URL and primary paper/project links in the JSON. The ICMC 2025 entry is now listed as a published proceedings contribution rather than "Accepted". Historical entries and existing project links are retained.
