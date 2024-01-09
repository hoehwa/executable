#!/bin/bash

file=$1

touch temp
sed -n '/^#/, $p' $file > temp
mv temp $file
