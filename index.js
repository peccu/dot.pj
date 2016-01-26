#!/usr/bin/env node
'use strict';
var program = require('commander');
var fs = require('fs');

program
  .version('0.0.1');

// from. http://stackoverflow.com/a/14387791/514411
function copyFile(source, target, cb){
  var cbCalled = false;
  function done(err){
    if(!cbCalled){
      cb(err);
      cbCalled = true;
    }
  }

  var rd = fs.createReadStream(source);
  rd.on('error', function(err){
    done(err);
  });
  var wr = fs.createWriteStream(target);
  wr.on('error', function(err){
    done(err);
  });
  wr.on('close', function(){
    done();
  });
  rd.pipe(wr);
}

program
  .command('init')
  .description('initialize dot files container')
  .action(function(){
    console.log('creating ~/.dot.pj directory');
    var homedir = (process.platform === 'win32') ? process.env.HOMEPATH : process.env.HOME;
    fs.mkdir(homedir + '/.dot.pj', function(err){
      if(err.code !== 'EEXIST'){
        throw err;
      }
      console.log('directory created');

    });
  });

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
