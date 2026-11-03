#!/bin/bash
set -e

npm run docs:build

rsync -avzP \
    /home/manuel/curso-inaem/docs/.vitepress/dist/ \
    inaem:/home/debian/www/certificado/web/