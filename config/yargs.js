const opts = {
  description: {
    demand: true,
    alias: 'd',
    desc: 'Task to do'
  }
};
const argv = require('yargs')
                    // .command('show','Show tasks', opts)
                    .command('create','Save tasks', {
                      description: {
                        demand: true,
                        alias: 'd',
                        desc: 'Task to do'
                        }
                      })
                    .command('update','Update tasks', {
                      description: {
                        demand: true,
                        alias: 'd',
                        desc: 'Task to do'
                        },
                      complet: {
                        default: true,
                        alias: 'c',
                        desc: 'Update task to complet or not'
                        }
                      })
                    .help()
                    .argv

module.exports = { argv }
