#!/bin/bash

# parse command line arguments.
ext="$1"
new_name="$2"

# Write the frontmatter to the markdown file recursively.
for fname in $(find . -name "*.$ext" -type f)
do
  basename=$(basename $fname)
  basedir=$(echo $fname | sed "s|$basename||g")
  mv $fname "$basedir$new_name"
done