const description = {
    demand: true,
    alias: 'd',
    desc: 'Task to do'
};
const completed = {
  default: true,
  alias: 'c',
  desc: 'Update task to complet or not'
};

const argv = require('yargs')
                    .command('show','Show tasks', {})
                    .command('create','Save tasks', {
                      description
                      })
                    .command('delete','Delete tasks', {
                      description
                    })
                    .command('update','Update tasks', {
                      description,
                      completed
                    })
                    .help()
                    .argv

module.exports = { argv }
