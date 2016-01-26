#!/usr/bin/env node
'use strict';
var program = require('commander');

program
  .version('0.0.1');

program
  .command('load')
  .description('load dotfiles to cwd')
  .action(function(){
    console.log('copying dot files.');
  });

program
  .command('add <dotfile>')
  .description('add specified file to dotfile list')
  .action(function(dotfile){
    console.log('adding "%s"', dotfile);
  });

program.parse(process.argv);

if(!program.args.length){
  program.help();
}
