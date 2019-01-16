#!/bin/bash
SCRIPT_DIR=$(cd $(dirname "${BASH_SOURCE:-$0}"); pwd)

function templates(){
  cd $SCRIPT_DIR
  git ls-files | grep '/' | awk -F/ '{print $1}' | uniq
}
function usage(){
  echo usage: $0 template
  echo
  echo template is one of $(templates)
  exit
}

if [ -z $1 ] ; then
    usage
fi

cp -r $SCRIPT_DIR/$1/ ./
