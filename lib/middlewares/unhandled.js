/**
 * Copyright (c) 2017 Alibaba Group Holding Limited
 */

module.exports = async function () {
  this.console.warn(
    ['The current project does not specify the processing logic',
      `for the command "${this.cli.get('command')}"`].join(' ')
  );
};