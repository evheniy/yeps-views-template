# YEPS Views Template

YEPS Template rendering

[![NPM](https://nodei.co/npm/yeps-views-template.png)](https://npmjs.org/package/yeps-views-template)

[![npm version](https://badge.fury.io/js/yeps-views-template.svg)](https://badge.fury.io/js/yeps-views-template)
[![Build Status](https://travis-ci.org/evheniy/yeps-views-template.svg?branch=master)](https://travis-ci.org/evheniy/yeps-views-template)
[![Coverage Status](https://coveralls.io/repos/github/evheniy/yeps-views-template/badge.svg?branch=master)](https://coveralls.io/github/evheniy/yeps-views-template?branch=master)
[![Linux Build](https://img.shields.io/travis/evheniy/yeps-views-template/master.svg?label=linux)](https://travis-ci.org/evheniy/)
[![Windows Build](https://img.shields.io/appveyor/ci/evheniy/yeps-views-template/master.svg?label=windows)](https://ci.appveyor.com/project/evheniy/yeps-views-template)

[![Dependency Status](https://david-dm.org/evheniy/yeps-views-template.svg)](https://david-dm.org/evheniy/yeps-views-template)
[![devDependency Status](https://david-dm.org/evheniy/yeps-views-template/dev-status.svg)](https://david-dm.org/evheniy/yeps-views-template#info=devDependencies)
[![NSP Status](https://img.shields.io/badge/NSP%20status-no%20vulnerabilities-green.svg)](https://travis-ci.org/evheniy/yeps-views-template)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/evheniy/yeps-views-template/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/evheniy/yeps-views-template.svg)](https://github.com/evheniy/yeps-views-template/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/evheniy/yeps-views-template.svg)](https://github.com/evheniy/yeps-views-template/network)
[![GitHub issues](https://img.shields.io/github/issues/evheniy/yeps-views-template.svg)](https://github.com/evheniy/yeps-views-template/issues)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/evheniy/yeps-views-template.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)


## How to install

    npm i -S yeps-views-template
  

## How to use
    
own_template_system.js

    const template = require('yeps-views-template');
    const view = require('template_system');

    module.exports = (viewsPath, options = {}) => async context => {
       
        return template(context, async (path, parameters) => view(viewsPath, options)(path, parameters));
    
    };

app.js

    const App = require('yeps');
    const views = require('own_template_system');
    
    const app = new App();
    
    app.all([
        views(__dirname + '/views');
    ]);
    
    app.then(async ctx => {
        return ctx.render('index.tpl', { text: 'Hello!' });
    });

## Links

* [yeps](https://github.com/evheniy/yeps) - YEPS
* [yeps-promisify](https://github.com/evheniy/yeps-promisify) - YEPS kernel
* [yeps-benchmark](https://github.com/evheniy/yeps-benchmark) - performance comparison koa2, express and node http
* [yeps-router](https://github.com/evheniy/yeps-router) - YEPS promise based router
* [yeps-error](https://github.com/evheniy/yeps-error) - YEPS 404/500 error handler
* [yeps-redis](https://github.com/evheniy/yeps-redis) - YEPS promise based redis client
* [yeps-mysql](https://github.com/evheniy/yeps-mysql) - YEPS promise based mysql client
* [yeps-boilerplate](https://github.com/evheniy/yeps-boilerplate) - YEPS app boilerplate
* [yeps-express-wrapper](https://github.com/evheniy/yeps-express-wrapper) - YEPS express wrapper
* [yeps-cors](https://github.com/evheniy/yeps-cors) - YEPS CORS
* [yeps-bodyparser](https://github.com/evheniy/yeps-bodyparser) - YEPS body parser
* [yeps-views](https://github.com/evheniy/yeps-views) - YEPS Template
* [yeps-method-override](https://github.com/evheniy/yeps-method-override) - YEPS method override
* [yeps-views-react](https://github.com/evheniy/yeps-views-react) - YEPS Template React