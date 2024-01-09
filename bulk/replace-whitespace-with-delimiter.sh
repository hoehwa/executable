#!/bin/bash

# parse command line arguments.
ext="$1"
delimiter="$2"

# Replace whitespace with delimeter recursively.
#for fname in *;
#do
#  mv "$fname" "${fname// /$delimeter}"
#done


while IFS= read -r -d '' file; do
   mv "$file" "${file// /$delimiter}"
done < <(find . -name "*.$ext" -type f -print0)