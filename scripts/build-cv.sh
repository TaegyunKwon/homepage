#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
node scripts/generate-cv-publications.mjs
mkdir -p cv/build
(cd cv && tectonic --keep-logs --outdir build resume.tex)
cp cv/build/resume.pdf public/pdf/TGK_Resume.pdf
