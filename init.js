const { program } = require('commander');
const { promisify } = require('util'); // util.promisify (node8) 可以将回调方法 转化成返回promise的方法
const download = promisify(require('download-git-repo'));
const BASE_URL = 'github:JustDoIt521/daily_templates#main';
const ora = require('ora');

program.parse(process.argv);
const args = program.args; // argus 会以数组形式返回 比如输入 basic_cli init testDemo  args 为 ['testDemo']

function init(projectName) {
    cloneTemplate(projectName);
}

async function cloneTemplate(projectName) {
    const processing = ora('start clone ...');
    processing.start('loading ...');
    try {
        await download(BASE_URL, projectName, {clone: true});
        processing.succeed('success');
    }  catch(e) {
        processing.fail('fail');
        // console.log('fail', e);
    }
}

init(...args);

