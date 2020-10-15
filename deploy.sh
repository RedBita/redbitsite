#!/usr/bin/env sh

echo "Choose mode: "
echo "1) Sync the folder to github (ALWAYES USE THIS)"
echo "2) Rebuild the site AND Sync the folder"
echo "3) Update scraper data AND Rebuild the site AND Sync the folder"

read choice

if [ $choice -gt 2 ]; then
    echo "scraper"

    TODO

fi


if [ $choice -gt 1 ]; then 
    echo "building..."

    cd redbitsite

    # abort on errors
    set -e

    # build
    npm run build

    # navigate into the build output directory
    cd ..

fi

if [ $choice -gt 0 ]; then
    echo "update"

    #get the date
    date=$(date '+%s')

    #copy data directory into docs
    cp -r data docs

    #github
    git add .
    git commit -m "$date"
    git push -u origin master

fi