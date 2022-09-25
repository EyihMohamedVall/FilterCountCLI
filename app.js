const arvg = process.argv[2]

if(!arvg) {
  console.log('No argument passed')
  process.exit(1)
}

// Here we get the prompted arguments
const [property, value] = arvg.slice(2).split('=')
const {filter} = require('./filter/index');
const {count} = require('./count/index');

if(property === 'filter') {
  console.log(JSON.stringify(filter(value)))
} else if (property === 'count') {
  console.log(JSON.stringify(count()))
} else {
  console.log('Command not recognized')
  process.exit(1)
}