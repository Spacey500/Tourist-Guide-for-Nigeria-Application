#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A 
git commit -m "New Deployment"
git push -f git@github.com:Spacey500/Welcome-to-Naija-Application.git main:gh-pages 

cd -
