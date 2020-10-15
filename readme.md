## REPO FOR THE WEBSITE PAGE OF REDBIT

## Organization

This project is divided in 4 main folders:

1. data
2. data-scraper
3. docs
4. redbitsite

### Data

In this folder are collected all writeups divided into a specific folder structure which follows the type of the writeup 

ex. -> jewels.pdf will go into the folder: ```machines/```
ex. -> poeta_Errante_chronicles.pdf will go into the folder: ```challenges/rcs2020/```

The folder structure is a tree, which the first element is the type of the writeup and the next nodes will be the first letters of the competition lowercase (if any) + the year 

ex. Reply Cyber Security challenge -> rcs2020


### Data-scraper

This is the folder that contains the python script that checks the active machines on the website [htb](https://www.hackthebox.eu/)

TODO add the other script which scrapes other sites as tryhackme etc..

### Docs

Is the folder that github will serve as website

### Redbitsite

Is the folder in which the site is being built, when it is ready, it will be compiled and pushed to the docs folder

__NOTE__ Don't touch if not aware of what you are doing, I check the commits LOL


## SCRIPTS TO UPDATE THE SITE

There are 3 way to update the folder and therefore the site:

1. Sync the folder to github (MOST RECCOMENDED)
2. Rebuild the site AND Sync the folder
3. Update scraper data AND Rebuild the site AND Sync the folder

In order to upload any new version you just need to start the deploy.sh file and choose one of the options

```./deploy.sh```

The contributor of this page are @Sebo-the-tramp @ThomasAndreatta @IvanValentini @DFlavian