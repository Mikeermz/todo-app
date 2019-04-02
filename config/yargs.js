const opts = {
  description: {
    demand: true,
    alias: 'd',
    desc: 'Task to do'
  }
};
const argv = require('yargs')
                    .command('show','Show tasks', {})
                    .command('create','Save tasks', {
                      description: {
                        demand: true,
                        alias: 'd',
                        desc: 'Task to do'
                        }
                      })
                    .command('delete','Delete tasks', {
                      description: {
                        demand: true,
                        alias: 'd',
                        desc: 'Task to delete'
                      }
                    })
                    .command('update','Update tasks', {
                      description: {
                        demand: true,
                        alias: 'd',
                        desc: 'Task to do'
                        },
                      completed: {
                        default: true,
                        alias: 'c',
                        desc: 'Update task to complet or not'
                        }
                      })
                    .help()
                    .argv

module.exports = { argv }
