/**
 * Copyright (c) 2017 Alibaba Group Holding Limited
 */

const mkdirp = require('mkdirp');

module.exports = async function (path) {
  return new Promise((reslove, reject) => {
    mkdirp(path, err => {
      if (err) return reject(err);
      reslove(path);
    });
  });
};