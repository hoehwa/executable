#!/bin/bash

# set a programming language on your codeblock in the target markdown file.
file=$1
max-level=$2

mdsplit $file --max-level $max-level
