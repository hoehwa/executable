#!/bin/bash

# set a programming language on your codeblock in the target markdown file.
file=$1
lang=$2
result=$(echo $file | sed "s|.md|.$lang|g")

cat $file | codedown $lang >> $result
