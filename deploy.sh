#!/usr/bin/env bash
cd ~/RiddCV &&
git fetch --all &&
git reset --hard origin/master &&
git pull &&
npm install &&
npm run build &&
rm -rf /usr/share/nginx/cv/* &&
cp -r ./dist/* /usr/share/nginx/cv &&
nginx -s reload &&
echo "Deployed."
