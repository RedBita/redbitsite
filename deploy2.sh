echo "Getting all machines from hackthebox"

cd data-scraper

python get_machines.py

cd ..

#always check updates
git pull

echo "building..."

cd redbitsite

# abort on errors
set -e

#get libraries
npm install

# build
npm run build

# navigate into the build output directory
cd ..

#copy data directory into docs
cp -r data redbitsite/data