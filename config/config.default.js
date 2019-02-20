'use strict';
const path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1549937461592_5987';

  config.cluster = {
    listen: {
      path: '',
      port: 80,
      hostname: '0.0.0.0',
    }
  }

  config.view = {
    mapping: {
      '.nj': 'nunjucks',
    },
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.nj',
    root: [
      path.join(appInfo.baseDir, 'app/view')
      // ,
      // path.join(appInfo.baseDir, 'path/to/another'),
    ].join(',')
  }

  // add your config here
  config.middleware = [];

  return config;



};
