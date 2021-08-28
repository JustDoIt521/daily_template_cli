#!/usr/bin/env node

const { program } = require('commander');

// 定义命令 -v  --verson
program.option('-v, --version, -ww', 'get project version');

// 注册 init命令，并指定init.js文件 来处理
program.command('init <projectName>', 'download template', { executableFile: 'init'}); 

// 解析参数
program.parse(process.argv);

const options = program.opts();

if (options.version) {
    let info = require('./package.json');
    console.log(info.version);
}

