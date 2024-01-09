#!/bin/bash

input=$1

# Read urls from a file which is named to user input.
# And save them into a file which name is a basename of each of them.
for url in $(cat $input)
do
  basedir=$(basename $url)
  htmlFname="$basedir.html"
  echo "$htmlfname"
  curl $url >> $htmlFname
  
  mdFname=$(echo $htmlFname | sed 's|.html|.md|g')
  pandoc -s $htmlFname -o $mdFname
  rm $htmlFname
done